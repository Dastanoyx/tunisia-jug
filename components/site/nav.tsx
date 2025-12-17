"use client";

import Link from "next/link";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/code-of-conduct", label: "Code of Conduct" },
    { href: "/contact", label: "Contact" },
];

export function SiteNav() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Brand */}
                <Link href="/" className="hover:opacity-90">
                    <Brand tone="onDark" />
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                            {l.label}
                        </Link>
                    ))}

                    <Button
                        asChild
                        size="sm"
                        className="rounded-xl bg-white/10 text-white hover:bg-white/20"
                    >
                        <Link href="/join">Join</Link>
                    </Button>
                </nav>

                {/* Mobile navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Open menu"
                                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        {/* Mobile menu panel */}
                        <SheetContent
                            side="right"
                            className="
                                z-50 w-80
                                bg-slate-900 text-white
                                border-l border-white/10
                                data-[state=open]:animate-in
                                data-[state=closed]:animate-out
                            "
                        >
                            <div className="mb-6">
                                <Brand tone="onDark" />
                            </div>

                            <nav className="flex flex-col gap-2">
                                {links.map((l) => (
                                    <Button
                                        key={l.href}
                                        asChild
                                        variant="ghost"
                                        className="justify-start text-white/80 hover:bg-white/10 hover:text-white"
                                    >
                                        <Link href={l.href}>{l.label}</Link>
                                    </Button>
                                ))}

                                <Button asChild className="mt-4 rounded-xl">
                                    <Link href="/join">Join the community</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
