import { Header } from "@/components/layout/Header"
import { ContactFooter } from "@/components/sections/ContactFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CouplePage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Thérapie de Couple
          </h1>
          
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <p className="lead text-xl text-slate-700 mb-8">
              Le couple est une entité vivante qui traverse des cycles, des crises et des transformations. La thérapie de couple offre un espace tiers pour rétablir le dialogue et comprendre la dynamique relationnelle.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Pourquoi consulter en couple ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Communication difficile ou rompue.</li>
              <li>Conflits répétés, incompréhensions.</li>
              <li>Éloignement affectif ou sexuel.</li>
              <li>Traversée d'une épreuve (infidélité, deuil, maladie, chômage).</li>
              <li>Questionnement sur l'avenir de la relation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Mon approche</h2>
            <p className="text-slate-700 mb-6">
              En thérapie de couple, je ne suis ni juge ni arbitre. Je suis au service de la relation. Je vous aide à :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Sortir des reproches pour exprimer vos besoins et vos ressentis.</li>
              <li>Comprendre les mécanismes qui se jouent entre vous (la "danse" du couple).</li>
              <li>Identifier les blessures de chacun qui résonnent dans la relation.</li>
              <li>Retrouver une écoute mutuelle et bienveillante.</li>
            </ul>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Le cadre</h3>
              <p className="text-slate-700 mb-4">
                Les séances durent généralement 1h15. La fréquence est définie ensemble, souvent tous les 15 jours.
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
