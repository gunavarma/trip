"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Adventure 🏔️",
  "Beach 🏖️",
  "Trek 🥾",
  "Solo 🎒",
  "Luxury 💎",
  "Camping 🏕️",
  "City Trip 🏙️",
  "Road Trip 🚗",
];

export function FilterChips() {
  const [active, setActive] = useState("All");

  return (
    <div className="w-full py-4">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-2 px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                active === category
                  ? "bg-gradient-to-r from-sky-blue to-soft-purple text-white shadow-md scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-sky-blue/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
