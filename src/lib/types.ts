import type { Timestamp } from "firebase/firestore";

export interface Item {
  id: string;
  title: string;
  category: 'Tops' | 'Bottoms' | 'Dresses' | 'Outerwear' | 'Accessories' | 'Shoes';
  condition: 'New with tags' | 'Like new' | 'Good' | 'Fair';
  brand?: string;
  images: string[];
  uploaderId: string;
  uploaderName: string;
  points: number;
  originalPrice?: number;
  valuationStatus: 'auto' | 'manual' | 'unvalued';
  description: string;
  createdAt: Date | Timestamp;
  status: 'available' | 'swapped';
}

export interface UserProfile {
    uid: string;
    name: string;
    email: string;
    points: number;
    address: string;
}

export interface SwapProposal {
    proposerId: string;
    proposerItemId: string;
    receiverId: string;
    receiverItemId: string;
}

export interface Swap extends SwapProposal {
    id: string;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: Date | Timestamp;
    proposerItem?: Item;
    receiverItem?: Item;
}
