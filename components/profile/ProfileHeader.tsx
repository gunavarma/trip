"use client";

import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Share2, MapPin } from "lucide-react";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="relative mb-6">
      {/* Banner */}
      <div className="h-48 md:h-64 w-full relative rounded-b-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000"
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative -mt-16 flex flex-col md:flex-row items-end md:items-start gap-6">
        {/* Avatar */}
        <div className="relative">
          <AvatarWithRing
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
            size="xl"
            className="w-32 h-32 md:w-40 md:h-40 border-4 border-white dark:border-background shadow-xl"
          />
          <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-background" />
        </div>

        {/* Info */}
        <div className="flex-1 pb-4 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-white mb-1 drop-shadow-md">
            Sarah Jenkins
          </h1>
          <p className="text-gray-600 dark:text-gray-300 md:text-white/90 md:font-medium flex items-center justify-center md:justify-start gap-1">
            <MapPin className="w-4 h-4" /> New York, USA
          </p>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 max-w-lg">
            <Badge
              variant="secondary"
              className="bg-sky-100 text-sky-700 hover:bg-sky-200"
            >
              🌍 Explorer
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700 hover:bg-orange-200"
            >
              📸 Photographer
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 hover:bg-purple-200"
            >
              🧘‍♀️ Yoga Lover
            </Badge>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            Travel addict, content creator, and yoga instructor. Always looking
            for the next adventure and good coffee ☕️. Currently planning a
            trip to Japan!
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <div className="text-center">
              <span className="block text-xl font-bold">24</span>
              <span className="text-xs text-gray-500 uppercase">Trips</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold">1.2k</span>
              <span className="text-xs text-gray-500 uppercase">Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold">850</span>
              <span className="text-xs text-gray-500 uppercase">Following</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 self-start mt-4 md:mt-20">
          <Button variant="outline" size="icon" className="rounded-full">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="w-4 h-4" />
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-sky-blue to-soft-purple text-white border-0">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
