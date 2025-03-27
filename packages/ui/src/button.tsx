"use client";

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ text, className, onClick }: IButtonProps) => {
  return (
    <button
      className={`ui-w-[335px] ui-text-primary-foreground ui-p-3 ui-rounded-xl ui-bg-primary hover:ui-bg-primary hover:ui-opacity-80 ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
