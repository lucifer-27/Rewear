import Link from 'next/link'
import { Mountain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 font-bold" prefetch={false}>
              <Mountain className="h-6 w-6" />
              <span className="text-lg">ReWear</span>
            </Link>
            <p className="text-sm text-muted-foreground">A community clothing exchange platform.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/browse" className="text-sm text-muted-foreground hover:text-foreground">Browse Items</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ReWear. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
