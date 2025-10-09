#!/usr/bin/env node
"use strict";
/*jshint esversion: 6 */
/*jslint node: true */

import yargs, { CommandModule } from 'yargs';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// TODO: Revert to .commandDir() once DefaultCommand is fixed
// The issue is that DefaultCommand uses "* [inputGlob]" which catches all arguments
// This prevents other commands from being recognized properly in ES modules context
// Once DefaultCommand pattern is fixed, we can go back to:
// .commandDir(join(__dirname, "commands"), { extensions: ["js"] })
//
// Manual imports for all commands (temporary ES modules workaround)
import * as DefaultCommand from './commands/DefaultCommand.js';
import * as CompileCommand from './commands/CompileCommand.js';
import * as HtmlCommand from './commands/HtmlCommand.js';
import * as JSONCommand from './commands/JSONCommand.js';
import * as MapCommand from './commands/MapCommand.js';
import * as MarkdownCommand from './commands/MarkdownCommand.js';
import * as RunCommand from './commands/RunCommand.js';
import * as WebComponentCommand from './commands/WebComponentCommand.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'));

void yargs()
  .showHelpOnFail(true)
  .scriptName("argdown")
  .options({
    watch: {
      alias: "w",
      describe: "Watch the input files for changes",
      type: "boolean",
      default: false
    },
    config: {
      alias: "cfg",
      describe: "The path to the config .js file.",
      type: "string"
    },
    verbose: {
      alias: "v",
      type: "boolean",
      describe: "verbose mode"
    },
    silent: {
      type: "boolean",
      describe: "silent mode"
    },
    stdout: {
      type: "boolean",
      describe: "Export data to stdout"
    },
    throwExceptions: {
      type: "boolean",
      describe: "Throw errors"
    },
    logParserErrors: {
      alias: "e",
      describe: "Log parser errors to console",
      type: "boolean",
      default: true
    }
  })
  // Manual command registration (ES modules compatibility - commandDir doesn't work)
  .command(DefaultCommand as CommandModule<any, any>)  // Re-enabled with modified pattern
  .command(CompileCommand as CommandModule<any, any>)
  .command(HtmlCommand as CommandModule<any, any>)
  .command(JSONCommand as CommandModule<any, any>)
  .command(MapCommand as CommandModule<any, any>)
  .command(MarkdownCommand as CommandModule<any, any>)
  .command(RunCommand as CommandModule<any, any>)
  .command(WebComponentCommand as CommandModule<any, any>)
  .demandCommand()
  .help()
  .version(packageJson.version).argv;
