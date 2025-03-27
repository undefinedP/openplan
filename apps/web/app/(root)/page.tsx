"use client";

import { Button } from "@repo/ui/button";
import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <span className="flex justify-center text-center text-[1.75rem] font-semibold lg:text-[2rem]">
          안녕하세요
          <br />
          박미정입니다.
        </span>
      </main>
      <div className="flex justify-center px-5 py-10">
        <Button text="다음" onClick={() => router.push("/result")} />
      </div>
    </div>
  );
}
