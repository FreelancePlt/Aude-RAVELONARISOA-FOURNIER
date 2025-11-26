import { Header } from "@/components/layout/Header"
import { ContactFooter } from "@/components/sections/ContactFooter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuiJeSuisPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl relative">
                 <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop')", // Professional portrait placeholder
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Qui suis-je ?
              </h1>
              <h2 className="text-xl text-primary font-medium mb-8">
                Aude Ravelonarisoa - Gestalt-Thérapeute à Valenciennes
              </h2>
              
              <div className="prose prose-slate text-slate-700 space-y-6">
                <p>
                  Mon parcours m'a amenée à comprendre que la qualité de notre présence à nous-mêmes et aux autres est la clé d'une vie épanouie. Après plusieurs années d'expérience dans l'accompagnement humain, je me suis formée à la Gestalt-thérapie, une approche qui résonne profondément avec mes valeurs d'authenticité et de bienveillance.
                </p>
                <p>
                  Je suis diplômée de l'École Humaniste de Gestalt (IFAS), une formation rigoureuse de 5 ans qui allie théorie, pratique clinique et un travail thérapeutique personnel approfondi.
                </p>
                <p>
                  Ma pratique est supervisée de manière régulière, ce qui garantit la qualité et l'éthique de mon accompagnement. Je suis également signataire du code de déontologie de la profession.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 pt-4">Mes formations complémentaires</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Psychothérapie Sensori-Motrice (Traitement du Trauma)</li>
                  <li>Accompagnement du couple (École du Couple)</li>
                  <li>Psychopathologie clinique</li>
                </ul>

                <p className="pt-4">
                  Aujourd'hui, je vous accueille dans mon cabinet à Valenciennes pour vous offrir un espace d'écoute et de transformation, où vous pourrez déposer vos fardeaux et cheminer vers plus de sérénité.
                </p>
              </div>

              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">Me contacter</Link>
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
