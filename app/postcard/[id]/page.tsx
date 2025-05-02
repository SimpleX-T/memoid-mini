"use client";

import PostcardDetailView from "../../../components/postcard-detail-view";
import type { Postcard } from "@/types";
import { useSearchParams } from "next/navigation";

export default function PostcardPage() {
  const params = useSearchParams();
  const postcardId = params.get("id");
  if (!postcardId) {
    return (
      <div className="flex h-full items-center justify-center">
        Postcard not found
      </div>
    );
  }

  const mockPostcard: Postcard = {
    id: postcardId,
    title: "Sunset at Central Park",
    description:
      "Beautiful sunset view from the heart of NYC. Captured this magical moment during my evening walk.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    location: {
      latitude: 40.785091,
      longitude: -73.968285,
      name: "Central Park, New York",
    },
    eventTag: "NYC Summer",
    createdAt: new Date("2023-06-15"),
    creatorId: "user1",
    creatorName: "John Doe",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    mintStatus: "minted",
    mintId: "zora-123456",
  };

  return <PostcardDetailView postcard={mockPostcard} />;
}
