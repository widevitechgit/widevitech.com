import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaChevronRight, FaPlay,
    FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaFileDownload,
} from "react-icons/fa"
import zc11 from "../images/ZC11.png"
import zc32 from "../images/ZC32.jpg"
import zd621 from "../images/ZD621.jpg"
import zq620 from "../images/ZQ620.jpg"
import zq630 from "../images/ZQ630.jpg"
import zt231 from "../images/ZT231.jpg"
import zd510 from "../images/ZD510-HC.jpg"
import rs5 from "../images/RS5.jfif"
import zt411 from "../images/zt411.jpg"
import zt620 from "../images/zt620.jpg"
import zt510 from "../images/zt510.jpg"

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

    // ── Bureau ─────────────────────────────────────────────────────────────
    "ZD6A142-31EF00EZ": {
        nom: "ZD621",
        sku: "ZD6A142-31EF00EZ",
        image: zd621,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/zd421-zd621-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zd621 }
        ],
        categorie: "bureau",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante de bureau à transfert thermique 203 dpi avec écran tactile couleur",
        description:
            "La ZD621 est l'imprimante de bureau de référence de Zebra pour les volumes faibles à moyens. Son écran tactile couleur LCD simplifie la configuration et le suivi, tandis que ses multiples interfaces (USB, Ethernet, série, BTLE5) assurent une intégration aisée dans tout environnement informatique.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique" },
            { label: "Résolution", valeur: "203 dpi" },
            { label: "Ruban", valeur: "74 / 300 m" },
            { label: "Écran", valeur: "Tactile couleur LCD" },
            { label: "Interfaces", valeur: "USB, hôte USB, Ethernet, Série, BTLE5" },
            { label: "Distributeur", valeur: "Décolleur (peeler) inclus" },
            { label: "Police", valeur: "Suisse" },
            { label: "Langage", valeur: "EZPL" },
            { label: "Câbles", valeur: "UE et Royaume-Uni inclus" },
        ],
        points: [
            "Écran tactile couleur pour une configuration intuitive",
            "Distributeur décolleur intégré pour l'application d'étiquettes à la volée",
            "Connectivité BTLE5 pour la gestion sans fil",
            "Compatible EZPL pour une intégration simplifiée aux systèmes Zebra",
            "Multi-interfaces pour s'adapter à toutes les infrastructures réseau",
        ],
    },

    // ── Mobiles ────────────────────────────────────────────────────────────
    "ZQ62-AUWAE14-00": {
        nom: "ZQ620",
        sku: "ZQ62-AUWAE14-00",
        image: zq620,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0005/zq600-plus-series-video-retail-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zq620 }
        ],
        categorie: "mobiles",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante mobile thermique directe 3 pouces avec Wi-Fi 802.11ac et Bluetooth",
        description:
            "La ZQ620 Plus est l'imprimante mobile compacte de Zebra pour les équipes terrain. Grâce à sa double connectivité 802.11ac et Bluetooth 4.x, elle s'intègre parfaitement aux terminaux mobiles et smartphones. Sa bandoulière et son clip ceinture facilitent le port toute la journée.",
        specs: [
            { label: "Technologie", valeur: "Thermique directe (DT)" },
            { label: "Largeur d'impression", valeur: "3 pouces / 72 mm" },
            { label: "Connectivité", valeur: "Wi-Fi 802.11ac + Bluetooth 4.x" },
            { label: "Plateau", valeur: "Ligné" },
            { label: "Noyau", valeur: "0,75 mm" },
            { label: "Groupe", valeur: "E" },
            { label: "Accessoires inclus", valeur: "Bandoulière, clip ceinture" },
            { label: "Polices", valeur: "Anglaises" },
        ],
        points: [
            "Wi-Fi 802.11ac pour une impression réseau haute vitesse",
            "Bluetooth 4.x pour un jumelage mobile instantané",
            "Format ultra-compact pour une mobilité totale sur le terrain",
            "Bandoulière incluse pour un port confortable toute la journée",
            "Idéale pour l'impression de reçus, bons de livraison et étiquettes terrain",
        ],
    },

    "ZQ63-AUFAE14-00": {
        nom: "ZQ630",
        sku: "ZQ63-AUFAE14-00",
        image: zq630,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0005/zq600-plus-series-video-warehouse-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zq630 }
        ],
        categorie: "mobiles",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante mobile thermique directe robuste avec Bluetooth 4.x",
        description:
            "La ZQ630 Plus est la version durcie de la gamme mobile Zebra, conçue pour les environnements les plus exigeants. Sa construction robuste résiste aux chutes, à la poussière et aux intempéries, tout en offrant une impression rapide et fiable grâce à la connectivité Bluetooth 4.x.",
        specs: [
            { label: "Technologie", valeur: "Thermique directe (DT)" },
            { label: "Connectivité", valeur: "Bluetooth 4.x" },
            { label: "Plateau", valeur: "Ligné" },
            { label: "Noyau", valeur: "0,75 pouce" },
            { label: "Groupe", valeur: "E" },
            { label: "Accessoires inclus", valeur: "Bandoulière, clip ceinture" },
            { label: "Polices", valeur: "Anglaises" },
            { label: "Construction", valeur: "Renforcée, résistante aux chutes" },
        ],
        points: [
            "Construction durcie pour les environnements industriels et extérieurs",
            "Bluetooth 4.x pour un appairage facile avec tout terminal mobile",
            "Légère et compacte pour le travail en mouvement",
            "Clip ceinture inclus pour une utilisation mains libres",
            "Fiable dans les conditions météo difficiles",
        ],
    },

    // ── Industrielles ──────────────────────────────────────────────────────
    "ZT23143-T0E000FZ": {
        nom: "ZT231",
        sku: "ZT23143-T0E000FZ",
        image: zt231,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/zt231-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zt231 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante industrielle à transfert thermique 4 pouces 300 dpi avec découpe facile",
        description:
            "La ZT231 est une imprimante industrielle robuste de 4 pouces conçue pour les volumes d'impression élevés en environnement d'entrepôt ou de fabrication. Sa résolution de 300 dpi garantit une qualité d'impression irréprochable pour les codes-barres les plus exigeants, et son module de découpe facile simplifie les opérations.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Largeur d'impression", valeur: "4 pouces" },
            { label: "Résolution", valeur: "300 dpi" },
            { label: "Coupe", valeur: "Découpe facile intégrée" },
            { label: "Interfaces", valeur: "USB, Série, Ethernet, BTLE, hôte USB" },
            { label: "Langage", valeur: "EZPL" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "300 dpi pour des codes-barres et étiquettes d'une précision maximale",
            "Découpe facile intégrée pour un débit d'impression industriel",
            "Connectivité BTLE pour la gestion à distance sans fil",
            "Multi-interfaces pour une intégration dans tout environnement IT",
            "Conçue pour les volumes d'impression industriels intensifs",
        ],
    },

    "ZT41142-T0E0000Z": {
        nom: "ZT411",
        sku: "ZT41142-T0E0000Z",
        image: zt411,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/fr/video/product-solutions-portfolio/zt400industrialprinter-video-design-highlights-fr-fr.mp4/jcr:content/renditions/original" },
            { type: "image", src: zt411 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante industrielle à transfert thermique 4 pouces 203 dpi avec écran tactile couleur",
        description:
            "La ZT411 (série ZT400) est une imprimante industrielle robuste de 4 pouces conçue pour les volumes d'impression élevés en environnement d'entrepôt, de fabrication ou de logistique. Sa résolution de 203 dpi et sa vitesse d'impression allant jusqu'à 14 pouces/seconde en font une solution idéale pour l'impression d'étiquettes standards à haut débit. Son châssis tout métal et sa porte bi-pliante assurent une fiabilité maximale, tandis que son écran tactile couleur 4,3 pouces simplifie le paramétrage et le suivi du statut.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "4,09 pouces (104 mm)" },
            { label: "Résolution", valeur: "203 dpi (8 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 14 ips (355,6 mm/s)" },
            { label: "Processeur", valeur: "ARM Cortex A7" },
            { label: "Mémoire", valeur: "256 Mo RAM / 512 Mo Flash" },
            { label: "Écran", valeur: "Tactile couleur 4,3 pouces" },
            { label: "Interfaces", valeur: "Série RS-232, USB 2.0, 2x hôte USB, Ethernet 10/100, Bluetooth 4.1/MFi" },
            { label: "Langage", valeur: "EZPL (ZPL II / EPL)" },
            { label: "Support d'impression", valeur: "Continu, à découpe, repère noir, encoche" },
            { label: "Largeur des supports", valeur: "1,0 à 4,5 po (découpe/massicot), 1,0 à 4,25 po (pelage/rembobinage)" },
            { label: "Épaisseur des supports", valeur: "0,058 à 0,25 mm" },
            { label: "Diamètre max. du rouleau", valeur: "8,0 pouces (203 mm)" },
            { label: "Longueur du ruban", valeur: "Jusqu'à 450 m (1476 pieds)" },
            { label: "Dimensions", valeur: "324 (H) x 269 (L) x 495 (P) mm" },
            { label: "Poids", valeur: "16,33 kg" },
            { label: "Construction", valeur: "Châssis tout métal, porte bi-pliante à fenêtre large" },
            { label: "Alimentation", valeur: "100-240V auto-adaptable, certifiée ENERGY STAR" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "203 dpi et jusqu'à 14 ips pour une impression rapide adaptée aux étiquettes standards",
            "Écran tactile couleur 4,3 pouces pour un paramétrage et un suivi simplifiés",
            "Double port hôte USB pour connecter simultanément scanner, clavier ou clé USB",
            "Bluetooth 4.1/MFi pour une connectivité mobile flexible",
            "Châssis tout métal robuste avec porte bi-pliante pour les environnements industriels exigeants",
            "Compatible EPL et ZPL pour une migration facile depuis d'autres imprimantes Zebra",
            "Options d'évolution sur site : RFID, Wi-Fi 802.11ac, découpe, pelage, rembobinage, impression sans mandrin (linerless)",
        ],
    },

    "ZT41143-T0E0000Z": {
        nom: "ZT411",
        sku: "ZT41143-T0E0000Z",
        image: zt411,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/fr/video/product-solutions-portfolio/zt400industrialprinter-video-design-highlights-fr-fr.mp4/jcr:content/renditions/original" },
            { type: "image", src: zt411 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante industrielle à transfert thermique 4 pouces 300 dpi avec découpe et écran tactile couleur",
        description:
            "La ZT411 (série ZT400) est une imprimante industrielle robuste de 4 pouces conçue pour les volumes d'impression élevés en environnement d'entrepôt, de fabrication ou de logistique. Sa résolution de 300 dpi garantit une qualité d'impression irréprochable pour les codes-barres et graphiques les plus fins, tandis que son module de découpe avec bac de récupération automatise la séparation des étiquettes. Son châssis tout métal et son écran tactile couleur 4,3 pouces complètent une conception pensée pour la fiabilité et la simplicité d'utilisation.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "4,09 pouces (104 mm)" },
            { label: "Résolution", valeur: "300 dpi (12 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 10 ips (254 mm/s)" },
            { label: "Coupe", valeur: "Massicot frontal avec bac de récupération" },
            { label: "Processeur", valeur: "ARM Cortex A7" },
            { label: "Mémoire", valeur: "256 Mo RAM / 512 Mo Flash" },
            { label: "Écran", valeur: "Tactile couleur 4,3 pouces" },
            { label: "Interfaces", valeur: "Série RS-232, USB 2.0, 2x hôte USB, Ethernet 10/100, Bluetooth 4.1/MFi" },
            { label: "Langage", valeur: "EZPL (ZPL II / EPL)" },
            { label: "Support d'impression", valeur: "Continu, à découpe, repère noir, encoche" },
            { label: "Largeur des supports", valeur: "1,0 à 4,5 po (découpe/massicot), 1,0 à 4,25 po (pelage/rembobinage)" },
            { label: "Épaisseur des supports", valeur: "0,058 à 0,25 mm" },
            { label: "Diamètre max. du rouleau", valeur: "8,0 pouces (203 mm)" },
            { label: "Longueur du ruban", valeur: "Jusqu'à 450 m (1476 pieds)" },
            { label: "Dimensions", valeur: "324 (H) x 269 (L) x 495 (P) mm" },
            { label: "Poids", valeur: "16,33 kg" },
            { label: "Construction", valeur: "Châssis tout métal, porte bi-pliante à fenêtre large" },
            { label: "Alimentation", valeur: "100-240V auto-adaptable, certifiée ENERGY STAR" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "300 dpi pour des codes-barres et graphiques d'une précision maximale",
            "Découpe automatique intégrée avec bac de récupération pour un débit d'impression optimisé",
            "Écran tactile couleur 4,3 pouces pour un paramétrage et un suivi simplifiés",
            "Double port hôte USB pour connecter simultanément scanner, clavier ou clé USB",
            "Bluetooth 4.1/MFi pour une connectivité mobile flexible",
            "Châssis tout métal robuste avec porte bi-pliante pour les environnements industriels exigeants",
            "Compatible EPL et ZPL pour une migration facile depuis d'autres imprimantes Zebra",
            "Options d'évolution sur site : RFID, Wi-Fi 802.11ac, pelage, rembobinage, impression sans mandrin (linerless)",
        ],
    },

    "ZT62062-T0E0100Z": {
        nom: "ZT620",
        sku: "ZT62062-T0E0100Z",
        image: zt620,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/zt600-series-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zt620 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante industrielle à transfert thermique 6 pouces 203 dpi avec écran tactile couleur",
        description:
            "La ZT620 (série ZT600) succède à la gamme Xi et représente le haut de gamme industriel de Zebra. Conçue pour les très hauts volumes d'impression en industrie, transport, logistique, commerce ou santé, elle imprime sur une largeur de 6 pouces à une vitesse pouvant atteindre 12 pouces par seconde. Son architecture pensée pour la facilité d'utilisation — chargement latéral, capteurs intégrés, indicateurs de pression colorés — réduit les besoins de support technique, tandis que son écran tactile couleur 4,3 pouces et sa plateforme Link-OS offrent une visibilité et une gestion à distance complètes.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "6 pouces (168 mm)" },
            { label: "Résolution", valeur: "203 dpi (8 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 12 ips (305 mm/s)" },
            { label: "Coupe", valeur: "Fonction Tear (arrachage manuel), pas de découpe automatique" },
            { label: "Mémoire", valeur: "1 Go SDRAM (32 Mo utilisateur) / 2 Go Flash (512 Mo utilisateur)" },
            { label: "Écran", valeur: "Tactile couleur 4,3 pouces" },
            { label: "Interfaces", valeur: "Série, USB 2.0, 2x hôte USB, Ethernet Gigabit, Bluetooth 4.1" },
            { label: "Langage", valeur: "ZPL" },
            { label: "Capteurs", valeur: "Transmissif ajustable + réflectif fixe" },
            { label: "Construction", valeur: "Porte bi-pliante, mandrin de support intégré" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "203 dpi et jusqu'à 12 ips pour les très gros volumes d'impression industrielle",
            "Écran tactile couleur 4,3 pouces avec plateforme Link-OS pour la gestion et la visibilité à distance",
            "Ethernet Gigabit pour une connectivité réseau à très haut débit",
            "Double port hôte USB pour connecter simultanément plusieurs périphériques",
            "Capteurs intégrés et diagnostics embarqués pour réduire les besoins de support technique",
            "Chargement latéral des supports pour simplifier l'installation des rubans et étiquettes",
            "Successeur de la gamme Xi, référence historique de Zebra pour l'impression industrielle",
            "Options d'évolution sur site : RFID, Wi-Fi, découpe, pelage, rembobinage",
        ],
    },

    "ZT62063-T0E0100Z": {
        nom: "ZT620",
        sku: "ZT62063-T0E0100Z",
        image: zt620,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/web-production/zt600-series-video-website-en-us.mp4/jcr:content/renditions/original" },
            { type: "image", src: zt620 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Imprimante industrielle à transfert thermique 6 pouces 300 dpi haute résolution avec écran tactile couleur",
        description:
            "La ZT620 (série ZT600) succède à la gamme Xi et représente le haut de gamme industriel de Zebra. Cette version 300 dpi de la ZT62063 offre une résolution deux fois supérieure à la variante 203 dpi, idéale pour les étiquettes de petite taille nécessitant une grande précision : composants électroniques, cartes de circuits imprimés, bijouterie, cosmétique ou étiquetage pharmaceutique. Elle imprime sur une largeur de 6 pouces à une vitesse pouvant atteindre 8 pouces par seconde. Son architecture pensée pour la facilité d'utilisation — chargement latéral, capteurs intégrés, indicateurs de pression colorés — réduit les besoins de support technique, tandis que son écran tactile couleur 4,3 pouces et sa plateforme Link-OS offrent une visibilité et une gestion à distance complètes.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "6 pouces (168 mm)" },
            { label: "Résolution", valeur: "300 dpi (12 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 8 ips (203 mm/s)" },
            { label: "Coupe", valeur: "Fonction Tear (arrachage manuel), pas de découpe automatique" },
            { label: "Mémoire", valeur: "1 Go SDRAM (32 Mo utilisateur) / 2 Go Flash (512 Mo utilisateur)" },
            { label: "Écran", valeur: "Tactile couleur 4,3 pouces" },
            { label: "Interfaces", valeur: "Série, USB 2.0, 2x hôte USB, Ethernet Gigabit, Bluetooth 4.0" },
            { label: "Langage", valeur: "ZPL" },
            { label: "Capteurs", valeur: "Transmissif ajustable + réflectif fixe" },
            { label: "Construction", valeur: "Porte bi-pliante, mandrin de support intégré" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "300 dpi (résolution 2x supérieure à la 203 dpi) pour les étiquettes petites et précises",
            "Jusqu'à 8 ips, adapté aux applications haute précision plutôt qu'au très gros volume brut",
            "Idéale pour l'électronique, les cartes de circuits imprimés, la bijouterie, la cosmétique et la pharmacie",
            "Écran tactile couleur 4,3 pouces avec plateforme Link-OS pour la gestion et la visibilité à distance",
            "Ethernet Gigabit pour une connectivité réseau à très haut débit",
            "Double port hôte USB pour connecter simultanément plusieurs périphériques",
            "Capteurs intégrés et diagnostics embarqués pour réduire les besoins de support technique",
            "Chargement latéral des supports pour simplifier l'installation des rubans et étiquettes",
            "Successeur de la gamme Xi, référence historique de Zebra pour l'impression industrielle",
            "Options d'évolution sur site : RFID, Wi-Fi, découpe, pelage, rembobinage",
        ],
    },

    "ZT51042-T0E0000Z": {
        nom: "ZT510",
        sku: "ZT51042-T0E0000Z",
        image: zt510,
        medias: [
            { type: "image", src: zt510 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-red-900 via-red-700 to-red-500",
        accroche: "Imprimante industrielle à transfert thermique 4 pouces 203 dpi, économique et robuste, avec écran LCD rétroéclairé",
        description:
            "La ZT510 (série ZT500) succède à la 105SL Plus et constitue l'entrée de gamme industrielle de Zebra. Pensée pour offrir l'essentiel des fonctions industrielles à un prix maîtrisé, elle imprime sur une largeur de 4 pouces à une vitesse pouvant atteindre 12 pouces par seconde. Sa construction tout métal et ses boutons dôme scellés la rendent résistante à la poussière, aux salissures et à l'humidité des environnements de production et d'entrepôt. Son processeur Cortex A9 800 MHz assure un traitement rapide même pour les graphismes complexes, tandis que sa plateforme Link-OS et son tag NFC statique (compatible Print Touch) simplifient l'appairage, la gestion et la mise à jour à distance.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "4 pouces (104 mm)" },
            { label: "Résolution", valeur: "203 dpi (8 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 12 ips (305 mm/s)" },
            { label: "Coupe", valeur: "Fonction Tear (arrachage manuel), pas de découpe automatique" },
            { label: "Mémoire", valeur: "512 Mo SDRAM (32 Mo utilisateur) / 2 Go Flash (256 Mo utilisateur)" },
            { label: "Processeur", valeur: "Cortex A9 800 MHz" },
            { label: "Écran", valeur: "LCD graphique rétroéclairé multi-lignes avec clavier et protection par mot de passe (non tactile, monochrome)" },
            { label: "Interfaces", valeur: "Série RS-232, USB 2.0, Ethernet Gigabit, Bluetooth LE, tag NFC statique" },
            { label: "Langage", valeur: "ZPL" },
            { label: "Capteurs", valeur: "Transmissif ajustable + réflectif fixe" },
            { label: "Construction", valeur: "Châssis tout métal, boutons dôme scellés, succède à la gamme 105SL Plus" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "Alternative économique au ZT620 tout en conservant une construction industrielle tout métal",
            "203 dpi et jusqu'à 12 ips, adaptée aux volumes moyens à élevés",
            "Boutons dôme scellés contre la poussière, les salissures et l'humidité",
            "Écran LCD graphique rétroéclairé avec clavier et protection par mot de passe",
            "Processeur Cortex A9 800 MHz pour un traitement rapide, y compris de graphismes complexes",
            "Ethernet Gigabit interne et Bluetooth LE de série pour la configuration et les transferts légers",
            "Tag NFC statique compatible avec l'application Print Touch pour un appairage Android simplifié",
            "Double capteur média (transmissif et réflectif), ajustable via logiciel ou panneau avant",
            "Successeur de la 105SL Plus, référence Zebra d'entrée de gamme industrielle",
            "Options d'évolution : hôte USB, Wi-Fi 802.11ac avec Bluetooth 4.0, port parallèle, IPv6",
        ],
    },

    "ZT51043-T2E0000Z": {
        nom: "ZT510",
        sku: "ZT51043-T2E0000Z",
        image: zt510,
        medias: [
            { type: "image", src: zt510 }
        ],
        categorie: "industrielles",
        couleurGradient: "from-red-900 via-red-700 to-red-500",
        accroche: "Imprimante industrielle à transfert thermique 4 pouces 300 dpi haute résolution avec rembobinage interne",
        description:
            "La ZT510 (série ZT500) succède à la 105SL Plus et constitue l'entrée de gamme industrielle de Zebra. Cette version 300 dpi de la ZT51043 offre une résolution deux fois supérieure à la variante 203 dpi, adaptée aux étiquettes plus petites ou plus détaillées, avec un rembobinage interne qui enroule automatiquement les étiquettes imprimées sur un mandrin 3 pouces (ou pèle et rembobine le liner), idéal pour les applications d'impression en lot ou d'application différée. Sa construction tout métal et ses boutons dôme scellés la rendent résistante à la poussière, aux salissures et à l'humidité des environnements de production et d'entrepôt. Son processeur Cortex A9 800 MHz assure un traitement rapide même pour les graphismes complexes, tandis que sa plateforme Link-OS, son horloge temps réel (RTC) et son tag NFC statique (compatible Print Touch) simplifient l'appairage, la gestion et la mise à jour à distance.",
        specs: [
            { label: "Technologie", valeur: "Transfert thermique et thermique direct" },
            { label: "Largeur d'impression max.", valeur: "4 pouces (104 mm)" },
            { label: "Résolution", valeur: "300 dpi (12 points/mm)" },
            { label: "Vitesse d'impression", valeur: "Jusqu'à 10 ips (254 mm/s)" },
            { label: "Gestion des supports", valeur: "Rembobinage interne sur mandrin 3 pouces (mode peler + rembobiner disponible)" },
            { label: "Mémoire", valeur: "512 Mo SDRAM (32 Mo utilisateur) / 2 Go Flash (256 Mo utilisateur)" },
            { label: "Processeur", valeur: "Cortex A9 800 MHz" },
            { label: "Écran", valeur: "LCD graphique rétroéclairé multi-lignes avec clavier et protection par mot de passe (non tactile, monochrome)" },
            { label: "Interfaces", valeur: "Série RS-232, USB 2.0, Ethernet Gigabit 10/100/1000, Bluetooth LE, tag NFC statique" },
            { label: "Horloge", valeur: "Horloge temps réel (RTC) intégrée" },
            { label: "Langage", valeur: "ZPL / ZPL II" },
            { label: "Capteurs", valeur: "Transmissif ajustable + réflectif fixe" },
            { label: "Construction", valeur: "Châssis tout métal, boutons dôme scellés, succède à la gamme 105SL Plus" },
            { label: "Câbles", valeur: "EU / UK inclus" },
        ],
        points: [
            "300 dpi (résolution 2x supérieure à la 203 dpi) pour les étiquettes plus petites ou détaillées",
            "Rembobinage interne sur mandrin 3 pouces, avec mode peler + rembobiner du liner",
            "Alternative économique au ZT620 tout en conservant une construction industrielle tout métal",
            "Boutons dôme scellés contre la poussière, les salissures et l'humidité",
            "Écran LCD graphique rétroéclairé avec clavier et protection par mot de passe",
            "Processeur Cortex A9 800 MHz pour un traitement rapide, y compris de graphismes complexes",
            "Horloge temps réel (RTC) intégrée et tag NFC statique compatible Print Touch pour l'appairage Android",
            "Ethernet Gigabit interne et Bluetooth LE de série pour la configuration et les transferts légers",
            "Double capteur média (transmissif et réflectif), ajustable via logiciel ou panneau avant",
            "Options d'évolution : hôte USB, Wi-Fi 802.11ac avec Bluetooth 4.0, port parallèle, IPv6",
        ],
    },

    // ── Cartes d'identification ────────────────────────────────────────────
    "ZC11-0000Q00EM00": {
        nom: "ZC100",
        sku: "ZC11-0000Q00EM00",
        image: zc11,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0001/zc300-product-video.mp4/jcr:content/renditions/original" },
            { type: "image", src: zc11 }
        ],
        categorie: "cartes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante de cartes d'identification recto USB avec ruban YMCKO",
        description:
            "La ZC100 est l'imprimante d'entrée de gamme de Zebra pour la production de cartes d'identification et de badges. Elle inclut tout le nécessaire pour démarrer immédiatement : 200 cartes PVC, un ruban couleur YMCKO (200 images) et l'application CardStudio 2.0 Standard pour la conception des cartes.",
        specs: [
            { label: "Impression", valeur: "Recto uniquement" },
            { label: "Interface", valeur: "USB uniquement" },
            { label: "Ruban inclus", valeur: "YMCKO — 200 images" },
            { label: "Cartes incluses", valeur: "200 cartes PVC" },
            { label: "Logiciel", valeur: "CardStudio 2.0 Standard" },
            { label: "Pilote", valeur: "Windows" },
            { label: "Câbles", valeur: "UK / EU inclus" },
        ],
        points: [
            "Kit complet inclus : cartes PVC, ruban YMCKO et logiciel CardStudio",
            "Impression couleur recto pour badges, cartes d'accès et ID",
            "Logiciel CardStudio 2.0 pour concevoir vos cartes facilement",
            "Configuration simple via USB — prête à l'emploi en quelques minutes",
            "Idéale pour les petits volumes de production de cartes",
        ],
    },

    "ZC32-000CQ00EM00": {
        nom: "ZC300",
        sku: "ZC32-000CQ00EM00",
        image: zc11,
        medias: [
            { type: "video", src: "https://www.zebra.com/content/dam/zebra_dam/en/video/product-solutions-portfolio/0001/zc300-product-video.mp4/jcr:content/renditions/original" },
            { type: "image", src: zc11 }
        ],
        categorie: "cartes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante de cartes recto verso USB + Ethernet avec ruban YMCKOK",
        description:
            "La ZC300 monte en gamme avec l'impression recto verso et la connectivité réseau Ethernet, idéale pour les entreprises souhaitant produire des cartes d'identification professionnelles avec impression sur les deux faces. Le ruban YMCKOK inclut un panneau de réencrage noir pour les textes et codes-barres nets.",
        specs: [
            { label: "Impression", valeur: "Recto verso" },
            { label: "Interfaces", valeur: "USB + Ethernet" },
            { label: "Ruban inclus", valeur: "YMCKOK — 200 images" },
            { label: "Cartes incluses", valeur: "200 cartes PVC" },
            { label: "Logiciel", valeur: "CardStudio 2.0 Standard" },
            { label: "Pilote", valeur: "Windows" },
            { label: "Câbles", valeur: "UK / EU inclus" },
        ],
        points: [
            "Impression recto verso pour des cartes professionnelles complètes",
            "Ethernet pour une utilisation en réseau partagé",
            "Ruban YMCKOK pour des textes et codes-barres noirs ultra-nets",
            "Kit complet inclus dès la sortie de la boîte",
            "Parfaite pour les volumes moyens de production de cartes d'accès",
        ],
    },

    // ── Moteurs d'impression ───────────────────────────────────────────────
    "RS5000X-TCFSSWR-MOT": {
        nom: "RS5000X",
        sku: "RS5000X-TCFSSWR",
        image: rs5,
        medias: [{ type: "image", src: rs5 }],
        categorie: "moteurs",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Moteur d'impression portable filaire SE4770 — câble court, déclenchement doigt",
        description:
            "Le RS5000X en version moteur d'impression est un module compact conçu pour s'intégrer dans des solutions d'impression embarquées ou portatives. Son imageur SE4770 offre des performances de lecture et d'impression 1D/2D remarquables pour les besoins de production sur le terrain.",
        specs: [
            { label: "Type", valeur: "Moteur d'impression portable filaire" },
            { label: "Scanner", valeur: "SE4770" },
            { label: "Câble", valeur: "Court" },
            { label: "Déclenchement", valeur: "Standard au doigt" },
            { label: "Codes-barres", valeur: "1D et 2D" },
            { label: "Distribution", valeur: "Mondiale" },
        ],
        points: [
            "Imageur SE4770 haute performance pour la lecture et l'impression",
            "Format compact pour une intégration dans des systèmes embarqués",
            "Câble court pour éviter les accrochages en ligne de production",
            "Compatible avec l'écosystème d'accessoires Zebra",
            "Distribution mondiale — disponible partout",
        ],
    },

    // ── Santé ──────────────────────────────────────────────────────────────
    "ZD51013-D0ER00FZ": {
        nom: "ZD510-HC",
        sku: "ZD51013-D0ER00FZ",
        image: zd510,
        medias: [{ type: "image", src: zd510 }],
        categorie: "sante",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Imprimante de bracelets patients thermique directe 300 dpi pour le secteur de la santé",
        description:
            "La ZD510-HC est une imprimante spécialement conçue pour l'impression de bracelets patients en milieu hospitalier. Sa résolution de 300 dpi garantit la lisibilité parfaite des codes-barres sur bracelets, et son boîtier anti-microbien facilite les protocoles de désinfection en environnement de soins.",
        specs: [
            { label: "Technologie", valeur: "Thermique directe (DT)" },
            { label: "Résolution", valeur: "300 dpi" },
            { label: "Application", valeur: "Bracelets patients" },
            { label: "Langages", valeur: "ZPL II, XML" },
            { label: "Interfaces", valeur: "USB, hôte USB, Ethernet" },
            { label: "Câbles", valeur: "UE et Royaume-Uni inclus" },
            { label: "Boîtier", valeur: "Anti-microbien" },
        ],
        points: [
            "Conçue spécifiquement pour l'impression de bracelets patients",
            "300 dpi pour des codes-barres lisibles sur tous les scanners médicaux",
            "Boîtier anti-microbien compatible avec les protocoles hospitaliers",
            "Compatible ZPL II et XML pour l'intégration aux SIH",
            "Ethernet pour un déploiement réseau partagé dans les services",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function ImprimanteDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()

    // La clé "RS5000X-TCFSSWR" dans la catégorie moteurs a un alias
    const cleProduit = PRODUITS[sku] ? sku : sku + "-MOT"
    const produit = PRODUITS[cleProduit]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/imprimantes")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux imprimantes
                </button>
            </div>
        )
    }

    const accent = accentFromGradient(produit.couleurGradient)
    const autresModeles = Object.entries(PRODUITS)
        .filter(([cle, p]) => p.categorie === produit.categorie && cle !== cleProduit)
        .slice(0, 3)
        .map(([cle, p]) => ({ ...p, cle }))

    return (
        <div className="min-h-screen bg-white">

            {/* ── Fil d'ariane ── */}
            <div className="border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-43 pb-3 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(`/imprimantes?categorie=${produit.categorie}`)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> Imprimantes
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
                                className={`font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 ${accent.outline}`}
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

            {/* ── Autres produits de la catégorie ── */}
            {autresModeles.length > 0 && (
                <section className="bg-gray-50 border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8">
                            Découvrez d'autres imprimantes {produit.categorie}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {autresModeles.map((p) => (
                                <button
                                    key={p.cle}
                                    onClick={() => {navigate(`/imprimantes/${p.cle.replace("-MOT", "")}`), window.scrollTo(0,0)}}
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
                            onClick={() => navigate(`/imprimantes?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres imprimantes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}