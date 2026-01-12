"use client";

import Link from "next/link";
import { Search, Bell, Menu } from "lucide-react";
import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-16 md:h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            T
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight hidden sm:block group-hover:text-primary transition-colors">
            Tripwise
          </span>
        </Link>

        {/* Search Bar (Desktop) - Airbnb Style */}
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-auto">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            <Input
              placeholder="Where to next?"
              className="pl-11 h-12 rounded-full border-gray-200 shadow-sm bg-white hover:shadow-md focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          >
            <Bell className="w-5 h-5" />
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              className="rounded-full font-medium text-gray-600 hover:text-gray-900"
            >
              Explore
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6 h-10 shadow-sm hover:shadow transition-all">
              Trip Mode ✈️
            </Button>
          </div>

          {/* User Menu Trigger */}
          <div className="flex items-center gap-2 p-1 pl-3 pr-1 rounded-full border border-gray-200 hover:shadow-md transition-shadow cursor-pointer bg-white ml-2">
            <Menu className="w-4 h-4 text-gray-500" />
            <Link href="/profile">
              <AvatarWithRing
                size="sm"
                className="w-8 h-8"
                borderColor="from-gray-200 to-gray-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
