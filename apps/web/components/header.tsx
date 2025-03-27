interface IHeaderProps {
  className?: string;
}

export default function Header({ className }: IHeaderProps) {
  return (
    <header className={`flex justify-center px-5 py-4 ${className}`}>
      <span className="text-[0.95rem]">박미정</span>
    </header>
  );
}
