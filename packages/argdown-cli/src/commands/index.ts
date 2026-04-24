import { CommandModule } from "yargs";
import { MapCommand } from "./MapCommand.js";
import { CompileCommand } from "./CompileCommand.js";
import { DefaultCommand } from "./DefaultCommand.js";
import { HtmlCommand } from "./HtmlCommand.js";
import { JSONCommand } from "./JSONCommand.js";
import { MarkdownCommand } from "./MarkdownCommand.js";
import { RunCommand } from "./RunCommand.js";
import { WebComponentCommand } from "./WebComponentCommand.js";

export const commands: CommandModule[] = [
  new MapCommand(),
  new HtmlCommand(),
  new MarkdownCommand(),
  new JSONCommand(),
  new WebComponentCommand(),
  new CompileCommand(),
  new RunCommand(),
  new DefaultCommand()
];
