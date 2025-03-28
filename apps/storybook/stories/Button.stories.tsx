import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/src/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    pseudo: { hover: false },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    text: "다음",
    className: "ui-rounded-xl ui-bg-primary ui-p-3 ui-text-primary-foreground",
  },
  decorators: [
    (Story) => (
      <div className="w-[335px]">
        <Story />
      </div>
    ),
  ],
};

// 2. 호버 상태
export const Hover: Story = {
  args: {
    text: "다음",
    className:
      "ui-rounded-xl ui-bg-primary ui-p-3 ui-text-primary-foreground hover:ui-bg-primary hover:ui-opacity-80",
  },
  parameters: {
    pseudo: { hover: true },
  },
  decorators: [
    (Story) => (
      <div className="w-[335px]">
        <Story />
      </div>
    ),
  ],
};
