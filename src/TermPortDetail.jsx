import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaChevronRight, FaPlay,
    FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaFileDownload,
} from "react-icons/fa"
import zc11 from "../images/ZC11.jfif"
import tc27 from "../images/TC27.jfif"
import tc78 from "../images/TC78.jpg"
import tc58 from "../images/TC58.jpg"
import mc330l from "../images/MC330L.jpg"
import mc345b from "../images/MC34X0.jpg"
import mc3401 from "../images/MC34X0.jpg"
import mc94 from "../images/MC94.jpg"
import tc57 from "../images/TC57.jpg"
import vc83 from "../images/VC83.jpg"
import rs5 from "../images/RS5.jfif"
import rs21 from "../images/RS21.jfif"


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
// ─── Base de données des produits ───────────────────────────────────────────
const PRODUITS = {

    // ── Portables ──────────────────────────────────────────────────────────
    "WCMTB-T27B6ABC2-A6": {
        nom: "TC27",
        sku: "WCMTB-T27B6ABC2-A6",
        image: tc27,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/ZWwt-lz_ml8" },
            { type: "image", src: tc27 },
        ],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal mobile 5G Wi-Fi 6 haute performance — 6 Go/64 Go",
        description:
            "Le TC27 est le terminal mobile nouvelle génération de Zebra, alliant connectivité 5G et Wi-Fi 6 pour des performances réseau inégalées. Son scanner SE4710 garantit une capture de codes-barres rapide et fiable, même dans les environnements les plus exigeants.",
        specs: [
            { label: "Connectivité", valeur: "WWAN 5G + Wi-Fi 6" },
            { label: "Scanner", valeur: "SE4710" },
            { label: "Écran", valeur: "6 pouces" },
            { label: "RAM / Stockage", valeur: "6 Go / 64 Go" },
            { label: "Caméra arrière", valeur: "16 Mpx" },
            { label: "Caméra frontale", valeur: "5 Mpx" },
            { label: "Connecteur", valeur: "Arrière 2 broches, USB-C" },
            { label: "Batterie", valeur: "Standard" },
            { label: "SIM", valeur: "SIM + eSIM" },
            { label: "Système", valeur: "Android GMS" },
        ],
        points: [
            "5G et Wi-Fi 6 pour une connectivité ultra-rapide sur le terrain",
            "Scanner SE4710 à haute précision pour les tâches intensives",
            "Écran 6 pouces lisible même en plein soleil",
            "Double SIM + eSIM pour une flexibilité maximale",
            "NFC et Bluetooth intégrés pour tous les usages terrain",
        ],
    },

    "WCMTB-T27B8ABE8-A6": {
        nom: "TC27",
        sku: "WCMTB-T27B8ABE8-A6",
        image: tc27,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/ZWwt-lz_ml8" },
            { type: "image", src: tc27 },
        ],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal mobile 5G Wi-Fi 6 haute performance — 8 Go/128 Go batterie longue durée",
        description:
            "Cette variante du TC27 monte en puissance avec 8 Go de RAM, 128 Go de stockage et une batterie longue durée. Le connecteur arrière 8 broches enrichit les possibilités d'accessoires et d'intégration sur le terrain, pour des équipes qui n'ont pas le droit de tomber en panne.",
        specs: [
            { label: "Connectivité", valeur: "WWAN 5G + Wi-Fi 6" },
            { label: "Scanner", valeur: "SE4710" },
            { label: "Écran", valeur: "6 pouces" },
            { label: "RAM / Stockage", valeur: "8 Go / 128 Go" },
            { label: "Caméra arrière", valeur: "16 Mpx" },
            { label: "Caméra frontale", valeur: "5 Mpx" },
            { label: "Connecteur", valeur: "Arrière 8 broches, USB-C" },
            { label: "Batterie", valeur: "Longue durée" },
            { label: "SIM", valeur: "SIM + eSIM" },
            { label: "Système", valeur: "Android GMS" },
        ],
        points: [
            "8 Go de RAM pour les applications les plus gourmandes",
            "Batterie longue durée pour des journées de travail sans interruption",
            "128 Go de stockage pour données et applications volumineuses",
            "Connecteur 8 broches pour une compatibilité accessoires étendue",
            "5G + Wi-Fi 6 pour rester connecté partout",
        ],
    },

    "TC58B1-3T1E4B1080-A6": {
        nom: "TC58",
        sku: "TC58B1-3T1E4B1080-A6",
        image: tc58,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/HAOhwiTWPRM" },
            { type: "image", src: tc58 },
        ],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal mobile 5G FR1 Wi-Fi 6E avec imageur SE4720",
        description:
            "Le TC58 intègre la connectivité 5G FR1 et le Wi-Fi 6E pour offrir les vitesses de transfert les plus élevées du marché. Son imageur SE4720 capture les codes-barres avec une précision remarquable, même dans des conditions de lecture difficiles.",
        specs: [
            { label: "Connectivité", valeur: "WAN 5G FR1 + Wi-Fi 6E" },
            { label: "Scanner", valeur: "SE4720" },
            { label: "Écran", valeur: "6 pouces" },
            { label: "RAM / Stockage", valeur: "4 Go / 64 Go" },
            { label: "Caméra arrière", valeur: "16 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Batterie", valeur: "Standard 4 680 mAh, rechargeable" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Région", valeur: "ROW (reste du monde)" },
        ],
        points: [
            "Wi-Fi 6E pour une bande passante trois fois supérieure au Wi-Fi 6",
            "5G FR1 pour des connexions mobiles ultra-rapides",
            "Imageur SE4720 aux performances de lecture exceptionnelles",
            "Batterie 4 680 mAh rechargeable en cours d'utilisation",
            "Caméra 16 Mpx pour la documentation visuelle sur le terrain",
        ],
    },

    "TC78B1-3T1K6B1A80-A6": {
        nom: "TC78",
        sku: "TC78B1-3T1K6B1A80-A6",
        image: tc78,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/F2RTBXPp6Bw" },
            { type: "image", src: tc78 }
        ],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal mobile 5G Sub-6 avec scanner SE55 et recharge sans fil",
        description:
            "Le TC78 est le terminal mobile haut de gamme de la gamme TC, doté du scanner SE55 le plus performant de Zebra et de la recharge sans fil. Son remplacement à chaud de batterie garantit zéro temps d'arrêt, même lors des opérations les plus critiques.",
        specs: [
            { label: "Connectivité", valeur: "WAN 5G Sub-6 + Wi-Fi 6E" },
            { label: "Scanner", valeur: "SE55" },
            { label: "Écran", valeur: "6 pouces" },
            { label: "RAM / Stockage", valeur: "8 Go / 128 Go" },
            { label: "Caméra arrière", valeur: "16 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Batterie", valeur: "Standard 4 680 mAh, remplacement à chaud" },
            { label: "Recharge", valeur: "Sans fil" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Région", valeur: "ROW (reste du monde)" },
        ],
        points: [
            "Scanner SE55 — le plus performant de la gamme Zebra",
            "Remplacement à chaud de la batterie : aucun temps d'arrêt",
            "Recharge sans fil intégrée pour plus de liberté",
            "8 Go/128 Go pour des performances maximales",
            "5G Sub-6 + Wi-Fi 6E pour une connectivité sans compromis",
        ],
    },

    "MC330L-GJ3EG4RW": {
        nom: "MC330L",
        sku: "MC330L-GJ3EG4RW",
        image: mc330l,
        medias: [{ type: "image", src: mc330l }],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal pistolet WLAN 2D avec NFC — 4 Go/32 Go",
        description:
            "Le MC330L est un terminal pistolet robuste conçu pour les environnements d'entrepôt et de vente au détail. Sa poignée pistolet ergonomique réduit la fatigue lors des sessions de scan intensives, tandis que son imageur 2D capture tous types de codes-barres.",
        specs: [
            { label: "Connectivité", valeur: "WLAN + Bluetooth" },
            { label: "Forme", valeur: "Pistolet" },
            { label: "Scanner", valeur: "2D, grossissement 2,5x" },
            { label: "Clavier", valeur: "38 touches" },
            { label: "RAM / Stockage", valeur: "4 Go / 32 Go" },
            { label: "NFC", valeur: "Oui" },
            { label: "Capteur", valeur: "SNSR intégré" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Région", valeur: "ROW (reste du monde)" },
        ],
        points: [
            "Forme pistolet ergonomique pour le scan intensif",
            "Imageur 2D à grossissement 2,5x pour la longue portée",
            "NFC intégré pour les paiements et l'appairage rapide",
            "38 touches pour une saisie de données complète",
            "Robustesse certifiée pour les environnements industriels",
        ],
    },

    "MC345B-3G1J53SS-A6": {
        nom: "MC345B",
        sku: "MC345B-3G1J53SS-A6",
        image: mc345b,
        medias: [{ type: "image", src: mc345b }],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal pistolet WLAN 2D avec NFC — 4 Go/32 Go",
        description:
            "Le MC345B est un terminal pistolet robuste conçu pour les environnements d'entrepôt et de vente au détail. Sa poignée pistolet ergonomique réduit la fatigue lors des sessions de scan intensives, tandis que son imageur 2D capture tous types de codes-barres.",
        specs: [
            { label: "Connectivité", valeur: "WLAN + Bluetooth" },
            { label: "Forme", valeur: "Pistolet" },
            { label: "Scanner", valeur: "2D, grossissement 2,5x" },
            { label: "Clavier", valeur: "38 touches" },
            { label: "RAM / Stockage", valeur: "4 Go / 32 Go" },
            { label: "NFC", valeur: "Oui" },
            { label: "Capteur", valeur: "SNSR intégré" },
            { label: "Système", valeur: "Android GMS" },
            { label: "Région", valeur: "ROW (reste du monde)" },
        ],
        points: [
            "Forme pistolet ergonomique pour le scan intensif",
            "Imageur 2D à grossissement 2,5x pour la longue portée",
            "NFC intégré pour les paiements et l'appairage rapide",
            "38 touches pour une saisie de données complète",
            "Robustesse certifiée pour les environnements industriels",
        ],
    },

    "MC3401-0G1M54SS-A6": {
        nom: "MC3401",
        sku: "MC3401-0G1M54SS-A6",
        image: mc3401,
        medias: [{ type: "image", src: mc3401 }],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal pistolet WLAN 2D longue portée avec NFC — 6 Go/64 Go",
        description:
            "Le MC3401 (série MC3400) est un terminal pistolet robuste conçu pour les environnements d'entrepôt et de vente au détail. Sa poignée pistolet ergonomique réduit la fatigue lors des sessions de scan intensives, tandis que son imageur SE58 longue portée capture les codes-barres jusqu'à 30 m de distance.",
        specs: [
            { label: "Connectivité", valeur: "WLAN Wi-Fi 6E + Bluetooth 5.3" },
            { label: "Forme", valeur: "Pistolet (Gun)" },
            { label: "Scanner", valeur: "SE58, imageur 1D/2D longue portée" },
            { label: "Clavier", valeur: "47 touches" },
            { label: "RAM / Stockage", valeur: "6 Go / 64 Go (UFS)" },
            { label: "NFC", valeur: "Oui" },
            { label: "Caméra", valeur: "Non (modèle sans caméra)" },
            { label: "Batterie", valeur: "7000 mAh (standard)" },
            { label: "Écran", valeur: "4,0 pouces" },
            { label: "Système", valeur: "Android 13 GMS" },
            { label: "Région", valeur: "A6 (EMEA)" },
        ],
        points: [
            "Forme pistolet ergonomique pour le scan intensif",
            "Imageur SE58 à très longue portée (jusqu'à 30 m)",
            "Wi-Fi 6E et Bluetooth 5.3 pour une connectivité rapide et fiable",
            "NFC intégré pour les paiements et l'appairage rapide",
            "47 touches pour une saisie de données complète",
            "Batterie 7000 mAh pour une autonomie sur toute la journée",
            "Robustesse certifiée pour les environnements industriels",
        ],
    },

    "MC9401-0G1R6BSS-A6": {
        nom: "MC94",
        sku: "MC9401-0G1R6BSS-A6",
        image: mc94,
        medias: [
            { type: "image", src: mc94 }
        ],
        categorie: "portables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Terminal pistolet Wi-Fi 6E haut de gamme — 6 Go/128 Go",
        description:
            "Le MC94 est le terminal pistolet le plus avancé de Zebra, combinant Wi-Fi 6E, NFC, un clavier 34 touches et une batterie massive de 7 000 mAh. Son scanner SE58 et son appareil photo 16 Mpx en font l'outil de référence pour les opérations d'entrepôt les plus exigeantes.",
        specs: [
            { label: "Connectivité", valeur: "WLAN Wi-Fi 6E + Bluetooth + NFC" },
            { label: "Forme", valeur: "Pistolet" },
            { label: "Scanner", valeur: "SE58" },
            { label: "Écran", valeur: "4,3 pouces" },
            { label: "RAM / Stockage", valeur: "6 Go / 128 Go UFS" },
            { label: "Caméra arrière", valeur: "16 Mpx" },
            { label: "Caméra frontale", valeur: "8 Mpx" },
            { label: "Clavier", valeur: "34 touches" },
            { label: "Batterie", valeur: "Standard 7 000 mAh" },
            { label: "Système", valeur: "Android GMS" },
        ],
        points: [
            "Batterie 7 000 mAh pour les journées les plus longues",
            "Wi-Fi 6E — la connexion sans fil la plus rapide disponible",
            "Scanner SE58 pour une capture de codes-barres ultra-précise",
            "128 Go UFS pour un stockage et des accès rapides",
            "Vibreur intégré pour les retours haptiques en environnement bruyant",
        ],
    },

    // ── Embarqués ──────────────────────────────────────────────────────────
    "VC83-08SOCQBAABANA": {
        nom: "VC8300",
        sku: "VC83-08SOCQBAABANA",
        image: vc83,
        medias: [{ type: "image", src: vc83 }],
        categorie: "embarques",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Terminal embarqué ultra-durci pour chariots et engins de manutention",
        description:
            "Le VC8300 est le terminal embarqué de référence pour les entrepôts, les chaînes du froid et les chantiers. Monté sur chariot élévateur ou engin de manutention, il résiste aux chocs, aux vibrations et aux températures extrêmes (-30 °C à +50 °C) pour garantir une opérabilité sans faille.",
        specs: [
            { label: "Écran", valeur: "8 pouces, 1280 x 720" },
            { label: "Écran extérieur", valeur: "Lisible en plein soleil" },
            { label: "Tactile", valeur: "Capacitif" },
            { label: "Clavier", valeur: "QWERTY" },
            { label: "Processeur", valeur: "Qualcomm Snapdragon SD660" },
            { label: "RAM / Stockage", valeur: "4 Go / 32 Go MMC (pSLC)" },
            { label: "Température", valeur: "-30 °C à +50 °C" },
            { label: "E/S", valeur: "2x USB, 2x RS232, haut-parleur/microphone" },
            { label: "Système", valeur: "Android GMS + Ivanti Velocity" },
            { label: "Région", valeur: "NA (États-Unis, Canada, Porto Rico)" },
        ],
        points: [
            "Certifié pour fonctionner de -30 °C à +50 °C",
            "Écran lisible en extérieur même en plein soleil",
            "Résistance aux chocs et vibrations des engins de manutention",
            "Ivanti Velocity préinstallé pour l'émulation de terminaux",
            "Ports RS232 et USB pour l'intégration aux systèmes existants",
        ],
    },

    // ── Transportables ─────────────────────────────────────────────────────
    "RS5000X-TCFSSWR": {
        nom: "RS5000X",
        sku: "RS5000X-TCFSSWR",
        image: rs5,
        medias: [{ type: "image", src: rs5 }],
        categorie: "transportables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner portable filaire SE4770 — câble court, déclenchement doigt standard",
        description:
            "Le RS5000X est un scanner portable filaire conçu pour s'associer aux terminaux mobiles Zebra existants. Son imageur SE4770 offre des performances de lecture 1D/2D remarquables, tandis que son déclenchement au doigt standard garantit une utilisation intuitive et peu fatigante.",
        specs: [
            { label: "Type", valeur: "Scanner portable filaire" },
            { label: "Scanner", valeur: "SE4770" },
            { label: "Câble", valeur: "Court" },
            { label: "Déclenchement", valeur: "Standard au doigt" },
            { label: "Codes-barres", valeur: "1D et 2D" },
            { label: "Distribution", valeur: "Mondiale" },
        ],
        points: [
            "Imageur SE4770 pour la lecture 1D et 2D haute performance",
            "Format compact pour une utilisation en bague sur les doigts",
            "Câble court pour éviter les accrochages en entrepôt",
            "Compatible avec tous les terminaux Zebra de la gamme TC",
            "Distribution mondiale — disponible partout",
        ],
    },

    "RS21C0-TS00ZWR": {
        nom: "RS21",
        sku: "RS21C0-TS00ZWR",
        image: rs21,
        medias: [
            { type: "video", src: "https://www.youtube.com/embed/umeRpmDdmsM" },
            { type: "image", src: rs21 }
        ],
        categorie: "transportables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner bague sans fil SE4770/SR560 avec batterie intégrée",
        description:
            "Le RS21 est un scanner bague sans fil avec batterie intégrée, offrant une liberté de mouvement totale sans fil entre scanner et terminal. Son imageur SE4770/SR560 capture les codes-barres 1D et 2D avec précision. Compatible avec les supports dos de main pour une ergonomie optimale.",
        specs: [
            { label: "Type", valeur: "Scanner bague sans fil" },
            { label: "Scanner", valeur: "SE4770/SR560" },
            { label: "Batterie", valeur: "Intégrée" },
            { label: "Codes-barres", valeur: "1D et 2D" },
            { label: "Accessoires", valeur: "Support dos de main droite/gauche (vendu séparément)" },
            { label: "Distribution", valeur: "Mondiale" },
        ],
        points: [
            "Sans fil — liberté de mouvement totale en entrepôt",
            "Batterie intégrée pour une autonomie opérationnelle complète",
            "Double imageur SE4770/SR560 pour toutes les distances de lecture",
            "Compatible support dos de main droite ou gauche",
            "Conçu pour réduire la fatigue lors du picking intensif",
        ],
    },

    "RS5000X-TCFSXWR": {
        nom: "RS5000X",
        sku: "RS5000X-TCFSXWR",
        image: rs5,
        medias: [{ type: "image", src: rs5 }],
        categorie: "transportables",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Scanner portable filaire SE4770 — câble court, grande gâchette isotherme",
        description:
            "Cette variante du RS5000X est équipée d'une grande gâchette avec dragonne isotherme, permettant une utilisation confortable même avec des gants épais dans les entrepôts frigorifiques. L'imageur SE4770/SR560 garantit des performances de lecture dans tous les environnements.",
        specs: [
            { label: "Type", valeur: "Scanner portable filaire" },
            { label: "Scanner", valeur: "SE4770/SR560" },
            { label: "Câble", valeur: "Court" },
            { label: "Déclenchement", valeur: "Grande gâchette avec dragonne isotherme" },
            { label: "Codes-barres", valeur: "1D et 2D" },
            { label: "Distribution", valeur: "Internationale" },
        ],
        points: [
            "Dragonne isotherme pour une utilisation avec gants épais",
            "Grande gâchette pour le confort en environnement froid",
            "Imageur SE4770/SR560 haute performance en toutes conditions",
            "Idéal pour les entrepôts frigorifiques et la chaîne du froid",
            "Compatible avec toute la gamme de terminaux Zebra",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function TermPortDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/Terminaux-portables")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux terminaux
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
                <div className="max-w-6xl mx-auto px-6 pt-20 pb-3 md:pt-43 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(`/Terminaux-portables?categorie=${produit.categorie}`)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> Terminaux
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
                        <p className="text-gray-600 leading-relaxed text-lg">{produit.accroche}</p>

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
                                className={`text-white font-bold px-8 py-3.5 rounded-full transition-colors ${accent.solid}`}
                            >
                                Contacter le service commercial
                            </button>
                            <button
                                onClick={() => navigate("/devis", { state: { produit } })}
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
                            Découvrez d'autres terminaux {produit.categorie}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map((p) => (
                                <button
                                    key={p.sku}
                                    onClick={() => {navigate(`/terminaux/${p.sku}`), window.scrollTo(0,0)}}
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
                            onClick={() => navigate(`/Terminaux-portables?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres terminaux
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}