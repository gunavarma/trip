import { Trip } from "./types";

export const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    title: "Bali Digital Nomad Retreat",
    description:
      "Join us for 2 weeks of coworking, surfing, and exploring the beautiful temples of Bali. We will be staying in a luxury villa with a pool and fast wifi. Perfect for remote workers looking to network and explore.",
    destination: "Ubud, Bali",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000",
    ],
    startDate: "2024-04-15",
    endDate: "2024-04-29",
    host: {
      id: "h1",
      name: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      bio: "Digital Nomad & Yoga Instructor",
    },
    members: [
      {
        id: "m1",
        name: "Mike",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: "m2",
        name: "Lisa",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      },
    ],
    maxMembers: 12,
    tags: ["Coworking", "Beach", "Nature"],
    cost: 1200,
  },
  {
    id: "2",
    title: "Iceland Northern Lights Expedition",
    description:
      "Chasing the Aurora Borealis across the golden circle. Hot springs, glaciers, and unforgettable views.",
    destination: "Reykjavik, Iceland",
    images: [
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1000",
    ],
    startDate: "2024-11-10",
    endDate: "2024-11-17",
    host: {
      id: "h2",
      name: "Erik Thor",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    members: [
      { id: "m3", name: "John", avatar: "" },
      { id: "m4", name: "Doe", avatar: "" },
      { id: "m5", name: "Alex", avatar: "" },
    ],
    maxMembers: 8,
    tags: ["Adventure", "Cold", "Photography"],
    cost: 2500,
  },
  {
    id: "3",
    title: "Kyoto Cherry Blossom Tour",
    description:
      "Experience the magic of Sakura season in Japan. Tea ceremonies, temple visits, and delicious food.",
    destination: "Kyoto, Japan",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
    ],
    startDate: "2024-03-20",
    endDate: "2024-03-30",
    host: {
      id: "h3",
      name: "Yuki Tanaka",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
    members: [{ id: "m6", name: "Emma", avatar: "" }],
    maxMembers: 10,
    tags: ["Culture", "Food", "City"],
    cost: 1800,
  },
  {
    id: "4",
    title: "Patagonia Trekking Adventure",
    description:
      "Multi-day trek through Torres del Paine. For experienced hikers looking for a challenge.",
    destination: "Puerto Natales, Chile",
    images: [
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1000",
    ],
    startDate: "2024-12-05",
    endDate: "2024-12-15",
    host: {
      id: "h4",
      name: "Marcus Outdoor",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200",
    },
    members: [],
    maxMembers: 6,
    tags: ["Trek", "Hiking", "Wilderness"],
    cost: 800,
  },
];
