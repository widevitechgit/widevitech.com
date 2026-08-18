import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaChevronRight, FaPlay,
    FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaFileDownload,
} from "react-icons/fa"
import et40 from "../images/et40.jpg"
import et40hc from "../images/ET40-HC.jpg"
import et60 from "../images/ET60.jpg"
import et80 from "../images/ET80.jpg"
import et60w from "../images/et60w.jpg"

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
    "ET40AB-001C1B0-A6": {
        nom: "ET40",
        sku: "ET40AB-001C1B0-A6",
        image: et40,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0005/et401-video-product-overview-web-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et40 }
        ],
        gamme: "et4x",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Tablette durcie professionnelle Android 10 pouces",
        description:
            "La tablette ET40 de Zebra combine robustesse et performance dans un format 10 pouces compact. Conçue pour les environnements exigeants, elle offre une connectivité Wi-Fi 6 ultra-rapide et un scanner SE4100 intégré pour la capture de codes-barres intensives.",
        specs: [
            { label: "Écran", valeur: "10 pouces, tactile" },
            { label: "Connectivité", valeur: "Wi-Fi 6 (802.11ax)" },
            { label: "Scanner", valeur: "SE4100" },
            { label: "RAM / Stockage", valeur: "4 Go / 64 Go" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Référence", valeur: "SKU RANGÉE" },
        ],
        points: [
            "Durabilité certifiée pour les environnements industriels",
            "Scanner de codes-barres intégré haute performance",
            "Wi-Fi 6 pour une connectivité réseau optimale",
            "Gestion centralisée via Zebra DNA",
            "Batterie longue durée pour des journées de travail intensives",
        ],
    },

    "ET60WW-0S6DPS00A0-00": {
        nom: "ET60W",
        sku: "ET60WW-0S6DPS00A0-00",
        image: et60w,
        medias: [
            { type: "image", src: et60w }
        ],
        gamme: "et6x",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Tablette Windows durcie 10,1 pouces avec Intel Core Ultra 5 vPro, 16 Go de RAM et SSD 256 Go",
        description:
            "La Zebra ET60W est une tablette professionnelle Windows durcie conçue pour les environnements industriels, la logistique, les entrepôts, les opérations de terrain et les applications de maintenance. Cette configuration ET60WW-0S6DPS00A0-00 intègre un processeur Intel Core Ultra 5 vPro, 16 Go de mémoire LPDDR5, un SSD NVMe de 256 Go, une batterie standard de 36 Wh et Windows 11 Pro 64 bits. Son écran tactile WUXGA de 10,1 pouces offre une luminosité de 1 000 nits et fonctionne avec les doigts nus ou gantés ainsi qu'avec un stylet compatible. Avec son indice IP66, sa résistance aux chutes selon MIL-STD-810H et ses fonctions de connectivité Wi-Fi de nouvelle génération, l'ET60W est conçue pour assurer une productivité élevée dans les environnements exigeants.",
        specs: [
            { label: "Type", valeur: "Tablette professionnelle Windows durcie" },
            { label: "Modèle", valeur: "ET60W" },
            { label: "SKU", valeur: "ET60WW-0S6DPS00A0-00" },
            { label: "Processeur", valeur: "Intel Core Ultra 5 135U vPro" },
            { label: "Système d'exploitation", valeur: "Windows 11 Pro 64 bits" },
            { label: "Mémoire", valeur: "16 Go LPDDR5" },
            { label: "Stockage", valeur: "256 Go SSD M.2 2230 PCIe NVMe" },
            { label: "Écran", valeur: "10,1 pouces WUXGA (1920 × 1200)" },
            { label: "Luminosité", valeur: "1 000 nits" },
            { label: "Écran tactile", valeur: "Multi-touch capacitif, doigts nus ou gantés, Corning Gorilla Glass" },
            { label: "Ports", valeur: "1 × USB 3.1 Type-A, 2 × Thunderbolt 4 / USB4 Type-C" },
            { label: "Connectivité", valeur: "Wi-Fi 7, compatible Wi-Fi 6E, 2×2 MU-MIMO" },
            { label: "Bluetooth", valeur: "Bluetooth 5.x" },
            { label: "Caméra arrière", valeur: "13 MP autofocus avec flash LED" },
            { label: "Caméra avant", valeur: "5 MP RGB avec cache de confidentialité" },
            { label: "Sécurité biométrique", valeur: "Caméra infrarouge compatible Windows Hello" },
            { label: "Scanner intégré", valeur: "SE55 1D/2D IntelliFocus en option" },
            { label: "Batterie", valeur: "36 Wh standard" },
            { label: "Charge", valeur: "USB Power Delivery 3.0, 45 W" },
            { label: "Hot Swap", valeur: "Oui, au moins 60 secondes" },
            { label: "Dimensions", valeur: "275 × 199 × 18,3 mm" },
            { label: "Poids", valeur: "Environ 1,2 kg" },
            { label: "Indice de protection", valeur: "IP66" },
            { label: "Résistance aux chutes", valeur: "MIL-STD-810H, jusqu'à 1,5 m sur béton" },
            { label: "Température de fonctionnement", valeur: "-29 °C à +63 °C" },
            { label: "Température de stockage", valeur: "-40 °C à +70 °C" },
            { label: "Certification atmosphères explosives", valeur: "Classe 1 Division 2 sur certaines configurations" },
        ],
        points: [
            "Configuration exacte avec Intel Core Ultra 5 vPro, 16 Go de RAM et SSD 256 Go",
            "Windows 11 Pro 64 bits pour les applications professionnelles et industrielles",
            "Écran WUXGA 10,1 pouces de 1 000 nits adapté aux environnements lumineux",
            "Écran tactile utilisable avec les doigts nus ou gantés",
            "Wi-Fi 7 avec prise en charge des bandes 2,4 GHz, 5 GHz et 6 GHz",
            "Deux ports Thunderbolt 4 / USB4 Type-C et un port USB Type-A",
            "Batterie standard 36 Wh avec véritable fonction Hot Swap",
            "Résistance IP66 contre la poussière et les projections d'eau",
            "Conception renforcée conforme aux exigences MIL-STD-810H",
            "Caméra arrière 13 MP et caméra avant 5 MP avec support Windows Hello",
            "Scanner 1D/2D SE55 disponible en option",
            "Conçue pour les entrepôts, la logistique, la fabrication et les interventions sur le terrain"
        ],
    },

    "ET45CB-101D2B0-A6": {
        nom: "ET45",
        sku: "ET45CB-101D2B0-A6",
        image: et40,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0005/et401-video-product-overview-web-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et40 }
        ],
        gamme: "et4x",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Tablette durcie professionnelle 5G Android 10 pouces",
        description:
            "L'ET45 pousse les capacités de la gamme ET4x encore plus loin avec la connectivité 5G et un scanner SE4710 avancé. Idéale pour les équipes terrain nécessitant une connexion ultra-rapide et une capture de codes-barres de pointe.",
        specs: [
            { label: "Écran", valeur: "10 pouces, tactile" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6 (802.11ax)" },
            { label: "Scanner", valeur: "SE4710" },
            { label: "RAM / Stockage", valeur: "8 Go / 128 Go" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Référence", valeur: "ROW SKU" },
        ],
        points: [
            "Connectivité 5G pour les équipes terrain ultra-mobiles",
            "8 Go de RAM pour les applications les plus exigeantes",
            "Scanner SE4710 à haute précision",
            "Wi-Fi 6 intégré en complément du 5G",
            "128 Go de stockage pour les données volumineuses",
        ],
    },
    "ET40AB-0H1C1B0-A6": {
        nom: "ET40-HC",
        sku: "ET40AB-0H1C1B0-A6",
        image: et40hc,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/et40-hc-et45-hc-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et40hc }
        ],
        gamme: "et4x-hc",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Tablette durcie pour le secteur de la santé",
        description:
            "L'ET40-HC est spécialement conçue pour les environnements de soins de santé. Sa surface anti-microbienne résiste aux désinfectants les plus agressifs, garantissant une hygiène optimale dans les hôpitaux, cliniques et établissements médicaux.",
        specs: [
            { label: "Écran", valeur: "10 pouces, tactile avec gants" },
            { label: "Connectivité", valeur: "Wi-Fi 6 (802.11ax)" },
            { label: "Scanner", valeur: "SE4100" },
            { label: "RAM / Stockage", valeur: "4 Go / 64 Go" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Boîtier", valeur: "Anti-microbien, résistant aux désinfectants" },
        ],
        points: [
            "Boîtier anti-microbien certifié pour les milieux de soins",
            "Compatible avec les protocoles de désinfection hospitaliers",
            "Écran utilisable avec des gants médicaux",
            "Caméra arrière pour la documentation médicale",
            "Conforme aux réglementations sanitaires en vigueur",
        ],
    },
    "ET45CB-1H1C1B0-A6": {
        nom: "ET45-HC",
        sku: "ET45CB-1H1C1B0-A6",
        image: et40hc,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/et40-hc-et45-hc-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et40hc }
        ],
        gamme: "et4x-hc",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Tablette de santé 5G ultra-connectée",
        description:
            "L'ET45-HC combine les avantages de la connectivité 5G avec les certifications médicales indispensables au secteur de la santé. Parfaite pour les équipes soignantes mobiles dans des établissements aux grandes surfaces ou sur plusieurs sites.",
        specs: [
            { label: "Écran", valeur: "10 pouces, tactile avec gants" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6 (802.11ax)" },
            { label: "Scanner", valeur: "SE4100" },
            { label: "RAM / Stockage", valeur: "4 Go / 64 Go" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Boîtier", valeur: "Anti-microbien, résistant aux désinfectants" },
        ],
        points: [
            "5G pour les établissements de santé multi-sites",
            "Boîtier anti-microbien certifié",
            "Utilisable avec des gants médicaux",
            "Légère et ergonomique pour une utilisation prolongée",
            "Intégration simplifiée aux systèmes hospitaliers",
        ],
    },
    "ET60AW-0SQAGS00A0-A6": {
        nom: "ET60",
        sku: "ET60AW-0SQAGS00A0-A6",
        image: et60,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/et6x-series-video-product-overview-web-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et60 }
        ],
        gamme: "et6x",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "La tablette durcie la plus polyvalente du marché",
        description:
            "L'ET60 représente le summum de la polyvalence dans les tablettes industrielles. Disponible en version Android et Windows, elle s'adapte à tous les environnements professionnels grâce à son moteur IA intégré et ses capacités de personnalisation avancées.",
        specs: [
            { label: "Écran", valeur: "Tactile standard, haute luminosité" },
            { label: "RAM / Stockage", valeur: "8 Go / 128 Go" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Batterie", valeur: "Batterie standard longue durée" },
            { label: "Certifications", valeur: "IP65, MIL-STD-810H" },
            { label: "Référence", valeur: "ROW SKU" },
        ],
        points: [
            "Moteur IA dédié pour des applications intelligentes",
            "Robustesse IP65 et MIL-STD-810H certifiée",
            "Compatible Android et Windows selon les besoins",
            "Écran haute luminosité lisible en extérieur",
            "Autonomie batterie optimisée pour les longues journées",
        ],
    },
    "ET80A-0P5B2-CF0": {
        nom: "ET80 2-en-1",
        sku: "ET80A-0P5B2-CF0",
        image: et80,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/et80-et85-tablets-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: et80 }
        ],
        gamme: "et8x",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Tablette durcie Windows 12 pouces 2-en-1 de niveau professionnel",
        description:
            "L'ET80 redéfinit la notion de tablette robuste avec son format 2-en-1 12 pouces sous Windows Pro. Conçue pour les équipes d'intervention, techniciens et opérateurs en ligne de production, elle offre la puissance d'un PC dans un boîtier capable de résister aux conditions les plus extrêmes.",
        specs: [
            { label: "Écran", valeur: "12 pouces, 2-en-1 (tablette + clavier)" },
            { label: "Connectivité", valeur: "Wi-Fi" },
            { label: "Processeur", valeur: "Intel Core i5" },
            { label: "RAM / Stockage", valeur: "16 Go / SSD 256 Go" },
            { label: "Système", valeur: "Windows Pro" },
            { label: "Certifications", valeur: "IP65, BCR, NFC, lecteur d'empreintes" },
            { label: "Garantie", valeur: "3 ans" },
        ],
        points: [
            "Format 2-en-1 : tablette et PC portable en un seul appareil",
            "Intel Core i5 pour les applications professionnelles lourdes",
            "Certifié IP65 — résistant à la poussière et aux liquides",
            "Lecteur d'empreintes digitales et NFC intégrés",
            "Garantie constructeur 3 ans incluse",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function TabletteDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/tablettes")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux tablettes
                </button>
            </div>
        )
    }

    const accent = accentFromGradient(produit.couleurGradient)
    const autresModeles = Object.values(PRODUITS)
        .filter((p) => p.gamme === produit.gamme && p.sku !== produit.sku)
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-white">

            {/* ── Fil d'ariane ── */}
            <div className="border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 pt-20 pb-3 md:pt-43 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(`/tablettes?categorie=${produit.gamme}`)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> Tablettes
                    </button>
                    <span className="text-gray-300">/</span>
                    <span className="uppercase text-gray-400">{produit.gamme}</span>
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
                            Zebra — {produit.gamme}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] text-black">
                            {produit.nom}
                        </h1>
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
                                <span>Conçue pour les environnements exigeants</span>
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

            {/* ── Autres produits de la gamme ── */}
            {autresModeles.length > 0 && (
                <section className="bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">
                            Découvrez d'autres tablettes {produit.gamme}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map((p) => (
                                <button
                                    key={p.sku}
                                    onClick={() => {navigate(`/tablettes/${p.sku}`), window.scrollTo(0,0)}}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:shadow-lg transition-all"
                                >
                                    <div className="bg-gray-50 rounded-2xl p-6 w-full flex items-center justify-center">
                                        <img src={p.image} alt={p.nom} className="w-24 h-28 object-contain" />
                                    </div>
                                    <h3 className="font-bold text-black">{p.nom}</h3>
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
                            onClick={() => navigate(`/tablettes?categorie=${produit.gamme}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres tablettes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}