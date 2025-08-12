import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Phase1Presentation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
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
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            y: backgroundY,
            opacity: backgroundOpacity
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="200" className="fill-blue-100" />
            <circle cx="520" cy="180" r="160" className="fill-cyan-100" />
            <circle cx="300" cy="520" r="220" className="fill-indigo-100" />
          </svg>
        </motion.div>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="flex items-center justify-between gap-4"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">WaweMind – Chiche Communication</h1>
                <p className="text-sm md:text-base text-slate-600">Stage de médiamaticien — Théo Blondel — 2025</p>
              </div>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint} 
              className="no-print px-4 py-2 rounded-2xl bg-slate-900 text-white text-sm shadow hover:shadow-md transition-all duration-200"
            >
              Exporter en PDF
            </motion.button>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <section id="entreprise" className="mt-6 md:mt-10">
          <motion.h2 
            variants={slideInLeft} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="text-xl md:text-2xl font-semibold text-slate-900"
          >
            1) Présentation de l'entreprise
          </motion.h2>
          <motion.p 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="mt-3 text-slate-700"
          >
            <span className="font-medium">WaweMind</span> et <span className="font-medium">Chiche Communication</span> sont spécialisées en <span className="font-medium">communication visuelle</span>, basées entre Lausanne et Yverdon. L'équipe compte actuellement 3–4 personnes et va bientôt s'agrandir à 5. Elles allient <span className="font-medium">réflexion business</span>, <span className="font-medium">réseaux sociaux</span>, <span className="font-medium">vidéos de présentation</span> et <span className="font-medium">référencement</span>. WaweMind cible les grandes entreprises, tandis que Chiche Communication se concentre sur les PME.
          </motion.p>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="mt-6 grid md:grid-cols-2 gap-5"
          >
            <motion.img 
              variants={slideInLeft}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              src="/IMG_9021.jpg" 
              alt="Bureaux WaweMind" 
              className="w-full h-64 object-cover rounded-2xl shadow cursor-pointer" 
            />
            <motion.div variants={slideInRight} className="grid grid-cols-2 gap-3">
              {facts.map((f, i) => (
                <motion.div 
                  key={i} 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="card p-4 rounded-2xl bg-white shadow border border-slate-100 cursor-pointer"
                >
                  <div className="text-xs uppercase tracking-wide text-slate-500">{f.label}</div>
                  <div className="mt-1 font-medium">{f.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="role" className="mt-12">
          <motion.h2 
            variants={slideInLeft} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="text-xl md:text-2xl font-semibold text-slate-900"
          >
            2) Rôle / fonction du médiamaticien
          </motion.h2>
          <motion.p 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="mt-3 text-slate-700"
          >
            Mon rôle : <span className="font-medium">aider au quotidien</span> (tournages, petites modifs et mises à jour rapides). Domaines couverts : <span className="font-medium">vidéo</span>, <span className="font-medium">design UI/UX</span>, <span className="font-medium">développement web</span>. Outils principaux ci-dessous.
          </motion.p>

          <motion.div 
            variants={slideInRight} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="mt-5 p-5 rounded-2xl bg-white shadow border border-slate-100"
          >
            <div className="text-sm uppercase tracking-wide text-slate-500">Outils principaux</div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {tools.map((t) => (
                <motion.span 
                  key={t} 
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, backgroundColor: "#1e293b" }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 rounded-full text-sm bg-slate-900 text-white cursor-pointer"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="taches" className="mt-12">
          <motion.h2 
            variants={slideInLeft} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="text-xl md:text-2xl font-semibold text-slate-900"
          >
            3) Tâches & missions confiées
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-5 grid md:grid-cols-2 gap-4"
          >
            {items.map((it, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
                className="card p-4 rounded-2xl bg-white shadow border border-slate-100 cursor-pointer"
              >
                <div className="font-medium">{it}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <motion.section 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <div className="text-sm uppercase tracking-wide text-white/70">Contact</div>
              <div className="mt-1 font-medium">Théo Blondel — Médiamaticien</div>
            </div>
            <div className="text-sm">hello@theoblondel.ch</div>
          </motion.div>
          <p className="mt-4 text-xs text-slate-500">par Théo Blondel — {new Date().toLocaleDateString("fr-CH")}</p>
        </motion.section>
      </main>
    </div>
  );
}