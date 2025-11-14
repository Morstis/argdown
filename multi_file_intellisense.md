# Multi-File IntelliSense for Argdown Language Server: Analysis & Plans

## Current Architecture

The current language server implementation is designed around **single-file analysis**:

1. **Processing Pipeline**: Each IntelliSense request (completion, references, definitions, hover, etc.) processes only the current document via `processDocForProviders()`, which runs `["parse-input", "build-model"]` on individual file content.

2. **No File Loading**: The language server uses `@argdown/core` (browser-compatible) instead of `@argdown/node`, which means it lacks access to the `LoadFilePlugin` and `IncludePlugin` that handle multi-file scenarios.

3. **Limited Scope**: Features like "Find References" and "Go to Definition" only search within the current file's AST.

## Argdown's Multi-File Capabilities

Argdown **already supports** multi-file scenarios through:

1. **Include Syntax**: `@include(_my-argdown-partial.argdown)` allows embedding files
2. **File Loading Pipeline**: The `load-file` processor in `@argdown/node` handles file resolution and inclusion
3. **Compilation Process**: Files are preprocessed and merged before parsing, creating a unified AST

## Proposed Multi-File IntelliSense Approach

### Option 1: Workspace-Aware Processing (Recommended)

**Architecture Changes:**
- Extend the language server to use `@argdown/node` instead of `@argdown/core`
- Implement workspace-level file discovery and dependency tracking
- Add a `load-file` step to the processing pipeline for IntelliSense requests

**Implementation Strategy:**
```typescript
// Enhanced processing function
const processTextForProviders = async (text: string, path: string) => {
  const request: IArgdownRequest = {
    input: text,
    inputPath: path,
    process: ["load-file", "parse-input", "build-model"], // Add load-file
    throwExceptions: true,
    parser: { throwExceptions: true }
  };
  return await argdown.runAsync(request);
};
```

**Workspace Management:**
- Track all `.argdown` files in workspace folders
- Monitor file changes using `connection.workspace.onDidChangeWatchedFiles`
- Build dependency graphs based on `@include()` statements
- Cache compiled results and invalidate on file changes

### Option 2: Explicit Multi-File References

**Architecture:**
- Implement cross-file symbol resolution without full compilation
- Scan workspace for statement/argument definitions across files
- Build a workspace-wide symbol table

**Benefits:**
- Lighter weight than full compilation
- Faster IntelliSense responses
- Can work with incomplete files

### Option 3: Hybrid Approach

**Strategy:**
- Use Option 1 for files with `@include()` statements
- Use Option 2 for general cross-file references
- Provide configuration to enable/disable multi-file features

## Technical Considerations

### Challenges:
1. **Performance**: Processing multiple files for each IntelliSense request could be slow
2. **Caching**: Need intelligent caching and invalidation strategies  
3. **Circular Dependencies**: Handle complex include patterns safely
4. **Browser Compatibility**: Current browser server lacks file system access
5. **Error Reporting**: Line numbers in compiled documents vs. source files

### Solutions:
1. **Background Processing**: Pre-compile workspace files and maintain symbol tables
2. **Incremental Updates**: Only reprocess changed files and their dependents
3. **Smart Caching**: Cache ASTs and symbol tables with file change detection
4. **Node-Only Feature**: Multi-file support in Node.js language server only
5. **Source Mapping**: Maintain mapping between compiled and source positions

## Implementation Phases

### Phase 1: Basic Multi-File Support
- Add `load-file` processor to language server pipeline
- Implement basic include file resolution
- Enable cross-file "Go to Definition" and "Find References"

### Phase 2: Workspace Integration  
- Add file watching and change detection
- Implement dependency graph tracking
- Add workspace-wide symbol search

### Phase 3: Advanced Features
- Intelligent caching and performance optimization
- Cross-file rename refactoring
- Workspace-level diagnostics and validation

## Configuration Options

Users should be able to control multi-file behavior:

```json
{
  "argdown.multiFile.enabled": true,
  "argdown.multiFile.includeReferences": true,
  "argdown.multiFile.workspaceSymbols": true,
  "argdown.multiFile.maxDepth": 5
}
```

## Key Implementation Details

### Current Language Server Processing
- Located in `packages/argdown-language-server/src/server-node.ts`
- Uses `processTextForProviders()` function for IntelliSense requests
- Currently runs `["parse-input", "build-model"]` process only

### Required Changes
1. **Import @argdown/node**: Replace `@argdown/core` with `@argdown/node` for file system access
2. **Add load-file processor**: Modify processing pipeline to include file loading
3. **Workspace file discovery**: Implement file watching and workspace scanning
4. **Dependency tracking**: Build graphs of file dependencies via `@include()` statements
5. **Caching system**: Implement intelligent caching with invalidation

### File Structure Analysis
- **Node Server**: `packages/argdown-language-server/src/server-node.ts`
- **Browser Server**: `packages/argdown-language-server/src/server-browser.ts` (limited file access)
- **Include Plugin**: `packages/argdown-node/src/plugins/IncludePlugin.ts`
- **Load File Plugin**: `packages/argdown-node/src/plugins/LoadFilePlugin.ts`

## Conclusion

**Multi-file IntelliSense is definitely achievable** for the Argdown language server. The foundation exists in Argdown's core architecture with the `@include()` system and `load-file` processor.

**Recommended approach:**
1. **Start with Option 1** (workspace-aware processing) for a robust foundation
2. **Focus on Node.js extension first** (browser limitations make this challenging for web extensions)  
3. **Implement progressive enhancement** - fall back to single-file when multi-file processing fails
4. **Prioritize caching and performance** from the beginning

This would transform the Argdown VS Code extension from a basic syntax highlighter into a true IDE experience for complex, multi-file Argdown projects.