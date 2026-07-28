import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaStar, FaStarHalfAlt, FaRegStar,
    FaShieldAlt, FaBatteryFull, FaWifi, FaCamera, FaTag, FaMedal, FaGem, FaCheckCircle,
    FaTruck, FaUndo, FaChevronLeft, FaChevronRight,
} from "react-icons/fa"
import core_m6 from "../images/CORE-M6.webp"
import corez5 from "../images/CoreZ5.webp"
import core_s5 from "../images/CORE-S5.webp"
import stellar_x5s from "../images/STELLAR-X5S.webp"
import stellar_m6 from "../images/STELLAR-M6.webp"
import stellar_x5s0 from "../images/STELLAR-X5S0.webp"
import stellar_m60 from "../images/STELLAR-M60.webp"
import backs5 from "../images/CORE-S5_BACK.png"
import stellarm6face from "../images/STELLAR_M6_FACE.png"
import stellarm6back from "../images/STELLAR_M6_BACK.png"
import stellarx5sface from "../images/STELLAR-X5S_FRONT.png"
import stellarx5sback from "../images/STELLAR-X5S_BACK.png"
import stellarm6face0 from "../images/STELLAR-M6_FRONT0.png"
import stellarm6back0 from "../images/STELLAR-M6_BACK0.png"

import corep6front from "../images/CORE-P6D.png"
import coreh6ex1front from "../images/CORE-H6_EX1_FRONT.png"
import coreh6ex1back from "../images/CORE-H6_EX1_BACK.png"
import coreh6ex2front from "../images/CORE-H6_EX2_FRONT.png"
import coreh6ex2back from "../images/CORE-H6_EX2_BACK.png"

// ─── Composant étoiles ────────────────────────────────────────────────────────
function Stars({ note }) {
    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5 text-lime-500">
                {[1, 2, 3, 4, 5].map(i => {
                    if (note >= i) return <FaStar key={i} size={14} />
                    if (note >= i - 0.5) return <FaStarHalfAlt key={i} size={14} />
                    return <FaRegStar key={i} size={14} />
                })}
            </div>
            <span className="text-gray-500 text-sm font-medium">{note} / 5</span>
        </div>
    )
}

// ─── Icône associée à un point fort (déduite du texte) ────────────────────────
function pickIcon(text) {
    const t = text.toLowerCase()
    if (t.includes("ip6") || t.includes("certif") || t.includes("mil-std") || t.includes("résist") || t.includes("choc") || t.includes("étanch"))
        return FaShieldAlt
    if (t.includes("batter") || t.includes("autonom") || t.includes("recharge") || t.includes("journée"))
        return FaBatteryFull
    if (t.includes("5g") || t.includes("4g") || t.includes("wi-fi") || t.includes("wifi") || t.includes("connex") || t.includes("connect") || t.includes("joignable") || t.includes("couverture"))
        return FaWifi
    if (t.includes("caméra") || t.includes("photo") || t.includes("mpx") || t.includes("documentation"))
        return FaCamera
    if (t.includes("prix") || t.includes("accessible") || t.includes("rapport qualité") || t.includes("budget") || t.includes("flotte"))
        return FaTag
    if (t.includes("x-link") || t.includes("accessoire") || t.includes("montage"))
        return FaGem
    return FaCheckCircle
}

// ─── Utilitaires prix ──────────────────────────────────────────────────────────
{/*function parsePrix(str) {
    return parseFloat(str.replace("€", "").replace(",", ".").trim())
}*/}

