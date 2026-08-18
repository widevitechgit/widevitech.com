import { useParams, useNavigate } from "react-router-dom"
import transth from "../images/transth.jpeg"
import t2000 from "../images/2000T.jpeg"
import etiq03 from "../images/etiq03.jfif"
import d2000 from "../images/2000d.jpeg"
import etiq06 from "../images/etiq06.jpeg"
import etiq07 from "../images/etiq07.jpeg"
import ribbon from "../images/ribbon.jpg"
import ribbon02 from "../images/rubbon02.png"
import ribbon03 from "../images/ribbon03.jpg"
import ribbon04 from "../images/ribbon04.jpg"
import ribbon05 from "../images/ribbon05.jpeg"
import ribbon06 from "../images/ribbon06.jpg"
import carte from "../images/carte.jpg"
import brac from "../images/brac.jpg"

// ─── Base de données des produits ───────────────────────────────────────────
const PRODUITS = {

    // ── Étiquettes ─────────────────────────────────────────────────────────
    "SAMPLE35938": {
        nom: "8100T CryoCool",
        sku: "SAMPLE35938",
        image: transth,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette polyester cryogénique haute performance 50,8 × 25,4 mm — transfert thermique",
        description:
            "L'étiquette 8100T CryoCool est conçue pour résister aux températures cryogéniques extrêmes, comme l'azote liquide et la glace sèche. Son adhésif permanent haute performance maintient une adhérence optimale même dans des conditions de congélation intense, indispensable pour les laboratoires, la recherche médicale et la chaîne du froid.",
        specs: [
            { label: "Matériau", valeur: "Polyester" },
            { label: "Dimensions", valeur: "50,8 × 25,4 mm" },
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Gamme", valeur: "8100T CryoCool" },
            { label: "Adhésif", valeur: "Permanent haute performance" },
            { label: "Mandrin", valeur: "76,2 mm" },
            { label: "Format", valeur: "Échantillon" },
        ],
        points: [
            "Résistance aux températures cryogéniques (azote liquide, glace sèche)",
            "Adhésif permanent haute performance même sous zéro",
            "Polyester durable pour une lisibilité longue durée",
            "Compatible avec les imprimantes à transfert thermique Zebra",
            "Idéale pour les laboratoires et la recherche médicale",
        ],
    },

    "76528": {
        nom: "Z-Select 2000T Label",
        sku: "76528",
        image: t2000,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette papier couchée 102 × 102 mm — transfert thermique, adhésif permanent",
        description:
            "L'étiquette Z-Select 2000T en format 102 × 102 mm est une étiquette papier couchée polyvalente pour l'impression par transfert thermique. Son adhésif permanent et sa surface couchée garantissent une qualité d'impression nette et durable pour l'étiquetage logistique, l'expédition et la gestion d'entrepôt.",
        specs: [
            { label: "Matériau", valeur: "Papier couché" },
            { label: "Dimensions", valeur: "102 × 102 mm" },
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Gamme", valeur: "Z-Select 2000T" },
            { label: "Adhésif", valeur: "Permanent" },
            { label: "Mandrin", valeur: "76 mm" },
        ],
        points: [
            "Format carré 102 × 102 mm idéal pour l'étiquetage logistique",
            "Surface couchée pour une impression nette et contrastée",
            "Adhésif permanent pour une tenue fiable sur tous supports",
            "Compatible avec toutes les imprimantes TT de la gamme Zebra",
            "Certifiée pour une usure minimale de la tête d'impression",
        ],
    },

    "3004428": {
        nom: "PolyPro 3000T Clear Label",
        sku: "3004428",
        image: etiq03,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette polypropylène transparente 75 × 35 mm — transfert thermique, adhésif permanent",
        description:
            "L'étiquette PolyPro 3000T transparente est fabriquée en polypropylène pour une discrétion maximale sur le produit étiqueté. Sa marque de détection noire assure un positionnement précis à l'impression. Idéale pour l'étiquetage de produits finis, l'emballage et toute application nécessitant une étiquette quasi invisible.",
        specs: [
            { label: "Matériau", valeur: "Polypropylène transparent" },
            { label: "Dimensions", valeur: "75 × 35 mm" },
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Gamme", valeur: "PolyPro 3000T" },
            { label: "Adhésif", valeur: "Permanent" },
            { label: "Mandrin", valeur: "25 mm" },
            { label: "Détection", valeur: "Marque noire intégrée" },
        ],
        points: [
            "Transparence totale pour une présentation produit soignée",
            "Polypropylène résistant à l'humidité et aux manipulations",
            "Marque de détection noire pour un positionnement d'impression précis",
            "Adhésif permanent pour une fixation durable sur tous produits",
            "Idéale pour les emballages alimentaires, cosmétiques et industriels",
        ],
    },

    "76054": {
        nom: "Z-Select 2000T Label",
        sku: "76054",
        image: t2000,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette papier couchée 70 × 32 mm — transfert thermique, adhésif permanent",
        description:
            "L'étiquette Z-Select 2000T en format 70 × 32 mm est la référence pour l'étiquetage de petits articles en transfert thermique. Sa surface couchée et son adhésif permanent assurent une impression durable et une tenue optimale, même dans les environnements de stockage variés.",
        specs: [
            { label: "Matériau", valeur: "Papier couché" },
            { label: "Dimensions", valeur: "70 × 32 mm" },
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Gamme", valeur: "Z-Select 2000T" },
            { label: "Adhésif", valeur: "Permanent" },
            { label: "Mandrin", valeur: "76 mm" },
        ],
        points: [
            "Format compact 70 × 32 mm pour l'étiquetage de petits articles",
            "Surface couchée pour un rendu d'impression professionnel",
            "Adhésif permanent fiable sur carton, plastique et métal",
            "Mandrin 76 mm compatible avec les imprimantes industrielles Zebra",
            "Certifiée pour minimiser l'usure de la tête d'impression",
        ],
    },

    "800262-125": {
        nom: "Z-Select 2000D Label",
        sku: "800262-125",
        image: d2000,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette papier thermique directe 57,2 × 31,8 mm — revêtement haute performance, toutes températures",
        description:
            "L'étiquette Z-Select 2000D en thermique directe convient parfaitement aux applications ne nécessitant pas de ruban. Son revêtement haute performance et son adhésif toutes températures en font une solution idéale pour les environnements à températures variables, comme les entrepôts non climatisés ou les zones de réception.",
        specs: [
            { label: "Matériau", valeur: "Papier — revêtement haute performance" },
            { label: "Dimensions", valeur: "57,2 × 31,8 mm (2,25 × 1,25 po)" },
            { label: "Technologie", valeur: "Thermique directe (DT)" },
            { label: "Gamme", valeur: "Z-Select 2000D" },
            { label: "Adhésif", valeur: "Toutes températures" },
            { label: "Mandrin", valeur: "25,4 mm (1 po)" },
        ],
        points: [
            "Impression thermique directe — sans ruban nécessaire",
            "Adhésif toutes températures pour les entrepôts non climatisés",
            "Revêtement haute performance pour une meilleure résistance à l'abrasion",
            "Format 57,2 × 31,8 mm pour les étiquettes de petits colis",
            "Compatible avec toutes les imprimantes DT de la gamme Zebra",
        ],
    },

    "3014816-T": {
        nom: "Z-Select 2000D Label",
        sku: "3014816-T",
        image: etiq06,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette papier thermique directe 50,8 × 25,4 mm",
        description:
            "L'étiquette Z-Select 2000D en format 50,8 × 25,4 mm est une étiquette thermique directe compacte adaptée à l'étiquetage de petits articles, de médicaments ou de tubes en laboratoire. Sa conception simple et efficace en fait un consommable incontournable pour les flux à haut volume.",
        specs: [
            { label: "Matériau", valeur: "Papier" },
            { label: "Dimensions", valeur: "50,8 × 25,4 mm" },
            { label: "Technologie", valeur: "Thermique directe (DT)" },
            { label: "Gamme", valeur: "Z-Select 2000D" },
            { label: "Référence interne", valeur: "LAB-RL-DT-PAP-50,8X25,4MM" },
        ],
        points: [
            "Format ultra-compact pour l'étiquetage de petits articles",
            "Impression thermique directe sans ruban pour plus de simplicité",
            "Adapté aux flux à haut volume en entrepôt ou en laboratoire",
            "Compatible avec les imprimantes thermiques directes Zebra",
            "Économique et facile à approvisionner",
        ],
    },

    "880003-025D": {
        nom: "Z-Perform 1000T Label",
        sku: "880003-025D",
        image: etiq07,
        categorie: "etiquette",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Étiquette papier non couchée 38 × 25 mm — transfert thermique, adhésif permanent",
        description:
            "L'étiquette Z-Perform 1000T est une étiquette papier économique non couchée pour le transfert thermique. Son format compact 38 × 25 mm et son mandrin de 25 mm la rendent compatible avec les imprimantes mobiles et de bureau de petite taille. Idéale pour l'étiquetage quotidien à faible coût.",
        specs: [
            { label: "Matériau", valeur: "Papier non couché" },
            { label: "Dimensions", valeur: "38 × 25 mm" },
            { label: "Technologie", valeur: "Transfert thermique (TT)" },
            { label: "Gamme", valeur: "Z-Perform 1000T" },
            { label: "Adhésif", valeur: "Permanent" },
            { label: "Mandrin", valeur: "25 mm" },
        ],
        points: [
            "Solution économique pour l'étiquetage quotidien",
            "Petit mandrin 25 mm compatible avec les imprimantes mobiles Zebra",
            "Format 38 × 25 mm pour les petits articles et équipements",
            "Adhésif permanent pour une tenue fiable au quotidien",
            "Stock facile à gérer grâce au format compact des rouleaux",
        ],
    },

    // ── Rubans ─────────────────────────────────────────────────────────────
    "03200BK11005": {
        nom: "Sample Wax Resin Ribbon",
        sku: "03200BK11005",
        image: ribbon,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Échantillon ruban cire/résine haute performance 110 mm × 50 m — âme 25 mm",
        description:
            "Le ruban cire/résine 3200 est le ruban haute performance de Zebra, offrant une résistance supérieure aux rayures, à l'humidité et aux produits chimiques par rapport aux rubans cire standards. Cet échantillon de 50 m permet de tester ses performances avant un approvisionnement en grande quantité.",
        specs: [
            { label: "Type", valeur: "Ruban cire/résine (Wax Resin)" },
            { label: "Gamme", valeur: "3200 — haute performance" },
            { label: "Dimensions", valeur: "110 mm × 50 m" },
            { label: "Âme", valeur: "25 mm" },
            { label: "Format", valeur: "Échantillon" },
            { label: "Couleur", valeur: "Noir" },
        ],
        points: [
            "Résistance supérieure aux rayures, à l'humidité et aux produits chimiques",
            "Qualité d'impression haute définition sur étiquettes synthétiques",
            "Format échantillon 50 m idéal pour tester avant commande en volume",
            "Compatible avec les imprimantes à transfert thermique Zebra",
            "Durée de vie prolongée de la tête d'impression",
        ],
    },

    "05319GD11005": {
        nom: "Sample TT Ribbon Gold",
        sku: "05319GD11005",
        image: ribbon02,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Échantillon ruban transfert thermique doré 110 mm × 50 m",
        description:
            "Le ruban transfert thermique doré Zebra permet d'imprimer des textes et codes-barres avec une encre or brillante pour des applications haut de gamme : étiquettes de produits de luxe, bijouterie, cosmétiques ou événementiel. L'échantillon de 50 m permet de valider le rendu avant production.",
        specs: [
            { label: "Type", valeur: "Ruban transfert thermique" },
            { label: "Couleur", valeur: "Or (Gold)" },
            { label: "Dimensions", valeur: "110 mm × 50 m" },
            { label: "Format", valeur: "Échantillon" },
        ],
        points: [
            "Impression or brillante pour les produits haut de gamme",
            "Idéal pour la bijouterie, le luxe et les étiquettes événementielles",
            "Format échantillon pour valider le rendu avant production",
            "Compatible avec les imprimantes à transfert thermique Zebra",
            "Rendu visuel premium difficile à imiter",
        ],
    },

    "05095BK11005": {
        nom: "Sample TT Ribbon Black",
        sku: "05095BK11005",
        image: ribbon03,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Échantillon ruban transfert thermique noir 110 mm × 50 m",
        description:
            "Le ruban TT noir Zebra est le ruban d'impression standard pour une impression noire nette sur tous types d'étiquettes. Cet échantillon de 50 m est idéal pour tester la compatibilité et la qualité d'impression avant de passer en volume.",
        specs: [
            { label: "Type", valeur: "Ruban transfert thermique" },
            { label: "Couleur", valeur: "Noir" },
            { label: "Dimensions", valeur: "110 mm × 50 m" },
            { label: "Format", valeur: "Échantillon" },
        ],
        points: [
            "Impression noire nette et contrastée sur tous supports",
            "Échantillon de 50 m pour valider avant commande en volume",
            "Compatible avec toutes les imprimantes TT Zebra",
            "Ruban polyvalent pour l'étiquetage quotidien",
            "Faible usure de la tête d'impression grâce à la formulation Zebra",
        ],
    },

    "01600BK11045": {
        nom: "1600 Wax",
        sku: "01600BK11045",
        image: ribbon04,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Ruban ciré standard 110 mm × 450 m — âme 25 mm, 18 rubans/boîte",
        description:
            "Le ruban ciré 1600 est le ruban d'impression économique de Zebra pour les applications d'étiquetage standard. Sa longueur de 450 m par rouleau et son conditionnement de 18 rubans par boîte en font une solution idéale pour les volumes d'impression élevés en entrepôt, logistique et distribution.",
        specs: [
            { label: "Type", valeur: "Ruban ciré (Wax)" },
            { label: "Gamme", valeur: "1600 — standard" },
            { label: "Dimensions", valeur: "110 mm × 450 m (4,33 po × 1 476 pi)" },
            { label: "Âme", valeur: "25 mm (1 po)" },
            { label: "Conditionnement", valeur: "18 rubans/boîte" },
            { label: "Couleur", valeur: "Noir" },
        ],
        points: [
            "450 m par rouleau pour réduire les changements de ruban",
            "18 rubans par boîte pour un approvisionnement efficace",
            "Ruban économique adapté aux volumes d'impression élevés",
            "Compatible avec les imprimantes industrielles Zebra",
            "Qualité constante certifiée par les laboratoires Zebra",
        ],
    },

    "02300GS06407": {
        nom: "2300 Wax",
        sku: "02300GS06407",
        image: ribbon05,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Ruban ciré standard 64 mm × 74 m — âme 12 mm, 12 rubans/boîte",
        description:
            "Le ruban ciré 2300 en format compact 64 mm × 74 m est conçu pour les imprimantes mobiles et de bureau de petite taille. Son âme de 12 mm et son conditionnement de 12 rubans par boîte facilitent la gestion des stocks pour les flottes d'imprimantes portables déployées sur le terrain.",
        specs: [
            { label: "Type", valeur: "Ruban ciré (Wax)" },
            { label: "Gamme", valeur: "2300 — standard" },
            { label: "Dimensions", valeur: "64 mm × 74 m" },
            { label: "Âme", valeur: "12 mm" },
            { label: "Conditionnement", valeur: "12 rubans/boîte" },
            { label: "Couleur", valeur: "Noir" },
        ],
        points: [
            "Format compact pour les imprimantes mobiles et de bureau",
            "Âme 12 mm compatible avec les petites imprimantes Zebra",
            "12 rubans par boîte pour un réapprovisionnement simple",
            "Idéal pour les équipes terrain utilisant des imprimantes portatives",
            "Qualité d'impression régulière garantie par Zebra",
        ],
    },

    "03200GS11007": {
        nom: "3200 Wax/Resin",
        sku: "03200GS11007",
        image: ribbon06,
        categorie: "rubans",
        couleurGradient: "from-orange-900 via-orange-700 to-orange-500",
        accroche: "Ruban cire/résine haute performance 110 mm × 74 m — âme 12 mm, 12 rubans/boîte",
        description:
            "Le ruban cire/résine 3200 en format 110 mm × 74 m allie qualité d'impression haute performance et compacité pour les imprimantes à âme 12 mm. Sa résistance aux agents chimiques, aux rayures et à l'humidité le rend indispensable pour l'étiquetage de produits stockés dans des conditions difficiles.",
        specs: [
            { label: "Type", valeur: "Ruban cire/résine (Wax/Resin)" },
            { label: "Gamme", valeur: "3200 — haute performance" },
            { label: "Dimensions", valeur: "110 mm × 74 m (4,33 po × 242 pi)" },
            { label: "Âme", valeur: "12 mm (0,5 po)" },
            { label: "Conditionnement", valeur: "12 rubans/boîte" },
            { label: "Couleur", valeur: "Noir" },
        ],
        points: [
            "Résistance aux rayures, à l'humidité et aux produits chimiques",
            "Qualité haute performance sur étiquettes papier et synthétiques",
            "Âme 12 mm pour les imprimantes compactes et mobiles Zebra",
            "12 rubans par boîte pour une gestion de stock simplifiée",
            "Durée de vie de la tête d'impression prolongée",
        ],
    },

    // ── Cartes ─────────────────────────────────────────────────────────────
    "104523-111": {
        nom: "Zebra White PVC Cards",
        sku: "104523-111",
        image: carte,
        categorie: "cartes",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Cartes en PVC blanc 30 mil — lot de 500 cartes",
        description:
            "Les cartes PVC blanc Zebra sont les cartes vierges de référence pour la production de badges d'entreprise, cartes d'accès et cartes d'identification. Leur épaisseur standard de 30 mil garantit une rigidité et une durabilité optimales, et leur finition lisse assure une qualité d'impression maximale sur les imprimantes à cartes Zebra.",
        specs: [
            { label: "Matériau", valeur: "PVC" },
            { label: "Couleur", valeur: "Blanc" },
            { label: "Épaisseur", valeur: "30 mil" },
            { label: "Quantité", valeur: "500 cartes" },
            { label: "Format", valeur: "CR-80 standard (85,6 × 54 mm)" },
            { label: "Compatibilité", valeur: "Imprimantes à cartes Zebra ZC100, ZC300" },
        ],
        points: [
            "500 cartes par boîte pour un approvisionnement efficace",
            "PVC 30 mil — rigidité et durabilité optimales",
            "Finition lisse pour une impression couleur de qualité maximale",
            "Format CR-80 standard compatible avec tous les lecteurs de badges",
            "Certifiées pour les imprimantes Zebra ZC100 et ZC300",
        ],
    },

    // ── Bracelets ──────────────────────────────────────────────────────────
    "10006995K": {
        nom: "Z-Band Direct Wristband",
        sku: "10006995K",
        image: brac,
        categorie: "bracelet",
        couleurGradient: "from-blue-900 via-blue-700 to-blue-500",
        accroche: "Bracelet polypropylène thermique direct 25,4 × 279,4 mm — 200/rouleau, fermeture adhésive",
        description:
            "Le bracelet Z-Band Direct de Zebra est le bracelet patient de référence pour les hôpitaux, cliniques et établissements de soins. Sa fermeture adhésive sécurisée et son impression thermique directe garantissent une identification fiable et durable du patient tout au long de son séjour. La cartouche incluse facilite le chargement rapide dans les imprimantes Zebra HC100.",
        specs: [
            { label: "Matériau", valeur: "Polypropylène" },
            { label: "Dimensions", valeur: "1 × 11 po (25,4 × 279,4 mm)" },
            { label: "Technologie", valeur: "Thermique direct" },
            { label: "Gamme", valeur: "Z-Band Direct" },
            { label: "Fermeture", valeur: "Adhésive sécurisée" },
            { label: "Conditionnement", valeur: "200 bracelets/rouleau — 6 rouleaux/boîte" },
            { label: "Format", valeur: "Cartouche" },
        ],
        points: [
            "Fermeture adhésive sécurisée pour une identification patient fiable",
            "Impression thermique directe — sans ruban, pour les imprimantes HC",
            "200 bracelets par rouleau pour un approvisionnement efficace",
            "Cartouche pour un chargement rapide dans les imprimantes Zebra",
            "Résistant à l'eau pour une utilisation en milieu hospitalier",
        ],
    },
}

