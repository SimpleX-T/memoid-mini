import { useState } from "react";

import type { Postcard, User } from "@/types";
import { ArrowLeft, Settings, Grid, BookMarked } from "lucide-react";
import { PostcardGrid } from "./postcard-grid";
import { CollectionGrid } from "./collection-grid";
import { Avatar } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useRouter } from "next/navigation";

interface UserProfileScreenProps {
  user: User;
  postcards: Postcard[]; // This would be the full postcard objects
}

export default function UserProfileScreen({
  user,
  postcards,
}: UserProfileScreenProps) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("postcards");
  console.log(activeTab);

  const handleBack = () => {
    router.back();
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-sm">
        <button onClick={handleBack} className="text-slate-600">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold text-purple-600">Profile</h1>
        <button onClick={handleSettings} className="text-slate-600">
          <Settings className="h-6 w-6" />
        </button>
      </header>

      <main>
        <div className="relative">
          <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <Avatar className="border-4 border-white" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-xl font-bold">{user.name}</h2>

          <div className="mt-4 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-xl font-bold">{user.stats.totalMints}</p>
              <p className="text-sm text-slate-500">Mints</p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold">{user.stats.totalViews}</p>
              <p className="text-sm text-slate-500">Views</p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold">{user.collections.length}</p>
              <p className="text-sm text-slate-500">Collections</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="postcards" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="postcards"
                className="flex items-center gap-2"
              >
                <Grid className="h-4 w-4" />
                Postcards
              </TabsTrigger>
              <TabsTrigger
                value="collections"
                className="flex items-center gap-2"
              >
                <BookMarked className="h-4 w-4" />
                Collections
              </TabsTrigger>
            </TabsList>

            <TabsContent value="postcards" className="p-4">
              <PostcardGrid
                postcards={postcards}
                onPostcardClick={(id) => router.push(`/postcard/${id}`)}
              />
            </TabsContent>

            <TabsContent value="collections" className="p-4">
              <CollectionGrid
                collections={user.collections}
                onCollectionClick={(id) => router.push(`/collection/${id}`)}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
