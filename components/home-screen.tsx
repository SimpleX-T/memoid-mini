import { useAccount, useConnect } from "wagmi";
import { useState } from "react";
import { MapView } from "./map-view";
import { ListView } from "./list-view";
import { FilterBar } from "./filter-bar";
import { ViewToggle } from "./view-toggle";
import { FloatingActionButton } from "./ui/floating-action-button";
import { Plus } from "lucide-react";
import { ViewMode, SortOption, Postcard } from "@/types";
import { useRouter } from "next/navigation";

interface HomeScreenProps {
  postcards: Postcard[];
}

export default function HomeScreen({ postcards }: HomeScreenProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("map");
  const [sortOption, setSortOption] = useState<SortOption>("recent");
  const router = useRouter();
  const handleCreatePostcard = () => {
    router.push("/create");
  };

  return (
    <div className="relative h-screen w-full bg-white">
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-purple-600">Postcard</h1>
          <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
        </div>
        <FilterBar sortOption={sortOption} onSortChange={setSortOption} />
        <ConnectMenu />
      </header>

      <main className="h-[calc(100vh-8rem)]">
        {viewMode === "map" ? (
          <MapView postcards={postcards} />
        ) : (
          <ListView postcards={postcards} sortOption={sortOption} />
        )}
      </main>

      <FloatingActionButton
        icon={<Plus className="h-6 w-6" />}
        onClick={handleCreatePostcard}
      />
    </div>
  );
}

function ConnectMenu() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  if (isConnected) {
    return (
      <>
        <div>You&apos;re connected!</div>
        <div>
          Address: {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
        </div>
      </>
    );
  }

  return (
    <button type="button" onClick={() => connect({ connector: connectors[0] })}>
      Connect
    </button>
  );
}
