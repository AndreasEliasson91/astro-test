import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "sv"],
    routing: {
      prefixDefaultLocale: true
    },
  }
});