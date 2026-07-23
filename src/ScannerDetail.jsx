import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaChevronRight, FaPlay,
    FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaFileDownload,
} from "react-icons/fa"
import ds2208 from "../images/DS2208.jpg"
import ds3600 from "../images/ds3600.jpg"
import ds3600xr from "../images/DS3600xr.jpg"
import ls2208 from "../images/LS2208.jpg"
import ds55 from "../images/DS55.jpg"
import ds8208hc from "../images/DS8208-HC.jpg"

// ─── Accent couleur selon la catégorie ─────────────────────────────────────────
function accentFromGradient(gradient) {
    if (gradient && gradient.includes("orange")) {
        return {
            badge: "bg-orange-50 text-orange-700 border border-orange-200",
            solid: "bg-orange-600 hover:bg-orange-500",
            outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50",
            text: "text-orange-600",
            dot: "bg-orange-600",
            ring: "border-orange-500",
        }
    }
    return {
        badge: "bg-blue-50 text-blue-700 border border-blue-200",
        solid: "bg-blue-700 hover:bg-blue-600",
        outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
        text: "text-blue-700",
        dot: "bg-blue-700",
        ring: "border-blue-600",
    }
}

// ─── Slider images / vidéo (galerie avec vignettes) ────────────────────────────
function MediaSlider({ medias, alt, accent }) {
    const [index, setIndex] = useState(0)

    // Revient au premier média quand on change de produit
    useEffect(() => {
        setIndex(0)
    }, [medias])

    const total = medias.length
    const current = medias[index]

    const precedent = () => setIndex((i) => (i - 1 + total) % total)
    const suivant = () => setIndex((i) => (i + 1) % total)

    return (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            {/* Média principal */}
            <div className="relative bg-white border border-gray-200 rounded-2xl aspect-square flex items-center justify-center overflow-hidden group">
                {current.type === "video" ? (
                    <video
                        key={current.src}
                        src={current.src}
                        className="w-full h-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    />
                ) : (
                    <img
                        key={current.src}
                        src={current.src}
                        alt={alt}
                        className="w-56 md:w-64 h-auto object-contain"
                    />
                )}

                {total > 1 && (
                    <>
                        <button
                            onClick={precedent}
                            aria-label="Média précédent"
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 w-9 h-9 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronLeft size={13} />
                        </button>
                        <button
                            onClick={suivant}
                            aria-label="Média suivant"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 w-9 h-9 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronRight size={13} />
                        </button>
                        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-medium px-2 py-1 rounded-full">
                            {index + 1} / {total}
                        </span>
                    </>
                )}
            </div>

            {/* Vignettes */}
            {total > 1 && (
                <div className="flex items-center gap-2 justify-center flex-wrap">
                    {medias.map((m, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Aller au média ${i + 1}`}
                            className={
                                "w-14 h-14 rounded-lg border-2 overflow-hidden bg-gray-50 flex items-center justify-center transition-colors " +
                                (i === index ? accent.ring : "border-gray-200 hover:border-gray-300")
                            }
                        >
                            {m.type === "video" ? (
                                <span className="flex items-center justify-center w-full h-full bg-gray-900 text-white">
                                    <FaPlay size={11} />
                                </span>
                            ) : (
                                <img src={m.src} alt="" className="w-full h-full object-contain p-1.5" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── Base de données des produits ───────────────────────────────────────────
const PRODUITS = {

    // ── Portables ──────────────────────────────────────────────────────────
    "DS2208-SR00007ZZWW": {
        nom: "DS2208",
        sku: "DS2208-SR00007ZZWW",
        image: ds2208,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0001/ds2200-series-retail-video.mp4/jcr:content/renditions/original" },
            { type: "image", src: ds2208 }
        ],
        categorie: "portable",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner portable universel filaire à caméra de surface — portée standard",
        description:
            "Le DS2208 est un scanner portable filaire compact et fiable, idéal pour les environnements de vente au détail, d'hôtellerie et de santé. Sa caméra de surface à portée standard capture rapidement tous les codes-barres 1D et 2D, même endommagés ou de mauvaise qualité, pour une productivité maximale au quotidien.",
        specs: [
            { label: "Type", valeur: "Scanner portable filaire" },
            { label: "Technologie", valeur: "Caméra de surface (imageur de zone)" },
            { label: "Portée", valeur: "Standard" },
            { label: "Codes-barres", valeur: "1D, 2D, PDF417, QR Code" },
            { label: "Couleur", valeur: "Noir crépuscule" },
            { label: "Interface", valeur: "USB" },
            { label: "Déclenchement", valeur: "Manuel" },
            { label: "Distribution", valeur: "Mondiale" },
        ],
        points: [
            "Caméra de surface pour la lecture de tous types de codes-barres",
            "Lecture fiable même sur les codes-barres endommagés ou froissés",
            "Format compact et léger pour une utilisation prolongée sans fatigue",
            "Connexion USB plug-and-play pour une installation immédiate",
            "Design robuste adapté aux environnements de travail intensifs",
        ],
    },

    "LS2208-SR20007R-UR": {
        nom: "LS2208",
        sku: "LS2208-SR20007R-UR",
        image: ls2208,
        medias: [{ type: "image", src: ls2208 }],
        categorie: "portable",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit scanner laser 1D filaire USB avec support — noir",
        description:
            "Le LS2208 est le scanner laser 1D le plus fiable de Zebra, livré en kit complet avec câble USB et support de bureau. Sa technologie laser garantit une lecture rapide et précise des codes-barres 1D dans tous les environnements, de la caisse de vente au détail au comptoir d'accueil en entreprise.",
        specs: [
            { label: "Type", valeur: "Scanner laser 1D filaire" },
            { label: "Technologie", valeur: "Laser" },
            { label: "Codes-barres", valeur: "1D uniquement" },
            { label: "Couleur", valeur: "Noir" },
            { label: "Contenu du kit", valeur: "Scanner + câble USB + support" },
            { label: "Interface", valeur: "USB" },
            { label: "Déclenchement", valeur: "Manuel" },
        ],
        points: [
            "Kit complet inclus : câble USB et support de bureau dès la boîte",
            "Technologie laser pour une lecture 1D rapide et précise",
            "Installation immédiate — prêt à l'emploi en quelques secondes",
            "Design léger et ergonomique pour le scan continu",
            "Robustesse éprouvée pour des années d'utilisation intensive",
        ],
    },

    // ── Durcis ─────────────────────────────────────────────────────────────
    "DS3678-HP3U42A0SFW": {
        nom: "DS3678-HP",
        sku: "DS3678-HP3U42A0SFW",
        image: ds3600,
        medias: [{ type: "image", src: ds3600 }],
        categorie: "durcis",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit scanner ultra-durci haute performance USB avec station d'accueil — vert industriel",
        description:
            "Le DS3678-HP est le scanner ultra-durci haute performance de Zebra, conçu pour les entrepôts et les environnements industriels les plus exigeants. Ce kit complet inclut le scanner, un câble USB blindé compatible alimentation 12 V, une station d'accueil standard et une alimentation, pour une mise en œuvre immédiate.",
        specs: [
            { label: "Type", valeur: "Scanner ultra-durci filaire — kit complet" },
            { label: "Contenu", valeur: "Scanner DS3678-HP + câble USB CBA-U42 + socle STB3678 + alimentation PWRS-14000" },
            { label: "Câble", valeur: "USB blindé CBA-U42-S07PAR (compatible alim. 12 V)" },
            { label: "Station d'accueil", valeur: "STB3678-C100F3WW" },
            { label: "Alimentation", valeur: "PWRS-14000-148R" },
            { label: "Couleur", valeur: "Vert industriel" },
            { label: "Certifications", valeur: "IP65, résistant aux chutes" },
        ],
        points: [
            "Durabilité IP65 — résistant à la poussière et aux projections d'eau",
            "Haute performance pour la lecture à longue distance en entrepôt",
            "Kit prêt à l'emploi — installation sans délai",
            "Câble blindé compatible alimentation 12 V pour les environnements électriques sensibles",
            "Station d'accueil incluse pour le rechargement et le stockage",
        ],
    },

    "DS3608-SR00003VZWW": {
        nom: "DS3608",
        sku: "DS3608-SR00003VZWW",
        image: ds3600,
        medias: [{ type: "image", src: ds3600 }],
        categorie: "durcis",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner ultra-durci filaire portée standard avec moteur à vibration — vert industriel",
        description:
            "Le DS3608 est un scanner filaire ultra-durci à portée standard intégrant un moteur à vibration pour confirmer chaque lecture sans signal sonore — idéal dans les environnements bruyants. Sa robustesse certifiée et sa caméra de surface en font un outil incontournable pour les lignes de production et les quais de chargement.",
        specs: [
            { label: "Type", valeur: "Scanner ultra-durci filaire" },
            { label: "Technologie", valeur: "Caméra de surface robuste" },
            { label: "Portée", valeur: "Standard" },
            { label: "Retour", valeur: "Moteur à vibration intégré" },
            { label: "Couleur", valeur: "Vert industriel" },
            { label: "Codes-barres", valeur: "1D et 2D" },
            { label: "Certifications", valeur: "IP65, MIL-STD-810G" },
        ],
        points: [
            "Moteur à vibration pour confirmation de lecture en environnement bruyant",
            "IP65 et MIL-STD-810G pour une résistance maximale",
            "Lecture fiable des codes-barres endommagés ou sous film plastique",
            "Robustesse certifiée pour les quais de chargement et lignes de production",
            "Caméra de surface ultra-rapide pour un débit de lecture élevé",
        ],
    },

    "DS3678-XR3U42A2SVW": {
        nom: "DS3678-XR",
        sku: "DS3678-XR3U42A2SVW",
        image: ds3600xr,
        medias: [{ type: "image", src: ds3600xr }],
        categorie: "durcis",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit scanner ultra-durci longue portée USB avec moteur à vibration et station d'accueil",
        description:
            "Le DS3678-XR est la version longue portée de la gamme durcie DS36, capable de lire les codes-barres jusqu'à plusieurs mètres. Ce kit complet inclut le scanner avec moteur à vibration, un câble USB blindé 12 V, une station d'accueil et une alimentation, pour les entrepôts à grande hauteur ou les quais logistiques.",
        specs: [
            { label: "Type", valeur: "Scanner ultra-durci longue portée — kit complet" },
            { label: "Contenu", valeur: "Scanner DS3678-XR + câble USB CBA-U42 + socle STB3678 + alimentation PWR-BGA12V50W0WW" },
            { label: "Portée", valeur: "Longue distance (XR)" },
            { label: "Retour", valeur: "Moteur à vibration" },
            { label: "Couleur", valeur: "Vert industriel" },
            { label: "Câble", valeur: "USB blindé CBA-U42-S07PAR (compatible alim. 12 V)" },
            { label: "Certifications", valeur: "IP65, résistant aux chutes" },
        ],
        points: [
            "Longue portée XR pour les entrepôts à grande hauteur",
            "Moteur à vibration pour la confirmation de lecture sans bruit",
            "Kit complet prêt à déployer — aucun accessoire supplémentaire nécessaire",
            "IP65 pour une utilisation dans les environnements humides ou poussiéreux",
            "Compatible avec tous les systèmes de gestion d'entrepôt (WMS)",
        ],
    },

    // ── Fixe ───────────────────────────────────────────────────────────────
    "DS5502-SR4US70MMZW": {
        nom: "DS5502-SR",
        sku: "DS5502-SR4US70MMZW",
        image: ds55,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/animation/ds55-video-animation-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: ds55 }
        ],
        categorie: "fixe",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Kit scanner fixe USB portée standard avec support multiple — noir",
        description:
            "Le DS5502-SR est un scanner de codes-barres fixe conçu pour la lecture mains libres à haut volume. Ce kit USB inclut le scanner, un câble USB de 7 pouces et un support multiple pour une installation flexible sur comptoir ou en position inclinée. Idéal pour les caisses, les postes de contrôle qualité et les zones de tri.",
        specs: [
            { label: "Type", valeur: "Scanner fixe filaire — kit complet" },
            { label: "Contenu", valeur: "Scanner DS5502 + câble USB CBL-U10755-01 7\" + support BRKT-MM0055C-04" },
            { label: "Portée", valeur: "Standard (SR)" },
            { label: "Interface", valeur: "USB" },
            { label: "Support", valeur: "Multiple (plusieurs positions)" },
            { label: "Couleur", valeur: "Noir" },
            { label: "Mode", valeur: "Mains libres / présentation" },
        ],
        points: [
            "Lecture mains libres pour les postes à fort volume de scan",
            "Support multiple pour adapter l'angle de lecture à chaque poste",
            "Kit complet avec câble USB et support inclus dès la boîte",
            "Lecture rapide pour les environnements de caisse et de contrôle",
            "Installation simple et flexible sur n'importe quel comptoir",
        ],
    },

    // ── Santé ──────────────────────────────────────────────────────────────
    "DS8208-HC4000BVZWW": {
        nom: "DS8208-HC",
        sku: "DS8208-HC4000BVZWW",
        image: ds8208hc,
        medias: [{ type: "image", src: ds8208hc }],
        categorie: "sante",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner de zone filaire pour le secteur de la santé — éclairage blanc avec vibration",
        description:
            "Le DS8208-HC est un scanner imageur de zone spécialement conçu pour les environnements hospitaliers et médicaux. Son boîtier blanc anti-microbien résiste aux désinfectants agressifs, et son éclairage blanc doux est adapté aux chambres de patients. Le moteur à vibration silencieux permet une utilisation discrète en garde de nuit.",
        specs: [
            { label: "Type", valeur: "Imageur de zone filaire" },
            { label: "Usage", valeur: "Secteur de la santé (HC)" },
            { label: "Éclairage", valeur: "Blanc (adapté aux soins)" },
            { label: "Retour", valeur: "Moteur à vibration" },
            { label: "Couleur", valeur: "Blanc HC" },
            { label: "Boîtier", valeur: "Anti-microbien, résistant aux désinfectants" },
            { label: "Codes-barres", valeur: "1D, 2D, bracelets patients" },
        ],
        points: [
            "Boîtier anti-microbien certifié pour les milieux de soins",
            "Éclairage blanc doux pour une utilisation confortable en chambre de patient",
            "Vibration silencieuse — idéal pour les gardes de nuit",
            "Lecture fiable des bracelets patients et codes-barres médicaux",
            "Compatible avec les protocoles de désinfection hospitaliers",
        ],
    },

    "DS8208-HCBU2104ZVW": {
        nom: "DS8208-HC",
        sku: "DS8208-HCBU2104ZVW",
        image: ds8208hc,
        medias: [{ type: "image", src: ds8208hc }],
        categorie: "sante",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Kit USB scanner de santé avec câble blindé — vibration blanche",
        description:
            "Ce kit DS8208-HC regroupe le scanner imageur de zone pour la santé et son câble USB blindé CBA-U21, pour une intégration immédiate aux postes de soins. Le câble blindé garantit une immunité aux interférences électromagnétiques présentes dans les environnements hospitaliers équipés.",
        specs: [
            { label: "Type", valeur: "Kit scanner santé filaire" },
            { label: "Contenu", valeur: "Scanner DS8208-HC4000BVZWW + câble USB blindé CBA-U21-S07ZBR" },
            { label: "Câble", valeur: "USB blindé CBA-U21-S07ZBR" },
            { label: "Retour", valeur: "Vibration blanche" },
            { label: "Boîtier", valeur: "Anti-microbien, résistant aux désinfectants" },
            { label: "Éclairage", valeur: "Blanc (adapté aux soins)" },
            { label: "Codes-barres", valeur: "1D, 2D, bracelets patients" },
        ],
        points: [
            "Kit clé en main avec câble USB blindé contre les interférences EM",
            "Prêt à brancher sur tout poste de soins équipé d'un port USB",
            "Boîtier anti-microbien pour la sécurité des patients et du personnel",
            "Vibration discrète pour ne pas perturber l'environnement de soin",
            "Lecture précise des codes-barres de bracelets, médicaments et dossiers",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function ScannerDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/Scanner")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux scanners
                </button>
            </div>
        )
    }

    const accent = accentFromGradient(produit.couleurGradient)
    const autresModeles = Object.values(PRODUITS)
        .filter((p) => p.categorie === produit.categorie && p.sku !== produit.sku)
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-white">

            {/* ── Fil d'ariane ── */}
            <div className="border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 pt-28 pb-3 md:pt-32 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(`/Scanner?categorie=${produit.categorie}`)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> Scanners
                    </button>
                    <span className="text-gray-300">/</span>
                    <span className="uppercase text-gray-400">{produit.categorie}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-black font-semibold">{produit.nom}</span>
                </div>
            </div>

            {/* ── Hero ── */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-2 gap-12 items-start">

                    {/* Slider image / vidéo */}
                    <div className="order-2 md:order-1">
                        <MediaSlider medias={produit.medias} alt={produit.nom} accent={accent} />
                    </div>

                    {/* Texte */}
                    <div className="order-1 md:order-2 flex flex-col gap-4">
                        <span className={`w-fit text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${accent.badge}`}>
                            Zebra — {produit.categorie}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] text-black">
                            {produit.nom}
                        </h1>
                        <p className="text-gray-400 font-mono text-sm">{produit.sku}</p>
                        <p className="text-gray-600 leading-relaxed text-lg">{produit.accroche}</p>

                        <div className="flex flex-wrap gap-3 mt-2">
                            <button
                                onClick={() => navigate("/Contact-Commercial")}
                                className={`text-white font-bold px-8 py-3.5 rounded-full transition-colors ${accent.solid}`}
                            >
                                Contacter le service commercial
                            </button>
                            <button 
                                onClick={() =>
                                    navigate("/devis", {
                                        state: {
                                            produit: {
                                                nom: produit.nom,
                                                sku: produit.sku,
                                                image: produit.image,
                                                categorie: produit.categorie,
                                                accroche: produit.accroche,
                                            },
                                        },
                                    })
                                }
                                className={`font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 ${accent.outline}`}>
                                Demander un devis
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 mt-4 pt-4 text-xs text-gray-500">
                            <div className="flex flex-col items-start gap-1.5">
                                <FaShieldAlt className={accent.text} size={16} />
                                <span>Conçu pour les environnements exigeants</span>
                            </div>
                            <div className="flex flex-col items-start gap-1.5">
                                <FaClock className={accent.text} size={16} />
                                <span>Support et disponibilité longue durée</span>
                            </div>
                            <div className="flex flex-col items-start gap-1.5">
                                <FaHeadset className={accent.text} size={16} />
                                <span>Accompagnement commercial dédié</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Bandeau caractéristiques clés ── */}
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 divide-x divide-white/10">
                    {produit.specs.slice(0, 4).map((s, i) => (
                        <div key={i} className="text-center px-2">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{s.label}</p>
                            <p className="font-bold text-xs md:text-base mt-1.5 leading-snug">{s.valeur}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Description + Points forts ── */}
            <section className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">À propos de ce produit</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">Points forts</h2>
                        <ul className="flex flex-col gap-3">
                            {produit.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className={`mt-0.5 flex-shrink-0 ${accent.text}`} size={16} />
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Spécifications techniques ── */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Spécifications techniques</h2>
                    <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                        {produit.specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center gap-6 px-6 py-4 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                                <span className="text-black font-bold text-sm text-right">{spec.valeur}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Autres produits de la catégorie ── */}
            {autresModeles.length > 0 && (
                <section className="bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">
                            Découvrez d'autres scanners {produit.categorie}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map((p) => (
                                <button
                                    key={p.sku}
                                    onClick={() => navigate(`/scanners/${p.sku}`)}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:shadow-lg transition-all"
                                >
                                    <div className="bg-gray-50 rounded-2xl p-6 w-full flex items-center justify-center">
                                        <img src={p.image} alt={p.nom} className="w-24 h-28 object-contain" />
                                    </div>
                                    <h3 className="font-bold text-black">{p.nom}</h3>
                                    <p className="text-gray-400 font-mono text-xs">{p.sku}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA bas de page ── */}
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-16 flex md:flex-row flex-col items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-black mb-2">Intéressé par le {produit.nom} ?</h2>
                        <p className="text-white/50">Notre équipe commerciale est disponible pour vous accompagner.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate(`/Scanner?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres scanners
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}