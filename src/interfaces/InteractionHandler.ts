import type { Interaction, InteractionType } from 'discord.js';
import type { Client } from '../classes/Client.js';

export interface InteractionHandler {
	interactionType: InteractionType;
	defaultErrorHandling: boolean;
	execute: (interaction: Interaction, client: Client) => Promise<void>;
}