// ─── Slider images / vidéo ─────────────────────────────────────────────────────
function MediaSlider({ medias, alt }) {
    const [index, setIndex] = useState(0)

    // Revient au premier média quand on change de produit
    useEffect(() => {
        setIndex(0)
    }, [medias])

    const total = medias.length
    const current = medias[index]

    const precedent = () => setIndex((i) => (i - 1 + total) % total)
    const suivant = () => setIndex((i) => (i + 1) % total)

    const isYoutube = current.type === "video" && current.src.includes("youtube.com/embed")

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <div className="relative bg-gray-50 border border-gray-100 rounded-3xl p-10 md:p-14 w-full aspect-square flex items-center justify-center overflow-hidden">
                {/*{remise > 0 && (
                    <span className="absolute top-5 left-5 bg-lime-400 text-black text-xs font-bold px-3 py-1.5 rounded-full z-10">
                        -{remise}€
                    </span>
                )}*/}

                {current.type === "video" ? (
                    isYoutube ? (
                        <iframe
                            key={current.src}
                            src={current.src}
                            className="w-full h-full rounded-2xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                        />
                    ) : (
                        <video
                            key={current.src}
                            src={current.src}
                            className="w-full h-full object-contain rounded-2xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                        />
                    )
                ) : (
                    <img
                        key={current.src}
                        src={current.src}
                        alt={alt}
                        className="w-56 md:w-64 h-auto object-contain drop-shadow-2xl"
                    />
                )}

                {total > 1 && (
                    <>
                        <button
                            onClick={precedent}
                            aria-label="Média précédent"
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
                        >
                            <FaChevronLeft size={14} />
                        </button>
                        <button
                            onClick={suivant}
                            aria-label="Média suivant"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors"
                        >
                            <FaChevronRight size={14} />
                        </button>
                    </>
                )}
            </div>

            {total > 1 && (
                <div className="flex items-center gap-2">
                    {medias.map((m, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Aller au média ${i + 1}`}
                            className={
                                i === index
                                    ? "w-8 h-2 rounded-full bg-black transition-all"
                                    : "w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── Base de données produits ─────────────────────────────────────────────────
const PRODUITS = {

    // ── Gamme CORE ────────────────────────────────────────────────────────
    "core-h6-ex1": {
        nom: "CORE-H6 EX1",
        slug: "core-h6-ex1",
        medias: [
            { type: "image", src: coreh6ex1front },
            { type: "image", src: coreh6ex1back },
        ],
        gamme: "core",
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Le smartphone intrinsèquement sûr pour les environnements à risque d'explosion.",
        description:
            "Le CORE-H6 EX1 est un smartphone durci certifié ATEX/IECEx Zone 1/21, conçu pour les professionnels intervenant dans des environnements explosifs tels que les industries pétrolières, gazières, chimiques ou minières. Il associe robustesse, sécurité et performances pour garantir des communications fiables dans les conditions les plus exigeantes.",

        specs: [
            { label: "Certification", valeur: "ATEX Zone 1/21, IECEx, IP68, MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G, Wi-Fi 6/6E, Bluetooth 5.3, NFC" },
            { label: "Processeur", valeur: "Qualcomm Snapdragon Octo-core" },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "5 000 mAh" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "5 ans" },
        ],

        points: [
            "Certification ATEX Zone 1/21 et IECEx pour les zones explosives.",
            "Résistance IP68 et MIL-STD-810H contre l'eau, la poussière et les chocs.",
            "Connectivité 5G, Wi-Fi 6E et NFC pour les usages professionnels.",
            "Conçu pour les secteurs du pétrole, du gaz, de la chimie et de l'industrie.",
            "Garantie de 5 ans et suivi logiciel longue durée.",
        ],
    },
    "core-h6-ex2": {
        nom: "CORE-H6 EX2",
        slug: "core-h6-ex2",
        medias: [
            { type: "image", src: coreh6ex2front },
            { type: "image", src: coreh6ex2back },
        ],
        gamme: "core",
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",

        accroche:
            "Le smartphone ATEX Zone 2/22 conçu pour les opérations critiques et les environnements industriels.",

        description:
            "Le CORE-H6 EX2 associe la technologie d'un smartphone Android à l'ergonomie d'une radio professionnelle. Certifié ATEX/IECEx Zone 2/22, IP68 et MIL-STD-810H, il garantit des communications fiables, une sécurité renforcée et des performances élevées pour les professionnels évoluant dans les secteurs de l'énergie, de la chimie, des transports et de l'industrie.",

        specs: [
            { label: "Certification", valeur: "ATEX Zone 2/22, IECEx, IP68, MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G, Wi-Fi 6/6E, Bluetooth 5.2, NFC" },
            { label: "Processeur", valeur: "Qualcomm Dragonwing QCM6490 (Octo-core)" },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "5 000 mAh amovible et sécurisée" },
            { label: "Système", valeur: "Android 15" },
            { label: "Mémoire", valeur: "8 Go RAM / 256 Go" },
        ],

        points: [
            "Certification ATEX/IECEx Zone 2/22 pour les environnements à risque d'explosion.",
            "Architecture X-TREMESHIELD avec résistance IP68 et MIL-STD-810H.",
            "Technologie audio X-SOUND 360 avec réduction de bruit par IA.",
            "Batterie renforcée amovible avec verrouillage sécurisé.",
            "Connectivité 5G, Wi-Fi 6E et Android 15 pour les applications professionnelles.",
        ],
    },
    "core-p6": {
        nom: "CORE-P6",
        slug: "core-p6",
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/q_OG_I0fRFA" },
            { type: "image", src: corep6front },
        ],
        gamme: "core",
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Agissez plus rapidement grâce à une meilleure communication.",
        description:
            "Conçu pour aider les équipes à communiquer clairement, à agir plus rapidement et à rester opérationnelles sur le terrain, le CORE-P6 allie l'ergonomie d'une radio, des performances adaptées à la large bande et une technologie vocale de pointe dans un appareil de nouvelle génération dédié aux missions critiques.",
        specs: [
            { label: "Certification", valeur: "IP68 / IP69K, MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G, Wi-Fi 6/6E, Bluetooth 5.3, NFC" },
            { label: "Processeur", valeur: "Qualcomm Snapdragon 7s Gen 3 (Octo-core)" },
            { label: "Caméra arrière", valeur: "50 Mpx + 8 Mpx ultra grand-angle" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "5 000 mAh avec charge rapide USB-C" },
            { label: "Système", valeur: "Android 15" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            "Compatible 5G pour des communications ultra-rapides.",
            "Certifié IP68, IP69K et MIL-STD-810H pour une résistance extrême.",
            "Écran renforcé utilisable avec des gants et sous la pluie.",
            "Double caméra 50 Mpx + 8 Mpx idéale pour les interventions terrain.",
            "Garantie de 5 ans avec un suivi logiciel prolongé, conçu pour les professionnels.",
        ],
    },
    "core-m6": {
        nom: "CORE-M6",
        slug: "core-m6",
        image: core_m6,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/mdR6C_yYf40" },
            { type: "image", src: core_m6 },
        ],
        gamme: "core",
        note: 4.4,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Le smartphone durci compact et accessible — IP68, 4G, batterie longue durée",
        description:
            "Le CORE-M6 de Crosscall est le compagnon idéal pour les professionnels mobiles qui ont besoin d'un smartphone robuste sans compromis sur le prix. Certifié IP68, il résiste à l'immersion, à la poussière et aux chocs du quotidien. Sa batterie longue durée l'accompagne tout au long de journées de travail intensives.",
        specs: [
            { label: "Certification", valeur: "IP68 — immersion jusqu'à 1,5 m / 30 min" },
            { label: "Connectivité", valeur: "4G LTE + Wi-Fi + Bluetooth" },
            { label: "Processeur", valeur: "Octo-cœur" },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Batterie", valeur: "Longue durée" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Certifié IP68 — étanche et résistant à la poussière",
            "Batterie longue durée pour les journées de travail intensives",
            "Connectivité 4G pour rester joignable partout",
            "Caméra 50 Mpx pour la documentation terrain",
            "Rapport qualité/prix optimal pour les flottes professionnelles",
        ],
    },

    "core-z5": {
        nom: "CORE-Z5",
        slug: "core-z5",
        image: corez5,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/kD_DjTa_LHo" },
            { type: "image", src: corez5 },
        ],
        gamme: "core",
        note: 4.2,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Le smartphone durci haut de gamme — 5G, double caméra, X-LINK intégré",
        description:
            "Le CORE-Z5 est le fleuron de la gamme CORE de Crosscall. Sa connectivité 5G, sa double caméra haute résolution et son système exclusif X-LINK pour le montage d'accessoires en font un outil professionnel de premier plan. Certifié IP68 et MIL-STD-810H, il est taillé pour les environnements les plus exigeants.",
        specs: [
            { label: "Certification", valeur: "IP68 + MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6 + Bluetooth 5.2" },
            { label: "Processeur", valeur: "Octo-cœur haute performance" },
            { label: "Caméra arrière", valeur: "64 Mpx + ultra grand-angle" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Système X-LINK", valeur: "Montage accessoires magnétique" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "5G + Wi-Fi 6 pour les connexions les plus rapides disponibles",
            "Certifié MIL-STD-810H pour une robustesse militaire",
            "Système X-LINK pour fixer des accessoires Crosscall sans outil",
            "Double caméra 64 Mpx pour des photos professionnelles sur le terrain",
            "Autonomie renforcée pour les longues journées sans recharge",
        ],
    },

    "core-s5": {
        nom: "CORE-S5",
        slug: "core-s5",
        image: core_s5,
        medias: [
            { type: "image", src: core_s5 },
            { type: "image", src: backs5 },
        ],
        gamme: "core",
        note: 3.9,
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Le smartphone entrée de gamme robuste — IP67, 4G, prix accessible",
        description:
            "Le CORE-S5 est la solution Crosscall la plus accessible pour les professionnels qui souhaitent équiper leurs équipes d'un smartphone robuste à petit budget. Sa certification IP67 assure une résistance à l'eau et à la poussière, et son format compact le rend facile à transporter au quotidien.",
        specs: [
            { label: "Certification", valeur: "IP67 — étanche poussière et eau" },
            { label: "Connectivité", valeur: "4G LTE + Wi-Fi + Bluetooth" },
            { label: "Format", valeur: "Compact" },
            { label: "Batterie", valeur: "Standard" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Prix accessible pour équiper des flottes complètes",
            "Certification IP67 — résistant à l'eau et à la poussière",
            "Format compact pour une utilisation facile au quotidien",
            "4G LTE pour rester connecté sur le terrain",
            "Idéal pour les usages simples : appels, SMS, applications légères",
        ],
    },

    // ── Gamme STELLAR ─────────────────────────────────────────────────────
    "stellar-x5s-chamonix": {
        nom: "STELLAR-X5S Chamonix",
        slug: "stellar-x5s-chamonix",
        image: stellar_x5s,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/SgZ9jhKlEK8" },
            { type: "image", src: stellar_x5s },
        ],
        gamme: "stellar",
        note: 4.5,
        couleurGradient: "from-gray-900 via-slate-800 to-lime-900",
        accroche: "Édition limitée Chamonix — smartphone aventure 5G avec protection extrême",
        description:
            "L'édition Chamonix du STELLAR-X5S célèbre l'alliance entre performance et exploration. Conçu pour les aventuriers et professionnels de l'outdoor, il embarque la 5G, une batterie massive et des certifications de résistance parmi les plus élevées du marché. Son coloris exclusif Chamonix le distingue visuellement dans la gamme.",
        specs: [
            { label: "Édition", valeur: "Chamonix — édition limitée" },
            { label: "Certification", valeur: "IP68 + MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6E + Bluetooth 5.3" },
            { label: "Caméra arrière", valeur: "108 Mpx + ultra grand-angle + téléobjectif" },
            { label: "Caméra frontale", valeur: "32 Mpx" },
            { label: "Batterie", valeur: "Haute capacité avec recharge rapide" },
            { label: "Système X-LINK", valeur: "Compatible accessoires Crosscall" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Édition limitée Chamonix pour les passionnés d'aventure",
            "Triple caméra 108 Mpx pour capturer chaque détail sur le terrain",
            "5G + Wi-Fi 6E pour des connexions ultra-rapides en déplacement",
            "IP68 + MIL-STD-810H — résistance aux environnements extrêmes",
            "Recharge rapide pour ne jamais manquer d'énergie",
        ],
    },

    "stellar-m6-chamonix": {
        nom: "STELLAR-M6 Chamonix",
        slug: "stellar-m6-chamonix",
        image: stellar_m6,
        medias: [
            { type: "image", src: stellarm6face },
            { type: "image", src: stellarm6back }
        ],
        gamme: "stellar",
        note: 4.3,
        couleurGradient: "from-gray-900 via-slate-800 to-lime-900",
        accroche: "Édition limitée Chamonix — équilibre parfait robustesse et autonomie",
        description:
            "Le STELLAR-M6 Chamonix est l'édition montagne du smartphone robuste 5G Crosscall. Son autonomie renforcée et sa robustesse certifiée en font le compagnon idéal des professionnels travaillant en altitude ou en extérieur. Son coloris exclusif Chamonix s'inscrit dans la collection aventure de Crosscall.",
        specs: [
            { label: "Édition", valeur: "Chamonix — édition limitée" },
            { label: "Certification", valeur: "IP68 + MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G + Wi-Fi + Bluetooth 5.2" },
            { label: "Caméra arrière", valeur: "64 Mpx + ultra grand-angle" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "Haute capacité longue durée" },
            { label: "Système X-LINK", valeur: "Compatible accessoires Crosscall" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Édition Chamonix en série limitée pour les professionnels outdoor",
            "Autonomie haute capacité pour les journées sans accès à une prise",
            "IP68 + MIL-STD-810H pour les conditions les plus difficiles",
            "5G pour rester connecté même dans les zones à couverture limitée",
            "Système X-LINK pour fixer des accessoires Crosscall rapidement",
        ],
    },

    "stellar-x5s": {
        nom: "STELLAR-X5S",
        slug: "stellar-x5s",
        image: stellar_x5s0,
        medias: [
            { type: "image", src: stellarx5sface },
            { type: "image", src: stellarx5sback }
        ],
        gamme: "stellar",
        note: 4.5,
        couleurGradient: "from-gray-900 via-slate-800 to-lime-900",
        accroche: "Le smartphone 5G haut de gamme ultime de Crosscall — robustesse maximale",
        description:
            "Le STELLAR-X5S est le smartphone le plus avancé de Crosscall, combinant les meilleures certifications de résistance avec une fiche technique de flagship Android. Triple caméra 108 Mpx, 5G, recharge rapide et le système X-LINK exclusif : il est taillé pour les professionnels qui exigent le meilleur sans aucun compromis.",
        specs: [
            { label: "Certification", valeur: "IP68 + MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6E + Bluetooth 5.3" },
            { label: "Caméra arrière", valeur: "108 Mpx + ultra grand-angle + téléobjectif" },
            { label: "Caméra frontale", valeur: "32 Mpx" },
            { label: "Batterie", valeur: "Haute capacité + recharge rapide 33 W" },
            { label: "Système X-LINK", valeur: "Compatible accessoires Crosscall" },
            { label: "Résistance thermique", valeur: "-20 °C à +60 °C" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Triple caméra 108 Mpx — la meilleure photo en conditions extrêmes",
            "Recharge rapide 33 W pour repartir en quelques minutes",
            "Résistance thermique de -20 °C à +60 °C",
            "5G + Wi-Fi 6E pour les connexions les plus rapides",
            "Le meilleur rapport robustesse/performance du marché",
        ],
    },

    "stellar-m6": {
        nom: "STELLAR-M6",
        slug: "stellar-m6",
        image: stellar_m60,
        medias: [
            { type: "image", src: stellarm6face0 },
            { type: "image", src: stellarm6back0 }
        ],
        gamme: "stellar",
        note: 4.4,
        couleurGradient: "from-gray-900 via-slate-800 to-lime-900",
        accroche: "Le smartphone 5G polyvalent de la gamme STELLAR — autonomie et robustesse",
        description:
            "Le STELLAR-M6 est la référence polyvalente de la gamme STELLAR. Son excellent rapport robustesse/autonomie en fait le choix privilégié des professionnels mobiles. Sa double caméra, sa compatibilité 5G et son système X-LINK offrent toutes les fonctionnalités nécessaires pour travailler efficacement en extérieur.",
        specs: [
            { label: "Certification", valeur: "IP68 + MIL-STD-810H" },
            { label: "Connectivité", valeur: "5G + Wi-Fi + Bluetooth 5.2" },
            { label: "Caméra arrière", valeur: "64 Mpx + ultra grand-angle" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "Haute capacité longue durée" },
            { label: "Système X-LINK", valeur: "Compatible accessoires Crosscall" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "2 ans" },
        ],
        points: [
            "Autonomie haute capacité pour les journées terrain sans interruption",
            "5G pour des connexions mobiles ultra-rapides",
            "Double caméra 64 Mpx pour la documentation professionnelle",
            "IP68 + MIL-STD-810H — certifié pour les environnements difficiles",
            "Système X-LINK pour les accessoires de mobilité Crosscall",
        ],
    },
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function TelCrossDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[slug]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">Le modèle <span className="font-mono bg-gray-100 px-2 py-1 rounded">{slug}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/Téléphone-Crosscall")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-500 transition-colors"
                >
                    ← Retour aux téléphones
                </button>
            </div>
        )
    }

    {/*const prixNum = parsePrix(produit.prix)
    const prixBarreNum = parsePrix(produit.prixBarre)
    const remise = Math.round(prixBarreNum - prixNum)
    const mensualite = (prixNum / 22).toFixed(2).replace(".", ",")*/}

    const autresModeles = Object.values(PRODUITS)
        .filter(p => p.gamme === produit.gamme && p.slug !== produit.slug)
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-white">

            {/* ── Fil d'ariane ── */}
            <div className="border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-3 pt-20 pb-2 md:pt-43 flex items-center gap-2 text-xs text-gray-500">
                    <button onClick={() => navigate(`/Téléphone-Crosscall?categorie=${produit.gamme}`)} className="flex items-center gap-1 hover:text-black transition-colors">
                        <FaChevronLeft size={10} /> Téléphones
                    </button>
                    <span className="text-gray-300">/</span>
                    <span className="uppercase text-gray-400">Gamme {produit.gamme}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-black font-semibold">{produit.nom}</span>
                </div>
            </div>

            {/* ── Hero ── */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-2 gap-12 items-center">

                    {/* Image / vidéo (slider) */}
                    <div className="order-2 md:order-1 flex justify-center">
                        <MediaSlider medias={produit.medias} alt={produit.nom} />
                    </div>

                    {/* Texte */}
                    <div className="order-1 md:order-2 flex flex-col gap-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                            Crosscall — Gamme {produit.gamme}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] text-black">
                            {produit.nom}
                        </h1>
                        <Stars note={produit.note} />

                        {/*<div className="flex items-end gap-3 flex-wrap mt-1">
                            <span className="text-3xl font-black text-black">{produit.prix}</span>
                            <span className="text-gray-400 line-through text-base mb-1">{produit.prixBarre}</span>
                            {remise > 0 && (
                                <span className="bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-full mb-1">
                                    {remise}€ de remise
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-500">Dès {mensualite}€/mois avec Floa</p>*/}

                        <p className="text-gray-600 leading-relaxed">{produit.accroche}</p>

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
                                className="bg-black text-white font-bold px-8 py-3.5 rounded-full hover:bg-lime-400 hover:text-black transition-colors"
                            >
                                Demander un devis
                            </button>
                            <button
                                onClick={() => navigate('/Contact-Commercial')}
                                className="border-2 border-black text-black font-semibold px-6 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors"
                            >
                                Contacter le commercial
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 mt-4 pt-4 text-xs text-gray-500">
                            {/*<div className="flex flex-col items-start gap-1.5">
                                <FaMedal className="text-lime-500" size={16} />
                                <span>Garantie {produit.specs.find(s => s.label === "Garantie")?.valeur || "2 ans"}</span>
                            </div>*/}
                            <div className="flex flex-col items-start gap-1.5">
                                <FaTruck className="text-lime-500" size={16} />
                                <span>Livraison 3 semaines après paiement total</span>
                            </div>
                            {/*<div className="flex flex-col items-start gap-1.5">
                                <FaUndo className="text-lime-500" size={16} />
                                <span>Satisfait ou remboursé 14j</span>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Bandeau caractéristiques clés ── */}
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-white/10">
                    {produit.specs.slice(0, 3).map((s, i) => (
                        <div key={i} className="text-center px-2">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{s.label}</p>
                            <p className="font-bold text-xs md:text-base mt-1.5 leading-snug">{s.valeur}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Les points forts ── */}
            <section className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">Les points forts</h2>
                    <p className="text-gray-500 mt-2 mb-10">Ce qui distingue le {produit.nom}</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {produit.points.map((point, i) => {
                            const Icon = pickIcon(point)
                            return (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:border-lime-400 hover:shadow-lg transition-all"
                                >
                                    <span className="w-11 h-11 rounded-xl bg-black text-lime-400 flex items-center justify-center flex-shrink-0">
                                        <Icon size={18} />
                                    </span>
                                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Description ── */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">À propos de ce téléphone</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
            </section>

            {/* ── Spécifications techniques ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Spécifications techniques</h2>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                        {produit.specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center gap-6 px-6 py-4 hover:bg-gray-50 transition-colors">
                                <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                                <span className="text-black font-bold text-sm text-right">{spec.valeur}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Engagements ── */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
                <div className="border border-gray-100 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                    <FaMedal className="text-lime-500" size={28} />
                    <h3 className="font-bold text-black">Garantie {produit.specs.find(s => s.label === "Garantie")?.valeur || ""}</h3>
                    <p className="text-sm text-gray-500">Tous nos téléphones Crosscall sont couverts par une garantie constructeur étendue.</p>
                </div>
                <div className="border border-gray-100 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                    <FaTruck className="text-lime-500" size={28} />
                    <h3 className="font-bold text-black">Livraison</h3>
                    <p className="text-sm text-gray-500">Le délai de livraison est de trois (3) semaines à compter de la réception et de la validation du paiement total de la commande.</p>
                </div>
                <div className="border border-gray-100 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                    <FaUndo className="text-lime-500" size={28} />
                    <h3 className="font-bold text-black">Remboursement</h3>
                    <p className="text-sm text-gray-500">Une fois la commande confirmée et le paiement effectué, aucun remboursement ne pourra être accordé. </p>
                </div>
            </section>

            {/* ── Autres modèles de la gamme ── */}
            {autresModeles.length > 0 && (
                <section className="bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Découvrez toute la gamme {produit.gamme}</h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map(p => {
                                /*const pRemise = Math.round(parsePrix(p.prixBarre) - parsePrix(p.prix))*/
                                return (
                                    <button
                                        key={p.slug}
                                        onClick={() => navigate(`/Téléphone-Crosscall/${p.slug}`)}
                                        className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-lime-400 hover:shadow-lg transition-all"
                                    >
                                        <div className="bg-gray-50 rounded-2xl p-6 w-full flex items-center justify-center">
                                            <img src={p.image} alt={p.nom} className="w-28 h-32 object-contain" />
                                        </div>
                                        <h3 className="font-bold text-black">{p.nom}</h3>
                                        {/*<div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through text-xs">{p.prixBarre}</span>
                                            <span className="font-black text-black">{p.prix}</span>
                                        </div>
                                        {pRemise > 0 && (
                                            <span className="bg-lime-400 text-black text-[11px] font-bold px-2.5 py-1 rounded-full">
                                                {pRemise}€ de remise
                                            </span>
                                        )}*/}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA bas de page ── */}
            <section className="bg-black text-white border-t-2 border-lime-400">
                <div className="max-w-6xl mx-auto px-6 py-16 flex md:flex-row flex-col items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-black mb-2">Intéressé par le {produit.nom} ?</h2>
                        <p className="text-white/50">Notre équipe est disponible pour un conseil personnalisé.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate(`/Téléphone-Crosscall?categorie=${produit.gamme}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres modèles
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}