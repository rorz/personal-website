import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const config: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMdx = createMdx({
  // Markdown plugins here
});

export default withMdx(config);
