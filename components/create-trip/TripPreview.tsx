"use client";

import { Trip } from "@/lib/types";
import { TripCard } from "@/components/home/TripCard";

interface TripPreviewProps {
  data: Partial<Trip>;
}

export function TripPreview({ data }: TripPreviewProps) {
  // Mock host for preview
  const previewTrip: Trip = {
    id: "preview",
    title: data.title || "Trip Title",
    description: data.description || "Trip description will appear here...",
    destination: data.destination || "Destination",
    images: data.images?.length
      ? data.images
      : [
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000",
        ],
    startDate: data.startDate || new Date().toISOString(),
    endDate: data.endDate || new Date().toISOString(),
    host: { id: "me", name: "You", avatar: "" },
    members: [],
    maxMembers: data.maxMembers || 10,
    tags: data.tags || [],
    cost: data.cost || 0,
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="mb-4 text-center">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Live Preview
        </span>
      </div>
      <div className="h-[450px]">
        <TripCard trip={previewTrip} />
      </div>
    </div>
  );
}
