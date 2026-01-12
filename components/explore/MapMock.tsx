"use client";

import { Trip } from "@/lib/types";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapMockProps {
  trips: Trip[];
  onSelect: (trip: Trip) => void;
}

export function MapMock({ trips, onSelect }: MapMockProps) {
  // Mock positions for demo
  const positions = [
    { top: "30%", left: "70%" }, // Asia
    { top: "20%", left: "45%" }, // Europe
    { top: "35%", left: "80%" }, // Japan
    { top: "70%", left: "30%" }, // South America
    { top: "40%", left: "20%" }, // NA
  ];

  return (
    <div className="relative w-full h-[calc(100vh-120px)] bg-blue-50 dark:bg-slate-900 overflow-hidden rounded-3xl border border-white/20 shadow-inner">
      {/* Background Map Image (Abstract) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />

      {/* Pins */}
      {trips.map((trip, i) => (
        <motion.div
          key={trip.id}
          className="absolute cursor-pointer group"
          style={positions[i % positions.length]}
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          onClick={() => onSelect(trip)}
          whileHover={{ scale: 1.2 }}
        >
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-coral animate-ping absolute inset-0 opacity-75" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-soft-purple text-white flex items-center justify-center shadow-lg border-2 border-white transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-4 h-4 fill-white" />
            </div>

            {/* Tooltip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[140%] bg-white dark:bg-black/80 px-3 py-1 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              <span className="text-xs font-bold text-gray-800 dark:text-white">
                {trip.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
