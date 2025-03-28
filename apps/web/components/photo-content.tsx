"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import { toLocaleNumber } from "@/utils/formatter";
import { usePhotoStore } from "@/lib/store";
import Card from "./card";
import Form from "./form";
import Header from "./header";
import Skeleton from "./skeleton";

export default function PhotoContent() {
  const { photo } = usePhotoStore();
  const router = useRouter();

  // 사진을 조회한 이력없이 "/result"로 이동하는 경우, 1초 뒤 메인 페이지로 이동
  useEffect(() => {
    if (!photo) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [photo, router]);

  if (!photo) {
    return <Skeleton />;
  }

  return (
    <>
      <div
        className="absolute inset-0 h-2/3 w-full bg-cover bg-center opacity-30 blur-lg filter lg:h-full lg:scale-[3]"
        style={{ backgroundImage: `url('${photo.download_url}')` }}
      />
      <div className="flex flex-col gap-10">
        <Header className="text-primary-foreground" />
        <div className="relative flex h-screen flex-col items-center gap-10 pb-[3.75rem] lg:flex-row lg:justify-center">
          <div className="px-5">
            <Image
              className="rounded-3xl"
              src={photo.download_url}
              alt={photo.author}
              width={photo.width}
              height={photo.height}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-3 px-5 lg:max-h-[388px] lg:min-w-[700px]">
            <Card className="md:flex-row">
              <Form label="id" value={photo.id} />
              <Form label="author" value={photo.author} />
            </Card>
            <Card className="md:flex-row">
              <Form label="width" value={toLocaleNumber(photo.width)} />
              <Form label="height" value={toLocaleNumber(photo.height)} />
            </Card>
            <Card>
              <Form label="url" value={photo.url} />
              <Form label="download_url" value={photo.download_url} />
            </Card>
            <Button
              text="이전"
              onClick={() => router.back()}
              className="md:w-1/4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
