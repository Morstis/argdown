/**
 * A util function to create markdown-it-container configs.
 * See: https://www.npmjs.com/package/@types/markdown-it-container
 */

import type { PluginWithParams } from "markdown-it";
import container, { ContainerOpts } from "markdown-it-container";

export function customBlockContainer(
  name: string,
  defaultTitle = null
): [PluginWithParams, string, ContainerOpts] {
  return [
    container,
    name,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info.trim().slice(name.length).trim();
        let title = "";
        if (info || defaultTitle) {
          title = `<p class="md-it-container-custom-block-title">${
            info || defaultTitle
          }</p>`;
        }
        if (token.nesting === 1) {
          return `<div class="${name} md-it-container-custom-block">${title}\n`;
        } else {
          return `</div>\n`;
        }
      }
    }
  ];
}
