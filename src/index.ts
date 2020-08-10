#!/usr/bin/env node

import { prompt } from './prompt'

const init = async (opts: string[]) => {
  console.log(opts)

  if (opts?.find(option => ['--version', '-version', '-v', '--v'].includes(option))) {
    console.log('version === V0.0.0');
  }

  if (opts?.find(option => ['--help', '-help', '-h', '--h'].includes(option))) {
    console.log('should present help menu')
  }

  return prompt();
}

init(process.argv);
