import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aude Ravelonarisoa - Gestalt-Thérapeute",
	description:
		"Psychothérapie Sensori-Motrice et Gestalt-Thérapie à Valenciennes.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
