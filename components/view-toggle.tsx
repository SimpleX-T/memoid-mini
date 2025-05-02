"use client"

import type { ViewMode } from "@/types"
import { Grid, Map } from "lucide-react"

interface ViewToggleProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

export function ViewToggle({ viewMode, onToggle }: ViewToggleProps) {
  return (
    <div className="flex items-center rounded-md border p-1">
      <button
        onClick={() => onToggle("map")}
        className={`flex items-center justify-center rounded px-2 py-1 ${
          viewMode === "map" ? "bg-purple-100 text-purple-600" : "text-slate-600"
        }`}
      >
        <Map className="h-4 w-4" />
      </button>

      <button
        onClick={() => onToggle("list")}
        className={`flex items-center justify-center rounded px-2 py-1 ${
          viewMode === "list" ? "bg-purple-100 text-purple-600" : "text-slate-600"
        }`}
      >
        <Grid className="h-4 w-4" />
      </button>
    </div>
  )
}
