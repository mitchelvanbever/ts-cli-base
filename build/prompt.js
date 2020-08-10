"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
exports.prompt = async () => {
    const result = await inquirer_1.default.prompt([{ type: 'input', name: 'initial', message: 'How are you today?' }]);
    console.log(result);
};
