"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import Header from "@/components/header";
import { useMutation } from "@tanstack/react-query";
import { TPhoto, usePhotoStore } from "@/lib/store";
import { useDebounce } from "@/hooks/useDebounce";
import LoadingSpinner from "@/components/loading-spinner";

export default function Home() {
  const router = useRouter();
  const { photo, setPhoto } = usePhotoStore();

  //이미 사진 조회한 이력이 있으면 자동으로 /result로 이동
  useEffect(() => {
    if (photo) {
      router.push("/result");
    }
  }, [photo, router]);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("https://picsum.photos/id/0/info");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    onSuccess: (data: TPhoto) => {
      setPhoto(data);
      router.push("/result");
    },
  });

  const handleClick = useCallback(() => {
    mutation.mutate();
  }, [mutation]);

  const handleDebouncedClick = useDebounce(handleClick, 500);

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
        <Button text="다음" onClick={handleDebouncedClick} />
      </div>
      {mutation.isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
