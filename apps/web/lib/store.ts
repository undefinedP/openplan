import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TPhoto = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

type TPhotoStore = {
  photo: TPhoto | null;
  setPhoto: (data: TPhoto) => void;
  clearPhoto: () => void;
};

const StorageKey = "photo-store";

export const usePhotoStore = create<TPhotoStore>()(
  persist(
    (set) => ({
      photo: null,
      setPhoto: (data) => set({ photo: data }),
      clearPhoto: () => set({ photo: null }),
    }),
    {
      name: StorageKey,
    },
  ),
);
