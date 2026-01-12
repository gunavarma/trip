import { FilterChips } from "@/components/home/FilterChips";
import { FloatingCreateButton } from "@/components/home/FloatingCreateButton";
import { TripCard } from "@/components/home/TripCard";
import { MOCK_TRIPS } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-20 pt-20 md:pt-24 min-h-screen">
      {/* Search & Filters Mobile Header */}
      <div className="mb-6 space-y-4 md:hidden">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Discover <span className="text-sky-blue">Trips</span> ✈️
        </h1>
      </div>

      <FilterChips />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_TRIPS.map((trip) => (
          <Link
            href={`/trips/${trip.id}`}
            key={trip.id}
            className="block h-full"
          >
            <TripCard trip={trip} />
          </Link>
        ))}
        {/* Duplicate for demo density */}
        {MOCK_TRIPS.slice(0, 2).map((trip) => (
          <Link
            href={`/trips/${trip.id}`}
            key={`${trip.id}-dup`}
            className="block h-full"
          >
            <TripCard trip={{ ...trip, id: `${trip.id}-dup` }} />
          </Link>
        ))}
      </div>

      <FloatingCreateButton />
    </div>
  );
}
