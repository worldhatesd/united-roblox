import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { SearchIcon, UserIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const neueregular = localFont({
  src: "../fonts/Neue Plak Regular.ttf",
});
export const metadata: Metadata = {
  title: "United Roblox",
  description: "United roblox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={neueregular.className}>
          <div className="fixed top-0 left-0 z-50 w-full bg-background/50 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <img
                  className="h-6 w-6"
                  src="https://utfs.io/f/6819230d-46f9-418f-910a-754f565fc742-dg3qll.png"
                  alt="Acme Inc"
                />
                <span className="sr-only">United Roblox</span>
              </Link>
              <nav className="hidden md:flex items-center gap-4 justify-center">
                <Link
                  href="#"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <SearchIcon className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <SignedIn>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <UserIcon className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </SignedIn>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </div>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
