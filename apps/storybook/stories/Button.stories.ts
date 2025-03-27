import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    text: "다음",
  },
};

// 2. 호버 상태 시뮬레이션
export const Hover: Story = {
  args: {
    text: "다음",
    // 추가 클래스 등을 붙여 강제로 hover 스타일을 표현
    className: "hover:ui-bg-primary hover:ui-opacity-80",
  },
};
