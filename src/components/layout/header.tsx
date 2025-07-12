import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Mountain } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold" prefetch={false}>
          <Mountain className="h-6 w-6" />
          <span className="text-lg">ReWear</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link href="/browse" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Browse
          </Link>
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About Us
          </Link>
          <Link href="/add-item" className="text-foreground/60 transition-colors hover:text-foreground/80">
            List an Item
          </Link>
          <Link href="/dashboard" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Dashboard
          </Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/signup">Sign Up</Link>
            </Button>
        </div>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <nav className="mt-8 grid gap-6 text-lg font-medium">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                        <Mountain className="h-6 w-6" />
                        <span>ReWear</span>
                    </Link>
                    <Link href="/browse" className="text-muted-foreground hover:text-foreground">Browse</Link>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
                    <Link href="/add-item" className="text-muted-foreground hover:text-foreground">List an Item</Link>
                    <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>
                    <div className="flex flex-col gap-4 pt-4">
                        <Button variant="ghost" asChild><Link href="/login">Login</Link></Button>
                        <Button asChild><Link href="/signup">Sign Up</Link></Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
