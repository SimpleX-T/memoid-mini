import type React from "react";
import Image from "next/image";
import type { Postcard } from "@/types";

interface PostcardMarkerProps {
  postcard: Postcard;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function PostcardMarker({
  postcard,
  onClick,
  style,
}: PostcardMarkerProps) {
  return (
    <div
      className="group cursor-pointer transition-transform hover:scale-105 active:scale-95"
      onClick={onClick}
      style={style}
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
        <Image
          fill
          src={postcard.imageUrl || "/placeholder.svg?height=48&width=48"}
          alt={postcard.title}
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform bg-white"></div>

      <div className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded-md bg-white p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        <p className="text-xs font-medium">{postcard.title}</p>
      </div>
    </div>
  );
}
