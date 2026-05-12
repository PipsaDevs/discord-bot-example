import type LogType from '../enums/LogType.js';
import type { LogInterface } from '../interfaces/LogInterface.js';

export default class Log implements LogInterface {
	type: LogType;
	timeStamp: number;
	message: string;

	constructor(type: LogType, timeStamp: number, message: string) {
		this.type = type;
		this.timeStamp = timeStamp;
		this.message = message;
	}

	generateDate(): Date {
		return new Date(this.timeStamp);
	}
}
