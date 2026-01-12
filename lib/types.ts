export interface User {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface Trip {
  id: string;
  title: string;
  description: string;
  destination: string;
  images: string[];
  startDate: string; // ISO date
  endDate: string;
  host: User;
  members: User[];
  maxMembers: number;
  tags: string[];
  cost?: number;
}
