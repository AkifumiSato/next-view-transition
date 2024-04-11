import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  preflight: true,
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "indigo",
      grayColor: "slate",
      borderRadius: "sm",
    }),
  ],
  include: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  jsxFramework: "react",
  theme: {
    extend: {},
  },
  outdir: "styled-system",
});
