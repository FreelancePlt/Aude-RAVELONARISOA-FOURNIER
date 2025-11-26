import { Header } from "@/components/layout/Header"
import { ContactFooter } from "@/components/sections/ContactFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PsychotherapiePage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            La Psychothérapie Gestaltiste
          </h1>
          
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <p className="lead text-xl text-slate-700 mb-8">
              La Gestalt-thérapie est une psychothérapie humaniste, existentielle et relationnelle. Elle s'intéresse au processus en cours, à la manière dont nous entrons en contact avec notre environnement et avec les autres.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Une approche du "Ici et Maintenant"</h2>
            <p className="text-slate-700 mb-6">
              Plutôt que de se focaliser uniquement sur le "pourquoi" de nos souffrances (les causes passées), la Gestalt s'intéresse au "comment" : comment je vis cette situation aujourd'hui ? Comment je me sens dans mon corps ? Quelles émotions émergent ?
            </p>
            <p className="text-slate-700 mb-6">
              En mettant de la conscience sur ce qui se joue dans l'instant présent, nous pouvons identifier nos mécanismes de répétition, nos blocages, et expérimenter de nouvelles manières d'être au monde.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">La thérapie du lien</h2>
            <p className="text-slate-700 mb-6">
              Nous nous construisons dans la relation. C'est souvent dans le lien que nous avons été blessés, et c'est dans le lien que nous pouvons guérir. La relation thérapeutique offre un espace sécurisant pour rejouer et réparer ces expériences relationnelles.
            </p>
            <p className="text-slate-700 mb-6">
              Je vous accompagne avec bienveillance, sans jugement, en m'impliquant dans la relation pour vous aider à :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Mieux comprendre vos émotions et vos besoins.</li>
              <li>Sortir des schémas répétitifs.</li>
              <li>Retrouver votre liberté de choix et votre créativité.</li>
              <li>Améliorer vos relations avec les autres.</li>
            </ul>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pour qui ?</h3>
              <p className="text-slate-700 mb-4">
                Cette approche est bénéfique pour toute personne traversant une période difficile (deuil, séparation, burn-out), souffrant d'anxiété, de dépression, ou simplement en quête d'une meilleure connaissance de soi.
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
