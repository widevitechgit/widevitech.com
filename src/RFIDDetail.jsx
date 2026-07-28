import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaChevronRight, FaPlay,
    FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaFileDownload,
} from "react-icons/fa"
import mc3330xr from "../images/MC3330XR.jpg"
import fxr90 from "../images/FXR90.jpg"
import an720 from "../images/AN720.jpg"
import zd621r from "../images/ZD621R.jpg"

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

    // ── Lecteurs portables ─────────────────────────────────────────────────
    "MC333U-GJ4EG4EU": {
        nom: "MC3330XR",
        sku: "MC333U-GJ4EG4EU",
        image: mc3330xr,
        medias: [{ type: "image", src: mc3330xr }],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Lecteur RFID UHF pistolet avec antenne circulaire, Wi-Fi ac et lecteur 2D SE4770",
        description:
            "Le MC3330XR est le lecteur RFID UHF portable de référence de Zebra pour la gestion d'inventaire, la traçabilité d'actifs et la logistique. Son antenne circulaire intégrée offre une couverture de lecture omnidirectionnelle, tandis que l'imageur SE4770 permet en parallèle la capture de codes-barres 1D et 2D. Sa batterie haute capacité assure une autonomie complète pour les longues journées de travail.",
        specs: [
            { label: "Type", valeur: "Lecteur RFID UHF portable pistolet" },
            { label: "Antenne", valeur: "Circulaire intégrée (polarisation circulaire)" },
            { label: "Fréquences", valeur: "Bandes ETSI (Europe)" },
            { label: "Wi-Fi", valeur: "802.11 a/b/g/n/ac" },
            { label: "Scanner codes-barres", valeur: "SE4770 — 1D et 2D" },
            { label: "Clavier", valeur: "47 touches" },
            { label: "RAM / Stockage", valeur: "4 Go / 32 Go" },
            { label: "Batterie", valeur: "Haute capacité" },
            { label: "Système", valeur: "Android GMS" },
        ],
        points: [
            "Antenne RFID circulaire pour une lecture omnidirectionnelle des tags",
            "Double usage : RFID UHF + imageur 2D SE4770 en un seul appareil",
            "Wi-Fi 802.11ac pour une connexion réseau rapide en entrepôt",
            "Batterie haute capacité pour les journées de travail les plus longues",
            "47 touches pour une saisie de données complète sur le terrain",
        ],
    },

    // ── Lecteurs fixes ─────────────────────────────────────────────────────
    "FXR90011-400000-WR": {
        nom: "FXR90",
        sku: "FXR90011-400000-WR",
        image: fxr90,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0003/fxr90-video-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: fxr90 }
        ],
        categorie: "fixe",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Lecteur RFID fixe ultra-robuste UHF Wi-Fi 6 Bluetooth 5.3 — 4 ports antennes externes",
        description:
            "Le FXR90 est le lecteur RFID fixe le plus avancé de Zebra, conçu pour les déploiements d'infrastructure RFID en entrepôt, en logistique et en commerce de détail. Sa compatibilité avec les fréquences mondiales 800 MHz et 900 MHz en fait un choix universel pour les installations internationales. Ses 4 ports d'antenne externes permettent une couverture étendue de toute une zone de lecture.",
        specs: [
            { label: "Type", valeur: "Lecteur RFID fixe ultra-robuste" },
            { label: "Protocole", valeur: "RFID UHF (RAIN RFID)" },
            { label: "Wi-Fi", valeur: "Wi-Fi 6 (802.11ax)" },
            { label: "Bluetooth", valeur: "5.3" },
            { label: "Antenne intégrée", valeur: "Linéaire à polarisation croisée" },
            { label: "Ports antennes externes", valeur: "4 ports" },
            { label: "Fréquences", valeur: "800 MHz et 900 MHz (mondiales)" },
            { label: "Construction", valeur: "Ultra-robuste" },
        ],
        points: [
            "Compatible fréquences mondiales 800/900 MHz pour les déploiements internationaux",
            "4 ports d'antennes externes pour couvrir de grandes zones de lecture",
            "Wi-Fi 6 pour une intégration réseau haute performance",
            "Bluetooth 5.3 pour la communication avec les périphériques environnants",
            "Antenne linéaire intégrée à polarisation croisée pour une lecture fiable des tags",
        ],
    },

    // ── Antennes ───────────────────────────────────────────────────────────
    "AN720-L51NF00WEU": {
        nom: "AN720",
        sku: "AN720-L51NF00WEU",
        image: an720,
        medias: [{ type: "image", src: an720 }],
        categorie: "antennes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Antenne RFID robuste fréquence EU — Classe 4, utilisation restreinte",
        description:
            "L'AN720 est une antenne RFID robuste conçue pour les environnements industriels exigeants en Europe. Article à utilisation restreinte de classe 4, elle nécessite une certification correspondante pour son déploiement. Sa robustesse et ses performances de portée en font un composant clé pour les infrastructures RFID fixes en entrepôt ou en logistique.",
        specs: [
            { label: "Type", valeur: "Antenne RFID externe robuste" },
            { label: "Fréquence", valeur: "Bande EU (ETSI)" },
            { label: "Classe", valeur: "Classe 4 — utilisation restreinte" },
            { label: "Certification", valeur: "Certification spécifique requise" },
            { label: "Construction", valeur: "Robuste — pour environnements industriels" },
            { label: "Compatibilité", valeur: "Lecteurs RFID fixes Zebra (dont FXR90)" },
            { label: "Distribution", valeur: "Europe (EU)" },
        ],
        points: [
            "Robustesse industrielle pour une installation en environnement difficile",
            "Fréquence EU certifiée pour les déploiements conformes en Europe",
            "Haute performance de portée pour couvrir de grandes surfaces",
            "Compatible avec toute la gamme de lecteurs fixes Zebra",
            "Conçue pour le suivi précis des stocks et des actifs en temps réel",
        ],
    },

    // ── Imprimantes RFID ───────────────────────────────────────────────────
    "ZD6A142-30ELR2EZ": {
        nom: "ZD621R",
        sku: "ZD6A142-30ELR2EZ",
        image: zd621r,
        medias: [{ type: "image", src: zd621r }],
        categorie: "imprimantes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante d'étiquettes RFID professionnelle 203 dpi avec écran tactile couleur",
        description:
            "La ZD621R est l'imprimante RFID de bureau professionnelle de Zebra, capable d'imprimer et d'encoder simultanément des étiquettes RFID UHF. Sa résolution de 203 dpi garantit une qualité d'impression optimale, et son écran tactile couleur simplifie la configuration et le suivi en temps réel. Idéale pour la gestion d'inventaire, la traçabilité et la logistique.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique + encodage RFID UHF" },
            { label: "Résolution", valeur: "203 dpi" },
            { label: "Écran", valeur: "Tactile couleur" },
            { label: "Protocole RFID", valeur: "UHF (RAIN RFID)" },
            { label: "Interfaces", valeur: "USB, Ethernet, Bluetooth, Wi-Fi" },
            { label: "Applications", valeur: "Inventaire, traçabilité, logistique" },
            { label: "Langage", valeur: "EZPL / ZPL II" },
            { label: "Câbles", valeur: "UE et Royaume-Uni inclus" },
        ],
        points: [
            "Impression et encodage RFID UHF en une seule passe",
            "Écran tactile couleur pour une configuration et un suivi intuitifs",
            "203 dpi pour des étiquettes nettes et lisibles par tous les lecteurs RFID",
            "Multi-interfaces pour s'intégrer à tout environnement informatique",
            "Encodeur RFID installable en usine ou sur site selon les besoins",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function RFIDDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/rfid")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux produits RFID
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
                <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-43 pb-3 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(`/rfid?categorie=${produit.categorie}`)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> RFID
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
                                className={`font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 ${accent.outline}`}
                            >
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
                            Découvrez d'autres produits RFID {produit.categorie}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map((p) => (
                                <button
                                    key={p.sku}
                                    onClick={() => navigate(`/rfid/${p.sku}`)}
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
                            onClick={() => navigate(`/rfid?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres produits RFID
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}