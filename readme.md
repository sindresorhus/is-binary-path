# is-binary-path

> Check if a file path is a binary file

## Install

```sh
npm install is-binary-path
```

## Usage

```js
import isBinaryPath from 'is-binary-path';

isBinaryPath('source/unicorn.png');
//=> true

isBinaryPath('source/unicorn.txt');
//=> false
```

## Related

- [binary-extensions](https://github.com/sindresorhus/binary-extensions) - List of binary file extensions
- [is-text-path](https://github.com/sindresorhus/is-text-path) - Check if a filepath is a text file
