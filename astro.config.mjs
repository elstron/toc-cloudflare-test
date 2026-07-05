// @ts-check
import { defineConfig } from "astro/config";
import { tableOfContents } from "./toc/src/index.ts";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tableOfContents({
      title: "Table of Perritos",
      showIndex: true,
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
