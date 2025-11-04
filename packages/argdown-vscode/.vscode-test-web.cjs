// .vscode-test-web.cjs
// NOTE: @vscode/test-web doesn't actually support config files like @vscode/test-cli does.
// This file is kept for documentation purposes to show the intended configuration.
// The actual web test configuration is in package.json scripts using command-line arguments.
const { defineConfig } = require('@vscode/test-web');

module.exports = defineConfig({
  files: 'dist/test/web/**/*.test.js',
  extensionDevelopmentPath: '.',
  browserType: 'chromium', // or 'firefox', 'webkit'
  version: 'stable',
  mocha: {
    ui: 'tdd',
    timeout: 15000, // Web tests may need more time
    color: true,
    reporter: 'spec'
  },
  env: {
    NODE_ENV: 'test',
    TEST_TYPE: 'web'
  },
  // Add launch arguments to help with stability in web environment
  launchArgs: [
    '--disable-extensions', // Disable other extensions during testing
    '--disable-web-security', // May be needed for some web extension features
  ]
});