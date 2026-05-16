export function toError(value: unknown): Error {
	if (value instanceof Error) {
		return value;
	}
	try {
		return new Error(JSON.stringify(value));
	} catch {
		return new Error(String(value));
	}
}
