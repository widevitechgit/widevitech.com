import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaStar, FaStarHalfAlt, FaRegStar,
    FaMedal, FaCheckCircle,
    FaTruck, FaUndo, FaChevronLeft, FaChevronRight,
} from "react-icons/fa"
import core_m6 from "../images/CORE-M6.webp"
import garant5ans from "../Logos/5YEAR_BADGE.png" 
import garant3ans from "../Logos/3YEAR_BADGE.webp"
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

import icone1 from "../Logos/icone1.svg"
import icone2 from "../Logos/icone2.svg"
import icone3 from "../Logos/icone3.svg"
import icone4 from "../Logos/icone4.svg"
import icone5 from "../Logos/icone5.svg"
import icone6 from "../Logos/icone6.svg"

import corep6front from "../images/CORE-P6D.png"

import coreh6ex1front from "../images/CORE-H6_EX1_FRONT.png"
import coreh6ex1back from "../images/CORE-H6_EX1_BACK.png"
import coreh6ex1top from "../images/CORE-H6_EX1_TOP.png"
import coreh6ex1right from "../images/CORE-H6_EX1_RIGHT.png"
import coreh6ex1left from "../images/CORE-H6_EX1_LEFT.png"

import coreh6ex2front from "../images/CORE-H6_EX2_FRONT.png"
import coreh6ex2back from "../images/CORE-H6_EX2_BACK.png"
import coreh6ex2top from "../images/CORE-H6_EX2-TOP.png"
import coreh6ex2left from "../images/CORE-H6_EX2-LEFT.png"
import coreh6ex2right from "../images/CORE-H6_EX2-RIGHT.png"
import coreh6ex2battery from "../images/CORE-H6_EX2-BATTERY.png"

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
// Pour chaque point fort, `icone` attend une image importée (ex: import
// iconRobustesse from "../icons/robustesse.svg";), à référencer ainsi :
// { icone: iconRobustesse, texte: "..." }
// Tant que `icone` vaut null, une icône par défaut (FaCheckCircle) s'affiche.
const PRODUITS = {

    // ── Gamme CORE ────────────────────────────────────────────────────────
    "core-h6-ex1": {
        nom: "CORE-H6 EX1",
        slug: "core-h6-ex1",
        image: coreh6ex1front,
        garant: garant3ans,
        medias: [
            { type: "image", src: coreh6ex1front },
            { type: "image", src: coreh6ex1right },
            { type: "image", src: coreh6ex1back },
            { type: "image", src: coreh6ex1left },
            { type: "image", src: coreh6ex1top },
        ],
        gamme: "core",
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",
        accroche: "Le smartphone intrinsèquement sûr pour les environnements à risque d'explosion. Pas disponibles avant fin 2026",
        description:
            "Le CORE-H6 EX1 est un smartphone durci certifié ATEX/IECEx Zone 1/21, conçu pour les professionnels intervenant dans des environnements explosifs tels que les industries pétrolières, gazières, chimiques ou minières. Il associe robustesse, sécurité et performances pour garantir des communications fiables dans les conditions les plus exigeantes.",

        specs: [
            { label: "Normes IP", valeur: "IP68" },
            { label: "Imperméabilisation", valeur: "IPX8" },
            { label: "Résistance à la poussière", valeur: "IP6X" },
            { label: "Résistance à la corrosion", valeur: "Testé en immersion complète dans l'eau salée, l'eau chlorée et d'autres liquides corrosifs" },
            { label: "Température de fonctionnement", valeur: "De -10 °C à +70 °C avec batterie haute température" },
            { label: "Plage de températures étendue", valeur: "De -30 °C à +70 °C avec alimentation externe (USB-C ou X-LINK™)" },
            { label: "Résistance aux chutes", valeur: "Jusqu'à 2 mètres sur béton" },
            { label: "Norme militaire", valeur: "MIL-STD 810H" },
            { label: "Normes ATEX/IECEx", valeur: "II 2G Ex ib IIC T4 Gb, II 2D Ex ib IIIC T135 °C Db, Ta = -20 °C à +60 °C" },
            { label: "Connectivité", valeur: "5G, Wi-Fi 6/6E, Bluetooth 5.3, NFC" },
            { label: "Processeur", valeur: "Qualcomm Snapdragon Octo-core" },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "5 000 mAh" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "3 ans" },
        ],

        points: [
            { icone: icone1, texte: "Sécurité ATEX Zone 1 et durabilité extrême Conçu pour les environnements industriels les plus exigeants, le CORE-H6 Ex1 allie la certification ATEX Zone 1/21, des fonctionnalités de sécurité avancées pour les opérateurs et le savoir-faire de Crosscall en matière de robustesse. Sur les sites pétroliers et gaziers, les usines chimiques, les infrastructures énergétiques ou en atmosphère explosive, les équipes disposent d'un appareil fiable garantissant la sécurité des opérations sans compromettre la communication ni la productivité." },
            { icone: icone2, texte: "Connectivité critique et sécurité souveraine Conçu pour les réseaux privés et critiques, le CORE-H6 Ex1 assure une connectivité fiable sur les sites industriels, les infrastructures isolées et les réseaux souverains. La prise en charge native des réseaux privés 450 MHz et la conformité MCX garantissent des communications fiables là où la couverture, la disponibilité et la continuité opérationnelle sont essentielles." },
            { icone: icone3, texte: "Qualité audio supérieure Soyez entendu et compris clairement, même dans les environnements industriels les plus bruyants. Des sites de production aux grandes infrastructures, le CORE-H6 Ex1 offre des communications de qualité radio conçues pour une efficacité opérationnelle optimale. Grâce à la technologie X-SOUND 360, son puissant haut-parleur frontal, ses trois microphones et sa réduction de bruit assistée par IA garantissent des échanges limpides lorsque chaque message compte." },
            { icone: icone4, texte: "Appareil tout-en-un Le CORE-H6 Ex1 allie l'ergonomie d'une radio professionnelle à un écosystème Android complet, conçu pour les applications industrielles actuelles et futures. Les équipes peuvent ainsi passer instantanément des communications de groupe critiques aux applications métier, aux inspections, à la collecte de données, à l'assistance vidéo ou au signalement d'incidents, le tout sur un seul appareil conçu pour les environnements industriels dangereux." },
            { icone: icone5, texte: "Performances et mobilité opérationnelle compatibles avec l'IA Doté de la plateforme Qualcomm Dragonwing™ QCM6490 et d'une accélération IA dédiée, le CORE-H6 Ex1 prend en charge les applications exigeantes, les flux de travail intelligents et les services industriels de nouvelle génération. Grâce à un écosystème complet d'accessoires de mobilité, de station d'accueil et de charge, il permet aux équipes de rester productives toute la journée, que ce soit à pied, en véhicule ou sur des postes de travail mobiles." },
        ],
    },
    "core-h6-ex2": {
        nom: "CORE-H6 EX2",
        slug: "core-h6-ex2",
        image: coreh6ex2front,
        garant: garant3ans,
        medias: [
            { type: "image", src: coreh6ex2front },
            { type: "image", src: coreh6ex2left },
            { type: "image", src: coreh6ex2back },
            { type: "image", src: coreh6ex2battery },
            { type: "image", src: coreh6ex2right },
            { type: "image", src: coreh6ex2top }
        ],
        gamme: "core",
        couleurGradient: "from-gray-900 via-gray-800 to-lime-900",

        accroche:
            "Le smartphone ATEX Zone 2/22 conçu pour les opérations critiques et les environnements industriels. Pas disponibles avant fin 2026",

        description:
            "Le CORE-H6 EX2 associe la technologie d'un smartphone Android à l'ergonomie d'une radio professionnelle. Certifié ATEX/IECEx Zone 2/22, IP68 et MIL-STD-810H, il garantit des communications fiables, une sécurité renforcée et des performances élevées pour les professionnels évoluant dans les secteurs de l'énergie, de la chimie, des transports et de l'industrie.",

        specs: [
            { label: "Normes IP", valeur: "IP68" },
            { label: "Imperméabilisation", valeur: "IPX8" },
            { label: "Résistance à la poussière", valeur: "IP6X" },
            { label: "Résistance à la corrosion", valeur: "Testé en immersion complète dans l'eau salée, l'eau chlorée et d'autres liquides corrosifs" },
            { label: "Température de fonctionnement", valeur: "De -10 °C à +70 °C avec batterie haute température" },
            { label: "Plage de températures étendue", valeur: "De -30 °C à +70 °C avec alimentation externe (USB-C ou X-LINK™)" },
            { label: "Résistance aux chutes", valeur: "Jusqu'à 2 mètres sur béton" },
            { label: "Norme militaire", valeur: "MIL-STD 810H" },
            { label: "Normes ATEX/IECEx", valeur: "II 3G Ex ic IIC T4 Gc, II 3D Ex ic IIIC T135 °C Dc, Ta = -20 °C à +60 °C" },
            { label: "Connectivité", valeur: "5G, Wi-Fi 6/6E, Bluetooth 5.2, NFC" },
            { label: "Processeur", valeur: "Qualcomm Dragonwing QCM6490 (Octo-core)" },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "16 Mpx" },
            { label: "Batterie", valeur: "5 000 mAh amovible et sécurisée" },
            { label: "Système", valeur: "Android 15" },
            { label: "Mémoire", valeur: "8 Go RAM / 256 Go" },
            { label: "Garantie", valeur: "3 ans" },
        ],

        points: [
            { icone: icone1, texte: "Robustesse extrême et sécurité des travailleurs Conçu autour de l'architecture X-TREMESHIELD de Crosscall, le CORE-H6 Ex2 est certifié ATEX / IECEx Zone 2/22, conçu pour les environnements extrêmes avec une conception étanche et robuste et une batterie sécurisée." },
            { icone: icone3, texte: "Qualité audio exceptionnelle Que ce soit sur des sites de production, des infrastructures énergétiques, des plateformes de transport ou des chantiers de construction, le CORE-H6 Ex2 assure des communications puissantes et claires dans toutes les conditions grâce à la technologie X-SOUND 360." },
            { icone: icone4, texte: "Un appareil tout-en-un Le CORE-H6 Ex2 allie l'ergonomie des radios professionnelles à une plateforme Android moderne, adaptée aux usages actuels et futurs sur le terrain. Il permet de passer instantanément des communications critiques aux applications métiers, aux inspections, à la collecte de données ou à l'assistance vidéo, le tout sur un seul appareil robuste." },
            { icone: icone5, texte: "Performances optimisées pour l'IA et la mobilité opérationnelle Alliant puissance de calcul, intelligence artificielle et écosystème complet, le CORE-H6 Ex2 va au-delà de la simple commande vocale et ouvre l'accès aux services numériques industriels. Il permet la collecte de données, l'exécution d'applications critiques et une utilisation mobile grâce à une plateforme unique dédiée à la productivité sur le terrain." },
            { icone: icone6, texte: "Connectivité critique et sécurité souveraine Conçu pour les réseaux privés critiques, le CORE-H6 Ex2 garantit une connectivité résiliente, des communications sécurisées et une continuité opérationnelle en milieu industriel. Sa sécurité avancée et son architecture renforcée protègent les opérations, les actifs et les données sensibles." },
        ],
    },
    "core-p6": {
        nom: "CORE-P6",
        slug: "core-p6",
        image: corep6front,
        garant: garant5ans,
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
            { label: "Norme IP", valeur: "IP68" },
            { label: "Étanchéité à l’eau salée", valeur: "IPX8 (2 m pendant 30 min)" },
            { label: "Étanchéité à la poussière", valeur: "IP6X (total)" },
            { label: "Température d’utilisation", valeur: "-20°C à +60°C" },
            { label: "Température de fonctionnement étendue", valeur: "-30°C à +70°C lors de l’utilisation avec une alimentation externe (USB-C ⁶ ou X-LINK™ ⁶)" },
            { label: "Résistance aux chutes", valeur: "Jusqu’à 2 mètres sur béton" },
            { label: "Standard militaire", valeur: "MIL-STD 810H" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "CONCEPTION AXÉE SUR LE PTT. Radio MCPTT robuste en forme de T, compatible avec les solutions MCX/MCPTT tierces certifiées, dotée de grands boutons programmables et d'un bouton rotatif pour une utilisation intuitive." },
            { icone: null, texte: "Résistance à tous les défis Résistante aux chocs et étanche, la CORE-P6 répond aux normes IP68/IP69K et MIL-STD-810H, ce qui lui permet de s'adapter aux environnements de terrain les plus difficiles. Sa batterie haute capacité de 4 000 mAh fonctionne même à des températures extrêmes grâce à une optimisation par intelligence artificielle." },
            { icone: null, texte: "Qualité sonore supérieure La réduction avancée du bruit ambiant, un haut-parleur de plus de 100 dB et une conception audio à 360° garantissent une qualité vocale inégalée et une communication claire dans tous les environnements." },
            { icone: null, texte: "Une technologie évolutive De la communication vocale à la maîtrise totale de la situation, le CORE-P6 est équipé de caméras avant et arrière pour la collecte de preuves et les appels vidéo, ainsi que d'un point d'accès Wi-Fi instantané pour un partage rapide des données. Compatible 5G et conçu pour durer, il bénéficie d'une garantie de 5 ans, batterie incluse." },
            { icone: null, texte: "Écosystème d'accessoires optimisé Le CORE-P6 est entièrement compatible avec l'écosystème X-LINK™ et Klick Fast, qui propose des solutions de recharge, de fixation et de transport. Un port USB-C verrouillable permet également de connecter en toute sécurité des accessoires de communication externes." },
        ],
    },
    "core-m6": {
        nom: "CORE-M6",
        slug: "core-m6",
        image: core_m6,
        garant: garant5ans,
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
            { label: "Certification", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "4G LTE + Wi-Fi + Bluetooth 5.0" },
            { label: "Processeur", valeur: "Qualcomm Dragonwing™ QCM4490" },
            { label: "Caméra arrière", valeur: "48 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Batterie", valeur: "Longue durée" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Une étanchéité exceptionnelle. Avec son écran renforcé et son étanchéité certifiée IP68/IP69K, le CORE-M6 résiste aux immersions, aux projections sous pression et aux impacts" },
            { icone: null, texte: "Téléphonez dans tous vos environnements. Avec son haut-parleur frontal de 102,5 dB, trois fois plus puissant que la moyenne, le CORE-M6 garantit une intelligibilité audio optimale." },
            { icone: null, texte: "A toujours de la batterie, même à la fin de votre journée. Grâce à sa gestion énergétique intelligente, le CORE-M6 assure jusqu’à 2 jours et 5h d’autonomie réelle, y compris à -20°C." },
            { icone: null, texte: "Une robustesse testée et prouvée. Le CORE-M6 résiste à 300 chutes sur béton, contre 150 pour le CORE-M5 et bien plus que les 26 exigées par la norme MIL-STD-810H, qu’il respecte aussi." },
            { icone: null, texte: "Toutes vos missions en un seul terminal. Avec le CORE-M6, un seul appareil suffit pour tout faire : communiquer, travailler, scanner ou même encaisser des paiements." },
            { icone: null, texte: "3 boutons physiques programmables. Le CORE-M6 intègre trois boutons dédiés — PTT, IA et SOS — facilement visibles, personnalisables et utilisables même avec des gants." },
        ],
    },

    "core-z5": {
        nom: "CORE-Z5",
        slug: "core-z5",
        image: corez5,
        garant: garant5ans,
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
            { label: "Norme IP", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6 + Bluetooth 5.2..." },
            { label: "Processeur", valeur: "Qualcomm® QCM6490" },
            { label: "Caméra arrière", valeur: "48 MP Fusion4" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "X-LINK", valeur: "Oui, Technologie Magconn" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Fluide en toutes circonstances. Grâce à son processeur Qualcomm® QCM6490 associé à 4 Go de mémoire vive, le CORE-Z5 offre une bonne fluidité, même en usage intensif. Que ce soit pour lancer vos applications métiers, gérer plusieurs tâches en parallèle ou naviguer sans ralentissement, il reste toujours performant." },
            { icone: null, texte: "De l’énergie en réserve. Avec le CORE-Z5, l’autonomie n’est jamais un souci. Grâce à son processeur économe en énergie et à sa batterie LiPo de 4950 mAh, il offre en moyenne 20 % de performance en plus par rapport aux smartphones de la même catégorie." },
            { icone: null, texte: "Une résistance à toute épreuve. Conçu selon la norme militaire MIL-STD-810H, le CORE-Z5 est pensé pour durer. Il résiste aux chutes de 2 mètres sur des surfaces dures comme le béton ou le marbre, et reste étanche face à de nombreux liquides, qu’il s’agisse d’eau chlorée, d’huile de vidange ou même de produits corrosifs." },
            { icone: null, texte: "Ergonomique jusqu’au bout des gants. Avec son grand écran et ses boutons à sensibilité renforcée, le CORE-Z5 est pensé pour rester simple et efficace, même avec des gants. Sa technologie GLOVE Touch garantit une réactivité optimale, que vous utilisiez des gants en polyuréthane, latex ou cuir." },
            { icone: null, texte: "Encore plus confortable à lire. Le design du CORE-Z5 a prévu une large surface d’affichage sans négliger l’importance d’une bonne prise en main, en optant pour un écran 6.08” HD et un ratio 19:9. Plus besoin de s’encombrer d’un ordinateur portable toute la journée pour être efficace et gagner en productivité !" },
            { icone: null, texte: "Chargez partagez ! Avec une si grande autonomie et la fonction “charge inversée”, il sera facile de dépanner vos amis et coéquipiers ou de charger un autre appareil (lampe torche, casque audio…) où que vous soyez." },
        ],
    },

    "core-s5": {
        nom: "CORE-S5",
        slug: "core-s5",
        garant: garant5ans,
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
            { label: "Certification", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "4G LTE + Bluetooth 5.0..." },
            { label: "Batterie", valeur: "Lithium Polymère" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Durablement fiable et efficace Le CORE-S5 est le mobile de référence pour ceux qui recherchent simplicité et robustesse. Compact et fiable, il incarne tout le savoir-faire Crosscall en matière de durabilité." },
            { icone: null, texte: "Autonomie longue durée Avec sa batterie 1800 mAh et sa consommation optimisée, le CORE-S5 offre jusqu’à 10 jours d’autonomie en veille. Son endurance se prolonge facilement grâce aux accessoires de charge X-LINK™." },
            { icone: null, texte: "Simple d’utilisation et pratique Le CORE-S5 mise sur la simplicité avec des fonctions essentielles et pratiques. Compact et ergonomique, il offre une prise en main sécurisée grâce à ses matériaux antidérapants et un clavier à larges touches utilisable même avec des gants." },
            { icone: null, texte: "Résiste aux chutes et étanches aux liquides Conçu selon les Crosscall Standards, le CORE-S5 offre une robustesse éprouvée : résistant aux chutes de 2 m (MIL-STD-810H), étanche 30 min jusqu’à 1,5 m (IPX8) et totalement protégé contre la poussière (IP6X)." },
        ],
    },

    // ── Gamme STELLAR ─────────────────────────────────────────────────────
    "stellar-x5s-chamonix": {
        nom: "STELLAR-X5S Chamonix",
        slug: "stellar-x5s-chamonix",
        garant: garant5ans,
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
            { label: "Norme IP", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6E + Bluetooth 5.2..." },
            { label: "Caméra arrière", valeur: "50 Mpx, 80°" },
            { label: "Caméra frontale", valeur: "16 MP" },
            { label: "Batterie", valeur: "Haute capacité avec recharge rapide" },
            { label: "X-LINK", valeur: "Oui" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Tout nouveau Mode Outdoor Reconnectez vous pleinement à la nature : suspendez temporairement les notifications non essentielles, paramétrez votre profil énergétique pour gagner jusqu’à 25% d’autonomie supplémentaire et partagez automatiquement votre position avec vos proches." },
            { icone: null, texte: "Design identitaire. Épuré et emblématique, le design du STELLAR-X5s Édition Chamonix-Mont-Blanc rend hommage aux sommets. Son dos blanc évoque la pureté des neiges éternelles, le logo Chamonix-Mont-Blanc signe une alliance d’excellence, et la gravure “Open the Way” sur la tranche incarne les valeurs communes de liberté, de performance et de durabilité." },
            { icone: null, texte: "Capturez l'action où que vous soyez. Profitez de la meilleure qualité d’image sur un smartphone Outdoor grâce au capteur SONY 50 Mpx et à l’objectif grand angle 120°. Immortalisez vos moments avec des vidéos 4K stabilisées, à la manière d’une Action Cam, et explorez tous les modes proposés. Même en immersion, jusqu’à 2 m de profondeur, saisissez des clichés uniques !" },
            { icone: null, texte: "Résistant à tous vos terrains de jeu Conçu pour tous les environnements, il supporte les chutes répétées à 1,5 m, respecte la norme militaire MIL-STD-810H et reste étanche même à l’eau salée (IP68). Totalement protégé contre la poussière, il dispose d’un écran Corning Gorilla Glass Victus 2 résistant aux chocs et aux rayures, et fonctionne parfaitement de –20 °C à +60 °C." },
            { icone: null, texte: "Aussi performant que vous Le STELLAR-X5s édition Chamonix-Mont-Blanc suit votre rythme partout, alliant puissance et fluidité grâce au processeur Qualcomm Octocore, 8 Go de RAM et 256 Go de stockage. Connectivité complète (5G, WiFi 6/6E, eSIM, NFC), batterie 4 500 mAh longue durée et recharge rapide X-LINK pour rester opérationnel sur le terrain et à la maison." },
            { icone: null, texte: "Utilisation avec des gants Grâce à la technologie Glove Touch, plus besoin de retirer ses gants pour répondre à un appel, consulter une carte ou prendre une photo au sommet. Pensée pour les conditions extrêmes, cette fonction garantit une réactivité optimale de l’écran, même par grand froid ou en plein effort." },
            { icone: null, texte: "Étanchéité totale Certifié IP68, il reste totalement protégé contre les poussières et supporte une immersion prolongée, y compris dans l’eau salée. Une résistance rare sur le marché et signature des smartphones Crosscall." },
            { icone: null, texte: "Bien plus qu'un smartphone Le STELLAR-X5s édition Chamonix-Mont-Blanc est un véritable outil tout-en-un. Capable de remplacer un talkie-walkie, un scanner ou un ordinateur de bureau, il simplifie vos usages tout en optimisant vos budgets." },
        ],
    },
    "stellar-m6-chamonix": {
        nom: "STELLAR-M6 Chamonix",
        slug: "stellar-m6-chamonix",
        image: stellar_m6,
        garant: garant5ans,
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
            { label: "Norme IP", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "5G + Wi-Fi + Bluetooth 5.2..." },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "8 MP" },
            { label: "Batterie", valeur: "Haute capacité longue durée" },
            { label: "X-LINK", valeur: "Oui" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Tout nouveau Mode Outdoor Reconnectez vous pleinement à la nature : suspendez temporairement les notifications non essentielles, paramétrez votre profil énergétique pour gagner jusqu’à 25% d’autonomie supplémentaire et partagez automatiquement votre position avec vos proches." },
            { icone: null, texte: "Étanchéité totale Certifié IP68, il reste totalement protégé contre les poussières et supporte une immersion prolongée, y compris dans l’eau salée. Une résistance rare sur le marché et signature des smartphones Crosscall." },
            { icone: null, texte: "Résistant à tous vos terrains de jeu Conçu pour tous les environnements, il supporte les chutes répétées à 1,5 m, respecte la norme militaire MIL-STD-810H et reste étanche même à l’eau salée (IP68). Totalement protégé contre la poussière, il dispose d’un écran en verre ultra-durci Corning Gorilla® Glass 5 résistant aux chocs et aux rayures, et fonctionne parfaitement de –20 °C à +60 °C." },
            { icone: null, texte: "3 boutons programmables Toujours à portée de main, les boutons programmables vous permettent d’accéder instantanément à vos fonctions essentielles. Activez une alerte SOS en cas d’urgence, communiquez en un geste grâce au PTT (Push-To-Talk) ou lancez votre assistant vocal pour garder les mains libres." },
            { icone: null, texte: "Bien plus qu'un smartphone Le STELLAR-M6 édition Chamonix-Mont-Blanc est un véritable outil tout-en-un. Capable de remplacer un talkie-walkie, un scanner ou un ordinateur de bureau, il simplifie vos usages tout en optimisant vos budgets." },
        ],
    },

    "stellar-x5s": {
        nom: "STELLAR-X5S",
        slug: "stellar-x5s",
        garant: garant5ans,
        image: stellar_x5s0,
        medias: [
            { type: "image", src: stellarx5sface },
            { type: "image", src: stellarx5sback }
        ],
        gamme: "stellar",
        hidden: "hidden",
        note: 4.5,
        couleurGradient: "from-gray-900 via-slate-800 to-lime-900",
        accroche: "Le smartphone 5G haut de gamme ultime de Crosscall — robustesse maximale",
        description:
            "Le STELLAR-X5S est le smartphone le plus avancé de Crosscall, combinant les meilleures certifications de résistance avec une fiche technique de flagship Android. Triple caméra 108 Mpx, 5G, recharge rapide et le système X-LINK exclusif : il est taillé pour les professionnels qui exigent le meilleur sans aucun compromis.",
        specs: [
            { label: "Certification", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "5G + Wi-Fi 6E + Bluetooth 5.2..." },
            { label: "Caméra arrière", valeur: "50 Mpx, 80°" },
            { label: "Caméra frontale", valeur: "16 MP" },
            { label: "Batterie", valeur: "Recharge rapide 33 W..." },
            { label: "X-LINK", valeur: "Oui" },
            { label: "Température d'utilisation", valeur: "-25°C / +60°C" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Passez à l'action en un instant Avec ses deux boutons programmables intégrés, le STELLAR-X5s vous permet de lancer instantanément vos applications les plus utiles. Une pression suffit pour gagner en rapidité et en confort." },
            { icone: null, texte: "Vos souvenirs, parfaitement capturés Le STELLAR-X5s est à la fois votre appareil photo ET votre caméra d’action ! Emmenez-le partout, quelles que soient les conditions, pour capturer vos plus beaux souvenirs grâce à son capteur 50 MPX Sony IMX766." },
            { icone: null, texte: "Une sécurité exigeante sur la durée Crosscall met un point d’honneur à conserver vos données personnelles et professionnelles à l’abri. C’est pourquoi opter pour le STELLAR-X5s, c’est aussi miser sur une sécurité pensée pour durer." },
            { icone: null, texte: "À la pointe de la connectivité Le STELLAR-X5s accélèrera votre efficacité en vous donnant accès aux meilleurs réseaux haut-débit que vous soyez chez vous, au bureau ou même en déplacement !" },
        ],
    },

    "stellar-m6": {
        nom: "STELLAR-M6",
        slug: "stellar-m6",
        garant: garant5ans,
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
            { label: "Norme IP", valeur: "IP68 selon la norme IEC 60529:2013+C0RR:2013+CORR2:2015 Clause 13.4 & 13.6 (solide) et clause 14.2.8 &14.3 (liquide)" },
            { label: "Connectivité", valeur: "5G + Bluetooth 5.2..." },
            { label: "Caméra arrière", valeur: "50 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Batterie", valeur: "Haute capacité longue durée" },
            { label: "X-LINK", valeur: "Oui" },
            { label: "Système", valeur: "Android" },
            { label: "Garantie", valeur: "5 ans" },
        ],
        points: [
            { icone: null, texte: "Solide et étanche au quotidien Le STELLAR-M6 résiste à l’eau salée, à la poussière, aux chutes et aux rayures de l’écran, et cela sans avoir besoin de coque de protection." },
            { icone: null, texte: "Personnalisez vos actions Adaptez les 3 boutons d’action à vos usages quotidiens et comptez sur le bouton SOS pour lancer discrètement un appel d’urgence, même depuis votre poche." },
            { icone: null, texte: "Vos données en sécurité Le STELLAR-M6 intègre des éléments de sécurisation avancés, avec un Secure Element et un déverrouillage biométrique, pour protéger vos données sensibles." },
            { icone: null, texte: "Une LED qui s’adapte à vos usages Attribuez une couleur à vos notifications et repérez immédiatement les plus urgentes grâce à la LED personnalisable." },
            { icone: null, texte: "Autonomie longue durée Confort d’utilisation prolongé grâce à son autonomie de 35h en communication et 400 heures en veille assure une utilisation prolongée en toute sérénité sans le moindre compromis." },
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
                    onClick={() => {navigate("/Téléphone-Crosscall"), window.scrollTo(0,0)}}
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
        .slice(0, 6)

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
                        <div className="flex md:gap-40 gap-5">
                            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] text-black">
                                {produit.nom}
                            </h1>
                            <img className={`${produit.hidden} md:w-20 md:h-20 h-10 w-10 flex text-center items-center justify-center`} src={produit.garant} alt="Garantie logo" />
                        </div>
                        <Stars className={`${produit.hidden}`} note={produit.note} />

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

            {/* ── Bandeau caractéristiques clés ──
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-white/10">
                    {produit.specs.slice(0, 3).map((s, i) => (
                        <div key={i} className="text-center px-2">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{s.label}</p>
                            <p className="font-bold text-xs md:text-base mt-1.5 leading-snug">{s.valeur}</p>
                        </div>
                    ))}
                </div>
            </section>*/}

            {/* ── Les points forts ── */}
            <section className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-full mx-auto px-6 py-16">
                    <h2 className="text-2xl md:text-5xl mb-7 font-black uppercase tracking-tight text-black">points forts</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {produit.points.map((point, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:border-lime-400 hover:shadow-lg transition-all"
                            >
                                <span className="w-15 h-15 rounded-xl bg-white text-lime-400 flex items-center justify-center flex-shrink-0">
                                    {point.icone ? (
                                        <img src={point.icone} alt="" className="w-30 h-30 object-contain" />
                                    ) : (
                                        <FaCheckCircle size={18} />
                                    )}
                                </span>
                                <p className="text-gray-700 text-sm leading-relaxed">{point.texte}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Description ── 
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">À propos de ce téléphone</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
            </section>*/}

            {/* ── Spécifications techniques ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-full mx-auto px-6 py-16">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-8">Spécifications techniques</h2>
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
                        <div className="grid sm:grid-cols-4 md:grid-cols-4 gap-6">
                            {autresModeles.map(p => {
                                /*const pRemise = Math.round(parsePrix(p.prixBarre) - parsePrix(p.prix))*/
                                return (
                                    <button
                                        key={p.slug}
                                        onClick={() => {navigate(`/Téléphone-Crosscall/${p.slug}`), window.scrollTo(0,0)}}
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