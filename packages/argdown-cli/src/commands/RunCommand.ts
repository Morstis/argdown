import { argdown } from "@argdown/node";
import { Arguments, ArgumentsCamelCase, CommandModule, Options } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";

export const command = "run [process]";
export const desc = "run a process you have defined in your config file";
export interface IRunCliOptions {
  process?: string;
}

export class RunCommand
  implements
    CommandModule<IGeneralCliOptions, IRunCliOptions & IGeneralCliOptions>
{
  command = "run [process]";
  desc = "run a process you have defined in your config file";
  builder: Record<keyof IRunCliOptions, Options> = {
    process: {
      describe: "The name of the process to run",
      type: "string"
    }
  };

  handler = async (args: Arguments<IRunCliOptions & IGeneralCliOptions>) => {
    const typedArgs = args as ArgumentsCamelCase<
      IGeneralCliOptions & IRunCliOptions
    >;
    const processName = typedArgs.process || "default";
    const config = await argdown.loadConfig(typedArgs.config);
    config.process = processName;
    config.logLevel = typedArgs.verbose ? "verbose" : config.logLevel;
    config.logLevel = typedArgs.silent ? "silent" : config.logLevel;
    config.watch = typedArgs.watch || config.watch;
    config.logParserErrors =
      typedArgs.logParserErrors || config.logParserErrors;
    await runArgdown(
      argdown,
      config,
      true,
      "Custom process canceled",
      "processed"
    );
  };
}
