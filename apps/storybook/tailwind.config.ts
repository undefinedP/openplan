// tailwind.config.ts
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./stories/**/*.tsx", "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
