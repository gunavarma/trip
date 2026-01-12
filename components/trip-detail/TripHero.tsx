"use client";

import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { GradientButton } from "@/components/shared/GradientButton";
import { Badge } from "@/components/ui/badge";
import { Trip } from "@/lib/types";
import { Calendar, MapPin, Users, Share2, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TripHeroProps {
  trip: Trip;
}

export function TripHero({ trip }: TripHeroProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full">
      {/* Background Image */}
      <Image
        src={trip.images[0]}
        alt={trip.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-8">
        <div className="w-full max-w-4xl text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {trip.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {trip.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:items-center text-white/90">
            <div className="flex items-center gap-2">
              <AvatarWithRing
                src={trip.host.avatar}
                size="sm"
                className="w-10 h-10 border-white"
                borderColor="from-white to-white"
              />
              <span className="font-medium">Hosted by {trip.host.name}</span>
            </div>

            <div className="w-px h-6 bg-white/30 hidden md:block" />

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{trip.destination}</span>
            </div>

            <div className="w-px h-6 bg-white/30 hidden md:block" />

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(trip.startDate).toLocaleDateString()} -{" "}
                {new Date(trip.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Bar (Desktop) */}
      <div className="absolute bottom-0 right-0 p-8 hidden md:block">
        <div className="flex gap-3">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <Share2 className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
