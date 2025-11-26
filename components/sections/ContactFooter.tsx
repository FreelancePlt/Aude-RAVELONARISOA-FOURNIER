"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactFooter() {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Fonctionnalité active sur le site final.");
	};

	return (
		<footer className="bg-slate-900 text-slate-50 pt-20 pb-10">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 gap-12 mb-16">
					{/* Contact Form */}
					<div>
						<h2 className="text-3xl font-bold mb-6">
							Prêt(e) à faire le premier pas ?
						</h2>
						<p className="text-slate-400 mb-8">
							N&apos;hésitez pas à me contacter pour toute question ou pour prendre
							rendez-vous.
						</p>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">Prénom</Label>
									<Input
										id="firstName"
										placeholder="Votre prénom"
										className="bg-slate-800 border-slate-700 text-slate-100"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Nom</Label>
									<Input
										id="lastName"
										placeholder="Votre nom"
										className="bg-slate-800 border-slate-700 text-slate-100"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="votre@email.com"
									className="bg-slate-800 border-slate-700 text-slate-100"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="Comment puis-je vous aider ?"
									className="bg-slate-800 border-slate-700 text-slate-100 min-h-[120px]"
								/>
							</div>
							<Button type="submit" className="w-full" disabled>
								Envoyer (Désactivé)
							</Button>
						</form>
					</div>

					{/* Contact Info & Map */}
					<div className="space-y-8">
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Informations de Contact</h3>
							<div className="flex items-start gap-3 text-slate-300">
								<MapPin className="w-5 h-5 mt-1 text-primary" />
								<p>
									123 Rue de la Paix
									<br />
									59300 Valenciennes
								</p>
							</div>
							<div className="flex items-center gap-3 text-slate-300">
								<Phone className="w-5 h-5 text-primary" />
								<p>06 12 34 56 78</p>
							</div>
							<div className="flex items-center gap-3 text-slate-300">
								<Mail className="w-5 h-5 text-primary" />
								<p>contact@aude-ravelonarisoa.fr</p>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
							<p className="text-slate-500">Carte Google Maps</p>
						</div>
					</div>
				</div>

				<div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
					<p>
						&copy; {new Date().getFullYear()} Aude Ravelonarisoa. Tous droits
						réservés.
					</p>
				</div>
			</div>
		</footer>
	);
}
