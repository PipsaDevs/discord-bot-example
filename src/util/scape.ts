const scape = (type: string, text: string) => {
	return `\`\`\`${type}\n${text}\n\`\`\``;
};
export { scape };
