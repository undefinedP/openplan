"use client";

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button
      className={`ui-w-full ui-rounded-xl ui-bg-primary ui-p-3 ui-text-primary-foreground hover:ui-bg-primary hover:ui-opacity-80`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
