import type React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { User, LucideSearch, Menu } from "lucide-react";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import "./globals.css";
import { Search } from "@/components/ui/search";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CartProvider } from "@/contexts/cart-context";
import { CartButton } from "@/components/ui/cart-button";
import { NavigationProgress } from "@/components/ui/progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zakka Shop - Beautiful Everyday Items",
  description:
    "Discover unique and beautiful zakka items for your home and everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavigationProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                      <MobileNav />
                    </SheetContent>
                  </Sheet>
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-xl">ZAKKA</span>
                  </Link>
                  <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link
                      href="/products"
                      className="transition-colors hover:text-foreground/80"
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products?category=kitchen"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Kitchen
                    </Link>
                    <Link
                      href="/products?category=home-decor"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Home Decor
                    </Link>
                    <Link
                      href="/products?category=stationery"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Stationery
                    </Link>
                    <Link
                      href="/about"
                      className="transition-colors hover:text-foreground/80"
                    >
                      About
                    </Link>
                  </nav>
                  <div className="flex-1" />
                  <div className="hidden md:flex items-center">
                    <div className="relative mr-4 w-full max-w-sm">
                      <Search />
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Link href="/search">
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <LucideSearch className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </Link>
                    <Link href="/account">
                      <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                      </Button>
                    </Link>
                    <CartButton />
                    <ThemeToggle />
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:h-24">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                    <Link href="/" className="flex items-center space-x-2">
                      <span className="font-bold">ZAKKA</span>
                    </Link>
                    <nav className="flex gap-4 md:gap-6 text-sm">
                      <Link
                        href="/about"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/terms"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Terms
                      </Link>
                      <Link
                        href="/privacy"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Privacy
                      </Link>
                    </nav>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Zakka Shop. All rights
                    reserved.
                  </p>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">ZAKKA</span>
      </Link>
      <nav className="flex flex-col space-y-2">
        <Link
          href="/products"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          All Products
        </Link>
        <Link
          href="/products?category=kitchen"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          Kitchen
        </Link>
        <Link
          href="/products?category=home-decor"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          Home Decor
        </Link>
        <Link
          href="/products?category=stationery"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          Stationery
        </Link>
        <Link
          href="/about"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
