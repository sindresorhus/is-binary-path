/**
Check if a file path is a binary file.

@example
```
import isBinaryPath from 'is-binary-path';

isBinaryPath('source/unicorn.png');
//=> true

isBinaryPath('source/unicorn.txt');
//=> false
```
*/
export default function isBinaryPath(filePath: string): boolean;
