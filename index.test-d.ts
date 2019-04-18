import {expectType} from 'tsd';
import isBinaryPath = require('.');

expectType<boolean>(isBinaryPath('src/unicorn.png'));
