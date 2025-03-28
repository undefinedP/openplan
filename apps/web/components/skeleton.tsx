import Card from "./card";
import Header from "./header";

export default function Skeleton() {
  return (
    <div className="flex animate-pulse flex-col items-center gap-10">
      <Header className="text-primary-foreground" />
      <div className="flex w-screen flex-col items-center px-5">
        <div className="h-72 w-full rounded-3xl bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="flex w-screen flex-col items-center gap-3 px-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <div className="h-4 w-12 rounded-3xl bg-gray-200" />
            <div className="h-4 w-full rounded-3xl bg-gray-200" />
            <div className="h-4 w-12 rounded-3xl bg-gray-200" />
            <div className="h-4 w-full rounded-3xl bg-gray-200" />
          </Card>
        ))}
      </div>
    </div>
  );
}
