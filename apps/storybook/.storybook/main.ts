import type { StorybookConfig } from "@storybook/react-vite";

import path, { join, dirname } from "path";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/experimental-addon-test"),
    getAbsolutePath("storybook-addon-pseudo-states"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // 직접 dist/index.css 파일의 절대 경로로 지정
          "@repo/ui/styles.css": path.resolve(
            __dirname,
            "../../packages/ui/dist/index.css",
          ),
        },
      },
    });
  },
};
export default config;
