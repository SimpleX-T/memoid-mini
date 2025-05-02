import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="relative w-24 h-24 mb-4">
          <Image
            fill
            src="/placeholder.svg?height=96&width=96"
            alt="Postcard App Logo"
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-white">Postcard</h1>
        <p className="text-white/80">Capture. Mint. Share.</p>
      </div>
    </div>
  );
}
