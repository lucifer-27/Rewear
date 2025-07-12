import type { Item } from './types';

export const dummyItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    category: 'Outerwear',
    condition: 'Good',
    brand: "Levi's",
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/601x801.png'],
    uploaderName: 'Jane Doe',
    points: 1500,
    originalPrice: 3000,
    valuationStatus: 'auto',
    description: "A classic vintage denim jacket from the 90s. Perfectly worn in, with a timeless style that never fades. Features button-front closure, two chest pockets, and adjustable waist tabs."
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    category: 'Dresses',
    condition: 'Like new',
    brand: 'Zara',
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/602x802.png'],
    uploaderName: 'Sarah Smith',
    points: 1200,
    originalPrice: 2500,
    valuationStatus: 'auto',
    description: "A beautiful floral print summer dress, perfect for warm weather. Lightweight fabric with a flattering A-line silhouette. Worn only once."
  },
  {
    id: '3',
    title: 'Leather Ankle Boots',
    category: 'Shoes',
    condition: 'Good',
    brand: 'Dr. Martens',
    images: ['https://placehold.co/600x800.png'],
    uploaderName: 'Mike Johnson',
    points: 2500,
    description: "Classic leather ankle boots with a sturdy sole. Some minor scuffs but in great overall condition with plenty of life left."
  },
  {
    id: '4',
    title: 'Striped Cotton T-Shirt',
    category: 'Tops',
    condition: 'New with tags',
    brand: 'Uniqlo',
    images: ['https://placehold.co/600x800.png'],
    uploaderName: 'Emily Chen',
    points: 500,
    originalPrice: 1000,
    valuationStatus: 'manual',
    description: "A brand new, unworn striped t-shirt made from 100% soft cotton. A versatile wardrobe staple."
  },
  {
    id: '5',
    title: 'High-Waisted Skinny Jeans',
    category: 'Bottoms',
    condition: 'Good',
    brand: 'Topshop',
    images: ['https://placehold.co/600x800.png'],
    uploaderName: 'Jane Doe',
    points: 900,
    description: "Comfortable and stylish high-waisted skinny jeans in a dark wash. Minimal signs of wear."
  },
  {
    id: '6',
    title: 'Silk Scarf',
    category: 'Accessories',
    condition: 'Like new',
    brand: 'Hermès',
    images: ['https://placehold.co/600x800.png'],
    uploaderName: 'Olivia Davis',
    points: 5000,
    originalPrice: 10000,
    valuationStatus: 'auto',
    description: "A luxurious 100% silk scarf with a vibrant, intricate pattern. Can be worn in multiple ways. In pristine condition."
  },
];
