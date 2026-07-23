import { useParams, useNavigate } from "react-router-dom"
import icon0 from "../images/cardstudio.png"
import icon1 from "../images/zebradesigner.png"

// ─── Base de données des produits ───────────────────────────────────────────
const PRODUITS = {
    "cardstudio": {
        nom: "CardStudio",
        slug: "cardstudio",
        image: icon0,
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Logiciel de conception et d'émission de cartes d'identification Zebra",
        description:
            "CardStudio de Zebra est le logiciel de référence pour la conception et l'émission de cartes d'identification professionnelles. De l'entrée de gamme (Essential) aux éditions les plus avancées (Professional, Enterprise), il couvre tous les besoins : badges d'entreprise, cartes d'accès, cartes scolaires, cartes de santé et bien plus encore. Son interface intuitive permet de créer des cartes de qualité sans compétences techniques particulières.",
        specs: [
            { label: "Éditeur", valeur: "Zebra Technologies" },
            { label: "Éditions", valeur: "Essential, Standard, Professional, Enterprise" },
            { label: "Compatibilité", valeur: "Windows 10 / 11" },
            { label: "Imprimantes compatibles", valeur: "ZC100, ZC300, ZC350 et toute la gamme Zebra" },
            { label: "Formats cartes", valeur: "CR-80, CR-79, CR-100" },
            { label: "Base de données", valeur: "Excel, ODBC, SQL (selon édition)" },
            { label: "Encodage", valeur: "Bande magnétique, puce smart card, RFID (selon édition)" },
            { label: "Langues", valeur: "Multilingue" },
        ],
        points: [
            "Interface glisser-déposer pour la conception intuitive de cartes",
            "Compatible avec toute la gamme d'imprimantes à cartes Zebra",
            "Connexion aux bases de données pour l'émission en masse",
            "Encodage bande magnétique, puce et RFID selon l'édition choisie",
            "Templates professionnels inclus pour démarrer rapidement",
        ],
        editions: [
            { nom: "Essential", desc: "Conception basique, idéale pour les petits volumes" },
            { nom: "Standard", desc: "Connectivité base de données, import CSV/Excel" },
            { nom: "Professional", desc: "Encodage, impression recto-verso avancée" },
            { nom: "Enterprise", desc: "Gestion multi-sites, API, sécurité renforcée" },
        ],
    },

    "zebradesigner": {
        nom: "ZebraDesigner",
        slug: "zebradesigner",
        image: icon1,
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Logiciel de création d'étiquettes et de codes-barres pour imprimantes Zebra",
        description:
            "ZebraDesigner est le logiciel de conception d'étiquettes de Zebra, permettant de créer facilement et rapidement des solutions d'impression personnalisées. Grâce à son interface conviviale et sa large bibliothèque de symbologies de codes-barres, il s'adapte à tous les secteurs : logistique, santé, fabrication, commerce de détail. Il génère du code ZPL natif pour une compatibilité maximale avec toutes les imprimantes Zebra.",
        specs: [
            { label: "Éditeur", valeur: "Zebra Technologies" },
            { label: "Éditions", valeur: "Free, Developer, Pro" },
            { label: "Compatibilité", valeur: "Windows 10 / 11" },
            { label: "Langage d'impression", valeur: "ZPL II (Zebra Programming Language)" },
            { label: "Codes-barres", valeur: "Plus de 100 symbologies 1D et 2D" },
            { label: "Connectivité", valeur: "Bases de données ODBC, XML, SAP, Oracle" },
            { label: "Imprimantes compatibles", valeur: "Toute la gamme d'imprimantes Zebra" },
            { label: "Langues", valeur: "Multilingue" },
        ],
        points: [
            "Création d'étiquettes par glisser-déposer sans programmation",
            "Plus de 100 symbologies de codes-barres 1D et 2D disponibles",
            "Génération native de ZPL II pour une compatibilité Zebra maximale",
            "Connexion directe aux bases de données ERP, WMS et SAP",
            "Édition Pro avec contrôle total du formulaire et des flux d'impression",
        ],
        editions: [
            { nom: "Free", desc: "Conception simple, impression directe, idéale pour débuter" },
            { nom: "Developer", desc: "Accès ZPL complet, développement d'applications d'étiquetage" },
            { nom: "Pro", desc: "Connectivité base de données, flux avancés, multilingue" },
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function LogicielDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[slug]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">Le logiciel <span className="font-mono bg-gray-100 px-2 py-1 rounded">{slug}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/logiciel")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                >
                    ← Retour aux logiciels
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Hero ── */}
            <section className={`bg-gradient-to-br ${produit.couleurGradient} text-white`}>
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 flex md:flex-row flex-col items-center gap-12">

                    {/* Texte */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <button
                            onClick={() => navigate("/logiciel")}
                            className="flex items-center gap-2 text-white/70 hover:text-white text-sm w-fit transition-colors"
                        >
                            ← Retour aux logiciels
                        </button>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/60">LOGICIELS ZEBRA</p>
                        <h1 className="text-5xl font-bold leading-tight">{produit.nom}</h1>
                        <p className="text-lg text-white/90 leading-relaxed">{produit.accroche}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">
                                Contacter le service commercial
                            </button>
                            <button className="border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                                Télécharger la brochure
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-white/10 backdrop-blur rounded-3xl p-10 shadow-2xl">
                            <img
                                src={produit.image}
                                alt={produit.nom}
                                className="w-64 h-64 object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Description + Points forts ── */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce logiciel</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Points forts</h2>
                    <ul className="flex flex-col gap-3">
                        {produit.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── Éditions disponibles ── */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Éditions disponibles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {produit.editions.map((ed, i) => (
                            <div key={i} className="flex items-start gap-4 border border-gray-100 rounded-xl px-5 py-4 bg-gray-50">
                                <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                    {i + 1}
                                </span>
                                <div>
                                    <p className="font-bold text-gray-900">{ed.nom}</p>
                                    <p className="text-gray-500 text-sm">{ed.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Spécifications techniques ── */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Spécifications techniques</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {produit.specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center border border-gray-100 rounded-xl px-5 py-4 bg-white">
                                <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                                <span className="text-gray-900 font-semibold text-sm text-right">{spec.valeur}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA bas de page ── */}
            <section className="bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-16 flex md:flex-row flex-col items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Intéressé par {produit.nom} ?</h2>
                        <p className="text-gray-400">Notre équipe commerciale est disponible pour vous accompagner.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                            Demander un devis
                        </button>
                        <button
                            onClick={() => navigate("/logiciel")}
                            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres logiciels
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
