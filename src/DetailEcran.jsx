import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck, FaShieldAlt, FaCheckCircle } from "react-icons/fa"
import dell05 from "../images/05.avif"
import dell06 from "../images/06.avif"
import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

// ---- Données produits (à adapter / brancher sur ton backend si besoin) ----
const PRODUITS = {
    "ecran-24-plus": {
        name: "Écran Dell 24 Plus - S2425HSM",
        modele: "S2425HSM",
        refFabricant: "TFFDX",
        refDell: "210-BSZD",
        image: dell05,
        prix: 138.99,
        prixBarre: null,
        note: 4.7,
        avis: 154,
        accroche: "Un écran Full HD polyvalent, pensé pour le confort visuel au quotidien, que ce soit pour le travail ou les loisirs.",
        specs: [
            { label: "Taille de l'écran", value: "23,8 pouces" },
            { label: "Résolution", value: "Full HD (1920 x 1080)" },
            { label: "Type de dalle", value: "IPS, anti-reflets" },
            { label: "Taux de rafraîchissement", value: "100 Hz" },
            { label: "Connectique", value: "HDMI, VGA" },
            { label: "Réglages", value: "Inclinaison réglable" },
            { label: "Technologie", value: "Confort visuel Dell (ComfortView)" },
            { label: "Couleur", value: "Noir" },
        ],
    },
    "ecran-27-qhd": {
        name: "Écran QHD Dell 27 Plus avec port USB-C S2725DC",
        modele: "S2725DC",
        refFabricant: "G3NV2",
        refDell: "210-BSRL",
        image: dell06,
        prix: 279.00,
        prixBarre: null,
        note: 4.9,
        avis: 208,
        accroche: "Un écran QHD immersif avec port USB-C, idéal pour charger et connecter votre ordinateur portable en un seul câble.",
        specs: [
            { label: "Taille de l'écran", value: "27 pouces" },
            { label: "Résolution", value: "QHD (2560 x 1440)" },
            { label: "Type de dalle", value: "IPS, anti-reflets" },
            { label: "Taux de rafraîchissement", value: "100 Hz" },
            { label: "Connectique", value: "USB-C, HDMI, DisplayPort" },
            { label: "Réglages", value: "Hauteur, inclinaison et pivot réglables" },
            { label: "Technologie", value: "Confort visuel Dell (ComfortView)" },
            { label: "Couleur", value: "Noir platine" },
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

export default function DetailEcran() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [quantite, setQuantite] = useState(1)
    const produit = PRODUITS[slug]

    if (!produit) {
        return (
            <section className="min-h-screen bg-gray-300 p-4 flex flex-col items-center justify-center pt-30">
                <h1 className="text-2xl mb-4">Produit introuvable</h1>
                <button onClick={() => navigate("/Ecrans")} className="bg-blue-600 text-white hover:bg-blue-700 px-6 h-11 rounded-2xl font-bold">
                    Retour aux écrans
                </button>
            </section>
        )
    }

    const economie = produit.prixBarre ? (produit.prixBarre - produit.prix).toFixed(2).replace(".", ",") : null
    const prixAffiche = produit.prix.toFixed(2).replace(".", ",")
    const prixBarreAffiche = produit.prixBarre ? produit.prixBarre.toFixed(2).replace(".", ",") : null

    return (
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="max-w-6xl mx-auto pt-30">

                {/* Fil d'ariane */}
                <div className="text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-1">
                    <Link to="/" className="hover:text-blue-600 hover:underline">Accueil</Link>
                    <span>/</span>
                    <Link to="/Ecrans" className="hover:text-blue-600 hover:underline">Écrans</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-semibold">{produit.name}</span>
                </div>

                <div className="grid md:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10">

                    {/* Colonne image */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-2xl w-full flex items-center justify-center p-10">
                            <img src={produit.image} alt={produit.name} className="w-80 max-w-full object-contain" />
                        </div>
                        <p className="text-[11px] text-gray-500 mt-3 text-center">
                            Image fournie à titre d'illustration. L'article livré peut différer selon la configuration choisie.
                        </p>
                    </div>

                    {/* Colonne informations / achat */}
                    <div className="flex flex-col text-start bg-white rounded-2xl p-6 gap-5 self-start">
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wide">Écrans</span>

                        <div>
                            <h1 className="text-2xl md:text-3xl font-light text-blue-600">{produit.name}</h1>
                            <p className="text-gray-500 text-sm mt-1 uppercase">
                                N° de réf. fabricant {produit.refFabricant}<br />
                                N° de réf. Dell {produit.refDell}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Etoiles note={produit.note} />
                            <span className="text-black font-semibold">{produit.note.toFixed(1)}</span>
                            <span className="text-gray-500 text-sm">({produit.avis} avis)</span>
                        </div>

                        <p className="text-gray-700">{produit.accroche}</p>

                        <div className="border-t border-gray-200 pt-4">
                            {produit.prixBarre && (
                                <>
                                    <p className="text-gray-500 text-sm">
                                        Prix d'origine <span className="line-through">{prixBarreAffiche}€</span>
                                    </p>
                                    <p className="text-orange-600 font-bold text-sm mb-1">Économisez {economie}€</p>
                                </>
                            )}
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
                    onClick={() => navigate("/Ecrans")}
                    className="text-blue-600 hover:underline mb-10 font-semibold"
                >
                    ← Retour aux écrans
                </button>
            </div>
        </section>
    )
}
