# ES2023 Migration: Lessons Learned & Error Resolution Recipes

## 📋 Migration Overview

Successfully migrated `argdown-core` from legacy JavaScript patterns to ES2023 with TypeScript strict mode:
- **Started with**: 51 TypeScript strict null checking errors
- **Final result**: 0 errors, 172/172 tests passing
- **Success rate**: 100% (51/51 errors fixed)

---

## 🎯 Core Strategies & Tactics

### 1. **Systematic Error Reduction Approach**

#### **Phase 1: Establish Baseline**
```bash
# Always start with a full error count
npx tsc --noEmit --skipLibCheck 2>&1 | grep -c "error TS"
```

#### **Phase 2: Categorize Errors**
```bash
# Get detailed error view for analysis
npx tsc --noEmit --skipLibCheck 2>&1 | head -15
```

#### **Phase 3: Apply Targeted Fixes**
- **Manual fixes** for complex type issues
- **sed automation** for repetitive patterns
- **Validate incrementally** after each batch

#### **Phase 4: Verify Success**
```bash
# Ensure no regressions
yarn test
```

---

## 🔧 Error Resolution Recipes

### **Recipe 1: String | undefined → string**
**Pattern**: `Argument of type 'string | undefined' is not assignable to parameter of type 'string'`

#### **Manual Fix (Preferred)**:
```typescript
// ❌ Before
someFunction(token.title)
response.arguments[statement.title]

// ✅ After  
someFunction(token.title ?? "untitled")
response.arguments[statement.title ?? ""]
```

#### **sed Automation (For Repetitive Patterns)**:
```bash
# Fix Object.keys patterns
sed -i '' 's/Object\.keys(response\.arguments)/Object.keys(response.arguments ?? {})/g' src/**/*.ts

# Fix Object.values patterns  
sed -i '' 's/Object\.values(response\.statements)/Object.values(response.statements ?? {})/g' src/**/*.ts

# Fix import extensions (CORRECTED PATTERN - avoids double .js)
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*\)\([^.]\)";|from "./\1\2.js";|g' {} \;
# Alternative safer pattern for imports:
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*\)";|from "./\1.js";|g' {} \;
# BUT CHECK: Only apply if files don't already have .js extensions!

# BETTER APPROACH: Use negative lookahead to avoid double .js
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*[^s]\)";|from "./\1.js";|g' {} \;
# This avoids matching paths ending in 's' (like .js)

# SAFEST APPROACH: Two-step process
# Step 1: Find files that need fixing
grep -r 'from "\./[^"]*[^s]";' src --include="*.ts" 
# Step 2: Apply manually or with specific targeting
```

#### **Context-Aware Defaults**:
- **Display contexts**: Use `"untitled"` 
- **Map keys**: Use `""` (empty string)
- **Arrays**: Use `[]`
- **Objects**: Use `{}`

---

### **Recipe 2: Map.get() Undefined Safety**
**Pattern**: `Type 'T | undefined' is not assignable to type 'T'`

#### **Problem**: `Map.get()` returns `T | undefined`

#### **Solution Pattern**:
```typescript
// ❌ Before
const node = argumentNodesMap.get(relationMember.title);
froms.push(node); // Error: node could be undefined

// ✅ After  
const node = argumentNodesMap.get(relationMember.title ?? "");
if (node) {
  froms.push(node);
}
```

#### **sed Automation**:
```bash
# Fix Map.get calls with title parameters
sed -i '' 's/\.get(rel\.to!\.title)/\.get(rel.to!.title ?? "")/g' src/plugins/MapPlugin.ts
```

---

### **Recipe 3: Object Property Access Safety**
**Pattern**: `Type '{ [key: string]: T } | undefined' is not assignable to parameter`

#### **Solution**:
```typescript
// ❌ Before
getArgument(response.arguments, title)
getEquivalenceClass(response.statements, title)

// ✅ After
getArgument(response.arguments ?? {}, title)
getEquivalenceClass(response.statements ?? {}, title)
```

---

### **Recipe 4: External Library Type Declarations**
**Pattern**: `Could not find a declaration file for module 'package-name'`

