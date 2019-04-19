import {expectType} from 'tsd';
import isBinaryPath = require('.');

expectType<boolean>(isBinaryPath('source/unicorn.png'));
