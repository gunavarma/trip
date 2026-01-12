"use client";

import { Trip } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "@/components/shared/GlassCard";
import { AvatarWithRing } from "@/components/shared/AvatarWithRing";
import { MessageCircle, Map, Info, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TripTabsProps {
  trip: Trip;
}

export function TripTabs({ trip }: TripTabsProps) {
  return (
    <div className="py-8">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent border-b border-gray-100 w-full justify-start h-auto p-0 gap-6 overflow-x-auto">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent px-4 py-3 font-semibold text-gray-500"
          >
            <Info className="w-4 h-4 mr-2" /> Overview
          </TabsTrigger>
          <TabsTrigger
            value="itinerary"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent px-4 py-3 font-semibold text-gray-500"
          >
            <Map className="w-4 h-4 mr-2" /> Itinerary
          </TabsTrigger>
          <TabsTrigger
            value="members"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent px-4 py-3 font-semibold text-gray-500"
          >
            <Users className="w-4 h-4 mr-2" /> Members ({trip.members.length}/
            {trip.maxMembers})
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent px-4 py-3 font-semibold text-gray-500"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Chat
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <GlassCard className="p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  About this trip
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {trip.description}
                </p>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Cost
                    </span>
                    <p className="font-bold text-gray-900">${trip.cost}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Days
                    </span>
                    <p className="font-bold text-gray-900">14</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Level
                    </span>
                    <p className="font-bold text-gray-900">Easy</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 uppercase font-semibold">
                      Group
                    </span>
                    <p className="font-bold text-gray-900">
                      {trip.maxMembers} Max
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {trip.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt="Gallery"
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Sidebar / Host Info */}
            <div className="space-y-6">
              <GlassCard className="p-6 sticky top-24">
                <div className="flex items-center gap-4 mb-4">
                  <AvatarWithRing src={trip.host.avatar} size="lg" />
                  <div>
                    <h3 className="font-bold text-lg">{trip.host.name}</h3>
                    <p className="text-sm text-gray-500">Trip Organizer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  "Hi! I'm a digital nomad who loves exploring new cultures and
                  meeting like-minded people. Can't wait for this trip!"
                </p>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm h-12">
                  Join This Trip
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full mt-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Message Host
                </Button>
              </GlassCard>
            </div>
          </div>
        </TabsContent>

        {/* Placeholder Tabs */}
        <TabsContent value="itinerary" className="mt-6">
          <GlassCard className="p-12 text-center text-gray-500">
            <Map className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Itinerary details coming soon...</p>
          </GlassCard>
        </TabsContent>

        <TabsContent value="members" className="mt-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold mb-6">Who's Going</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Host */}
              <div className="text-center">
                <div className="relative inline-block">
                  <AvatarWithRing src={trip.host.avatar} size="lg" />
                  <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-0.5 border-2 border-white">
                    HOST
                  </Badge>
                </div>
                <p className="mt-3 font-medium text-sm">{trip.host.name}</p>
              </div>

              {/* Members */}
              {trip.members.map((member) => (
                <div key={member.id} className="text-center">
                  <AvatarWithRing src={member.avatar} size="lg" />
                  <p className="mt-3 font-medium text-sm">{member.name}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="chat" className="mt-6">
          <GlassCard className="h-[400px] flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Group Chat</h3>
              <p className="text-gray-500 max-w-xs mx-auto mb-6">
                Join the trip to access the group chat and coordinate with other
                travelers.
              </p>
              <Button variant="outline" className="rounded-full">
                Preview Chat
              </Button>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
