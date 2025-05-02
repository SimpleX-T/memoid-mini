"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "./ui/input";

interface LocationPickerProps {
  onLocationSelect: (location: {
    name: string;
    latitude: number;
    longitude: number;
  }) => void;
}

export function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    Array<{ name: string; latitude: number; longitude: number }>
  >([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock location search
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const mockSuggestions = [
        {
          name: "Central Park, New York",
          latitude: 40.785091,
          longitude: -73.968285,
        },
        {
          name: "Times Square, New York",
          latitude: 40.758896,
          longitude: -73.98513,
        },
        {
          name: "Brooklyn Bridge, New York",
          latitude: 40.706086,
          longitude: -73.996864,
        },
      ].filter((loc) =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSuggestions(mockSuggestions);
      setIsSearching(false);
    }, 500);
  };

  const handleLocationSelect = (location: {
    name: string;
    latitude: number;
    longitude: number;
  }) => {
    onLocationSelect(location);
    setSearchQuery(location.name);
    setSuggestions([]);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MapPin className="h-4 w-4 text-slate-400" />
        </div>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for a location"
          className="pl-10 pr-10"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center p-2 justify-center text-slate-400"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      {isSearching && (
        <div className="flex justify-center py-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-purple-600" />
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="max-h-40 overflow-y-auto rounded-md border bg-white shadow-sm">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleLocationSelect(suggestion)}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50"
            >
              <MapPin className="h-4 w-4 text-slate-400" />
              {suggestion.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
