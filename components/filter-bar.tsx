"use client"

import type { SortOption } from "@/types"
import { Clock, Tag, User } from "lucide-react"

interface FilterBarProps {
  sortOption: SortOption
  onSortChange: (option: SortOption) => void
}

export function FilterBar({ sortOption, onSortChange }: FilterBarProps) {
  return (
    <div className="mt-2 flex items-center gap-2 overflow-x-auto py-2">
      <button
        onClick={() => onSortChange("recent")}
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm ${
          sortOption === "recent" ? "bg-purple-100 text-purple-600" : "bg-slate-100 text-slate-600"
        }`}
      >
        <Clock className="h-3.5 w-3.5" />
        Recent
      </button>

      <button
        onClick={() => onSortChange("event")}
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm ${
          sortOption === "event" ? "bg-purple-100 text-purple-600" : "bg-slate-100 text-slate-600"
        }`}
      >
        <Tag className="h-3.5 w-3.5" />
        Events
      </button>

      <button
        onClick={() => onSortChange("user")}
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm ${
          sortOption === "user" ? "bg-purple-100 text-purple-600" : "bg-slate-100 text-slate-600"
        }`}
      >
        <User className="h-3.5 w-3.5" />
        Users
      </button>
    </div>
  )
}
