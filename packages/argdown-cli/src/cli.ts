#!/usr/bin/env node
"use strict";
/*jshint esversion: 6 */
/*jslint node: true */

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import yargs, { Options } from "yargs";

// TODO: Revert to .commandDir() once DefaultCommand is fixed
// The issue is that DefaultCommand uses "* [inputGlob]" which catches all arguments
// This prevents other commands from being recognized properly in ES modules context
// Once DefaultCommand pattern is fixed, we can go back to:
// .commandDir(join(__dirname, "commands"), { extensions: ["js"] })
//
// Manual imports for all commands (temporary ES modules workaround)
//
// DONE: use proper import of commands index. And use classes for better typescript compatibility. Don't use magic directory imports.
import { hideBin } from "yargs/helpers";
import { commands } from "./commands/index.js";
import { IGeneralCliOptions } from "./IGeneralCliOptions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(
  readFileSync(join(__dirname, "../package.json"), "utf8")
);

const options: Record<keyof IGeneralCliOptions, Options> = {
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
};

void yargs(hideBin(process.argv))
  .showHelpOnFail(true)
  .scriptName("argdown")
  .options(options)
  .command(commands)
  .demandCommand()
  .help()
  .version(packageJson.version)
  .parse();
