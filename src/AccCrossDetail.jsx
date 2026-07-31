import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaStar, FaStarHalfAlt, FaRegStar,
    FaShieldAlt, FaTint, FaBatteryThreeQuarters, FaMedal,
    FaBolt, FaCheckCircle, FaChevronDown, FaTruck, FaUndoAlt,
    FaAward,
} from "react-icons/fa"
import x_bike from "../images/X-BIKE.webp"
import x_car_pro from "../images/X-CAR_PRO.webp"
import x_vibes from "../images/X-VIBES.webp"
import x_glass from "../images/X-GLASS.webp"
import x_cable from "../images/X-CABLE.webp"
import x_power from "../images/X-POWER.webp"
import x_docke from "../images/X-DOCKER.webp"
import chargeur_usbc from "../images/Chargeur_USBC.webp"
import x_blocker from "../images/X-BLOCKER.webp"
import x_glass0 from "../images/X-GLASS_CORE-M6.webp"
import cable_usbc_usbc from "../images/CABLE_USB-C_USB-C.webp"
import stylus_case from "../images/STYLUS_CASE.webp"
import holster from "../images/HOLSTER.webp"

// ─── Composant étoiles ────────────────────────────────────────────────────────
function Stars({ note, dark = false }) {
    return (
        <div className="flex items-center gap-1 text-lime-500">
            {[1, 2, 3, 4, 5].map(i => {
                if (note >= i) return <FaStar key={i} />
                if (note >= i - 0.5) return <FaStarHalfAlt key={i} />
                return <FaRegStar key={i} />
            })}
            <span className={`ml-2 font-semibold ${dark ? "text-gray-500" : "text-white/80"}`}>{note}</span>
        </div>
    )
}

