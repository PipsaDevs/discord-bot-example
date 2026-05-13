import type {
	SlashCommandBuilder,
	SlashCommandOptionsOnlyBuilder,
	SlashCommandSubcommandsOnlyBuilder,
	ChatInputCommandInteraction,
	PermissionResolvable,
} from 'discord.js';
import type { Client } from '../classes/Client.js';
import type CommandCategory from '../enums/CommandCategory.js';

export type SlashCommandData =
	| SlashCommandBuilder
	| SlashCommandOptionsOnlyBuilder
	| SlashCommandSubcommandsOnlyBuilder;

export default interface SlashCommand {
	data: SlashCommandData;
	category: CommandCategory;
	botPerms?: PermissionResolvable[];
	userPerms?: PermissionResolvable[];
	guildRequired: boolean;
	execute: (
		interaction: ChatInputCommandInteraction,
		client: Client,
	) => Promise<void>;
}