#### **Solution**: Create local type declarations
```typescript
// src/types/package-name.d.ts
declare module "package-name/sub-path" {
  export default function functionName(
    param: string,
    options?: {
      format?: string;
      // ... other options
    }
  ): ReturnType;
}

declare module "package-name" {
  export interface OptionsInterface {
    // Define the interface properly
  }
}
```

#### **Type Definition Best Practices**:
- Match actual library API exactly
- Use correct TypeScript types (number vs string)
- Test imports after creating declarations

---

### **Recipe 5: Chevrotain Parser Compatibility (v11+)**
**Pattern**: `Type '<IAstNode>' does not satisfy the constraint`

#### **Solution 1: Remove Type Annotations**
```typescript
// ❌ Before (Chevrotain < 11)
this.RULE<IAstNode>("ruleName", () => {
  children.push(this.SUBRULE<IAstNode>(this.otherRule));
});

// ✅ After (Chevrotain 11+)  
this.RULE("ruleName", () => {
  children.push(this.SUBRULE(this.otherRule));
});
```

#### **Solution 2: Handle Duplicate SUBRULE Calls**
```typescript
// ❌ Before (Causes grammar ambiguity)
this.SUBRULE(this.pcsStatement);
// ... other code
this.SUBRULE(this.pcsStatement); // Duplicate!

// ✅ After (Use numerical suffixes)
this.SUBRULE(this.pcsStatement);  
// ... other code
this.SUBRULE2(this.pcsStatement); // Numbered suffix
```

---

### **Recipe 6: Complex Type Constraint Issues**
**Pattern**: `Type 'X' is not assignable to type 'Y | Z'`

#### **Analysis Process**:
1. **Understand the interfaces**: Check what types are expected
2. **Trace the data flow**: Where does the problematic value come from?
3. **Identify the mismatch**: What's the actual vs expected type?

#### **Solution Approaches**:
```typescript
// Option 1: Type Guards
if (relationParent.type === ArgdownTypes.STATEMENT) {
  return convertToValidType(relationParent);
} else if (relationParent.type === ArgdownTypes.ARGUMENT) {
  return relationParent as ValidType;
}

// Option 2: Explicit Error Handling
throw new Error(`Unexpected type: ${(relationParent as any).type}`);

// Option 3: Type Assertions (Use Sparingly)
return target as IArgument | IInference;
```

---

### **Recipe 7: Font Type Constraints (External Libraries)**
**Pattern**: `Type 'string' is not assignable to union of specific strings`

#### **Solution**: Type Assertion for External APIs
```typescript
// ❌ Before
font: settings.group!.font || "arial"

// ✅ After
font: (settings.group!.font || "arial") as any
```

---

### **Recipe 6: Module Export Issues**
**Pattern**: `Cannot find module '@package/core/dist/plugins/SomePlugin'` or artificially restricted exports

#### **Problem**: Plugin is not exported from main package index despite being needed by consumers

#### **Solution**: Export properly from main index instead of workarounds
```typescript
// ❌ Before (in @argdown/core/src/index.ts)
// SyncDotToSvgExportPlugin has to be exported explicitely as it is not needed everywhere and renderSync is too large
// export * from "./plugins/SyncDotToSvgExportPlugin.js";

// ✅ After 
export * from "./plugins/SyncDotToSvgExportPlugin.js";
```

#### **Consumer Usage**:
```typescript
// ❌ Before (requires internal path knowledge)
import { SyncDotToSvgExportPlugin } from "@argdown/core/dist/plugins/SyncDotToSvgExportPlugin.js";

// ✅ After (clean public API)
import { SyncDotToSvgExportPlugin } from "@argdown/core";
```

#### **Best Practices**:
- Don't artificially restrict exports based on size concerns
- If a plugin is needed by consumers, export it properly
- Size optimization should happen at build/bundling level, not export level
- Rebuild the exporting package after adding exports: `npm run build`

---

## 🚀 Automation Strategies

### **Sed Command Patterns**

