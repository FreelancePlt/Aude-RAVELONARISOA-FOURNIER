import { Header } from "@/components/layout/Header"
import { ContactFooter } from "@/components/sections/ContactFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnfantsAdosPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Enfants et Adolescents
          </h1>
          
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <p className="lead text-xl text-slate-700 mb-8">
              L'enfance et l'adolescence sont des périodes de grands bouleversements. Parfois, les mots manquent pour exprimer le mal-être. La thérapie offre un espace pour dire, jouer et transformer ce qui pèse.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Pour les enfants</h2>
            <p className="text-slate-700 mb-6">
              Avec les enfants, j'utilise le jeu, le dessin, et la créativité comme supports de communication. C'est leur langage naturel.
            </p>
            <p className="text-slate-700 mb-6">
              Motifs de consultation fréquents :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Troubles du sommeil, anxiété, peurs.</li>
              <li>Difficultés scolaires, agitation, troubles de l'attention.</li>
              <li>Changements familiaux (séparation, deuil, déménagement).</li>
              <li>Colères, agressivité ou repli sur soi.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Pour les adolescents</h2>
            <p className="text-slate-700 mb-6">
              L'adolescence est une traversée, une quête d'identité. Je propose un espace confidentiel (sauf mise en danger) où l'adolescent peut déposer ce qu'il ne peut pas dire ailleurs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Mal-être, dépression, scarifications.</li>
              <li>Troubles du comportement alimentaire.</li>
              <li>Difficultés relationnelles, harcèlement.</li>
              <li>Questionnements identitaires.</li>
            </ul>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">L'implication des parents</h3>
              <p className="text-slate-700 mb-4">
                Pour les enfants, les parents sont étroitement associés au processus thérapeutique. Des points réguliers sont faits ensemble. Pour les adolescents, le cadre est adapté pour respecter leur besoin d'autonomie tout en maintenant le lien familial.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  )
}
