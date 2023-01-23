import { defineConfig } from "vite";
import unocss from "unocss/vite";
import path from "path";
import glob from "glob";

export default defineConfig({
  plugins: [unocss()],

  root: path.join(__dirname, "src"),
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, "dist"),

    rollupOptions: {
      input: {
        ...glob.sync("./src/**/*.html"),
      },
    },
  },
});
