import Image from 'next/image';
import { dummyItems } from '@/lib/dummy-data';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SmartValuationBadge } from '@/components/smart-valuation-badge';
import { Heart, Repeat, ShoppingBag, Tag, User } from 'lucide-react';

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

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const item = dummyItems.find(i => i.id === params.id);

  if (!item) {
    notFound();
  }

  const imageHint = getImageHint(item.category);

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
          {/* Add gallery thumbnails here if more than one image */}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold font-headline">{item.title}</h1>
            <p className="text-xl text-muted-foreground mt-1">{item.brand}</p>
          </div>

          {item.valuationStatus === 'auto' && item.originalPrice && (
            <SmartValuationBadge originalPrice={item.originalPrice} points={item.points} />
          )}

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Tag className="w-6 h-6 text-primary"/>
                <span className="text-2xl font-bold text-primary">{item.points.toLocaleString()} Points</span>
            </div>
          </div>
          
          <Separator />

          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-foreground">Category</p>
              <p className="text-muted-foreground">{item.category}</p>
            </div>
             <div>
              <p className="font-semibold text-foreground">Condition</p>
              <p className="text-muted-foreground">{item.condition}</p>
            </div>
          </div>

          <Card className="bg-background/50">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
               <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?u=${item.uploaderName}`} />
                <AvatarFallback>{item.uploaderName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Listed by</CardTitle>
                <p className="text-sm text-muted-foreground">{item.uploaderName}</p>
              </div>
            </CardHeader>
          </Card>
          
          <div className="flex flex-col gap-2">
            <Button size="lg">
              <ShoppingBag className="mr-2 h-4 w-4" /> Redeem with Points
            </Button>
            <Button size="lg" variant="secondary">
              <Repeat className="mr-2 h-4 w-4" /> Propose a Swap
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
