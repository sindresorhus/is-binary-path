/**
Check if a filepath is a binary file.

@example
```
import isBinaryPath = require('is-binary-path');

isBinaryPath('src/unicorn.png');
//=> true

isBinaryPath('src/unicorn.txt');
//=> false
```
*/
declare function isBinaryPath(filepath: string): boolean;

export = isBinaryPath;
