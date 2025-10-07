#!/usr/bin/env node
"use strict";
/*jshint esversion: 6 */
/*jslint node: true */

import yargs from 'yargs';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(readFileSync(join(__dirname, '../../package.json'), 'utf8'));

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
  .commandDir("./commands")
  .demandCommand()
  .help()
  .version(packageJson.version).argv;
