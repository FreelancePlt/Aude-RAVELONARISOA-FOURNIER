import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
	return (
		<main className="min-h-screen bg-background font-sans antialiased">
			<Header />
			<Hero />
			<Specialties />
			<Philosophy />
			<Testimonials />
			<ContactFooter />
		</main>
	);
}
