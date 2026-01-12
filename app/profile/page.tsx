import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { TripListTabs } from "@/components/profile/TripListTabs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader />
      <TripListTabs />
    </div>
  );
}
