import { ReactNode } from "react";

interface ICardProps {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className }: ICardProps) {
  return (
    <div
      className={`flex w-full flex-col gap-4 rounded-2xl bg-white p-5 ${className}`}
    >
      {children}
    </div>
  );
}