// ─── Composant principal ─────────────────────────────────────────────────────
export default function ConsoDetail() {
    const { sku } = useParams()
    const navigate = useNavigate()
    const produit = PRODUITS[sku]

    if (!produit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Produit introuvable</h1>
                <p className="text-gray-500">La référence <span className="font-mono bg-gray-100 px-2 py-1 rounded">{sku}</span> n'existe pas.</p>
                <button
                    onClick={() => navigate("/consommables")}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                    ← Retour aux consommables
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Hero ── */}
            <section className={`bg-gradient-to-br ${produit.couleurGradient} text-white`}>
                <div className="max-w-6xl mx-auto px-6 md:pt-43 pt-20 pb-16 flex md:flex-row flex-col items-center gap-12">

                    {/* Texte */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <button
                            onClick={() => navigate(`/consommables?categorie=${produit.categorie}`)}
                            className="flex items-center gap-2 text-white/70 hover:text-white text-sm w-fit transition-colors"
                        >
                            ← Retour aux consommables
                        </button>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/60">CONSOMMABLES ZEBRA</p>
                        <h1 className="text-5xl font-bold leading-tight">{produit.nom}</h1>
                        <p className="text-lg text-white/90 leading-relaxed">{produit.accroche}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition-colors">
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
                                className="border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                            >
                                Demander un devis
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce produit</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{produit.description}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Points forts</h2>
                    <ul className="flex flex-col gap-3">
                        {produit.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
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

            {/* ── Spécifications ── */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Spécifications</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {produit.specs.map((spec, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center border border-gray-100 rounded-xl px-5 py-4 bg-gray-50"
                            >
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
                        <button
                            onClick={() => navigate(`/consommables?categorie=${produit.categorie}`)}
                            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Voir d'autres consommables
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
