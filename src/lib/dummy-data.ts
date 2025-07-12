import type { Item } from './types';

// This is dummy data for demonstration. 
// To add your own images, you can replace the placeholder URLs below
// with direct links to your own images hosted online.
// For example, you could upload images to a service like Imgur or Cloudinary
// and paste the links here.

export const dummyItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    category: 'Outerwear',
    condition: 'Good',
    brand: "Levi's",
    // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1543087903-1ac237e2e54d?q=80&w=1887'],
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
    // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887'],
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
     // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1608256246200-53e6357b1d2a?q=80&w=1887'],
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
    // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1887'],
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
    // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1604176354204-926873782855?q=80&w=1887'],
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
    // Replace this with your image URL
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1935'],
    uploaderName: 'Olivia Davis',
    points: 5000,
    originalPrice: 10000,
    valuationStatus: 'auto',
    description: "A luxurious 100% silk scarf with a vibrant, intricate pattern. Can be worn in multiple ways. In pristine condition."
  },
];
