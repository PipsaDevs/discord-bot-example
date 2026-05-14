import { readdir } from 'fs/promises';
import type { Dirent } from 'fs';

type DirEntry = Dirent<string> | DirEntry[];

async function scanDir(baseDir: string): Promise<DirEntry[]> {
	const res: DirEntry[] = await readdir(baseDir, { withFileTypes: true });
	for (let i = 0; i < res.length; i++) {
		const entry = res[i] as Dirent<string>;
		if (entry.isDirectory()) {
			res[i] = await scanDir(`${baseDir}/${entry.name}`);
		}
	}
	return res;
}

export { scanDir };
