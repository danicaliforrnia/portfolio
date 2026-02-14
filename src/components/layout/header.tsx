"use client";

import * as React from "react";
import Link from "next/link";
import {siteContent} from "@/data/content";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Image from "next/image";

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo/logo.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="h-auto w-24"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {siteContent.header.nav.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" asChild>
                        <a href={siteContent.hero.cvHref} target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </Button>
                </div>

                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6"/>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8">
                                {siteContent.header.nav.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg font-medium hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Button variant="outline" asChild className="mt-4">
                                    <a href={siteContent.hero.cvHref} target="_blank" rel="noopener noreferrer">
                                        Download CV
                                    </a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
