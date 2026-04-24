import { argdown, IArgdownRequest, IAsyncArgdownPlugin } from "@argdown/node";
import { Arguments, CommandModule, Options } from "yargs";
import { IGeneralCliOptions } from "../IGeneralCliOptions.js";
import { runArgdown } from "./runArgdown.js";
import MarkdownIt from "markdown-it";
import createArgdownPlugin from "@argdown/markdown-it-plugin";
/**
 * This command uses the AsynArgdownApplication to load and export markdown files and save the exported html as html files.
 * It add a custom plugin that simply takes the markdown input and renders it with markdown-it
 * Markdown-it is configured to use the @argdown/markdown-it-plugin.
 */

export interface IMarkdownCliOptions {
  inputGlob?: string;
  outputDir?: string;
}

export class MarkdownCommand implements CommandModule<
  IGeneralCliOptions,
  IMarkdownCliOptions & IGeneralCliOptions
> {
  private mdi: MarkdownIt = new MarkdownIt();

  constructor() {
    // Try to load the plugin on construction -> fallsafe in handler as well
    this.initMarkdownItPlugin().catch(console.error);
  }
  command = "markdown [inputGlob] [outputDir]";
  desc =
    "export Markdown file to html while exporting all Argdown code fences as web components";

  builder: Record<keyof IMarkdownCliOptions, Options> = {
    inputGlob: {
      describe: "Input file pattern",
      type: "string"
    },
    outputDir: {
      describe: "Output directory for HTML files",
      type: "string"
    }
  };

  handler = async (
    args: Arguments<IGeneralCliOptions & IMarkdownCliOptions>
  ) => {
    await this.initMarkdownItPlugin();
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
    config.process = ["load-file", "render-markdown"];
    config.logParserErrors = args.logParserErrors || config.logParserErrors;
    if (config.logParserErrors) {
      config.process.push("log-parser-errors");
    }

    if (!args.stdout || args.outputDir) {
      config.process.push("save-as-html");
    }

    if (args.stdout) {
      config.process.push("stdout-html");
    }
    await runArgdown(
      argdown,
      config,
      true,
      "Markdown export canceled",
      "exported",
      `to html`
    );
  };
  initMarkdownItPlugin = async () => {
    // Check if the renderMarkdown plugin is already registered and return. Aka only run this method once.
    if (argdown.getPlugin("RenderMarkdownPlugin", "render-markdown")) {
      return;
    }
    const markdownItPlugin = createArgdownPlugin(
      (env: { argdownConfig: IArgdownRequest }) => {
        return env.argdownConfig;
      }
    );
    this.mdi.use(await markdownItPlugin);
    const markdownPlugin: IAsyncArgdownPlugin = {
      name: "RenderMarkdownPlugin",
      runAsync: async (request, response) => {
        response.html = this.mdi.render(request.input || "", {
          argdownConfig: request
        });
        return Promise.resolve();
      }
    };
    argdown.addPlugin(markdownPlugin, "render-markdown");
  };
}
