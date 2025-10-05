## ESM Compatibility Analysis

### External Dependencies:

@aduh95/viz.js ✅ (ESM compatible)
@babel/plugin-transform-modules-commonjs ⚠️ (Babel plugin, webpack specific)
@swc/helpers ✅ (ESM compatible)
@types/markdown-it ✅ (TypeScript types only)
@types/yargs ✅ (TypeScript types only)
axios ✅ (ESM compatible since v1.0)
babel-polyfill ⚠️ (Deprecated, should use core-js directly)
chevrotain ✅ (ESM compatible, updated to 11.0.3)
chokidar ✅ (ESM compatible)
codemirror ✅ (ESM compatible)
d3-selection ✅ (ESM compatible)
d3-transition ✅ (ESM compatible)
d3-zoom ✅ (ESM compatible)
dagre-d3 ✅ (ESM compatible)
eventemitter3 ✅ (ESM compatible)
file-saver ✅ (ESM compatible)
glob ✅ (ESM compatible since v8)
haunted ✅ (ESM compatible)
highlight.js ✅ (ESM compatible)
image-size ✅ (ESM compatible)
image-type ✅ (ESM compatible)
import-fresh ✅ (ESM compatible)
import-global ✅ (ESM compatible)
is-svg ✅ (ESM compatible)
js-yaml ✅ (ESM compatible)
lit-html ✅ (ESM compatible)
lodash ✅ (ESM compatible)
lodash.* ✅ (All lodash utilities are ESM compatible)
markdown-it ✅ (ESM compatible)
markdown-it-container ✅ (ESM compatible)
marked ✅ (ESM compatible)
mdurl ✅ (ESM compatible)
mkdirp ✅ (ESM compatible)
pandoc-filter ✅ (ESM compatible)
path-browserify ✅ (ESM compatible)
pdfkit ✅ (ESM compatible since v0.17.0, needs upgrade from ^0.16.0 → ^0.17.2)
pinia ✅ (ESM compatible)
pkginfo ✅ (has been removed)
punycode ✅ (ESM compatible)
string-pixel-width ✅ (ESM compatible, added @types/string-pixel-width)
string-replace-loader ⚠️ (Webpack loader)
svg-to-img ✅ (ESM compatible)
| svg-to-pdfkit | 0.1.8 | Needs wrapper or alternative |
to-vfile ✅ (ESM compatible)
unist-builder ✅ (ESM compatible)
unist-util-is ✅ (ESM compatible)
unist-util-visit ✅ (ESM compatible)
viz.js ❌ (Legacy package, use @aduh95/viz.js instead)
vscode-languageclient ✅ (ESM compatible)
vscode-uri ✅ (ESM compatible)
vue ✅ (ESM compatible)
vue-router ✅ (ESM compatible)
xmlbuilder ✅ (ESM compatible)
yargs ✅ (ESM compatible)

### Status Summary:
- ✅ ESM Compatible: ~45 packages
- ⚠️ TypeScript Issues: ~0 packages (all resolved!)  
- ⚠️ Build Tools: ~3 packages (webpack loaders)
- ❌ Problematic/Legacy: ~2 packages

### Major Issues Identified:
1. **brfs** - Browserify transform, CommonJS only
2. **viz.js** - Legacy package (already have @aduh95/viz.js replacement)
3. **babel-polyfill** - Deprecated

### Remaining Updates Needed:
1. **pdfkit** - Upgrade from ^0.16.0 to ^0.17.2 for ESM support

### TypeScript Declaration Issues - RESOLVED ✅
All TypeScript declaration issues have been resolved by adding appropriate @types packages.

### VS Code Extension Considerations:
- Most VS Code packages (vscode-languageclient, vscode-uri) support ESM
- Webpack loaders may need configuration updates for ESM

