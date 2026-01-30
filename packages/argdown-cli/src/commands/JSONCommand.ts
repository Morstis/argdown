import { argdown } from "@argdown/node";
import { Arguments, CommandModule, Options } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";

export interface IJSONCliOptions {
  inputGlob?: string;
  outputDir?: string;
  spaces?: number;
  removeMap?: boolean;
  removeEmbeddedRelations?: boolean;
}

export class JSONCommand implements CommandModule<
  IGeneralCliOptions,
  IJSONCliOptions & IGeneralCliOptions
> {
  command = "json [inputGlob] [outputDir]";
  desc = "export Argdown input as JSON files";
  builder: Record<keyof IJSONCliOptions, Options> = {
    inputGlob: {
      describe: "Input file pattern",
      type: "string"
    },
    outputDir: {
      describe: "Output directory for JSON files",
      type: "string"
    },
    spaces: {
      alias: "s",
      describe: "Spaces used for indentation",
      type: "number"
    },
    removeMap: {
      describe: "Remove map data",
      type: "boolean"
    },
    removeEmbeddedRelations: {
      describe: "Remove relations embedded in statement and relation objects",
      type: "boolean"
    }
  };

  handler = handler;
}
export const handler = async (
  args: Arguments<IGeneralCliOptions & IJSONCliOptions>
) => {
  const config = await argdown.loadConfig(args.config);

  config.json = config.json || {};

  if (args.spaces !== null) {
    config.json.spaces = args.spaces;
  }
  if (args.removeEmbeddedRelations) {
    config.json.removeEmbeddedRelations = true;
  }
  if (args.removeMap) {
    config.json.exportMap = false;
  }

  if (args.inputGlob) {
    config.inputPath = args.inputGlob;
  }
  config.saveAs = config.saveAs || {};
  if (args.outputDir) {
    config.saveAs.outputDir = args.outputDir;
  }

  config.logLevel = args.verbose ? "verbose" : config.logLevel;
  config.logLevel = args.silent ? "silent" : config.logLevel;
  config.watch = args.watch || config.watch;
  config.process = ["load-file", "parse-input"];
  config.logParserErrors = args.logParserErrors || config.logParserErrors;
  if (config.logParserErrors) {
    config.process.push("log-parser-errors");
  }
  config.process.push("build-model");
  config.process.push("colorize");
  config.process.push("export-json");

  if (!args.stdout || args.outputDir) {
    config.process.push("save-as-json");
  }
  if (args.stdout) {
    config.process.push("stdout-json");
  }

  await runArgdown(
    argdown,
    config,
    true,
    "JSON export canceled",
    "export",
    "to JSON"
  );
};
