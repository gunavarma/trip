"use client";

import { MapMock } from "@/components/explore/MapMock";
import { MOCK_TRIPS } from "@/lib/data";
import { useState } from "react";
import { Trip } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TripCard } from "@/components/home/TripCard";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function ExplorePage() {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-20 container mx-auto px-4 h-screen flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Explore Content</h1>
      </div>

      <div className="flex-grow relative">
        <MapMock trips={MOCK_TRIPS} onSelect={setSelectedTrip} />

        {/* Desktop/Tablet Card Overlay */}
        <AnimatePresence>
          {selectedTrip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-4 right-4 w-80 h-auto max-h-[90%] z-20 hidden md:block"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </button>
                <Link href={`/trips/${selectedTrip.id}`}>
                  <TripCard trip={selectedTrip} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Sheet (Simulated with absolute div for now or ShadCN drawer/sheet) */}
      {/* Note: Using simple conditional render for mobile overlay for simplicity over complex Sheet */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-20 left-4 right-4 z-40 md:hidden bg-transparent pointer-events-none"
          >
            <div className="pointer-events-auto h-[400px]">
              <div className="relative h-full">
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="absolute -top-3 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-30"
                >
                  <X className="w-4 h-4" />
                </button>
                <Link
                  href={`/trips/${selectedTrip.id}`}
                  className="block h-full shadow-2xl rounded-2xl overflow-hidden"
                >
                  <TripCard trip={selectedTrip} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
