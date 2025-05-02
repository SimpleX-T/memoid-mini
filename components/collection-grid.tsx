import type { Collection } from "@/types";
import Image from "next/image";


interface CollectionGridProps {
  collections: Collection[];
  onCollectionClick: (id: string) => void;
}

export function CollectionGrid({
  collections,
  onCollectionClick,
}: CollectionGridProps) {
  if (collections.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <p className="text-slate-400">No collections yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="overflow-hidden rounded-lg border shadow-sm"
          onClick={() => onCollectionClick(collection.id)}
        >
          <div className="relative aspect-square">
            <Image
              fill
              src={
                collection.coverImageUrl ||
                "/placeholder.svg?height=200&width=200"
              }
              alt={collection.name}
              className="object-cover"
            />
          </div>

          <div className="p-2">
            <h3 className="font-medium line-clamp-1">{collection.name}</h3>
            <p className="text-xs text-slate-500">
              {collection.postcardIds.length} postcards
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
