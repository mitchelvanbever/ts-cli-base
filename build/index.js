#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("./prompt");
const init = async (opts) => {
    console.log(opts);
    if (opts === null || opts === void 0 ? void 0 : opts.find(option => ['--version', '-version', '-v', '--v'].includes(option))) {
        console.log('version === V0.0.0');
    }
    if (opts === null || opts === void 0 ? void 0 : opts.find(option => ['--help', '-help', '-h', '--h'].includes(option))) {
        console.log('should present help menu');
    }
    return prompt_1.prompt();
};
init(process.argv);
