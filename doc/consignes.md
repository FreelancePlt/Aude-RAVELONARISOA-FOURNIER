**Rôle de l'IA :** En tant qu'expert en développement web avec Next.js, Tailwind CSS, shadcn/ui et intégration d'animations, tu vas générer le code d'une page d'accueil (prototype) pour une psychothérapeute.

**Contexte Client :** Le client est Aude Ravelonarisoa, Gestalt-Thérapeute du lien à Valenciennes. Son site actuel est daté (template WebSelf), peu lisible, et ne met pas en valeur ses spécialités. Elle recherche un site moderne, clair, et rassurant, qui met en évidence ses accompagnements spécifiques : Couple, Ados/Enfants, et Trauma (Psychothérapie Sensori-Motrice).

**Objectif du Prototype :** Créer une maquette avancée et fonctionnelle de la page d'accueil. Elle doit être visuellement impressionnante et transformer la perception de son activité, tout en étant clairement un prototype (pas un site 100% fini) pour justifier un devis ultérieur.

**Stack Technique :**

- **Framework :** Next.js (version LTS, App Router).
- **Styling :** Tailwind CSS.
- **Composants :** shadcn/ui.
- **Animations :** Framer Motion pour des animations subtiles et élégantes.

**Contenu :**
Je te fournirai le contenu textuel détaillé pour chaque section (titres, accroches, descriptions courtes des spécialités) via un fichier `content.md`. Pour les blocs de texte longs (ex: "Qui je suis"), utilise du **Lorem Ipsum** ou des textes génériques courts pour simuler la présence de contenu sans le finaliser.

**Instructions Détaillées de Design et Structure :**

1. **Palette de Couleurs & Ambiance Générale :**

   - **Couleurs :** Prédominance de blanc cassé, gris très clair. Accents de bleu doux/ciel ou sarcelle, et de beige/vert d'eau très clair. Éviter les fonds sombres ou couleurs agressives.
   - **Police :** Utiliser une ou deux polices sans-serif modernes et lisibles (ex: Inter, Raleway, Lato) pour le corps de texte et les titres.
   - **Ambiance :** Calme, apaisante, professionnelle, lumineuse, moderne, inspirant confiance et sérénité.

2. **Header (Fixe en haut) :**

   - Logo minimaliste "Aude Ravelonarisoa - Gestalt-Thérapeute".
   - Menu de navigation clair : `Accueil`, `La Psychothérapie`, `Qui Je Suis`, `Contact`. (Les liens ne mèneront qu'à des pages stubs pour l'instant).
   - Bouton principal (CTA) : **"Prendre RDV en Ligne"** (Utiliser un composant `<Button>` de shadcn).

3. **Hero Section (Première vue, full-width) :**

   - **Image :** Image de fond **lumineuse et apaisante** (ex: intérieur de cabinet moderne, paysage doux, texture abstraite lumineuse). Éviter les photos mélancoliques ou trop chargées.
   - **Titre Principal (H1) :** "Aude Ravelonarisoa - Gestalt-Thérapeute du lien" (Basé sur son nom et activité).
   - **Sous-titre Accrocheur :** "Accompagnement Spécialisé en Psychothérapie Sensori-Motrice pour le Trauma à Valenciennes." (Ciblage clé)
   - **CTA Secondaire :** Un bouton "Découvrir ma pratique" qui ancre vers la section "La Psychothérapie".
   - **Animation :** Un `fade-in` subtil ou un léger _scroll-reveal_ pour le texte principal.

4. **Section "Mes Spécialités" (ou "Pour Qui ?") :**

   - Titre : "Mes Spécialités d'Accompagnement" ou "Un Soutien Adapté à Chaque Parcours".
   - **Trois Cartes distinctes (shadcn/ui Card) :**
     - **Carte 1 : "Accompagnement du Couple"**
       - Icône pertinente.
       - Titre.
       - Courte description (2-3 lignes).
     - **Carte 2 : "Enfants et Adolescents"**
       - Icône pertinente.
       - Titre.
       - Courte description (2-3 lignes).
     - **Carte 3 : "Gestion du Trauma (Psychothérapie Sensori-Motrice)"**
       - Icône pertinente (cervelle, spirale, ancrage, etc.).
       - Titre.
       - Courte description (2-3 lignes).
   - **Animations :** Un léger effet de survol (`hover`) ou un `fade-in` décalé pour les cartes.

5. **Section "Ma Démarche / Philosophie" (Courte) :**

   - Un titre accrocheur et une ou deux phrases clés sur l'approche Gestalt et la psychothérapie du lien.
   - **Ne pas reproduire de longs blocs de texte.** Utiliser un texte d'accroche court et un bouton "Lire la suite" vers une page stub.

6. **Section "Témoignages" (Optionnelle, mais valorisante) :**

   - Un simple bloc `blockquote` avec un texte de témoignage fictif et un nom. Style épuré.

7. **Section "Contact Rapide" / Footer :**
   - Titre : "Prêt(e) à faire le premier pas ?" ou "Contactez-moi".
   - **Formulaire de Contact (shadcn/ui Form) :** `Nom`, `Email`, `Message`.
     - Le bouton "Envoyer" doit être présent mais **désactivé** (`disabled`) ou afficher un `alert('Fonctionnalité active sur le site final.')` au clic.
   - **Informations de Contact :** Numéro de téléphone, email, adresse du cabinet.
   - **Map (simple placeholder image)** ou `iframe` Google Maps simple.
   - Footer standard avec mention de droits d'auteur.

**Fonctionnalités & Limitations du Prototype (pour justifier le devis) :**

- **Une seule page :** Seule la page d'accueil (`page.tsx` ou `index.tsx`) doit être fonctionnelle et stylisée. Les autres liens de navigation mèneront à des pages vides ou des messages "Page en construction".
- **Images :** Utiliser des images génériques de haute qualité (Pexels, Unsplash) pour l'esthétique, mais **ne pas chercher à les rendre 100% uniques ou spécifiques au client**. Indiquer dans le code ou les commentaires que les images finales seront personnalisées.
- **Formulaire :** Le formulaire de contact sera visuellement présent mais **non fonctionnel côté backend**.
- **Contenu :** Privilégier la structure visuelle. Le contenu détaillé viendra après validation.

**Livrables Attendus :**

- Le code complet du projet Next.js (`pages/index.tsx` ou `app/page.tsx` et les composants nécessaires).
- Les styles Tailwind CSS correctement appliqués.
- L'intégration de shadcn/ui.
- L'utilisation d'une librairie d'animation (Framer Motion) pour des effets subtils.
- La structure de base pour un projet Next.js bien organisé.

```http://googleusercontent.com/image_generation_content/0

```
