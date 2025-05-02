import type { Postcard } from "@/types";
import Image from "next/image";

interface PostcardGridProps {
  postcards: Postcard[];
  onPostcardClick: (id: string) => void;
}

export function PostcardGrid({
  postcards,
  onPostcardClick,
}: PostcardGridProps) {
  if (postcards.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <p className="text-slate-400">No postcards yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {postcards.map((postcard) => (
        <div
          key={postcard.id}
          className="relative aspect-square overflow-hidden rounded-lg"
          onClick={() => onPostcardClick(postcard.id)}
        >
          <Image
            fill
            src={postcard.imageUrl || "/placeholder.svg?height=200&width=200"}
            alt={postcard.title}
            className="object-cover transition-transform hover:scale-105"
          />

          {postcard.mintStatus === "minted" && (
            <div className="absolute right-1 top-1 rounded-full bg-purple-600 px-1.5 py-0.5 text-[10px] font-medium text-white">
              NFT
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
