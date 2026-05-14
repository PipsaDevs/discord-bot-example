import LogType from '../enums/LogType.js';
import BoundedQueue from './BoundedQueue.js';
import Log from './Log.js';
import type { SlashCommand } from '../interfaces/SlashCommand.js';
import * as djs from 'discord.js';
import type { Dirent } from 'fs';
import { scanDir } from '../util/scanDir.js';

class Client extends djs.Client {
	logs: BoundedQueue<Log>;
	slashCommands: djs.Collection<string, SlashCommand>;
	constructor(logCapacity: number, token: string) {
		super({
			intents: [
				djs.GatewayIntentBits.Guilds,
				djs.GatewayIntentBits.GuildMessages,
				djs.GatewayIntentBits.MessageContent,
			],
		});
		this.logs = new BoundedQueue<Log>(logCapacity);
		this.token = token;
		this.rest = new djs.REST({ version: '10' }).setToken(this.token);
		this.slashCommands = new djs.Collection();
	}

	/**
	 * Attaches loggers for debug, warning and events
	 */
	private attachLogger(): void {
		this.on('debug', (info: string) => {
			console.debug(`[DEBUG] => ${info}`);
			this.logs.push_back(new Log(LogType.DEBUG, Date.now(), info));
		});

		this.on('warn', (info: string) => {
			console.warn(`[WARNING] => ${info}`);
			this.logs.push_back(new Log(LogType.WARNING, Date.now(), info));
		});

		this.on('error', (err: Error) => {
			console.error(`[ERROR] => Incoming error is printed below`);
			console.error(err);
			this.logs.push_back(
				new Log(LogType.ERROR, Date.now(), err.message),
			);
		});
	}

	/**
	 * Load to a collection all files of a folder which have a default exported
	 * @param dirName The directory (assuming)
	 * @param collection The collection which will be used to store the elements
	 * @param keySelector Function to determine the key of the value
	 */
	private async loadToCollection<K, V>(
		dirName: string,
		collection: djs.Collection<K, V>,
		keySelector: (item: V) => K,
	): Promise<void> {
		const files = await scanDir(dirName);
		for (let entry of files) {
			entry = entry as Dirent<string>;
			const mod = await import(
				`../../${entry.parentPath}/${entry.name.replace('t', 'j')}`
			);
			const def: V = mod.default as V;
			collection.set(keySelector(def), def);
		}
	}

	/**
	 * Attaches the previous loggers, loads the events and logs in the client.
	 */
	async start(): Promise<void> {
		await this.loadToCollection(
			'src/slash_commands',
			this.slashCommands,
			(cmd) => cmd.data.name,
		);
		this.attachLogger();
		await this.login();
	}
}

export { Client };
