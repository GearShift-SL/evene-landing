// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://syncal.app",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://syncal.app/stripe-callback/",
    }),
    mdx(),
    react(),
  ],
  trailingSlash: "always",
});
