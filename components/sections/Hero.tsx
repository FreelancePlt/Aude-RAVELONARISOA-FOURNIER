"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
	return (
		<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop')", // Calming abstract/nature
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
			</div>

			<div className="container relative z-10 px-4 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
						Aude RAVELONARISOA-FOURNIER
						<span className="block text-2xl md:text-3xl font-normal text-slate-700 mt-2">
							Gestalt-Thérapeute du lien
						</span>
					</h1>

					<p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-8 font-medium">
						Accompagnement Spécialisé en Psychothérapie Sensori-Motrice pour le Trauma
						à Valenciennes.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8 shadow-lg">
							Prendre RDV en Ligne
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 bg-white/50 hover:bg-white/80 backdrop-blur-sm"
						>
							Découvrir ma pratique
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
