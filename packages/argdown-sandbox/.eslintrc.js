module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
