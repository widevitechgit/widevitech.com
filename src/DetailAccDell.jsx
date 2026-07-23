import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck, FaShieldAlt, FaCheckCircle } from "react-icons/fa"
import dell_km7321w from "../images/DELL-KM7321W.avif"
import alienware_aw510k from "../images/ALIENWARE-AW510K.avif"
import dell_ms3320w from "../images/DELL-MS3320W.avif"
import alienware_aw510h from "../images/ALIENWARE-AW510H.avif"
import dell_wl5024 from "../images/DELL-WL5024.avif"
import dell_sb522a from "../images/DELL-SB522A.avif"
import dell_65w from "../images/DELL-CHARGEUR-65W.avif"
import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

// ---- Données produits (à adapter / brancher sur ton backend si besoin) ----
const PRODUITS = {
    "dell-km7321w": {
        name: "DELL KM7321W",
        categorie: "clavier_souris",
        categorieLabel: "Claviers & Souris",
        modele: "KM7321W",
        image: dell_km7321w,
        prix: 54.99,
        prixBarre: 69.99,
        note: 4.5,
        avis: 128,
        accroche: "Un combo clavier et souris sans fil pensé pour durer, pour un bureau simple et efficace.",
        specs: [
            { label: "Connexion", value: "Sans fil 2,4 GHz avec récepteur USB unique" },
            { label: "Autonomie", value: "Jusqu'à 36 mois (clavier) / 12 mois (souris)" },
            { label: "Format clavier", value: "AZERTY français avec pavé numérique intégré" },
            { label: "Capteur souris", value: "Optique, 1600 DPI" },
            { label: "Compatibilité", value: "Windows, Chrome OS, Linux" },
            { label: "Couleur", value: "Gris titane" },
        ],
    },
    "alienware-aw510k": {
        name: "ALIENWARE AW510K",
        categorie: "clavier_souris",
        categorieLabel: "Claviers & Souris",
        modele: "AW510K",
        image: alienware_aw510k,
        prix: 89.99,
        prixBarre: 119.99,
        note: 4.2,
        avis: 74,
        accroche: "Clavier mécanique gaming avec rétroéclairage RGB AlienFX pour une précision de compétition.",
        specs: [
            { label: "Switch", value: "Mécanique (au choix à la commande)" },
            { label: "Rétroéclairage", value: "RGB AlienFX, 16,8 millions de couleurs" },
            { label: "Connexion", value: "Filaire USB-C amovible" },
            { label: "Repose-poignet", value: "Magnétique amovible" },
            { label: "Format", value: "AZERTY français, anti-ghosting intégral" },
            { label: "Compatibilité", value: "Windows 10/11" },
        ],
    },
    "dell-ms3320w": {
        name: "DELL MS3320W",
        categorie: "clavier_souris",
        categorieLabel: "Claviers & Souris",
        modele: "MS3320W",
        image: dell_ms3320w,
        prix: 27.99,
        prixBarre: 39.99,
        note: 4.0,
        avis: 56,
        accroche: "Souris sans fil compacte et silencieuse pour un usage quotidien confortable.",
        specs: [
            { label: "Connexion", value: "Sans fil 2,4 GHz avec récepteur USB" },
            { label: "Capteur", value: "Optique, 1600 DPI" },
            { label: "Autonomie", value: "Jusqu'à 36 mois" },
            { label: "Boutons", value: "3 boutons programmables" },
            { label: "Compatibilité", value: "Windows, Chrome OS, Linux" },
            { label: "Couleur", value: "Noir" },
        ],
    },
    "alienware-aw510h": {
        name: "ALIENWARE AW510H",
        categorie: "audio",
        categorieLabel: "Audios",
        modele: "AW510H",
        image: alienware_aw510h,
        prix: 99.99,
        prixBarre: 129.99,
        note: 4.6,
        avis: 203,
        accroche: "Casque gaming au son surround immersif, pensé pour de longues sessions de jeu.",
        specs: [
            { label: "Son", value: "Surround virtuel 7.1" },
            { label: "Haut-parleurs", value: "Néodyme 50 mm" },
            { label: "Microphone", value: "Amovible, réduction de bruit" },
            { label: "Connexion", value: "USB-A / Jack 3,5 mm" },
            { label: "Éclairage", value: "RGB AlienFX" },
            { label: "Poids", value: "310 g" },
        ],
    },
    "dell-wl5024": {
        name: "DELL PRO WIRELESS WL5024",
        categorie: "audio",
        categorieLabel: "Audios",
        modele: "WL5024",
        image: dell_wl5024,
        prix: 69.99,
        prixBarre: 89.99,
        note: 4.1,
        avis: 91,
        accroche: "Casque sans fil professionnel avec réduction de bruit par IA pour vos appels et visioconférences.",
        specs: [
            { label: "Connexion", value: "Bluetooth 5.2 + dongle USB" },
            { label: "Autonomie", value: "Jusqu'à 30 heures" },
            { label: "Microphone", value: "Antibruit avec intelligence artificielle" },
            { label: "Certification", value: "Microsoft Teams & Zoom" },
            { label: "Charge rapide", value: "10 min de charge = 3h d'autonomie" },
            { label: "Couleur", value: "Noir carbone" },
        ],
    },
    "dell-sb522a": {
        name: "DELL PRO SP325",
        categorie: "audio",
        categorieLabel: "Audios",
        modele: "SP325",
        image: dell_sb522a,
        prix: 34.99,
        prixBarre: 49.99,
        note: 3.9,
        avis: 38,
        accroche: "Barre de son compacte à fixer sur votre écran Dell pour un son clair au quotidien.",
        specs: [
            { label: "Puissance", value: "2 x 2,5 W" },
            { label: "Connexion", value: "USB-A" },
            { label: "Fixation", value: "Clip de fixation sur écran Dell" },
            { label: "Contrôles", value: "Molette de volume intégrée" },
            { label: "Alimentation", value: "Bus USB, sans adaptateur" },
            { label: "Couleur", value: "Noir" },
        ],
    },
    "chargeur-dell-65w": {
        name: "CHARGEUR DELL 65W USB-C",
        categorie: "chargeur",
        categorieLabel: "Chargeurs",
        modele: "65W USB-C",
        image: dell_65w,
        prix: 34.99,
        prixBarre: 49.99,
        note: 4.4,
        avis: 112,
        accroche: "Adaptateur secteur compact et léger pour recharger rapidement votre ordinateur portable Dell.",
        specs: [
            { label: "Puissance", value: "65 W" },
            { label: "Connecteur", value: "USB-C" },
            { label: "Compatibilité", value: "Ordinateurs portables Dell, XPS, Latitude, Inspiron" },
            { label: "Câble", value: "1,8 m inclus" },
            { label: "Technologie", value: "Dell ExpressCharge" },
            { label: "Poids", value: "155 g" },
        ],
    },
}

