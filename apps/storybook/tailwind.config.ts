// tailwind.config.ts
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./stories/*.tsx"],
  presets: [sharedConfig],
};

export default config;
