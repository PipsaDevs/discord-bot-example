/**
 * A bounded queue is an array with limited capacity.
 * When the array is full and you want to add a new element,
 * it will eliminate those elements who entered first
 */

export default class BoundedQueue<T> {
	private _items: T[] = [];
	private _capacity: number;

	constructor(capacity: number) {
		this._capacity = capacity;
	}
	get items() {
		return this._items;
	}
	get capacity() {
		return this._capacity;
	}

	push_back(...items: T[]): void {
		for (const item of items) {
			this._items.push(item);
			if (this._items.length >= this._capacity) {
				this._items.shift();
			}
		}
	}
}
