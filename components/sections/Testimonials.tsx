"use client";

import { Quote } from "lucide-react";

export function Testimonials() {
	return (
		<section className="py-20 bg-slate-50">
			<div className="container px-4 mx-auto text-center">
				<div className="max-w-3xl mx-auto">
					<Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
					<blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
						&quot;Une écoute bienveillante et un accompagnement qui m&apos;a permis de
						me reconnecter à mes émotions. Je me sens plus apaisée et confiante.&quot;
					</blockquote>
					<cite className="text-lg text-slate-600 not-italic font-medium">
						— Sophie D., Patiente
					</cite>
				</div>
			</div>
		</section>
	);
}
