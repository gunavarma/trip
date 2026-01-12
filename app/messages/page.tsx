"use client";

import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { GlassCard } from "@/components/shared/GlassCard";
import { MOCK_TRIPS } from "@/lib/data";
import { Search } from "lucide-react";
import Link from "next/link";

export default function MessagesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-24 h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 ring-sky-blue/50"
          />
        </div>
      </div>

      <div className="flex-grow space-y-4 overflow-y-auto">
        {/* Trip Groups */}
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4 mb-2">
          Trip Groups
        </h2>
        {MOCK_TRIPS.map((trip) => (
          <Link href={`/trips/${trip.id}?tab=chat`} key={trip.id}>
            <GlassCard
              className="mb-3 p-4 flex items-center gap-4 hover:bg-white/90 transition-colors cursor-pointer"
              hoverEffect={false}
            >
              <div className="relative">
                <AvatarWithRing
                  src={trip.images[0]}
                  size="md"
                  className="rounded-xl"
                />
                <div className="absolute -bottom-1 -right-1 bg-sky-500 w-4 h-4 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold truncate">{trip.title}</h3>
                  <span className="text-xs text-gray-400">2m ago</span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {trip.host.name}:{" "}
                  </span>
                  Anyone want to grab coffee?
                </p>
              </div>
            </GlassCard>
          </Link>
        ))}

        {/* Direct Messages */}
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2">
          Direct Messages
        </h2>
        {[1, 2, 3].map((i) => (
          <GlassCard
            key={i}
            className="mb-3 p-4 flex items-center gap-4 cursor-pointer hover:bg-white/90"
          >
            <div className="relative">
              <AvatarWithRing
                src={`https://i.pravatar.cc/150?u=${i}`}
                size="md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold truncate">Travel Buddy {i}</h3>
                <span className="text-xs text-gray-400">1d ago</span>
              </div>
              <p className="text-sm text-gray-500 truncate">
                Are you seeing this?
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
