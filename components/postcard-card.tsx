import type { Postcard } from "@/types";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Avatar } from "./ui/avatar";

interface PostcardCardProps {
  postcard: Postcard;
  onClick: () => void;
}

export function PostcardCard({ postcard, onClick }: PostcardCardProps) {
  return (
    <div
      className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          fill
          src={postcard.imageUrl || "/placeholder.svg?height=192&width=384"}
          alt={postcard.title}
          className="object-cover"
        />

        {postcard.mintStatus === "minted" && (
          <div className="absolute right-2 top-2 rounded-full bg-purple-600 px-2 py-1 text-xs font-medium text-white">
            Minted
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold line-clamp-1">{postcard.title}</h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{postcard.location.name}</span>
        </div>

        <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>{postcard.eventTag}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar />
            <span className="text-xs font-medium">{postcard.creatorName}</span>
          </div>

          <span className="text-xs text-slate-400">
            {new Date(postcard.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
