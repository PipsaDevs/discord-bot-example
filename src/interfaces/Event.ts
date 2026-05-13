import type { Client } from '../classes/Client.js';
import type { Events } from 'discord.js';

export interface Event<T extends unknown[] = unknown[]> {
	name: Events;
	once: boolean;
	execute: (...args: [...T, Client]) => Promise<void>;
}
