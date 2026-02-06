import type { Config } from "tailwindcss";

const config: Config = {
  // All TS/JS/MDX files under src (pages, app, components, standalone files)
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;


