import { Suspense } from "react";
import PhotoContent from "@/components/photo-content";
import Skeleton from "@/components/skeleton";

export default function Result() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="grain absolute inset-0 h-2/3 w-full lg:h-full" />
      <Suspense fallback={<Skeleton />}>
        <PhotoContent />
      </Suspense>
    </div>
  );
}
