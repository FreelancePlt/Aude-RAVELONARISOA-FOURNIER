"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Heart, Users, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const specialties = [
	{
		title: "Accompagnement du Couple",
		description:
			"Restaurer le lien, améliorer la communication et traverser les crises ensemble.",
		icon: Heart,
	},
	{
		title: "Enfants et Adolescents",
		description:
			"Un espace sécurisant pour exprimer ses émotions et surmonter les difficultés scolaires ou relationnelles.",
		icon: Users,
	},
	{
		title: "Gestion du Trauma",
		description:
			"Approche psychocorporelle (Psychothérapie Sensori-Motrice) pour guérir les blessures profondes.",
		icon: BrainCircuit,
	},
];

export function Specialties() {
	return (
		<section className="py-20 bg-slate-50">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
						Mes Spécialités d&apos;Accompagnement
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Un soutien adapté à chaque parcours de vie, pour vous aider à retrouver
						équilibre et sérénité.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{specialties.map((specialty, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.5 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
								<CardHeader>
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
										<specialty.icon className="w-6 h-6" />
									</div>
									<CardTitle className="text-xl mb-2">{specialty.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base">
										{specialty.description}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
