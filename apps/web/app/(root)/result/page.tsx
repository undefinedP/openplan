import Card from "@/components/card";
import Form from "@/components/form";
import Header from "@/components/header";
import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Result() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="grain absolute inset-0 h-2/3 w-full" />
      <div className="absolute inset-0 h-2/3 w-[1000px] bg-[url('https://picsum.photos/id/0/5000/3333')] bg-cover bg-center opacity-30 blur-lg filter" />
      <div className="relative flex flex-col items-center gap-10 overflow-scroll pb-[3.75rem]">
        <Header className="text-primary-foreground" />
        <div className="px-5">
          <Image
            className="rounded-3xl"
            src="https://picsum.photos/id/0/5000/3333"
            alt=""
            width={5000}
            height={3333}
          />
        </div>
        <div className="flex w-screen flex-col items-center gap-3 px-5">
          <Card>
            <Form label="id" value={0} />
            <Form label="author" value={"author"} />
          </Card>
          <Card>
            <Form label="id" value={0} />
            <Form label="author" value={"author"} />
          </Card>
          <Card>
            <Form label="id" value={0} />
            <Form label="author" value={"author"} />
          </Card>
          <Button text="이전" />
        </div>
      </div>
    </div>
  );
}
