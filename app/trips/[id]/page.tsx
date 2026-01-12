import { MOCK_TRIPS } from "@/lib/data";
import { TripHero } from "@/components/trip-detail/TripHero";
import { TripTabs } from "@/components/trip-detail/TripTabs";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TripDetailPage(props: PageProps) {
  const params = await props.params;
  const trip = MOCK_TRIPS.find((t) => t.id === params.id);

  if (!trip) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TripHero trip={trip} />
      <TripTabs trip={trip} />
    </div>
  );
}

export async function generateStaticParams() {
  return MOCK_TRIPS.map((trip) => ({
    id: trip.id,
  }));
}
