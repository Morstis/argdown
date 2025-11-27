// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

// Web Component, required by the @argdown/markdown-it-plugin. But we can not import it from there because VitePress blocks it. Therefore create the plugin without importing the script and import the web component here. See also config.mts
import "@argdown/web-components";

// Vue Components
import ArgdownCheatSheet from "../components/ArgdownCheatSheet.vue";

// Styles
import "./style.css";
import "./md-it-container-custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },

  enhanceApp({ app, router, siteData }) {
    app.component("ArgdownCheatSheet", ArgdownCheatSheet);
  }
} satisfies Theme;