// ─── Base de données produits ─────────────────────────────────────────────────
const PRODUITS = {

    // ── Accessoires Téléphone ─────────────────────────────────────────────
    "x-glass": {
        nom: "X-GLASS",
        slug: "x-glass",
        image: x_glass,
        categorie: "tel",
        hidden: "hidden",
        note: 4.3,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Protection d'écran en verre trempé pour smartphones Crosscall",
        description:
            "Le X-GLASS est la protection d'écran en verre trempé officielle Crosscall. Sa dureté 9H protège l'écran de votre smartphone contre les rayures, les chocs et les chutes accidentelles, tout en conservant la sensibilité tactile d'origine. Compatible avec les gammes CORE et STELLAR.",
        specs: [
            { label: "Matériau", valeur: "Verre trempé 9H" },
            { label: "Épaisseur", valeur: "0,3 mm" },
            { label: "Compatibilité", valeur: "Gammes CORE et STELLAR Crosscall" },
            { label: "Transparence", valeur: "99,9 %" },
            { label: "Type", valeur: "Protection d'écran" },
        ],
        points: [
            "Verre trempé 9H — protection maximale contre les rayures",
            "Épaisseur 0,3 mm pour une transparence et une sensibilité optimales",
            "Installation facile sans bulles grâce au système d'alignement",
            "Conserve la qualité d'affichage et la réactivité tactile",
            "Compatible avec les coques Crosscall officielles",
        ],
    },

    "x-cable": {
        nom: "X-CABLE",
        slug: "x-cable",
        image: x_cable,
        categorie: "tel",
        hidden: "hidden",
        note: 4.4,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Câble de recharge robuste renforcé — compatible smartphones Crosscall",
        description:
            "Le X-CABLE est le câble de recharge officiel Crosscall, conçu pour résister aux conditions d'utilisation les plus exigeantes. Sa gaine renforcée résiste aux torsions, aux arrachements et aux pliages répétés. Idéal pour les professionnels qui utilisent leur smartphone en extérieur ou dans des environnements difficiles.",
        specs: [
            { label: "Type", valeur: "Câble de recharge renforcé" },
            { label: "Gaine", valeur: "Renforcée — résistante aux torsions" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall CORE et STELLAR" },
            { label: "Longueur", valeur: "1,2 m" },
            { label: "Norme", valeur: "USB certifié" },
        ],
        points: [
            "Gaine renforcée pour une durée de vie 3x supérieure aux câbles standard",
            "Résistant aux torsions et aux arrachements répétés",
            "Longueur 1,2 m pour une utilisation confortable",
            "Certification officielle Crosscall",
            "Idéal pour les environnements de travail difficiles",
        ],
    },

    "x-power": {
        nom: "X-POWER",
        slug: "x-power",
        image: x_power,
        hidden: "hidden",
        categorie: "tel",
        note: 4.3,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Batterie externe portable robuste — compatible système X-LINK Crosscall",
        description:
            "Le X-POWER est la batterie externe officielle Crosscall, compatible avec le système de fixation X-LINK. Elle se fixe directement à l'arrière de votre smartphone Crosscall pour recharger en déplacement sans encombrement. Sa construction robuste la rend résistante aux chocs et aux intempéries.",
        specs: [
            { label: "Capacité", valeur: "3 000 mAh" },
            { label: "Système", valeur: "Compatible X-LINK (fixation magnétique)" },
            { label: "Construction", valeur: "Robuste — résistant aux chocs" },
            { label: "Sortie", valeur: "USB-C" },
            { label: "Poids", valeur: "Compact et léger" },
        ],
        points: [
            "Fixation X-LINK directe sur l'arrière du smartphone",
            "3 000 mAh pour une recharge complète en déplacement",
            "Construction robuste certifiée pour les environnements difficiles",
            "Sortie USB-C compatible avec tous les Crosscall récents",
            "Compact et léger — ne gêne pas l'utilisation",
        ],
    },

    "x-docker": {
        nom: "X-DOCKER",
        slug: "x-docker",
        hidden: "hidden",
        image: x_docke,
        categorie: "tel",
        note: 4.3,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Station de charge bureau compatible X-LINK — recharge sans brancher de câble",
        description:
            "Le X-DOCKER est la station de charge bureau Crosscall compatible avec le système X-LINK. Posez simplement votre smartphone sur le dock pour lancer la recharge sans avoir à brancher un câble. Idéal pour le bureau ou le poste de travail fixe, il maintient votre téléphone en position verticale.",
        specs: [
            { label: "Type", valeur: "Station de charge bureau" },
            { label: "Système", valeur: "Compatible X-LINK" },
            { label: "Recharge", valeur: "Contact direct via connecteur X-LINK" },
            { label: "Position", valeur: "Verticale — économise l'espace bureau" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall avec X-LINK" },
        ],
        points: [
            "Recharge instantanée en posant le téléphone — sans câble",
            "Position verticale pour garder l'écran visible sur le bureau",
            "Compatible avec tout smartphone Crosscall équipé X-LINK",
            "Design compact et discret pour le bureau professionnel",
            "Connexion fiable grâce au système X-LINK magnétique",
        ],
    },

    "chargeur-usbc": {
        nom: "Chargeur USB-C",
        slug: "chargeur-usbc",
        hidden: "hidden",
        image: chargeur_usbc,
        categorie: "tel",
        note: 4.4,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Chargeur secteur USB-C recharge rapide — certifié Crosscall",
        description:
            "Le chargeur secteur USB-C officiel Crosscall est compatible avec l'ensemble de la gamme de smartphones CORE et STELLAR. Sa technologie de recharge rapide réduit significativement le temps de charge pour que votre équipe reste toujours opérationnelle.",
        specs: [
            { label: "Connecteur", valeur: "USB-C" },
            { label: "Puissance", valeur: "Recharge rapide" },
            { label: "Norme", valeur: "Certifié CE" },
            { label: "Compatibilité", valeur: "Gammes CORE et STELLAR Crosscall" },
            { label: "Câble", valeur: "Non inclus" },
        ],
        points: [
            "Recharge rapide certifiée pour les smartphones Crosscall",
            "Certification CE pour une utilisation en toute sécurité",
            "Compatible avec tous les Crosscall USB-C",
            "Compact pour le transport en déplacement professionnel",
            "Idéal comme chargeur de remplacement ou de secours",
        ],
    },

    "x-blocker": {
        nom: "X-BLOCKER",
        slug: "x-blocker",
        hidden: "hidden",
        image: x_blocker,
        categorie: "tel",
        note: 4.1,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Bouchon de protection pour port USB-C — anti-poussière et anti-eau",
        description:
            "Le X-BLOCKER est un bouchon de protection pour port USB-C des smartphones Crosscall. Il renforce la protection contre la poussière et l'eau en obturant le port de charge lorsqu'il n'est pas utilisé, complétant ainsi la certification IP68 du smartphone en conditions extrêmes.",
        specs: [
            { label: "Type", valeur: "Bouchon de protection port USB-C" },
            { label: "Protection", valeur: "Anti-poussière et anti-eau" },
            { label: "Matériau", valeur: "Caoutchouc souple" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall USB-C" },
            { label: "Quantité", valeur: "Pack de plusieurs bouchons" },
        ],
        points: [
            "Renforce la protection IP68 en obturant le port USB-C",
            "Caoutchouc souple — facile à poser et retirer",
            "Protection contre l'eau, la boue et la poussière fine",
            "Indispensable pour les missions en environnement extrême",
            "Pack de plusieurs bouchons pour ne jamais en manquer",
        ],
    },

    "x-glass-core-m6": {
        nom: "X-GLASS CORE-M6",
        slug: "x-glass-core-m6",
        image: x_glass0,
        categorie: "tel",
        hidden: "hidden",
        note: 4.3,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Protection d'écran verre trempé 9H taillée sur mesure pour le CORE-M6",
        description:
            "Le X-GLASS CORE-M6 est la protection d'écran en verre trempé 9H spécialement découpée pour s'adapter parfaitement au CORE-M6 de Crosscall. Sa découpe précise garantit une couverture totale de l'écran sans débordement sur les bords, pour une protection optimale sans compromettre l'ergonomie.",
        specs: [
            { label: "Matériau", valeur: "Verre trempé 9H" },
            { label: "Épaisseur", valeur: "0,3 mm" },
            { label: "Compatibilité", valeur: "CORE-M6 uniquement" },
            { label: "Découpe", valeur: "Sur mesure CORE-M6" },
            { label: "Transparence", valeur: "99,9 %" },
        ],
        points: [
            "Découpe sur mesure pour une couverture parfaite du CORE-M6",
            "Verre trempé 9H contre les rayures et les chocs",
            "0,3 mm d'épaisseur pour garder la sensibilité tactile",
            "Installation sans bulles grâce au système d'alignement",
            "Compatible avec les coques officielles CORE-M6",
        ],
    },

    "cable-usbc-usbc": {
        nom: "CÂBLE USB-C / USB-C",
        slug: "cable-usbc-usbc",
        image: cable_usbc_usbc,
        categorie: "tel",
        hidden: "hidden",
        note: 4.5,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Câble USB-C vers USB-C renforcé pour recharge rapide et transfert de données",
        description:
            "Ce câble USB-C vers USB-C officiel Crosscall supporte la recharge rapide et le transfert de données haute vitesse. Sa gaine tressée renforcée résiste aux pliages répétés et aux torsions pour une longévité accrue dans les conditions d'utilisation professionnelles les plus exigeantes.",
        specs: [
            { label: "Connecteurs", valeur: "USB-C vers USB-C" },
            { label: "Gaine", valeur: "Tressée renforcée" },
            { label: "Recharge", valeur: "Rapide compatible" },
            { label: "Transfert", valeur: "Données haute vitesse" },
            { label: "Longueur", valeur: "1,2 m" },
        ],
        points: [
            "Gaine tressée renforcée pour une durabilité maximale",
            "Compatible recharge rapide pour recharger en un minimum de temps",
            "Transfert de données haute vitesse pour la synchronisation",
            "USB-C vers USB-C — universel pour tous les appareils récents",
            "Certifié Crosscall pour une compatibilité garantie",
        ],
    },

    "stylus-case": {
        nom: "STYLUS CASE",
        badge: "Rupture de stock",
        slug: "stylus-case",
        image: stylus_case,
        categorie: "tel",
        note: 3.9,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Étui de protection avec porte-stylet intégré pour smartphones Crosscall",
        description:
            "Le STYLUS CASE est un étui de protection pour smartphones Crosscall intégrant un porte-stylet pratique. Idéal pour les professionnels qui utilisent un stylet pour la prise de notes, la signature de documents ou les applications terrain, il offre une protection renforcée tout en gardant le stylet toujours à portée de main.",
        specs: [
            { label: "Type", valeur: "Étui de protection avec porte-stylet" },
            { label: "Porte-stylet", valeur: "Intégré" },
            { label: "Matériau", valeur: "Polycarbonate renforcé" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall compatibles" },
            { label: "Stylet", valeur: "Non inclus" },
        ],
        points: [
            "Porte-stylet intégré pour garder l'outil toujours à portée",
            "Protection renforcée contre les chocs et les chutes",
            "Accès libre à tous les boutons et connecteurs",
            "Idéal pour la signature terrain et la prise de notes",
            "Stylet compatible vendu séparément",
        ],
    },

    "holster": {
        nom: "HOLSTER",
        slug: "holster",
        badge: "Rupture de stock",
        image: holster,
        categorie: "tel",
        note: 3.8,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Holster ceinture rotatif pour smartphones Crosscall — mains libres sur le terrain",
        description:
            "Le HOLSTER Crosscall est une étui ceinture rotatif permettant de porter son smartphone de manière sécurisée à la ceinture. Son clip rotatif à 360° s'adapte à toutes les positions et sa fermeture magnétique sécurisée protège le téléphone tout en permettant un accès rapide. Indispensable pour les professionnels qui ont besoin de leurs mains libres.",
        specs: [
            { label: "Type", valeur: "Holster ceinture" },
            { label: "Clip", valeur: "Rotatif 360°" },
            { label: "Fermeture", valeur: "Magnétique sécurisée" },
            { label: "Matériau", valeur: "Nylon renforcé" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall CORE et STELLAR" },
        ],
        points: [
            "Clip rotatif 360° pour toutes les positions de port",
            "Fermeture magnétique pour un accès rapide et sécurisé",
            "Mains libres totales sur le terrain",
            "Nylon renforcé résistant aux environnements exigeants",
            "Compatible avec les coques de protection Crosscall",
        ],
    },

    // ── Vélo ──────────────────────────────────────────────────────────────
    "x-bike": {
        nom: "X-BIKE",
        slug: "x-bike",
        image: x_bike,
        categorie: "velo",
        hidden: "hidden",
        note: 4.4,
        couleurGradient: "from-gray-900 via-green-900 to-lime-900",
        accroche: "Support vélo magnétique X-LINK pour smartphones Crosscall",
        description:
            "Le X-BIKE est un support vélo officiel Crosscall compatible avec le système X-LINK. Il se fixe au guidon de votre vélo ou VTT et maintient votre smartphone en place de manière sécurisée grâce à la fixation magnétique X-LINK. Idéal pour les professionnels se déplaçant à vélo ou pour les loisirs outdoor.",
        specs: [
            { label: "Type", valeur: "Support vélo" },
            { label: "Système", valeur: "Compatible X-LINK (fixation magnétique)" },
            { label: "Fixation guidon", valeur: "Universel — diamètre standard et oversize" },
            { label: "Rotation", valeur: "Portrait et paysage" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall avec X-LINK" },
        ],
        points: [
            "Fixation X-LINK magnétique — pose et dépose en une seconde",
            "Compatible guidon standard et oversize (VTT, vélo de route)",
            "Rotation portrait/paysage pour adapter l'affichage",
            "Résistant aux vibrations et aux chocs sur terrain accidenté",
            "Compatible avec tous les smartphones Crosscall équipés X-LINK",
        ],
    },

    // ── Voiture ───────────────────────────────────────────────────────────
    "x-car-pro": {
        nom: "X-CAR PRO",
        slug: "x-car-pro",
        image: x_car_pro,
        categorie: "voiture",
        hidden: "hidden",
        note: 4.4,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Support voiture X-LINK avec recharge sans fil intégrée",
        description:
            "Le X-CAR PRO est le support voiture haut de gamme Crosscall. Compatible avec le système X-LINK, il se fixe sur la grille de ventilation ou le pare-brise de votre véhicule et intègre une recharge sans fil pour maintenir votre smartphone chargé tout au long du trajet. Idéal pour les commerciaux et techniciens itinérants.",
        specs: [
            { label: "Type", valeur: "Support voiture avec recharge sans fil" },
            { label: "Système", valeur: "Compatible X-LINK" },
            { label: "Recharge", valeur: "Sans fil intégrée" },
            { label: "Fixation", valeur: "Grille d'aération + ventouse pare-brise" },
            { label: "Rotation", valeur: "Portrait et paysage" },
            { label: "Compatibilité", valeur: "Smartphones Crosscall avec X-LINK" },
        ],
        points: [
            "Recharge sans fil intégrée — le téléphone se recharge en roulant",
            "Double fixation : grille d'aération ou ventouse pare-brise",
            "Fixation X-LINK magnétique pour une pose/dépose instantanée",
            "Rotation portrait/paysage pour la navigation GPS",
            "Idéal pour les commerciaux et techniciens itinérants",
        ],
    },

    // ── Écouteurs ─────────────────────────────────────────────────────────
    "x-vibes": {
        nom: "X-VIBES",
        slug: "x-vibes",
        image: x_vibes,
        categorie: "ecouteur",
        hidden: "hidden",
        note: 4.2,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Écouteurs sans fil robustes certifiés IP55 — autonomie 24 h, réduction de bruit",
        description:
            "Les X-VIBES sont les écouteurs sans fil officiels Crosscall, conçus pour accompagner les professionnels dans les environnements les plus bruyants. Leur certification IP55 les rend résistants à la transpiration, à la pluie et à la poussière. Leur autonomie de 24 heures (boîtier inclus) garantit une utilisation toute la journée sans interruption.",
        specs: [
            { label: "Type", valeur: "Écouteurs sans fil True Wireless" },
            { label: "Certification", valeur: "IP55 — résistant eau et poussière" },
            { label: "Autonomie écouteurs", valeur: "6 heures" },
            { label: "Autonomie totale", valeur: "24 heures avec boîtier de charge" },
            { label: "Réduction de bruit", valeur: "Active (ANC)" },
            { label: "Connectivité", valeur: "Bluetooth 5.2" },
            { label: "Microphone", valeur: "Intégré pour appels mains libres" },
        ],
        points: [
            "Certification IP55 — résistants à la pluie et à la transpiration",
            "24 heures d'autonomie totale avec le boîtier de charge",
            "Réduction de bruit active pour les environnements bruyants",
            "Bluetooth 5.2 pour une connexion stable et sans latence",
            "Microphone intégré pour les appels mains libres sur le terrain",
        ],
    },
}

// ─── Icônes tournantes pour les points forts ─────────────────────────────────
const ICONES_POINTS = [FaShieldAlt, FaTint, FaBatteryThreeQuarters, FaBolt, FaMedal, FaCheckCircle]

// ─── Bloc FAQ générique (accordéon) ───────────────────────────────────────────
function FaqItem({ question, reponse, ouvert, onToggle }) {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 text-left"
            >
                <span className="font-semibold text-gray-900 text-[15px] pr-6">{question}</span>
                <FaChevronDown className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${ouvert ? "rotate-180 text-lime-500" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${ouvert ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"} overflow-hidden`}>
                <p className="text-gray-500 text-sm leading-relaxed min-h-0">{reponse}</p>
            </div>
        </div>
    )
}

// ─── FAQ générée à partir des specs / points du produit ──────────────────────
function genererFaq(produit) {
    return [
        {
            q: `Le ${produit.nom} est-il compatible avec tous les smartphones Crosscall ?`,
            r: produit.specs.find(s => s.label.toLowerCase().includes("compat"))?.valeur
                ? `Compatibilité : ${produit.specs.find(s => s.label.toLowerCase().includes("compat")).valeur}. Vérifiez le modèle exact de votre smartphone avant commande.`
                : "Ce produit est conçu pour s'intégrer à l'écosystème d'accessoires Crosscall. Contactez notre équipe commerciale en cas de doute sur la compatibilité.",
        },
        {
            q: "Quels sont les délais et frais de livraison ?",
            r: "Livraison en 48 à 72h. La livraison est offerte dès 149€ d'achat, sinon des frais de port standards s'appliquent selon votre zone.",
        },
        {
            q: "Puis-je retourner ce produit s'il ne convient pas ?",
            r: "Oui, tous nos produits peuvent être retournés sous 14 jours pour un remboursement complet, sous réserve qu'ils soient dans leur état d'origine.",
        },
        {
            q: "Ce produit est-il garanti ?",
            r: "Comme l'ensemble des équipements professionnels Crosscall, ce produit bénéficie d'une garantie constructeur. Contactez notre service commercial pour le détail applicable à cette référence.",
        },
    ]
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function AccCrossDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[slug]
    const [faqOuverte, setFaqOuverte] = useState(0)

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">L'accessoire <span className="font-mono bg-gray-100 px-2 py-1 rounded">{slug}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/Accessoire-Crosscall")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-500 transition-colors"
                >
                    ← Retour aux accessoires
                </button>
            </div>
        )
    }

    {/*const remise = Math.round(
        (1 - parseFloat(produit.prix.replace(",", ".")) / parseFloat(produit.prixBarre.replace(",", "."))) * 100
    )*/}

    const faq = genererFaq(produit)

    return (
        <div className="min-h-screen bg-white">

            {/* ── Fil d'ariane ── */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-2 md:pt-43">
                <button
                    onClick={() => {navigate(`/Accessoire-Crosscall?categorie=${produit.categorie}`), window.scrollTo(0,0)}}
                    className="flex items-center gap-2 text-gray-500 hover:text-black text-sm w-fit transition-colors"
                >
                    ← Retour aux accessoires Crosscall
                </button>
            </div>

            {/* ── Hero / Fiche produit ── */}
            <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 grid md:grid-cols-2 gap-14 items-center">

                {/* Image */}
                <div className={`flex justify-center rounded-3xl bg-gradient-to-br ${produit.couleurGradient} p-14 md:p-20 shadow-xl`}>
                    <img
                        src={produit.image}
                        alt={produit.nom}
                        className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Infos */}
                <div className="flex flex-col gap-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Crosscall — Accessoires</p>
                    <div className="flex gap-3">
                        <h1 className="text-4xl md:text-5xl font-black leading-tight uppercase text-gray-900">{produit.nom}</h1>
                        <span className={`bg-red-600 flex px-6 ${produit.hidden} rounded-full text-center justify-center items-center font-bold text-white`}>{produit.badge}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Stars note={produit.note} dark />
                    </div>

                    {/*<div className="flex items-center gap-3">
                        {remise > 0 && (
                            <span className="bg-lime-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                                -{remise}%
                            </span>
                        )}
                    </div>*/}

                    <p className="text-gray-600 text-lg leading-relaxed">{produit.accroche}</p>

                    <div className="flex flex-wrap gap-3 mt-2">
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
                            className="bg-black text-white font-bold px-8 py-3.5 rounded-full hover:bg-lime-500 hover:text-black transition-colors shadow-lg"
                        >
                            Demander un devis
                        </button>
                        <button
                            onClick={() => navigate('/Contact-Commercial')}
                            className="border border-gray-300 text-gray-800 font-semibold px-6 py-3.5 rounded-full hover:border-black transition-colors"
                        >
                            Contacter le commercial
                        </button>
                    </div>

                    {/* Réassurance rapide */}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                        {/*<span className="flex items-center gap-2"><FaTruck className="text-lime-500" /> Livraison offerte dès 149€ d'achat</span>
                        <span className="flex items-center gap-2"><FaUndoAlt className="text-lime-500" /> Satisfait ou remboursé sous 14 jours</span>
                        <span className="flex items-center gap-2"><FaAward className="text-lime-500" /> Garantie constructeur Crosscall</span>*/}
                    </div>
                </div>
            </section>

            {/* ── Description ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600 mb-4">À propos de ce produit</p>
                    <p className="text-gray-700 text-xl leading-relaxed">{produit.description}</p>
                </div>
            </section>

            {/* ── Points forts (grille de cartes) ── */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-black text-center text-gray-900 mb-2 uppercase">Les points forts</h2>
                <p className="text-gray-500 text-center mb-12">Ce qui fait la différence sur le terrain</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {produit.points.map((point, i) => {
                        const Icone = ICONES_POINTS[i % ICONES_POINTS.length]
                        return (
                            <div
                                key={i}
                                className="flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:border-lime-400 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                                    <Icone className="text-lime-400 text-lg" />
                                </div>
                                <p className="text-gray-800 font-medium leading-relaxed">{point}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* ── Spécifications techniques ── */}
            <section className="bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-black mb-2 uppercase">Spécifications techniques</h2>
                    <p className="text-gray-400 mb-10">Caractéristiques détaillées du {produit.nom}</p>
                    <div className="grid md:grid-cols-2 gap-x-12">
                        {produit.specs.map((spec, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center py-4 border-b border-white/10"
                            >
                                <span className="text-gray-400 text-sm">{spec.label}</span>
                                <span className="text-white font-semibold text-sm text-right">{spec.valeur}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-black text-center text-gray-900 mb-2 uppercase">Questions fréquentes</h2>
                <p className="text-gray-500 text-center mb-10">Tout ce qu'il faut savoir sur le {produit.nom}</p>
                <div>
                    {faq.map((item, i) => (
                        <FaqItem
                            key={i}
                            question={item.q}
                            reponse={item.r}
                            ouvert={faqOuverte === i}
                            onToggle={() => setFaqOuverte(faqOuverte === i ? null : i)}
                        />
                    ))}
                </div>
            </section>

            {/* ── Bandeau garanties ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <FaAward className="text-3xl text-lime-500" />
                        <p className="font-bold text-gray-900">Garantie constructeur</p>
                        <p className="text-sm text-gray-500">Des produits pensés pour durer, conçus pour le terrain professionnel.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <FaTruck className="text-3xl text-lime-500" />
                        <p className="font-bold text-gray-900">Livraison</p>
                        <p className="text-sm text-gray-500">Le délai de livraison est de trois (3) semaines à compter de la réception et de la validation du paiement total de la commande.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <FaUndoAlt className="text-3xl text-lime-500" />
                        <p className="font-bold text-gray-900">Remboursement</p>
                        <p className="text-sm text-gray-500">Une fois la commande confirmée et le paiement effectué, aucun remboursement ne pourra être accordé.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA final ── */}
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-16 flex md:flex-row flex-col items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Intéressé par {produit.nom} ?</h2>
                        <p className="text-gray-400">Notre équipe est disponible pour un conseil personnalisé.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate(`/Accessoire-Crosscall?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres accessoires
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
