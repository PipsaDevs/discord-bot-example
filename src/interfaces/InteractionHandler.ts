import type { Interaction, InteractionType } from 'discord.js';
import type { Client } from '../classes/Client.js';

export interface InteractionHandler<T extends Interaction = Interaction> {
	interactionType: InteractionType;
	execute: (interaction: T, client: Client) => Promise<void>;
}
