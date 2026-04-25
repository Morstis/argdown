module.exports = {
  out: "../argdown-docs/docs/.vitepress/dist/argdown-core",

  readme: "none",
  exclude: ["**/lexer.ts", "**/parser.ts"],

  excludeExternals: true,
  excludePrivate: true
};
