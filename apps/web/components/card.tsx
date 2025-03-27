import { ReactNode } from "react";

interface ICardProps {
  children?: ReactNode;
}

export default function Card({ children }: ICardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-5">
      {children}
    </div>
  );
}
