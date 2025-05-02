import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface FloatingActionButtonProps {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

export function FloatingActionButton({
  icon,
  onClick,
  className,
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-transform hover:scale-105 active:scale-95",
        className
      )}
    >
      {icon}
    </button>
  );
}
