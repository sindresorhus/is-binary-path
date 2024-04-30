import path from 'node:path';
import binaryExtensions from 'binary-extensions';

const extensions = new Set(binaryExtensions);

export default function isBinaryPath(filePath) {
	return extensions.has(path.extname(filePath).slice(1).toLowerCase());
}
