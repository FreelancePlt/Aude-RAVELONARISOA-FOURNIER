"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	const navItems = [
		{ name: "Accueil", href: "/" },
		{ name: "La Psychothérapie", href: "#" },
		{ name: "Qui Je Suis", href: "#" },
		{ name: "Contact", href: "#" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 flex h-16 items-center justify-between">
				<div className="flex items-center gap-2 font-bold text-lg md:text-xl">
					<Link href="/">Aude RAVELONARISOA-FOURNIER</Link>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							{item.name}
						</Link>
					))}
					<Button>Prendre RDV en Ligne</Button>
				</nav>

				{/* Mobile Nav */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetTitle className="sr-only">Menu de navigation</SheetTitle>
						<nav className="flex flex-col gap-4 mt-8">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-lg font-medium"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<Button className="w-full mt-4">Prendre RDV en Ligne</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
