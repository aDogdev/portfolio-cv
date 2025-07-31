import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://adogdev.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});
