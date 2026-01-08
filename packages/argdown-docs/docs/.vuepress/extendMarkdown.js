//var argdown = require("@argdown/core/dist/argdown.js").argdown;
// var createArgdownPlugin = require("@argdown/markdown-it-plugin/dist/argdown-markdown-it-plugin.js")
//   .default;
var { argdown } = require("@argdown/core");
var cheatSheetPlugin = require("./markdown-it-plugin-argdown-cheat-sheet");
var { default: createArgdownPlugin } = require("@argdown/markdown-it-plugin");
var container = require("markdown-it-container");
function createContainer(klass, defaultTitle) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info.trim().slice(klass.length).trim();
        let title = "";
        if (info || defaultTitle) {
          title = `<p class="custom-block-title">${info || defaultTitle}</p>`;
        }
        if (token.nesting === 1) {
          return `<div class="${klass} custom-block">${title}\n`;
        } else {
          return `</div>\n`;
        }
      }
    }
  ];
}
module.exports = async (md) => {
  md.use(...createContainer("buttonlist"));
  md.use(...createContainer("definition"));
  md.use(
    await createArgdownPlugin({
      webComponent: {
        addWebComponentScript: false,
        addGlobalStyles: false,
        addWebComponentPolyfill: false
      }
    })
  );
  md.use(cheatSheetPlugin); // order matters! transforms argdown-cheatsheet into argdown-source, which is processed by markdown-it ArgdownPlugin
};
