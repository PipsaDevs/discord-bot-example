import type LogType from '../enums/LogType.js';

export interface LogInterface {
	type: LogType;
	timeStamp: number;
	message: string;
}