#### **Pattern 1: Object Access Safety**
```bash
# Fix Object.keys calls
find src -name "*.ts" -exec sed -i '' 's/Object\.keys(\([^)]*arguments\))/Object.keys(\1 ?? {})/g' {} \;

# Fix Object.values calls  
find src -name "*.ts" -exec sed -i '' 's/Object\.values(\([^)]*statements\))/Object.values(\1 ?? {})/g' {} \;
```

#### **Pattern 2: Import Extensions (CORRECTED)**
```bash
# ❌ WRONG - Causes double .js extensions
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*\)";|from "./\1.js";|g' {} \;

# ✅ BETTER - Avoids files already ending in .js
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*[^s]\)";|from "./\1.js";|g' {} \;

# ✅ SAFEST - Manual verification approach
# Step 1: Find imports needing .js extension
grep -r 'from "\./[^"]*[^js]";' src --include="*.ts"
# Step 2: Apply sed with verification
grep -l 'from "\./[^"]*[^js]";' src/*.ts | xargs sed -i '' 's|from "\./\([^"]*\)";|from "./\1.js";|g'

# ✅ RECOMMENDED - Check before applying
find src -name "*.ts" -exec grep -l 'from "\./[^"]*[^s]";' {} \; | \
  xargs sed -i '' 's|from "\./\([^"]*\)";|from "./\1.js";|g'
```

#### **Pattern 3: String Undefined Safety**
```bash
# Fix token.title patterns
find src -name "*.ts" -exec sed -i '' 's/token\.title/token.title ?? "untitled"/g' {} \;
```

#### **Pattern 4: Response Property Access**
```bash
# Fix response.arguments access
find src -name "*.ts" -exec sed -i '' 's/response\.arguments!/response.arguments ?? {}/g' {} \;
```

### **When to Use Automation vs Manual**:
- **Use sed**: For highly repetitive, simple patterns (>10 occurrences)
- **Use manual**: For complex type issues, context-dependent defaults, import paths with mixed extensions
- **Validate**: Always check a few results manually before bulk application
- **Test first**: Run sed on a single file to verify pattern works correctly
- **Git safety**: Commit before bulk sed operations for easy rollback

---

## 📊 Efficiency Metrics & Tracking

### **Progress Tracking Commands**:
```bash
# Error count monitoring
npx tsc --noEmit --skipLibCheck 2>&1 | grep -c "error TS"

# Error details by file
npx tsc --noEmit --skipLibCheck 2>&1 | grep "src/" | sort | uniq -c

# Specific error pattern counts
npx tsc --noEmit --skipLibCheck 2>&1 | grep "string | undefined" | wc -l
```

### **Success Metrics from argdown-core**:
- **Batch 1**: 51 → 36 errors (29% reduction, sed automation)
- **Batch 2**: 36 → 25 errors (31% reduction, manual Map.get fixes)  
- **Batch 3**: 25 → 12 errors (52% reduction, plugin property fixes)
- **Batch 4**: 12 → 3 errors (75% reduction, StatementSelectionPlugin fixes)
- **Final**: 3 → 0 errors (100% reduction, external library types + complex type issue)

---

## ⚠️ Common Pitfalls & Solutions

### **Pitfall 1: Over-eager sed Replacement**
```bash
# ❌ Dangerous - might break valid code
sed 's/title/title ?? "untitled"/g' 

# ❌ CRITICAL - adds .js to files that already have .js
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*\)";|from "./\1.js";|g' {} \;
# Results in: from "./file.js.js"

# ✅ Safe - target specific patterns
sed 's/token\.title/token.title ?? "untitled"/g'

# ✅ Safe - avoid double extensions
find src -name "*.ts" -exec sed -i '' 's|from "\./\([^"]*[^s]\)";|from "./\1.js";|g' {} \;
```

### **Pitfall 2: Wrong Default Values**
```typescript
// ❌ Wrong - using generic defaults everywhere
statement.title ?? "untitled"  // OK for display
statementMap.get(statement.title ?? "untitled") // WRONG - should be ""

// ✅ Right - context-appropriate defaults
statement.title ?? "untitled"  // Display
statement.title ?? ""         // Map keys
```

