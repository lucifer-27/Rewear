'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Mountain } from 'lucide-react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Header() {
  const { user, logout, loading } = useAuth()
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

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
          {user && (
            <Link href="/dashboard" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Dashboard
            </Link>
          )}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {loading ? (
            <div className="h-10 w-24 animate-pulse rounded-md bg-muted" />
          ) : user ? (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                    <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/dashboard')}>Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                  <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
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
                    {user && <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>}
                    <div className="flex flex-col gap-4 pt-4">
                      {user ? (
                        <Button onClick={handleLogout}>Logout</Button>
                      ) : (
                        <>
                          <Button variant="ghost" asChild><Link href="/login">Login</Link></Button>
                          <Button asChild><Link href="/signup">Sign Up</Link></Button>
                        </>
                      )}
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
