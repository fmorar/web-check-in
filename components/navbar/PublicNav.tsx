"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
// import LanguageSwitcher from '@/components/LanguageSwitcher';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Products",
    items: [
      { title: "Product 1", href: "/products/1" },
      { title: "Product 2", href: "/products/2" },
      { title: "Product 3", href: "/products/3" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-black backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="container flex h-14 items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <img width="120px" src='/img/logo-dark.png' alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white text-black">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <DropdownMenuItem key={subItem.title} asChild>
                              <Link href={subItem.href}>
                                {subItem.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </ul>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile & Other Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/signin/signup">
            <Button className="hidden sm:inline-flex">Sign Up</Button>
          </Link>
          <Link href="/dashboard/signin/password_signin">
            <Button variant="outline" className="hidden sm:inline-flex bg-white text-black border-black">
              Log In
            </Button>
          </Link>
          {/* <LanguageSwitcher /> */}

          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <>
                        <h4 className="font-medium">{item.title}</h4>
                        <ul className="mt-2 space-y-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="text-black hover:text-primary"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={item.href} className="font-medium hover:text-primary">
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// ListItem Component for Reusability
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, href }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} ref={ref} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Utility function for trigger styles
const navigationMenuTriggerStyle = () => {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  );
};