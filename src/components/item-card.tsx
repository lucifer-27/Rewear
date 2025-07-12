import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Item } from '@/lib/types'
import { Tag } from 'lucide-react'

interface ItemCardProps {
  item: Item;
}

function getImageHint(category: string) {
    switch (category) {
        case 'Outerwear':
            return 'denim jacket';
        case 'Dresses':
            return 'summer dress';
        case 'Shoes':
            return 'leather boots';
        case 'Tops':
            return 'striped shirt';
        case 'Bottoms':
            return 'skinny jeans';
        case 'Accessories':
            return 'silk scarf';
        default:
            return 'fashion clothing';
    }
}

export function ItemCard({ item }: ItemCardProps) {
  const imageHint = getImageHint(item.category);
  // Ensure item.images is an array and has at least one image.
  const imageUrl = (item.images && item.images.length > 0) ? item.images[0] : 'https://placehold.co/600x800.png';

  return (
    <Link href={`/item/${item.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4]">
            <Image
              src={imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
              unoptimized // Add this if you are using external image URLs from services like Unsplash
            />
          </div>
          <div className="space-y-2 p-4">
            <h3 className="truncate font-semibold text-lg">{item.title}</h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>{item.brand}</p>
              <Badge variant="secondary">{item.condition}</Badge>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Tag className="h-4 w-4 text-primary" />
              <p className="font-bold text-primary">{item.points.toLocaleString()} Points</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
