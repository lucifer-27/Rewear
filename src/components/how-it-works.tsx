import { Gift, Repeat, Upload } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Simple Way to Refresh Your Closet</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to exchange your unused clothes for points and discover new-to-you treasures.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Upload className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">1. List Your Items</h3>
            <p className="text-sm text-muted-foreground">
              Photograph your clothes, add details, and let our AI suggest a fair point value.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Repeat className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">2. Earn & Swap</h3>
            <p className="text-sm text-muted-foreground">
              Earn points for listing items and successful swaps. Use points to redeem items you love.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Gift className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">3. Get New Styles</h3>
            <p className="text-sm text-muted-foreground">
              Receive your new items and enjoy a refreshed, sustainable wardrobe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
