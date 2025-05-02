"use client";
import HomeScreen from "../components/home-screen";
import { Postcard } from "@/types";

export default function HomePage() {
  // Mock data for demonstration
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
      creatorId: "user1",
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
      creatorId: "user2",
      creatorName: "Jane Smith",
      creatorAvatar: "/placeholder.svg?height=40&width=40",
      mintStatus: "not-minted",
    },
  ];

  return <HomeScreen postcards={mockPostcards} />;
}

// "use client";

// import {
//   useMiniKit,
//   useAddFrame,
//   useOpenUrl,
// } from "@coinbase/onchainkit/minikit";
// import {
//   Name,
//   Identity,
//   Address,
//   Avatar,
//   EthBalance,
// } from "@coinbase/onchainkit/identity";
// import {
//   ConnectWallet,
//   Wallet,
//   WalletDropdown,
//   WalletDropdownDisconnect,
// } from "@coinbase/onchainkit/wallet";
// import { useEffect, useMemo, useState, useCallback } from "react";
// import { Button } from "./components/DemoComponents";
// import { Icon } from "./components/DemoComponents";
// import { Home } from "./components/DemoComponents";
// import { Features } from "./components/DemoComponents";

// export default function App() {
//   const { setFrameReady, isFrameReady, context } = useMiniKit();
//   const [frameAdded, setFrameAdded] = useState(false);
//   const [activeTab, setActiveTab] = useState("home");

//   const addFrame = useAddFrame();
//   const openUrl = useOpenUrl();

//   useEffect(() => {
//     if (!isFrameReady) {
//       setFrameReady();
//     }
//   }, [setFrameReady, isFrameReady]);

//   const handleAddFrame = useCallback(async () => {
//     const frameAdded = await addFrame();
//     setFrameAdded(Boolean(frameAdded));
//   }, [addFrame]);

//   const saveFrameButton = useMemo(() => {
//     if (context && !context.client.added) {
//       return (
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={handleAddFrame}
//           className="text-[var(--app-accent)] p-4"
//           icon={<Icon name="plus" size="sm" />}
//         >
//           Save Frame
//         </Button>
//       );
//     }

//     if (frameAdded) {
//       return (
//         <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
//           <Icon name="check" size="sm" className="text-[#0052FF]" />
//           <span>Saved</span>
//         </div>
//       );
//     }

//     return null;
//   }, [context, frameAdded, handleAddFrame]);

//   return (
//     <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
//       <div className="w-full max-w-md mx-auto px-4 py-3">
//         <header className="flex justify-between items-center mb-3 h-11">
//           <div>
//             <div className="flex items-center space-x-2">
//               <Wallet className="z-10">
//                 <ConnectWallet>
//                   <Name className="text-inherit" />
//                 </ConnectWallet>
//                 <WalletDropdown>
//                   <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
//                     <Avatar />
//                     <Name />
//                     <Address />
//                     <EthBalance />
//                   </Identity>
//                   <WalletDropdownDisconnect />
//                 </WalletDropdown>
//               </Wallet>
//             </div>
//           </div>
//           <div>{saveFrameButton}</div>
//         </header>

//         <main className="flex-1">
//           {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
//           {activeTab === "features" && <Features setActiveTab={setActiveTab} />}
//         </main>

//         <footer className="mt-2 pt-4 flex justify-center">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-[var(--ock-text-foreground-muted)] text-xs"
//             onClick={() => openUrl("https://base.org/builders/minikit")}
//           >
//             Built on Base with MiniKit
//           </Button>
//         </footer>
//       </div>
//     </div>
//   );
// }
