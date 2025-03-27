// tailwind.config.ts
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./theme.css"],
  presets: [sharedConfig],
};

export default config;
