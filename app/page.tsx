"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useCMS } from "@/components/cms/CMSProvider";
import EditableText from "@/components/cms/EditableText";
import EditableImage from "@/components/cms/EditableImage";
import EditableButton from "@/components/cms/EditableButton";
import LightboxProvider, { useLightbox } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Pen, Fish, Pizza, Shell, Star, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   HERO — Plein écran avec titre en bas
   ═══════════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();

  return (
    <section className="relative h-screen overflow-hidden bg-[var(--color-bg-dark)]">
      <EditableImage contentKey="home.hero.bg"
        defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772840515/mer-et-mozza/hero.jpg"
        alt="Mer et Mozza" fill sizes="100vw" priority
        className="object-cover opacity-50" hideButton inputRef={ref} />
      {isAdmin && (
        <button onClick={() => ref.current?.click()}
          className="absolute top-20 right-6 z-[50] bg-white/80 p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-[var(--color-bg-dark)]/30" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-14">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <EditableText contentKey="home.hero.badge" defaultValue="Food truck — Pizançon" tag="p"
              className="text-[var(--color-terra)] text-[10px] tracking-[0.5em] uppercase mb-4" />
            <EditableText contentKey="home.hero.title" defaultValue="Mer et Mozza" tag="h1"
              className="font-display text-7xl md:text-[8rem] text-white leading-[0.85] mb-4" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <EditableText contentKey="home.hero.subtitle"
              defaultValue="Fruits de mer frais & pizzas artisanales"
              tag="p" className="text-white/40 text-base md:text-lg max-w-md" />
            <EditableButton contentKeyText="home.hero.cta1.text" contentKeyUrl="home.hero.cta1.url"
              defaultText="Commander — 07 43 46 10 22" defaultUrl="tel:0743461022"
              className="bg-[var(--color-terra)] hover:bg-[var(--color-terra-dark)] text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex-shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONCEPT — Texte pleine largeur + 2 photos côte à côte en dessous
   ═══════════════════════════════════════════════ */
function Concept() {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        {/* Grande citation / accroche */}
        <Fade>
          <EditableText contentKey="home.concept.quote"
            defaultValue="Deux passions, un food truck. La fraîcheur de la mer et le savoir-faire de la pizzeria réunis à Pizançon."
            tag="h2"
            className="font-display text-2xl md:text-4xl text-[var(--color-text)] leading-snug max-w-3xl" />
        </Fade>

        <Fade delay={0.1} className="mt-5 mb-14 max-w-2xl">
          <EditableText contentKey="home.concept.text"
            defaultValue="Stéphane et Yanneck ont lancé Mer et Mozza sur l'avenue Charles de Gaulle à Pizançon. D'un côté, les meilleurs fruits de mer — huîtres de Marennes, Cancale et Sète, crevettes, saumon fumé artisanal. De l'autre, des pizzas à la pâte pétrie chaque jour. Du jeudi au dimanche, sur place ou à emporter."
            tag="p" className="text-[var(--color-text-muted)] leading-relaxed" />
        </Fade>

        {/* Deux images côte à côte, hauteurs différentes */}
        <div className="grid md:grid-cols-2 gap-3">
          <Fade>
            <div className="overflow-hidden">
              <EditableImage contentKey="home.concept.img1"
                defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772840254/mer-et-mozza/fondateurs.jpg"
                alt="Fruits de mer" width={800} height={600}
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" />
              <p className="text-[var(--color-text-muted)] text-xs mt-3 tracking-wide uppercase">Stéphane & Yanneck</p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="overflow-hidden md:mt-12">
              <EditableImage contentKey="home.concept.img2"
                defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772840456/mer-et-mozza/pizza-burrata.jpg"
                alt="Pizzas artisanales" width={800} height={600}
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" />
              <p className="text-[var(--color-text-muted)] text-xs mt-3 tracking-wide uppercase">Nos pizzas</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   LA CARTE — Onglets, fond sombre, liste simple
   ═══════════════════════════════════════════════ */
function Carte() {
  const [active, setActive] = useState(0);

  const categories = [
    {
      name: "Pizzas classiques",
      items: [
        { name: "Margherita", desc: "Sauce tomate, mozzarella fior di latte, basilic frais" },
        { name: "Regina", desc: "Sauce tomate, mozzarella, jambon, champignons, olives" },
        { name: "4 Fromages", desc: "Mozzarella, gorgonzola, chèvre, parmesan, crème" },
        { name: "Napolitaine", desc: "Sauce tomate, mozzarella, anchois, câpres, olives noires" },
      ]
    },
    {
      name: "Pizzas spéciales",
      items: [
        { name: "Calzone", desc: "Chausson garni sauce tomate, mozzarella, jambon, oeuf" },
        { name: "Sicilienne", desc: "Sauce tomate, mozzarella, aubergines grillées, ricotta salée" },
        { name: "Fruits de mer", desc: "Sauce tomate, mozzarella, crevettes, moules, calamars" },
        { name: "Végétarienne", desc: "Sauce tomate, mozzarella, légumes grillés de saison" },
      ]
    },
    {
      name: "Huîtres",
      items: [
        { name: "Marennes-Oléron", desc: "La douzaine — Fines de claire, charnues et iodées" },
        { name: "Cancale", desc: "La douzaine — Creuses de Bretagne, saveur intense et minérale" },
        { name: "Sète", desc: "La douzaine — Méditerranéennes, douces et délicates" },
      ]
    },
    {
      name: "Plateaux & mer",
      items: [
        { name: "Plateau crevettes", desc: "Crevettes roses fraîches, mayonnaise maison, citron" },
        { name: "Bulots mayonnaise", desc: "Bulots cuits, servis froids, mayo maison" },
        { name: "Saumon fumé", desc: "Tranches de saumon fumé artisanal, blinis, crème fraîche" },
        { name: "Plateau Royal", desc: "Assortiment huîtres, crevettes, bulots, saumon fumé — pour 2 personnes" },
      ]
    },
  ];

  return (
    <section id="carte" className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <Fade className="mb-10">
          <EditableText contentKey="home.carte.label" defaultValue="La carte" tag="p"
            className="text-[var(--color-terra)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.carte.title" defaultValue="Nos spécialités" tag="h2"
            className="font-display text-3xl md:text-5xl text-white" />
        </Fade>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Onglets verticaux à gauche */}
          <div className="md:col-span-3 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {categories.map((cat, i) => (
              <button key={cat.name} onClick={() => setActive(i)}
                className={`text-left px-4 py-3 text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  active === i
                    ? "bg-[var(--color-terra)] text-white"
                    : "text-white/25 hover:text-white/50"
                }`}>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Items à droite */}
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
            className="md:col-span-9">
            {categories[active].items.map((item, i) => (
              <div key={item.name} className={`py-5 ${i < categories[active].items.length - 1 ? 'border-b border-white/5' : ''}`}>
                <h3 className="text-white text-lg font-display">{item.name}</h3>
                <p className="text-white/30 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Fade className="mt-10">
          <EditableText contentKey="home.carte.note"
            defaultValue="Produits frais, carte susceptible d'évoluer selon les arrivages."
            tag="p" className="text-white/15 text-xs italic" />
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   GALERIE — Bande horizontale scrollable
   ═══════════════════════════════════════════════ */
function Gallery() {
  const photos = [
    { key: "g1", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840254/mer-et-mozza/fondateurs.jpg", title: "Les fondateurs" },
    { key: "g2", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840456/mer-et-mozza/pizza-burrata.jpg", title: "Pizza burrata" },
    { key: "g3", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840451/mer-et-mozza/calzone.jpg", title: "Calzone" },
    { key: "g4", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840452/mer-et-mozza/soupe.jpg", title: "Soupe de poisson" },
    { key: "g5", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840457/mer-et-mozza/pizza-veggie.jpg", title: "Pizza végétarienne" },
    { key: "g6", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772840454/mer-et-mozza/plateau-royal.jpg", title: "Plateau Royal" },
  ];

  return (
    <section className="py-16 bg-[var(--color-bg-warm)]">
      <div className="max-w-6xl mx-auto px-6 md:px-14 mb-8">
        <Fade>
          <EditableText contentKey="home.gallery.title" defaultValue="En images" tag="h2"
            className="font-display text-3xl md:text-4xl text-[var(--color-text)]" />
        </Fade>
      </div>

      {/* Scroll horizontal pleine largeur */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-3 px-6 md:px-14 pb-4" style={{ width: "max-content" }}>
          {photos.map((p) => (
            <div key={p.key} className="relative w-72 flex-shrink-0 group overflow-hidden">
              <EditableImage contentKey={`home.gallery.${p.key}`} defaultSrc={p.src} alt={p.title}
                width={600} height={600}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT — Compact horizontal
   ═══════════════════════════════════════════════ */
function Contact() {
  const horaires = [
    { jour: "Lun–Mer", h: "Fermé" },
    { jour: "Jeudi", h: "18h – 21h" },
    { jour: "Vendredi", h: "18h – 21h" },
    { jour: "Samedi", h: "18h – 21h" },
    { jour: "Dimanche", h: "18h – 21h" },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <Fade className="mb-10">
          <EditableText contentKey="home.contact.title" defaultValue="Nous trouver" tag="h2"
            className="font-display text-3xl md:text-5xl text-white" />
        </Fade>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Adresse + liens */}
          <Fade>
            <div className="space-y-5">
              <div>
                <p className="text-[var(--color-teal)] text-xs tracking-[0.3em] uppercase mb-2">Adresse</p>
                <EditableText contentKey="home.contact.address"
                  defaultValue="130 Av. Charles de Gaulle, 26300 Chatuzange-le-Goubet (Pizançon)"
                  tag="p" className="text-white/60 text-sm leading-relaxed" />
              </div>
              <div>
                <p className="text-[var(--color-teal)] text-xs tracking-[0.3em] uppercase mb-2">Téléphone</p>
                <EditableText contentKey="home.contact.phone" defaultValue="07 43 46 10 22" tag="p" className="text-white/60 text-sm" />
              </div>
              <div>
                <p className="text-[var(--color-teal)] text-xs tracking-[0.3em] uppercase mb-2">Email</p>
                <EditableText contentKey="home.contact.email" defaultValue="meretmozza@gmail.com" tag="p" className="text-white/60 text-sm" />
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/Meretmozza/" target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-[var(--color-terra)] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/meretmozza/" target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-[var(--color-terra)] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Fade>

          {/* Horaires */}
          <Fade delay={0.1}>
            <div>
              <p className="text-[var(--color-teal)] text-xs tracking-[0.3em] uppercase mb-4">Horaires</p>
              <div className="space-y-2.5">
                {horaires.map((h) => (
                  <div key={h.jour} className={`flex justify-between text-sm ${h.h === "Fermé" ? "opacity-25" : ""}`}>
                    <span className="text-white/40">{h.jour}</span>
                    <span className="text-white/70">{h.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* CTA */}
          <Fade delay={0.2}>
            <div className="flex flex-col justify-between h-full">
              <EditableText contentKey="home.contact.cta.desc"
                defaultValue="Appelez-nous pour passer commande ou réserver vos plateaux de fruits de mer."
                tag="p" className="text-white/30 text-sm leading-relaxed mb-6" />
              <EditableButton contentKeyText="home.contact.cta.text" contentKeyUrl="home.contact.cta.url"
                defaultText="Appeler maintenant" defaultUrl="tel:0743461022"
                className="bg-[var(--color-terra)] hover:bg-[var(--color-terra-dark)] text-white px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-center transition-all duration-300" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const { loaded } = useCMS();

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg-dark)] z-[99999] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772840252/mer-et-mozza/logo.jpg" alt="Mer et Mozza" className="w-20 h-20 rounded-full mx-auto mb-3" />
          <p className="text-[var(--color-text-dim)] text-[10px] tracking-[0.4em] uppercase">Fruits de mer & pizzas</p>
          <div className="w-8 h-8 border border-[var(--color-teal)] border-t-transparent rounded-full animate-spin mx-auto mt-6" />
        </motion.div>
      </div>
    );
  }

  return (
    <LightboxProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Concept />
        <Carte />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </LightboxProvider>
  );
}