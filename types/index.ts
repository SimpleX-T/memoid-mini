export interface Postcard {
  id: string
  title: string
  description: string
  imageUrl: string
  location: {
    latitude: number
    longitude: number
    name: string
  }
  eventTag: string
  createdAt: Date
  creatorId: string
  creatorName: string
  creatorAvatar: string
  mintStatus: "not-minted" | "minting" | "minted"
  mintId?: string
}

export interface User {
  id: string
  name: string
  avatar: string
  postcards: string[] // Array of postcard IDs
  collections: Collection[]
  stats: {
    totalMints: number
    totalViews: number
  }
}

export interface Collection {
  id: string
  name: string
  postcardIds: string[]
  coverImageUrl: string
}

export type ViewMode = "map" | "list"
export type SortOption = "recent" | "event" | "user"
