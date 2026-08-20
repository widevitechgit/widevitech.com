import { useState } from "react"
import { Link } from "react-router-dom"
import { createCommercialRequest } from "./lib/db.js"
import { sendCommercialContactEmail } from "./lib/emailjs.js"

const initialForm = {
    nom: "",
    prenom: "",
    societe: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
}

export default function ContactCommercial () {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle") // idle | sending | done | error
    const [request, setRequest] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }))
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!form.nom.trim()) newErrors.nom = "Le nom est requis."
        if (!form.prenom.trim()) newErrors.prenom = "Le prénom est requis."
        if (!form.email.trim()) {
            newErrors.email = "L'email est requis."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Format d'email invalide."
        }
        if (!form.sujet.trim()) newErrors.sujet = "Merci de préciser un sujet."
        if (!form.message.trim()) newErrors.message = "Le message ne peut pas être vide."
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus("sending")

        try {
            // 1. On enregistre d'abord la demande en base : c'est ce qui doit
            //    absolument réussir, le client aura toujours une trace même si
            //    l'email échoue ensuite.
            const created = await createCommercialRequest({
                client: {
                    nom: form.nom.trim(),
                    prenom: form.prenom.trim(),
                    societe: form.societe.trim(),
                    email: form.email.trim(),
                    telephone: form.telephone.trim(),
                },
                sujet: form.sujet,
                message: form.message.trim(),
            })

            try {
                // 2. L'envoi de l'email est secondaire : s'il échoue (quota
                //    EmailJS, config manquante...), on ne bloque pas le client
                //    puisque sa demande est déjà enregistrée.
                await sendCommercialContactEmail({
                    request_code: created.code,
                    nom: form.nom.trim(),
                    prenom: form.prenom.trim(),
                    societe: form.societe.trim(),
                    email: form.email.trim(),
                    telephone: form.telephone.trim(),
                    sujet: form.sujet,
                    message: form.message.trim(),
                })
            } catch (emailErr) {
                console.error("Envoi email échoué :", emailErr)
            }

            setRequest(created)
            setStatus("done")
            setForm(initialForm)
        } catch (err) {
            console.error("Erreur lors de l'enregistrement de la demande :", err)
            setStatus("error")
        }
    }

    if (status === "done" && request) {
        return (
            <section className="flex items-center justify-center min-h-[60vh] md:p-0 p-2 md:pt-34 pt-17 pb-20">
                <div className="bg-white rounded-2xl w-full md:w-[70%] shadow-sm overflow-hidden text-start">
                    <div className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:p-12 p-7 text-center">
                        <p className="md:text-[15px] text-[13px] font-bold text-white/80">DEMANDE ENREGISTRÉE</p>
                        <h1 className="md:text-3xl text-2xl font-bold mb-3">Merci, {request.client.prenom} !</h1>
                        <p className="font-mono md:text-3xl text-2xl tracking-[0.2em] my-4">{request.code}</p>
                        <p className="text-white/80 text-[14px] max-w-xl mx-auto">
                            Conservez ce code de suivi : notre équipe commerciale reviendra vers vous
                            dans les meilleurs délais à l'adresse {request.client.email}.
                        </p>
                    </div>
                    <div className="md:p-12 p-7 flex flex-wrap gap-3">
                        <Link
                            to={`/suivi-commercial/${request.code}`}
                            className="bg-black text-white hover:bg-orange-500 rounded-full font-bold px-8 py-3 transition-colors"
                        >
                            Suivre ma demande
                        </Link>
                        <button
                            onClick={() => { setStatus("idle"); setRequest(null) }}
                            className="border border-black/20 rounded-full font-bold px-8 py-3 hover:bg-black/5 transition-colors"
                        >
                            Envoyer une autre demande
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-[50vh] md:p-0 p-2 md:pt-34 pt-17">
                <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-70 h-60 md:p-15 p-7 w-full rounded-2xl">
                    <p className="md:text-[15px] text-[13px] font-bold text-white/80">SERVICE COMMERCIAL</p>
                    <h1 className="md:text-4xl text-2xl font-bold mb-3">Contactez notre équipe commerciale</h1>
                    <p className="md:text-[16px] text-[14px] text-white/90 max-w-2xl">
                        Une question sur nos produits, un besoin de devis ou un projet à discuter ?
                        Remplissez le formulaire ci-dessous, notre équipe vous répondra rapidement.
                    </p>
                </div>
            </section>

            {/* ───── SECTION FORMULAIRE ───── */}
            <section className="flex items-center justify-center md:p-0 p-2 pb-20">
                <div className="bg-white rounded-2xl w-full md:w-[70%] md:p-12 p-6 shadow-sm">

                    {status === "error" && (
                        <div className="bg-red-50 border border-red-300 text-red-800 rounded-2xl p-4 mb-8 text-start">
                            <p className="font-bold">Une erreur est survenue lors de l'envoi.</p>
                            <p className="text-[14px]">Merci de réessayer ou de nous contacter directement par téléphone.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 text-start">

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="nom" className="font-semibold text-[14px]">Nom *</label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={form.nom}
                                    onChange={handleChange}
                                    className={`border rounded-xl p-3 outline-none focus:border-orange-500 ${errors.nom ? "border-red-500" : "border-black/20"}`}
                                    placeholder="Votre nom"
                                />
                                {errors.nom && <p className="text-red-500 text-[13px]">{errors.nom}</p>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="prenom" className="font-semibold text-[14px]">Prénom *</label>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    value={form.prenom}
                                    onChange={handleChange}
                                    className={`border rounded-xl p-3 outline-none focus:border-orange-500 ${errors.prenom ? "border-red-500" : "border-black/20"}`}
                                    placeholder="Votre prénom"
                                />
                                {errors.prenom && <p className="text-red-500 text-[13px]">{errors.prenom}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="societe" className="font-semibold text-[14px]">Société</label>
                                <input
                                    type="text"
                                    id="societe"
                                    name="societe"
                                    value={form.societe}
                                    onChange={handleChange}
                                    className="border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500"
                                    placeholder="Nom de votre entreprise"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="telephone" className="font-semibold text-[14px]">Téléphone</label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    value={form.telephone}
                                    onChange={handleChange}
                                    className="border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500"
                                    placeholder="+225 XX XX XX XX XX"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold text-[14px]">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={`border rounded-xl p-3 outline-none focus:border-orange-500 ${errors.email ? "border-red-500" : "border-black/20"}`}
                                placeholder="vous@exemple.com"
                            />
                            {errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="sujet" className="font-semibold text-[14px]">Sujet *</label>
                            <select
                                id="sujet"
                                name="sujet"
                                value={form.sujet}
                                onChange={handleChange}
                                className={`border rounded-xl p-3 outline-none focus:border-orange-500 bg-white ${errors.sujet ? "border-red-500" : "border-black/20"}`}
                            >
                                <option value="">Sélectionnez un sujet</option>
                                <option value="devis">Demande de devis</option>
                                <option value="information">Demande d'information produit</option>
                                <option value="partenariat">Partenariat / Revente</option>
                                <option value="sav">Support / Après-vente</option>
                                <option value="autre">Autre</option>
                            </select>
                            {errors.sujet && <p className="text-red-500 text-[13px]">{errors.sujet}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="font-semibold text-[14px]">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                className={`border rounded-xl p-3 outline-none focus:border-orange-500 resize-none ${errors.message ? "border-red-500" : "border-black/20"}`}
                                placeholder="Décrivez votre besoin..."
                            />
                            {errors.message && <p className="text-red-500 text-[13px]">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="bg-black text-white hover:bg-orange-500 rounded-full font-bold px-8 py-3 self-start disabled:opacity-60 transition-colors"
                        >
                            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                        </button>

                        <p className="text-[12px] text-black/50">* Champs obligatoires</p>
                    </form>
                </div>
            </section>
        </>
    )
}