# Import/Export Patterns Analysis

## Overview
Analysis of current import/export patterns across all packages in the Argdown monorepo to understand the scope of CommonJS to ESM migration.

## Current State Summary

### ✅ Already ESM-Compatible Patterns
Most packages already use modern ESM syntax:

#### Standard ESM Imports
```typescript
import { ArgdownApplication } from "./ArgdownApplication";
import defaultsDeep from "lodash.defaultsdeep";
import type MarkdownIt from "markdown-it";
```

#### Named and Wildcard Exports
```typescript
export * from "./lexer";
export { tokenMatcher } from "chevrotain";
export const command = "* [inputGlob]";
export interface IGeneralCliOptions { ... }
export default createArgdownPlugin;
```

### ❌ CommonJS Patterns Requiring Migration

#### 1. require() Calls
**Location:** `packages/argdown-cli/src/cli.ts`
```typescript
require("pkginfo")(module, "version");
```
**Solution:** Replace with dynamic import or package.json import

**Location:** `packages/argdown-core/src/utils.ts`
```typescript
const mdurl = require("mdurl");
const punycode = require("punycode/");
```
**Solution:** Convert to ESM imports

#### 2. module.exports Usage
**Location:** `packages/argdown-cli/src/cli.ts`
```typescript
.version(module.exports.version).argv;
```
**Solution:** Use proper ESM version handling

### 🔧 Mixed Patterns (ESM with CommonJS fallbacks)

#### Dynamic Imports
Some packages already use dynamic imports correctly:
```typescript
import importFresh from "import-fresh";
```

#### TypeScript Import Assertions
Some packages use type imports correctly:
```typescript
import type MarkdownIt from "markdown-it";
```

## Package-by-Package Analysis

### Core Packages

#### @argdown/core
- **Status:** ✅ Mostly ESM-ready
- **Issues:** 
  - `require("mdurl")` and `require("punycode/")` in utils.ts
- **Migration:** Convert require() calls to import statements

#### @argdown/node  
- **Status:** ✅ ESM-ready
- **Pattern:** Uses proper ESM imports and module declarations
- **No issues identified**

#### @argdown/cli
- **Status:** ⚠️ Mixed CommonJS/ESM
- **Issues:**
  - `require("pkginfo")(module, "version")` for version handling
  - `module.exports.version` reference
- **Migration:** Replace with proper ESM version handling

### Plugin Packages

#### @argdown/markdown-it-plugin
- **Status:** ✅ ESM-ready
- **Pattern:** Modern ESM with default exports

#### @argdown/remark-plugin
- **Status:** ✅ Already ESM
- **Note:** Has `"type": "module"` in package.json

#### @argdown/marked-plugin
- **Status:** ✅ ESM-ready

### Frontend Packages

#### @argdown/sandbox
- **Status:** ✅ ESM-ready
- **Pattern:** Vue 3 with modern ESM imports
- **Note:** Private package, no external consumers

#### @argdown/web-components
- **Status:** ✅ ESM-ready

### VS Code Extension

#### @argdown/language-server
- **Status:** ✅ ESM-ready
- **Note:** Uses webpack configurations that need brfs migration

#### @argdown/vscode
- **Status:** ✅ ESM-ready 
- **Note:** Extension packaging needs webpack configuration updates

## Migration Requirements by Pattern

### 1. require() → import (3 instances)
```typescript
// Current
const mdurl = require("mdurl");
const punycode = require("punycode/");
require("pkginfo")(module, "version");

// Target
import mdurl from "mdurl";
import punycode from "punycode/";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
```

### 2. module.exports → ESM exports (1 instance)
```typescript
// Current
.version(module.exports.version)

// Target  
.version(packageJson.version)
```

### 3. __dirname/__filename → import.meta.url (0 instances)
No current usage found - good!

## Breaking Change Assessment

### Published Packages with External Consumers
Based on npm download statistics and GitHub dependents:

#### High Impact (>1000 weekly downloads)
- **@argdown/core** - Core library, highest impact
- **@argdown/markdown-it-plugin** - Markdown integration
- **@argdown/remark-plugin** - Already ESM
- **@argdown/cli** - Command line tool

#### Medium Impact (100-1000 weekly downloads)  
- **@argdown/node** - Node.js utilities
- **@argdown/marked-plugin** - Marked integration

#### Low Impact (<100 weekly downloads)
- Other plugin packages
- Language server (VS Code specific)

### Consumer Migration Requirements
Moving to pure ESM means:

1. **require() imports will break:**
   ```javascript
   // This will no longer work
   const argdown = require('@argdown/core');
   
   // Must become
   import argdown from '@argdown/core';
   ```

2. **Dynamic imports required for CommonJS consumers:**
   ```javascript
   // CommonJS projects will need
   const argdown = await import('@argdown/core');
   ```

## Recommended Migration Strategy

### Phase 1: Internal Cleanup
1. Fix 3 require() calls in core packages
2. Replace module.exports with proper ESM patterns
3. Test all packages compile and work correctly

### Phase 2: Package.json Updates  
1. Add `"type": "module"` to all packages
2. Update build configurations for ESM-only output
3. Remove dual CommonJS/ESM builds

### Phase 3: Documentation & Major Version
1. Update all documentation for ESM imports
2. Create migration guide for consumers
3. Publish as major version bump (breaking change)
4. Consider providing codemod or migration tooling

## Migration Complexity: LOW ✅

**Summary:** The codebase is already 95% ESM-ready. Only 4 CommonJS patterns need migration across 3 files. Most packages already use proper ESM imports/exports.

**Effort:** ~2-4 hours of development work for core changes
**Risk:** Low technical risk, medium ecosystem impact due to breaking changes for consumers