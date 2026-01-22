import { argdown } from "@argdown/node";
import { ArgumentsCamelCase, CommandModule, Options } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";

export interface IDefaultCliOptions {
  inputGlob?: string;
}
export class DefaultCommand implements CommandModule<
  IGeneralCliOptions,
  IDefaultCliOptions & IGeneralCliOptions
> {
  builder: Record<keyof IDefaultCliOptions, Options> = {
    inputGlob: {
      describe: "Input file pattern",
      type: "string"
    }
  };
  desc = "load config file and run parser";
  command = "* [inputGlob]";
  handler = async (
    args: ArgumentsCamelCase<IGeneralCliOptions & IDefaultCliOptions>
  ) => {
    const config = await argdown.loadConfig(args.config);
    if (args.inputGlob) {
      config.inputPath = args.inputGlob;
    }
    config.logParserErrors = args.logParserErrors || config.logParserErrors;
    if (!config.process) {
      config.process = ["load-file", "parse-input"];
      if (config.logParserErrors) {
        config.process.push("log-parser-errors");
      }
    }
    config.logLevel = args.verbose ? "verbose" : config.logLevel;
    config.logLevel = args.silent ? "silent" : config.logLevel;
    config.watch = args.watch || config.watch;
    config.throwExceptions = args.throwExceptions || config.throwExceptions;
    if (config.throwExceptions) {
      if (!config.parser) {
        config.parser = {};
      }
      config.parser.throwExceptions = config.throwExceptions;
    }
    await runArgdown(
      argdown,
      config,
      true,
      "Further processing of file stopped",
      "checked"
    );
  };
}
