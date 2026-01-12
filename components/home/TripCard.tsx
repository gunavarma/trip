"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { GradientButton } from "@/components/shared/GradientButton";
import { Trip } from "@/lib/types";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-transparent hover:bg-transparent">
      {/* Image Section - Airbnb Style rounded */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 mb-3">
        <Image
          src={trip.images[0]}
          alt={trip.destination}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition-colors">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "rgba(0, 0, 0, 0.5)",
              height: "24px",
              width: "24px",
              stroke: "white",
              strokeWidth: 2,
              overflow: "visible",
            }}
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </button>

        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
          {trip.tags[0]}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight truncate pr-2">
            {trip.destination}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-3 h-3 fill-black text-black" />
            <span>4.9</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-1">{trip.title}</p>
        <p className="text-gray-500 text-sm">
          {new Date(trip.startDate).toLocaleDateString()} -{" "}
          {new Date(trip.endDate).toLocaleDateString()}
        </p>

        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-semibold text-gray-900">${trip.cost}</span>
          <span className="text-gray-900">total</span>
        </div>
      </div>
    </div>
  );
}
