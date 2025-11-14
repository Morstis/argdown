import { argdown } from "@argdown/node";
import { ArgumentsCamelCase } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";

export const command = "run [process]";
export const desc = "run a process you have defined in your config file";
export interface IRunCliOptions {
  process: string;
}
export const builder = {
  process: {
    describe: "The name of the process to run",
    type: "string" as const
  }
};
export const handler = async (
  args: ArgumentsCamelCase<any>
) => {
  const typedArgs = args as ArgumentsCamelCase<IGeneralCliOptions & IRunCliOptions>;
  const processName = typedArgs.process || "default";
  const config = await argdown.loadConfig(typedArgs.config);
  config.process = processName;
  config.logLevel = typedArgs.verbose ? "verbose" : config.logLevel;
  config.logLevel = typedArgs.silent ? "silent" : config.logLevel;
  config.watch = typedArgs.watch || config.watch;
  config.logParserErrors = typedArgs.logParserErrors || config.logParserErrors;
  await runArgdown(
    argdown,
    config,
    true,
    "Custom process canceled",
    "processed"
  );
};
