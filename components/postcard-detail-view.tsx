import { useState } from "react";
import type { Postcard } from "@/types";
import {
  MapPin,
  Calendar,
  Share2,
  ArrowLeft,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { ShareModal } from "./share-modal";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PostcardDetailViewProps {
  postcard: Postcard;
}

export default function PostcardDetailView({
  postcard,
}: PostcardDetailViewProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50));
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBack = () => {
    router.back();
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 p-4 backdrop-blur-md">
        <button onClick={handleBack} className="text-slate-600">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold text-purple-600">Postcard</h1>
        <button onClick={handleShare} className="text-slate-600">
          <Share2 className="h-6 w-6" />
        </button>
      </header>

      <main>
        <div className="relative h-80 w-full">
          <Image
            fill
            src={postcard.imageUrl || "/placeholder.svg?height=320&width=640"}
            alt={postcard.title}
            className="object-cover"
          />

          {postcard.mintStatus === "minted" && (
            <div className="absolute right-4 top-4 rounded-full bg-purple-600 px-3 py-1 text-sm font-medium text-white shadow-md">
              Minted NFT
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold">{postcard.title}</h2>

          <div className="mt-4 flex items-center gap-2">
            <Avatar>
              <span>nothing here</span>
            </Avatar>
            <div>
              <p className="font-medium">{postcard.creatorName}</p>
              <p className="text-xs text-slate-500">
                {new Date(postcard.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="h-5 w-5" />
              <span>{postcard.location.name}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="h-5 w-5" />
              <span>{postcard.eventTag}</span>
            </div>
          </div>

          {postcard.description && (
            <div className="mt-4 rounded-lg bg-slate-50 p-4">
              <p className="text-slate-700">{postcard.description}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button onClick={handleLike} className="flex items-center gap-1">
                <Heart
                  className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : "text-slate-600"}`}
                />
                <span className="text-sm font-medium">{likeCount}</span>
              </button>

              <button className="flex items-center gap-1 text-slate-600">
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {Math.floor(Math.random() * 10)}
                </span>
              </button>
            </div>

            <Button
              onClick={handleShare}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </main>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        postcard={postcard}
      />
    </div>
  );
}
