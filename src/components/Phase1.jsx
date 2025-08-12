import { motion } from "framer-motion";

export default function Phase1Presentation() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    "Tournage et montage de Reels Instagram",
    "Shooting photo (spécialement automobiles)",
    "Développement de sites vitrines",
    "Design de posts et visuels réseaux sociaux",
    "Modifications et retouches sur projets en cours",
    "Assistance sur tournages et événements",
  ];

  const facts = [
    { label: "Secteur", value: "Communication visuelle" },
    { label: "Localisation", value: "Lausanne & Yverdon" },
    { label: "Taille", value: "3–4 personnes (bientôt 5)" },
    { label: "Public cible", value: "PME via Chiche Communication / Grandes entreprises via WaweMind" },
  ];

  const tools = [
    "Suite Adobe", "Figma", "Gyroflow", "WordPress", "VS Code", "Audio / TVC",
  ];

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      {/* Print styles */}
      <style>{`
        @page { size: A4; margin: 16mm; }
        @media print {
          .no-print { display: none !important; }
          header { box-shadow: none !important; }
          .card, img { break-inside: avoid; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="200" className="fill-blue-100" />
            <circle cx="520" cy="180" r="160" className="fill-cyan-100" />
            <circle cx="300" cy="520" r="220" className="fill-indigo-100" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="/logo-entreprise.png" alt="Logo WaweMind" className="w-14 h-14 object-contain rounded-xl bg-white/70 shadow" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">WaweMind – Chiche Communication</h1>
                <p className="text-sm md:text-base text-slate-600">Stage de médiamaticien — Théo Blondel — 2025</p>
              </div>
            </div>
            <button onClick={handlePrint} className="no-print px-4 py-2 rounded-2xl bg-slate-900 text-white text-sm shadow hover:shadow-md transition">
              Exporter en PDF
            </button>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <section id="entreprise" className="mt-6 md:mt-10">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xl md:text-2xl font-semibold text-slate-900">1) Présentation de l'entreprise</motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-3 text-slate-700">
            <span className="font-medium">WaweMind</span> et <span className="font-medium">Chiche Communication</span> sont spécialisées en <span className="font-medium">communication visuelle</span>, basées entre Lausanne et Yverdon. L'équipe compte actuellement 3–4 personnes et va bientôt s'agrandir à 5. Elles allient <span className="font-medium">réflexion business</span>, <span className="font-medium">réseaux sociaux</span>, <span className="font-medium">vidéos de présentation</span> et <span className="font-medium">référencement</span>. WaweMind cible les grandes entreprises, tandis que Chiche Communication se concentre sur les PME.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 grid md:grid-cols-2 gap-5">
            <img src="/photo-entreprise.jpg" alt="Bureaux WaweMind" className="w-full h-64 object-cover rounded-2xl shadow" />
            <div className="grid grid-cols-2 gap-3">
              {facts.map((f, i) => (
                <div key={i} className="card p-4 rounded-2xl bg-white shadow border border-slate-100">
                  <div className="text-xs uppercase tracking-wide text-slate-500">{f.label}</div>
                  <div className="mt-1 font-medium">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="role" className="mt-12">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xl md:text-2xl font-semibold text-slate-900">2) Rôle / fonction du médiamaticien</motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-3 text-slate-700">
            Mon rôle : <span className="font-medium">aider au quotidien</span> (tournages, petites modifs et mises à jour rapides). Domaines couverts : <span className="font-medium">vidéo</span>, <span className="font-medium">design UI/UX</span>, <span className="font-medium">développement web</span>. Outils principaux ci-dessous.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 p-5 rounded-2xl bg-white shadow border border-slate-100">
            <div className="text-sm uppercase tracking-wide text-slate-500">Outils principaux</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-sm bg-slate-900 text-white">{t}</span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="taches" className="mt-12">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xl md:text-2xl font-semibold text-slate-900">3) Tâches & missions confiées</motion.h2>
          <div className="mt-5 grid md:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card p-4 rounded-2xl bg-white shadow border border-slate-100">
                <div className="font-medium">{it}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-wide text-white/70">Contact</div>
              <div className="mt-1 font-medium">Théo Blondel — Médiamaticien</div>
            </div>
            <div className="text-sm">hello@theoblondel.ch</div>
          </div>
          <p className="mt-4 text-xs text-slate-500">Document généré par Théo Blondel — {new Date().toLocaleDateString("fr-CH")}</p>
        </section>
      </main>
    </div>
  );
}