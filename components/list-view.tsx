"use client";

import type { Postcard, SortOption } from "@/types";
import { PostcardCard } from "./postcard-card";
import { useRouter } from "next/navigation";

interface ListViewProps {
  postcards: Postcard[];
  sortOption: SortOption;
}

export function ListView({ postcards, sortOption }: ListViewProps) {
  const router = useRouter();
  // Sort postcards based on the selected option
  const sortedPostcards = [...postcards].sort((a, b) => {
    switch (sortOption) {
      case "recent":
        return b.createdAt.getTime() - a.createdAt.getTime();
      case "event":
        return a.eventTag.localeCompare(b.eventTag);
      case "user":
        return a.creatorName.localeCompare(b.creatorName);
      default:
        return 0;
    }
  });

  const handlePostcardClick = (postcardId: string) => {
    router.push(`/postcard/${postcardId}`);
  };

  return (
    <div className="h-full overflow-y-auto px-4 py-2">
      <div className="grid grid-cols-1 gap-4">
        {sortedPostcards.map((postcard) => (
          <PostcardCard
            key={postcard.id}
            postcard={postcard}
            onClick={() => handlePostcardClick(postcard.id)}
          />
        ))}
      </div>

      {sortedPostcards.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <p className="text-slate-400">No postcards found</p>
        </div>
      )}
    </div>
  );
}
