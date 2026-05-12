import type LogType from '../enums/LogType.js';
import type { LogInterface } from '../interfaces/LogInterface.js';

/**
 * This is the log class
 * HERE is where we finally implement both the Log type and the interface
 * It is a really basic implementation of the interface which allows to store the information of the interface and also generate a date based on the time stamp
 */
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
