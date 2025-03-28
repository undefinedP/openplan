import type { Preview } from "@storybook/react";

import "@repo/theme/theme.css";
import "@repo/ui/dist/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
