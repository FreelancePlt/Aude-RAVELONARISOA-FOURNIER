import { Header } from "@/components/layout/Header"
import { ContactFooter } from "@/components/sections/ContactFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TraumaPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Gestion du Trauma
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-medium mb-12 text-center">
            Psychothérapie Sensori-Motrice
          </h2>
          
          <div className="prose prose-slate lg:prose-lg mx-auto">
            <p className="lead text-xl text-slate-700 mb-8">
              Le traumatisme n'est pas seulement dans l'histoire qui s'est passée, il est aussi inscrit dans le corps et le système nerveux. La parole seule ne suffit pas toujours à guérir les blessures profondes.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Qu'est-ce que le trauma ?</h2>
            <p className="text-slate-700 mb-6">
              Un événement traumatique est une expérience qui a submergé nos capacités d'adaptation. Cela peut être un événement unique (accident, agression) ou des traumatismes répétés (négligence, maltraitance dans l'enfance).
            </p>
            <p className="text-slate-700 mb-6">
              Les symptômes peuvent persister des années après : hypervigilance, anxiété, flashbacks, dissociation, douleurs chroniques, difficultés émotionnelles.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">L'approche Sensori-Motrice</h2>
            <p className="text-slate-700 mb-6">
              La Psychothérapie Sensori-Motrice est une approche psychocorporelle qui intègre le corps dans le processus de guérison. Elle permet de :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Réguler le système nerveux (sortir de l'état d'alerte ou de figement).</li>
              <li>Explorer les mémoires corporelles en sécurité.</li>
              <li>Restaurer les mouvements de défense inachevés.</li>
              <li>Retrouver un sentiment de sécurité intérieure.</li>
            </ul>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Un chemin vers la résilience</h3>
              <p className="text-slate-700 mb-4">
                Ce travail se fait en douceur, à votre rythme, sans nécessairement avoir besoin de raconter tous les détails de l'événement traumatique. L'objectif est de vous permettre de vivre pleinement votre vie au présent, libéré(e) du poids du passé.
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
