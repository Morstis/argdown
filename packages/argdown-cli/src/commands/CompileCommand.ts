import { argdown } from "@argdown/node";
import { Arguments, CommandModule } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";

export interface ICompileCliOptions {
  inputGlob?: string;
  outputDir?: string;
}

export class CompileCommand implements CommandModule<
  IGeneralCliOptions,
  ICompileCliOptions & IGeneralCliOptions
> {
  command = "compile [inputGlob] [outputDir]";
  desc = "compile included Argdown files into main file";
  builder = {};

  handler = async (
    args: Arguments<IGeneralCliOptions & ICompileCliOptions>
  ) => {
    const config = await argdown.loadConfig(args.config);

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
    config.process = ["load-file"];
    config.throwExceptions = args.throwExceptions || config.throwExceptions;
    if (args.throwExceptions) {
      if (!config.parser) {
        config.parser = {};
      }
      config.parser.throwExceptions = args.throwExceptions;
    }
    config.logParserErrors = args.logParserErrors || config.logParserErrors;
    if (!args.stdout || args.outputDir) {
      config.process.push("save-as-argdown");
    }
    if (args.stdout) {
      config.process.push("stdout-argdown");
    }
    void runArgdown(argdown, config, true, "Compilation failed", "compiled");
  };
}
