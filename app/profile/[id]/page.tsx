"use client";

import UserProfileScreen from "@/components/user-profile-screen";
import type { User, Postcard } from "@/types";
import { useSearchParams } from "next/navigation";

export default function ProfilePage() {
  const params = useSearchParams();
  const userId = params.get("id");
  // Mock user data
  const mockUser: User = {
    id: userId || "",
    name: "John Doe",
    avatar: "/placeholder.svg?height=80&width=80",
    postcards: ["1", "2", "3"],
    collections: [
      {
        id: "col1",
        name: "NYC Adventures",
        postcardIds: ["1", "2"],
        coverImageUrl: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "col2",
        name: "Summer 2023",
        postcardIds: ["3"],
        coverImageUrl: "/placeholder.svg?height=200&width=200",
      },
    ],
    stats: {
      totalMints: 5,
      totalViews: 120,
    },
  };

  // Mock postcards data
  const mockPostcards: Postcard[] = [
    {
      id: "1",
      title: "Sunset at Central Park",
      description: "Beautiful sunset view from the heart of NYC",
      imageUrl: "/placeholder.svg?height=400&width=400",
      location: {
        latitude: 40.785091,
        longitude: -73.968285,
        name: "Central Park, New York",
      },
      eventTag: "NYC Summer",
      createdAt: new Date("2023-06-15"),
      creatorId: userId || "",
      creatorName: "John Doe",
      creatorAvatar: "/placeholder.svg?height=40&width=40",
      mintStatus: "minted",
      mintId: "zora-123456",
    },
    {
      id: "2",
      title: "Brooklyn Bridge",
      description: "Iconic view of the Brooklyn Bridge",
      imageUrl: "/placeholder.svg?height=400&width=400",
      location: {
        latitude: 40.706086,
        longitude: -73.996864,
        name: "Brooklyn Bridge, New York",
      },
      eventTag: "NYC Landmarks",
      createdAt: new Date("2023-07-20"),
      creatorId: userId || "",
      creatorName: "John Doe",
      creatorAvatar: "/placeholder.svg?height=40&width=40",
      mintStatus: "not-minted",
    },
    {
      id: "3",
      title: "Times Square Lights",
      description: "The bright lights of Times Square at night",
      imageUrl: "/placeholder.svg?height=400&width=400",
      location: {
        latitude: 40.758896,
        longitude: -73.98513,
        name: "Times Square, New York",
      },
      eventTag: "NYC Nights",
      createdAt: new Date("2023-08-05"),
      creatorId: userId || "",
      creatorName: "John Doe",
      creatorAvatar: "/placeholder.svg?height=40&width=40",
      mintStatus: "minted",
      mintId: "zora-789012",
    },
  ];

  return <UserProfileScreen user={mockUser} postcards={mockPostcards} />;
}
