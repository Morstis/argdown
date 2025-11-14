# Goals

1. **Complete ESM Migration**: Migrate all packages to pure ESM with Node 22.11.0+
2. **Drop CommonJS Support**: Eliminate CommonJS builds, standardize on ESM-only packages
3. **Consistent TypeScript Configuration**: Standardize all packages to extend root `tsconfig.base.json`
4. **Modern Package.json Standards**: Update all package.json files with consistent, modern configurations
5. **Dependency Updates**: Ensure all dependencies support ESM and are compatible with Node 22
6. **Build System Modernization**: Update build scripts and tooling for ESM-first workflow

# Plan

## Phase 1: Preparation & Analysis
- [x] Audit all dependencies for ESM compatibility [→report](./dependency-audit.md)
- [x] Identify packages that may have CommonJS consumers (breaking change assessment) [→report](./commonjs_consumers.md)
- [x] Document current import/export patterns across packages [→report](./import-export-patterns.md)
- [x] Check VS Code extension compatibility with pure ESM [→report](./vscode-esm-compatibility.md)

## Phase 2: TypeScript Configuration Standardization ✅
- [x] Update all package tsconfig.json files to extend `../../../tsconfig.base.json`
- [x] Remove duplicate configuration options from individual packages
- [x] Ensure consistent target (ES2023) and module (NodeNext) settings
- [x] Remove deprecated `typescript-workspace-plugin` references

**Results:** Successfully standardized 13 TypeScript packages [→report](./typescript-config-standardization.md):
- **Standard packages (11):** All packages now extend base config with minimal overrides
- **VS Code extension:** Special configuration for CommonJS output compatibility  
- **VS Code preview:** React JSX configuration maintained
- **All configurations validate without errors**

## Phase 3: Package.json Modernization ✅
- [x] Add `"type": "module"` to all package.json files
- [x] Update `"main"` field to point to ESM output
- [x] Remove `"module"` field (no longer needed for pure ESM)
- [x] Standardize `"exports"` field for better module resolution
- [x] Update all build scripts to generate ESM-only output
- [x] Ensure consistent Node.js version requirements (>= 22.11.0)

**Results:** Successfully modernized 12/13 TypeScript packages:
- **12 packages** now have `"type": "module"` and standardized exports
- **1 package** (argdown-vscode) correctly preserved as CommonJS for VS Code compatibility
- **All packages** have simplified ESM-only build processes
- **All packages** have consistent exports field for proper module resolution
- [ ] Ensure consistent Node.js version requirements (>= 22.11.0)

## Phase 4: Source Code Migration
- [x] Convert all require() calls to import statements
- [x] Update dynamic imports to use ESM syntax
- [x] Fix any `__dirname`/`__filename` usage (use import.meta.url)
- [x] Update file extensions where necessary (.js → .mjs if needed)
- [x] Handle CommonJS-only dependencies (consider alternatives or wrapper modules)

## Phase 5: Build System Updates
- [x] Update all build scripts to remove CommonJS targets
- [x] Simplify build process (single ESM output instead of dual)
- [x] Update test configurations for ESM
- [x] Update bundling/packaging for VS Code extension
- [x] Verify all development tools work with ESM

## Phase 6: Testing & Validation
- [ ] Run comprehensive test suite
- [ ] Test VS Code extension functionality
- [ ] Validate all CLI tools work correctly
- [ ] Test package publishing and installation
- [ ] Performance testing (ESM vs previous dual setup)

## Breaking Changes & Considerations
- **Consumer Impact**: Pure ESM packages cannot be imported with require()
- **VS Code Extension**: May need webpack/bundling adjustments
- **CLI Tools**: Ensure shebang and execution work correctly
- **Documentation**: Update all examples and documentation for ESM imports (esp.: packages/argdown-docs/docs/guide/integrating-argdown-markdown-into-applications.md)
- **Version Bump**: Consider major version bump due to breaking changes