
import { ItemCard } from "@/components/item-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { dummyItems } from "@/lib/dummy-data";
import { Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function BrowsePage() {
  return (
    <div className="grid md:grid-cols-[204px_1fr]">
      <aside className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] border-r">
        <ScrollArea className="h-full py-8 transition-colors duration-300 hover:bg-muted/30">
          <div className="px-6 space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2"><Filter className="w-5 h-5" /> Filters</h2>
            
            <Accordion type="multiple" defaultValue={['category', 'points']} className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger className="text-base">Category</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Shoes'].map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category.toLowerCase()} />
                        <Label htmlFor={category.toLowerCase()} className="font-normal">{category}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="points">
                <AccordionTrigger className="text-base">Points Range</AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Slider defaultValue={[5000]} max={10000} step={100} />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0</span>
                    <span>10,000+</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="condition">
                <AccordionTrigger className="text-base">Condition</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2 pt-2">
                        {['New with tags', 'Like new', 'Good', 'Fair'].map(condition => (
                          <div key={condition} className="flex items-center space-x-2">
                            <Checkbox id={condition.replace(/\s+/g, '-').toLowerCase()} />
                            <Label htmlFor={condition.replace(/\s+/g, '-').toLowerCase()} className="font-normal">{condition}</Label>
                          </div>
                        ))}
                    </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </aside>

      <div className="transition-colors duration-300 hover:bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Discover Pre-Loved Styles</h1>
                <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Browse our collection of clothes ready for a new home. Filter by your preferences to find the perfect piece.
                </p>
            </div>

            <main>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{dummyItems.length} items found</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="points-asc">Points: Low to High</SelectItem>
                    <SelectItem value="points-desc">Points: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {dummyItems.map(item => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </main>
        </div>
      </div>
    </div>
  );
}
