"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Fonctionnalité active sur le site final.")
  }

  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            Contact & Accès
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Comment puis-je vous aider ?" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full text-lg h-12" disabled>
                  Envoyer ma demande
                </Button>
              </form>
            </div>

            {/* Infos Pratiques */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Informations Pratiques</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Adresse du cabinet</h3>
                      <p className="text-slate-600">
                        123 Rue de la Paix<br />
                        59300 Valenciennes
                      </p>
                      <p className="text-sm text-slate-500 mt-1">Parking gratuit à proximité.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Téléphone</h3>
                      <p className="text-slate-600">06 12 34 56 78</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-slate-600">contact@aude-ravelonarisoa.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Horaires</h3>
                      <p className="text-slate-600">
                        Lundi - Vendredi : 9h00 - 19h00<br />
                        Samedi : 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden relative">
                 <div 
                  className="absolute inset-0 grayscale opacity-70"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')", // Map placeholder
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative z-10 bg-white/80 px-4 py-2 rounded-full font-medium shadow-sm backdrop-blur-sm">
                  Carte Google Maps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
