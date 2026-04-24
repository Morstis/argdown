import { argdown, IArgdownRequest, SaysWhoPlugin } from "@argdown/core";
import type { PluginSimple } from "markdown-it";

if (!argdown.getPlugin("SaysWhoPlugin", "add-proponents")) {
  argdown.addPlugin(new SaysWhoPlugin(), "add-proponents");
  argdown.defaultProcesses["says-who-map"] = [
    "parse-input",
    "build-model",
    "build-map",
    "transform-closed-groups",
    "colorize",
    "add-proponents",
    "export-dot",
    "export-svg",
    "highlight-source",
    "export-web-component"
  ];
}
export const ArgdownCheatSheetPlugin: PluginSimple = (md) => {
  function removeFrontMatter(str: string) {
    return str.replace(/[\s]*===+[\s\S]*===+[\s]*/, "");
  }
  const oldFence = md.renderer.rules.fence;
  if (!oldFence) return;

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    // const info = token.info ? unescapeAll(token.info).trim() : "";
    const info = token.info ? token.info.trim() : "";
    const langName = info.split(/\s+/g)[0];

    // Handle argdown-cheatsheet code blocks. Used for example for /syntax
    if (langName === "argdown-cheatsheet") {
      token.info = token.info.replace("argdown-cheatsheet", "argdown-source");

      const request: IArgdownRequest = {
        input: token.content,
        process: ["parse-input", "build-model"],
        logExceptions: true,
        throwExceptions: true
      };
      const result = argdown.run(request);

      const explanation = result?.frontMatter?.explanation ?? "";
      const mapTitle = result?.frontMatter?.title ?? "";
      if (result.frontMatter && result.frontMatter.hide) {
        token.content = removeFrontMatter(token.content);
      }
      return `<ArgdownCheatSheet><template #source>${oldFence(
        tokens,
        idx,
        options,
        env,
        slf
      )}</template><template #title>${mapTitle}</template><template #explanation>${explanation}</template></ArgdownCheatSheet>`;
    }

    if (langName === "argdown-sayswho") {
      const request: IArgdownRequest = {
        input: token.content,
        process: "says-who-map",
        webComponent: {
          addGlobalStyles: false,
          addWebComponentPolyfill: false,
          addWebComponentScript: false,
          initialView: "map"
        }
      };
      const response = argdown.run(request);
      return response.webComponent ?? "";
    }

    // Fallback to default fence
    return oldFence(tokens, idx, options, env, slf);
  };
};