function Etoiles({ note }) {
    const pleines = Math.floor(note)
    const demie = note - pleines >= 0.5
    const vides = 5 - pleines - (demie ? 1 : 0)
    return (
        <div className="flex items-center text-blue-500">
            {Array.from({ length: pleines }).map((_, i) => <FaStar key={"p" + i} />)}
            {demie && <FaStarHalfAlt />}
            {Array.from({ length: vides }).map((_, i) => <FaRegStar key={"v" + i} />)}
        </div>
    )
}

export default function DetailAccDell() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [quantite, setQuantite] = useState(1)
    const produit = PRODUITS[slug]

    if (!produit) {
        return (
            <section className="min-h-screen bg-gray-300 p-4 flex flex-col items-center justify-center pt-30">
                <h1 className="text-2xl mb-4">Produit introuvable</h1>
                <button onClick={() => navigate("/Accessoires-Dell")} className="bg-blue-600 text-white hover:bg-blue-700 px-6 h-11 rounded-2xl font-bold">
                    Retour aux accessoires Dell
                </button>
            </section>
        )
    }

    const economie = (produit.prixBarre - produit.prix).toFixed(2).replace(".", ",")
    const prixAffiche = produit.prix.toFixed(2).replace(".", ",")
    const prixBarreAffiche = produit.prixBarre.toFixed(2).replace(".", ",")

    return (
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="max-w-6xl mx-auto pt-30">

                {/* Fil d'ariane */}
                <div className="text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-1">
                    <Link to="/" className="hover:text-blue-600 hover:underline">Accueil</Link>
                    <span>/</span>
                    <button onClick={() => navigate(`/Accessoires-Dell?categorie=${produit.categorie}`)} className="hover:text-blue-600 hover:underline">
                        {produit.categorieLabel}
                    </button>
                    <span>/</span>
                    <span className="text-gray-900 font-semibold">{produit.name}</span>
                </div>

                <div className="grid md:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10">

                    {/* Colonne image */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-2xl w-full flex items-center justify-center p-10">
                            <img src={produit.image} alt={produit.name} className="w-72 max-w-full object-contain" />
                        </div>
                        <p className="text-[11px] text-gray-500 mt-3 text-center">
                            Image fournie à titre d'illustration. L'article livré peut différer selon la configuration choisie.
                        </p>
                    </div>

                    {/* Colonne informations / achat */}
                    <div className="flex flex-col text-start bg-white rounded-2xl p-6 gap-5 self-start">
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wide">{produit.categorieLabel}</span>

                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold uppercase">{produit.name}</h1>
                            <p className="text-gray-500 text-sm mt-1">Modèle : {produit.modele}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Etoiles note={produit.note} />
                            <span className="text-black font-semibold">{produit.note.toFixed(1)}</span>
                            <span className="text-gray-500 text-sm">({produit.avis} avis)</span>
                        </div>

                        <p className="text-gray-700">{produit.accroche}</p>

                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-500 text-sm">
                                Prix d'origine <span className="line-through">{prixBarreAffiche}€</span>
                            </p>
                            <p className="text-orange-600 font-bold text-sm mb-1">Économisez {economie}€</p>
                            <p className="text-3xl font-bold">
                                {prixAffiche}€ <span className="text-sm font-normal text-gray-500">Prix Dell</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setQuantite((q) => Math.max(1, q - 1))}
                                    className="w-10 h-11 hover:bg-gray-100 font-bold"
                                >
                                    −
                                </button>
                                <span className="w-10 text-center font-semibold">{quantite}</span>
                                <button
                                    onClick={() => setQuantite((q) => q + 1)}
                                    className="w-10 h-11 hover:bg-gray-100 font-bold"
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-sm text-gray-500">Quantité</span>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button className="bg-blue-600 text-white hover:bg-blue-700 h-12 rounded-2xl text-[16px] font-bold w-full">
                                Ajouter au panier
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-12 rounded-2xl text-[16px] font-bold w-full">
                                Acheter maintenant
                            </button>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-3 text-sm">
                            <div className="flex items-center gap-3">
                                <FaTruck className="text-blue-600 text-lg shrink-0" />
                                <span>Livraison gratuite</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaShieldAlt className="text-blue-600 text-lg shrink-0" />
                                <span>Garantie 2 ans incluse</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 text-lg shrink-0" />
                                <span>Meilleur prix garanti Dell</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caractéristiques techniques */}
                <div className="bg-white rounded-2xl p-6 mt-10">
                    <h2 className="text-xl font-bold mb-6">Caractéristiques techniques</h2>
                    <div className="divide-y divide-gray-200">
                        {produit.specs.map((s) => (
                            <div key={s.label} className="grid md:grid-cols-[220px_1fr] grid-cols-1 py-3 gap-1">
                                <span className="text-gray-500">{s.label}</span>
                                <span className="font-medium">{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Avis clients */}
                <div className="bg-white rounded-2xl p-6 mt-6 mb-10">
                    <h2 className="text-xl font-bold mb-4">Commentaires</h2>
                    <div className="flex items-center gap-3 mb-2">
                        <Etoiles note={produit.note} />
                        <span className="font-semibold">{produit.note.toFixed(1)} / 5</span>
                        <span className="text-gray-500 text-sm">({produit.avis} avis)</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Les avis affichés proviennent de clients ayant acheté et utilisé ce produit.
                    </p>
                </div>

                <button
                    onClick={() => navigate(`/Accessoires-Dell?categorie=${produit.categorie}`)}
                    className="text-blue-600 hover:underline mb-10 font-semibold"
                >
                    ← Retour à {produit.categorieLabel}
                </button>
            </div>
        </section>
    )
}
