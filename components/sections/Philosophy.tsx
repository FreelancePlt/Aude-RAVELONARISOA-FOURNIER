"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Philosophy() {
	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-12">
					<motion.div
						className="flex-1"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
							Ma Démarche : La Gestalt-Thérapie du Lien
						</h2>
						<p className="text-lg text-slate-700 mb-6 leading-relaxed">
							La Gestalt-thérapie est une approche humaniste qui met l&apos;accent sur
							la conscience de ce qui se passe dans l&apos;instant présent, au niveau
							corporel, émotionnel et mental.
						</p>
						<p className="text-lg text-slate-700 mb-8 leading-relaxed">
							En tant que thérapeute du lien, je vous accompagne pour explorer comment
							vous entrez en relation avec vous-même et avec les autres, afin de
							dénouer les blocages et retrouver votre liberté d&apos;être.
						</p>
						<Button asChild variant="outline" className="text-lg px-8">
							<Link href="/psychotherapie">En savoir plus sur mon approche</Link>
						</Button>
					</motion.div>

					<motion.div
						className="flex-1 w-full"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
							<div
								className="absolute inset-0 bg-slate-200"
								style={{
									backgroundImage:
										"url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop')", // Calming stones/balance
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
