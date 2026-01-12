"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_TRIPS } from "@/lib/data";
import { TripCard } from "@/components/home/TripCard";
import Link from "next/link";
import { motion } from "framer-motion";

export function TripListTabs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <Tabs defaultValue="hosted" className="w-full">
        <TabsList className="bg-transparent border-b border-gray-200 dark:border-white/10 w-full justify-start rounded-none p-0 h-auto gap-8 mb-8">
          <TabsTrigger
            value="hosted"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-sky-blue data-[state=active]:text-sky-blue px-0 py-3 font-semibold text-lg bg-transparent"
          >
            Hosted Trips
          </TabsTrigger>
          <TabsTrigger
            value="joined"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-sky-blue data-[state=active]:text-sky-blue px-0 py-3 font-semibold text-lg bg-transparent"
          >
            Joined
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-sky-blue data-[state=active]:text-sky-blue px-0 py-3 font-semibold text-lg bg-transparent"
          >
            Saved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hosted">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MOCK_TRIPS.slice(0, 2).map((trip) => (
              <motion.div key={trip.id} variants={item}>
                <Link href={`/trips/${trip.id}`} className="block h-full">
                  <TripCard trip={trip} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="joined">
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p>You haven't joined any trips yet.</p>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TRIPS.slice(2, 4).map((trip) => (
              <Link
                href={`/trips/${trip.id}`}
                key={trip.id}
                className="block h-full"
              >
                <TripCard trip={trip} />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