### **Pitfall 3: Breaking Existing Logic**
```typescript
// ❌ Dangerous - changes behavior
if (argument.title) { ... }
// becomes  
if (argument.title ?? "untitled") { ... } // Always truthy!

// ✅ Safe - preserves intent
if (argument.title && argument.title !== "") { ... }
// or
if ((argument.title ?? "") !== "") { ... }
```

### **Pitfall 4: Ignoring Type System Intentions**
- Don't just suppress with `as any` everywhere
- Understand why TypeScript is complaining
- The type system is usually pointing to real potential runtime issues

---

## 🎯 Package-by-Package Strategy

### **Order of Operations for Each Package**:

1. **Setup & Baseline**:
   ```bash
   cd packages/package-name
   npx tsc --noEmit --skipLibCheck 2>&1 | grep -c "error TS"
   ```

2. **Apply Proven Patterns** (in order of efficiency):
   - sed automation for Object.keys/Object.values patterns
   - sed automation for response.arguments/statements patterns  
   - Manual fixes for Map.get() undefined issues
   - Manual fixes for token.title/property access patterns
   - External library type declarations as needed

3. **Handle Package-Specific Issues**:
   - Each package may have unique dependencies or patterns
   - Check for Chevrotain usage (probably only in argdown-core)
   - Look for other external libraries needing type declarations

4. **Validate & Test**:
   ```bash
   npx tsc --noEmit --skipLibCheck  # Should be 0 errors
   yarn test                        # Should pass
   ```

### **Estimated Effort per Package**:
- **Small packages** (e.g., utilities): 30-60 minutes
- **Medium packages** (e.g., plugins): 1-2 hours  
- **Large packages** (e.g., core): 2-4 hours (already done!)

---

## 🔍 Debugging & Troubleshooting

### **When Errors are Unclear**:
```bash
# Get more context around errors
npx tsc --noEmit --skipLibCheck 2>&1 | grep -A 3 -B 3 "error TS"

# Check specific files
npx tsc --noEmit --skipLibCheck src/specific/file.ts
```

### **Testing Fixes**:
```bash
# Quick syntax check without full build
npx tsc --noEmit --skipLibCheck src/modified/file.ts

# Check if sed commands worked as expected
git diff src/modified/file.ts
```

### **Rollback Strategy**:
```bash
# If automation goes wrong
git checkout -- src/problematic/file.ts

# Or selective rollback
git checkout HEAD~1 -- src/specific/file.ts
```

---

## 🎉 Success Criteria & Validation

### **Per-Package Success Metrics**:
- ✅ **TypeScript Compilation**: 0 errors with `--noEmit --skipLibCheck`
- ✅ **Test Suite**: All existing tests continue to pass
- ✅ **ESLint**: No new linting errors introduced
- ✅ **Functionality**: No runtime regressions

### **Final Migration Validation**:
- ✅ **Cross-package Integration**: Test imports between packages
- ✅ **Build Process**: Ensure production builds work
- ✅ **Type Declarations**: Generated .d.ts files are correct

---

## 📚 Key Learnings

1. **Nullish Coalescing (??) is Superior**: More predictable than `||` for undefined handling
2. **Context Matters for Defaults**: Different use cases need different fallback values  
3. **Automation + Manual = Optimal**: Use both strategies strategically
4. **sed Patterns Need Careful Testing**: Always test on single files first, beware of double-application
5. **Import Extensions Are Tricky**: Mixed .js/.ts files require careful regex patterns
6. **Incremental Progress**: Small, validated steps prevent large rollbacks
7. **Type System is Usually Right**: Errors often indicate real potential runtime issues
8. **External Libraries Need Attention**: Type declarations often need manual fixes
9. **Test Early, Test Often**: Catch regressions immediately
10. **Git is Your Safety Net**: Commit before bulk operations, checkout for rollbacks
11. **Module Exports Should Be Consistent**: Don't artificially restrict exports - if a plugin is needed by consumers, export it properly from the main index rather than creating workarounds

---

This comprehensive guide should enable efficient ES2023 migration across all remaining packages in the monorepo! 🚀