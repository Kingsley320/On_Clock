import { defineConfig, presetUno, transformerVariantGroup, presetIcons } from "unocss";

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  // https://github.com/unocss/unocss#extend-theme
  theme: {
    colors: {
      ppurple: "#6B59FF",
    },
    width: {
      85: "22rem",
    },
    height: {
      85: "22rem",
    },
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: [],

  preflights: [
    // wil    // {
    //   getCSS: () => `
    //   :root {
    //     -webkit-tap-highlight-color: transparent;
    //   }
    //   html,
    //   body {
    //     overflow-x: hidden;
    //     height: 100%;
    //   }
    //   `
    // }
  ],

  variants: [],

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetIcons()],
  transformers: [transformerVariantGroup()],
});
