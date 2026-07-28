import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck, FaShieldAlt, FaCheckCircle } from "react-icons/fa"
import alienware_x16 from "../images/ALIENWARE-X16.avif"
import alienware_m18 from "../images/ALIENWARE-M18.avif"
import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

// ---- Données produits (à adapter / brancher sur ton backend si besoin) ----
const PRODUITS = {
    "alienware-x16-r2": {
        name: "ALIENWARE X16 R2",
        modele: "X16 R2",
        image: alienware_x16,
        prix: 2199.99,
        prixBarre: 2499.99,
        note: 4.6,
        avis: 87,
        accroche: "Un portable gaming ultra-fin taillé pour la performance, avec un châssis en aluminium et un refroidissement repensé.",
        specs: [
            { label: "Processeur", value: "Intel® Core™ i9-14900HX, 24 cœurs, jusqu'à 5,8 GHz" },
            { label: "Carte graphique", value: "NVIDIA® GeForce RTX™ 4080, 12 Go GDDR6" },
            { label: "Mémoire", value: "32 Go DDR5 à 5 600 MT/s" },
            { label: "Stockage", value: "SSD M.2 PCIe NVMe 1 To" },
            { label: "Écran", value: "16 pouces QHD+ 240 Hz, 3 ms, NVIDIA G-SYNC" },
            { label: "Système d'exploitation", value: "Windows 11 Famille" },
            { label: "Clavier", value: "AZERTY français rétroéclairé RGB AlienFX" },
            { label: "Connectique", value: "2x USB-C Thunderbolt 4, 2x USB-A 3.2, HDMI 2.1, Ethernet" },
            { label: "Poids", value: "2,45 kg" },
        ],
    },
    "alienware-m18-r2": {
        name: "ALIENWARE M18 R2",
        modele: "M18 R2",
        image: alienware_m18,
        prix: 2949.99,
        prixBarre: 3299.99,
        note: 4.7,
        avis: 64,
        accroche: "Le plus puissant des portables Alienware, avec un grand écran 18 pouces et une puissance de bureau à emporter partout.",
        specs: [
            { label: "Processeur", value: "Intel® Core™ i9-14900HX, 24 cœurs, jusqu'à 5,8 GHz" },
            { label: "Carte graphique", value: "NVIDIA® GeForce RTX™ 4090, 16 Go GDDR6" },
            { label: "Mémoire", value: "64 Go DDR5 à 5 600 MT/s" },
            { label: "Stockage", value: "2x SSD M.2 PCIe NVMe 1 To (RAID 0 disponible)" },
            { label: "Écran", value: "18 pouces QHD+ 165 Hz, IPS, NVIDIA G-SYNC" },
            { label: "Système d'exploitation", value: "Windows 11 Famille" },
            { label: "Clavier", value: "AZERTY français rétroéclairé RGB AlienFX par touche" },
            { label: "Connectique", value: "3x USB-C Thunderbolt 4, 3x USB-A 3.2, HDMI 2.1, Ethernet 2,5 Gb" },
            { label: "Poids", value: "3,80 kg" },
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

export default function DetailDellGaming() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [quantite, setQuantite] = useState(1)
    const produit = PRODUITS[slug]

    if (!produit) {
        return (
            <section className="min-h-screen bg-gray-300 p-4 flex flex-col items-center justify-center pt-30">
                <h1 className="text-2xl mb-4">Produit introuvable</h1>
                <button onClick={() => navigate("/Gaming-Dell")} className="bg-blue-600 text-white hover:bg-blue-700 px-6 h-11 rounded-2xl font-bold">
                    Retour aux produits Dell Gaming
                </button>
            </section>
        )
    }

    const economie = (produit.prixBarre - produit.prix).toFixed(2).replace(".", ",")
    const prixAffiche = produit.prix.toFixed(2).replace(".", ",")
    const prixBarreAffiche = produit.prixBarre.toFixed(2).replace(".", ",")

    return (
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="max-w-6xl mx-auto pt-20 md:pt-43">

                {/* Fil d'ariane */}
                <div className="text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-1">
                    <Link to="/" className="hover:text-blue-600 hover:underline">Accueil</Link>
                    <span>/</span>
                    <Link to="/Gaming-Dell" className="hover:text-blue-600 hover:underline">Produits Dell</Link>
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
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wide">Produits Dell Gaming</span>

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

                        <div className="flex flex-col gap-3">
                            <button onClick={() => navigate("/devis", { state: { produit } })} className="bg-blue-600 text-white hover:bg-blue-700 h-12 rounded-2xl text-[16px] font-bold w-full">
                                Demander un devis
                            </button>
                            <button onClick={() => navigate('/Contact-Commercial')} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-12 rounded-2xl text-[16px] font-bold w-full">
                                Contacter le service commercial
                            </button>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-3 text-sm">
                            <div className="flex items-center gap-3">
                                <FaTruck className="text-blue-600 text-lg shrink-0" />
                                <span>Livraison 3 semaines après validation du paiement</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaShieldAlt className="text-blue-600 text-lg shrink-0" />
                                <span>Garantie</span>
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
                    onClick={() => navigate("/Gaming-Dell")}
                    className="text-blue-600 hover:underline mb-10 font-semibold"
                >
                    ← Retour aux produits Dell
                </button>
            </div>
        </section>
    )
}
