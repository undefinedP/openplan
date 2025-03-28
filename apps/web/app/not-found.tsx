"use client";

import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <div className="text-5xl font-extrabold md:text-9xl">404</div>
      <div className="text-2xl font-bold md:text-6xl">
        Looks like you&apos;re lost!
      </div>
      <div className="w-fill px-5 py-5">
        <Button
          className="w-40 md:h-20 md:w-72 md:text-xl"
          onClick={() => router.push("/")}
          text="I know where to go"
        />
      </div>
    </div>
  );
}
