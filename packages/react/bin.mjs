#!/usr/bin/env node

import * as clear from '@best-shot/cli/cmd/clear.mjs';
import * as dev from '@best-shot/cli/cmd/dev.mjs';
import * as prod from '@best-shot/cli/cmd/prod.mjs';
import * as watch from '@best-shot/cli/cmd/watch.mjs';
import * as hooks from '@nice-move/cli/dist/cmd/git.mjs';
import * as lint from '@nice-move/cli/dist/cmd/lint.mjs';
import { Cheetor } from 'cheetor';

process.on('SIGINT', () => {});

new Cheetor('./package.json', import.meta.url)
  .website('https://www.npmjs.com/org/all-star')
  .command(lint)
  .command(hooks)
  .command('build', '', (cli) => {
    cli.command(watch).command(dev).command(prod).command(clear);
  })
  .setup();
