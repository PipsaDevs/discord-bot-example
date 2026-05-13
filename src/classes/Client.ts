import LogType from '../enums/LogType.js';
import BoundedQueue from './BoundedQueue.js';
import Log from './Log.js';
import * as djs from 'discord.js';

class Client extends djs.Client {
	logs: BoundedQueue<Log>;

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
	}

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

	async start(): Promise<void> {
		this.attachLogger();
		await this.login();
	}
}

export { Client };
