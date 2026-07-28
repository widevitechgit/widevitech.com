import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
    FaChevronLeft, FaCheckCircle, FaBoxOpen, FaPaperPlane,
} from "react-icons/fa"

// ─── Accent couleur selon la catégorie (même logique que RFIDDetail) ───────────
function accentFromCategorie(categorie) {
    if (categorie === "fixe") {
        return {
            badge: "bg-orange-50 text-orange-700 border border-orange-200",
            solid: "bg-orange-600 hover:bg-orange-500",
            text: "text-orange-600",
            ring: "focus:ring-orange-500 focus:border-orange-500",
        }
    }
    return {
        badge: "bg-blue-50 text-blue-700 border border-blue-200",
        solid: "bg-blue-700 hover:bg-blue-600",
        text: "text-blue-700",
        ring: "focus:ring-blue-600 focus:border-blue-600",
    }
}

// ─── Champ de formulaire réutilisable ───────────────────────────────────────
function Champ({ label, accent, children }) {
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
            {children}
        </label>
    )
}

const classeInput =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 transition-shadow"

export default function Devis() {
    const navigate = useNavigate()
    const location = useLocation()
    const produit = location.state?.produit || null

    const accent = accentFromCategorie(produit?.categorie)

    const [form, setForm] = useState({
        nom: "",
        entreprise: "",
        email: "",
        telephone: "",
        quantite: 1,
        message: "",
    })
    const [envoye, setEnvoye] = useState(false)
    const [envoiEnCours, setEnvoiEnCours] = useState(false)

    const majChamp = (champ) => (e) =>
        setForm((f) => ({ ...f, [champ]: e.target.value }))

    const soumettre = async (e) => {
        e.preventDefault()
        setEnvoiEnCours(true)

        // TODO: remplacer par un vrai appel API / envoi d'email vers votre back-end.
        // Exemple de payload prêt à envoyer :
        const payload = {
            produit: produit
                ? { nom: produit.nom, sku: produit.sku, categorie: produit.categorie }
                : null,
            ...form,
        }
        console.log("Demande de devis :", payload)

        await new Promise((r) => setTimeout(r, 700))
        setEnvoiEnCours(false)
        setEnvoye(true)
    }

    // ── Écran de confirmation ──
    if (envoye) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="max-w-md text-center flex flex-col items-center gap-5">
                    <FaCheckCircle className="text-green-600" size={48} />
                    <h1 className="text-3xl font-black uppercase tracking-tight text-black">
                        Demande envoyée
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Merci{form.nom ? ` ${form.nom}` : ""}, votre demande de devis
                        {produit ? <> pour le <span className="font-bold text-black">{produit.nom}</span></> : ""} a bien été
                        transmise. Notre équipe commerciale vous recontactera sous peu.
                    </p>
                    <button
                        onClick={() => navigate("/rfid")}
                        className="bg-black text-white font-bold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
                    >
                        ← Retour aux produits RFID
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* ── Fil d'ariane ── */}
            <div className="border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 pt-20 pb-3 md:pt-43 flex items-center gap-2 text-xs text-gray-500">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                        <FaChevronLeft size={10} /> Retour
                    </button>
                    <span className="text-gray-300">/</span>
                    <span className="text-black font-semibold">Demande de devis</span>
                </div>
            </div>

            <section className="bg-white">
                <div className="max-w-4xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-5 gap-12">

                    {/* ── Rappel produit ── */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <span className={`w-fit text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${produit ? accent.badge : "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                            Demande de devis
                        </span>

                        {produit ? (
                            <>
                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-4">
                                    {produit.image && (
                                        <img src={produit.image} alt={produit.nom} className="w-32 h-32 object-contain" />
                                    )}
                                    <div className="text-center">
                                        <h2 className="text-xl font-black uppercase text-black">{produit.nom}</h2>
                                        <p className="text-gray-400 font-mono text-xs mt-1">{produit.sku}</p>
                                    </div>
                                    {produit.accroche && (
                                        <p className="text-gray-600 text-sm text-center leading-relaxed">{produit.accroche}</p>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                                <FaBoxOpen className="text-gray-400" size={28} />
                                <p className="text-gray-600 text-sm">
                                    Aucun produit sélectionné. Décrivez votre besoin dans le message
                                    ci-contre, ou revenez à la fiche produit qui vous intéresse.
                                </p>
                                <button
                                    onClick={() => navigate("/rfid")}
                                    className="text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600"
                                >
                                    Voir les produits RFID
                                </button>
                            </div>
                        )}
                    </div>

                    {/* ── Formulaire ── */}
                    <form onSubmit={soumettre} className="md:col-span-3 flex flex-col gap-5">
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                            Vos informations
                        </h1>
                        <p className="text-gray-500 -mt-2">
                            Complétez ce formulaire, notre équipe commerciale vous recontactera avec un devis personnalisé.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <Champ label="Nom complet">
                                <input
                                    required
                                    type="text"
                                    value={form.nom}
                                    onChange={majChamp("nom")}
                                    placeholder="Jean Dupont"
                                    className={`${classeInput} ${accent.ring}`}
                                />
                            </Champ>
                            <Champ label="Entreprise">
                                <input
                                    type="text"
                                    value={form.entreprise}
                                    onChange={majChamp("entreprise")}
                                    placeholder="Nom de votre entreprise"
                                    className={`${classeInput} ${accent.ring}`}
                                />
                            </Champ>
                            <Champ label="Email">
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={majChamp("email")}
                                    placeholder="vous@entreprise.com"
                                    className={`${classeInput} ${accent.ring}`}
                                />
                            </Champ>
                            <Champ label="Téléphone">
                                <input
                                    type="tel"
                                    value={form.telephone}
                                    onChange={majChamp("telephone")}
                                    placeholder="+225 00 00 00 00"
                                    className={`${classeInput} ${accent.ring}`}
                                />
                            </Champ>
                        </div>

                        <Champ label="Quantité souhaitée">
                            <input
                                type="number"
                                min={1}
                                value={form.quantite}
                                onChange={majChamp("quantite")}
                                className={`${classeInput} ${accent.ring} sm:w-40`}
                            />
                        </Champ>

                        <Champ label="Message (optionnel)">
                            <textarea
                                rows={4}
                                value={form.message}
                                onChange={majChamp("message")}
                                placeholder="Précisez votre besoin, votre contexte d'utilisation, vos délais..."
                                className={`${classeInput} ${accent.ring} resize-none`}
                            />
                        </Champ>

                        <button
                            type="submit"
                            disabled={envoiEnCours}
                            className={`mt-2 text-white font-bold px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-60 ${accent.solid}`}
                        >
                            <FaPaperPlane size={14} />
                            {envoiEnCours ? "Envoi en cours..." : "Envoyer la demande de devis"}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
