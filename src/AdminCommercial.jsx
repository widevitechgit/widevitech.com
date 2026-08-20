import { useEffect, useState } from "react"
import { supabase } from "./lib/supabaseClient.js"
import {
    listCommercialRequests,
    updateCommercialRequestStatus,
    closeCommercialRequest,
    STATUS,
    STATUS_ORDER,
    STATUS_LABELS,
} from "./lib/db.js"

export default function AdminCommercial() {
    // La session vient de Supabase Auth (cookie/token géré par la lib) :
    // pas de code d'accès stocké côté client, l'accès est imposé par les
    // policies RLS sur la table commercial_requests.
    const [session, setSession] = useState(null)
    const [checkingSession, setCheckingSession] = useState(true)

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [authError, setAuthError] = useState("")
    const [loggingIn, setLoggingIn] = useState(false)

    const [requests, setRequests] = useState([])
    const [selectedCode, setSelectedCode] = useState(null)
    const [nextStatus, setNextStatus] = useState(STATUS.EN_COURS)
    const [note, setNote] = useState("")
    const [saving, setSaving] = useState(false)

    const authed = !!session

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)
            setCheckingSession(false)
        })
        const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession)
        })
        return () => listener.subscription.unsubscribe()
    }, [])

    async function refresh() {
        const all = await listCommercialRequests()
        setRequests(all)
        return all
    }

    useEffect(() => {
        if (authed) refresh()
    }, [authed])

    async function handleLogin(e) {
        e.preventDefault()
        setLoggingIn(true)
        setAuthError("")
        const { error } = await supabase.auth.signInWithPassword({ email, password: pass })
        if (error) setAuthError("Identifiants incorrects.")
        setLoggingIn(false)
    }

    async function handleLogout() {
        await supabase.auth.signOut()
        setRequests([])
        setSelectedCode(null)
    }

    const selected = requests.find((r) => r.code === selectedCode) || null

    async function handleUpdate(e) {
        e.preventDefault()
        if (!selected) return
        setSaving(true)
        await updateCommercialRequestStatus(selected.code, nextStatus, note.trim() || undefined)
        setNote("")
        const all = await refresh()
        const fresh = all.find((r) => r.code === selected.code)
        setNextStatus(fresh ? fresh.status : STATUS.EN_COURS)
        setSaving(false)
    }

    async function handleClose() {
        if (!selected) return
        setSaving(true)
        await closeCommercialRequest(selected.code, note.trim() || undefined)
        setNote("")
        await refresh()
        setSaving(false)
    }

    if (checkingSession) return null

    if (!authed) {
        return (
            <section className="flex items-center justify-center min-h-[70vh] md:p-0 p-2">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-center mb-6">Accès service commercial</h1>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            autoComplete="username"
                            className="border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500"
                        />
                        <input
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Mot de passe"
                            autoComplete="current-password"
                            className="border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500"
                        />
                        {authError && <p className="text-red-500 text-[13px]">{authError}</p>}
                        <button
                            disabled={loggingIn}
                            className="bg-black text-white hover:bg-orange-500 rounded-full font-bold px-8 py-3 disabled:opacity-60 transition-colors"
                        >
                            {loggingIn ? "Connexion..." : "Entrer"}
                        </button>
                    </form>
                    <p className="text-[12px] text-black/50 mt-4 text-center">
                        Réservé au personnel commercial. Le compte se crée depuis le tableau de bord
                        Supabase (Authentication → Users), pas dans le code.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="max-w-6xl mx-auto px-2 md:px-0 py-12">
            <div className="flex justify-end mb-4">
                <button onClick={handleLogout} className="text-[13px] text-black/50 hover:text-black underline">
                    Se déconnecter
                </button>
            </div>

            <div className="grid md:grid-cols-[1fr,1.3fr] gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Demandes commerciales</h1>
                    <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
                        {requests.length === 0 && (
                            <p className="text-[14px] text-black/50 border border-black/10 rounded-2xl p-4">
                                Aucune demande pour l'instant.
                            </p>
                        )}
                        {requests.map((r) => (
                            <button
                                key={r.code}
                                onClick={() => { setSelectedCode(r.code); setNextStatus(r.status); setNote("") }}
                                className={`w-full text-left border rounded-2xl px-4 py-3 transition-colors ${
                                    selectedCode === r.code
                                        ? "border-black bg-black text-white"
                                        : "border-black/10 hover:bg-black/5"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[13px]">{r.code}</span>
                                    {r.closed && (
                                        <span className="text-[10px] uppercase tracking-widest opacity-70">Clôturé</span>
                                    )}
                                </div>
                                <p className="text-[14px] font-semibold">
                                    {r.client.prenom} {r.client.nom}
                                    {r.client.societe && ` — ${r.client.societe}`}
                                </p>
                                <p className={`text-[12px] ${selectedCode === r.code ? "text-white/70" : "text-black/50"}`}>
                                    {STATUS_LABELS[r.status]}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    {!selected && (
                        <div className="border border-dashed border-black/20 rounded-2xl p-10 text-center text-black/50">
                            Sélectionnez une demande dans la liste pour voir le détail et mettre à jour son statut.
                        </div>
                    )}

                    {selected && (
                        <div className="bg-white border border-black/10 rounded-2xl p-6 space-y-6">
                            <div>
                                <p className="font-mono text-[12px] uppercase tracking-widest text-orange-500">{selected.code}</p>
                                <h2 className="text-xl font-bold">{selected.client.prenom} {selected.client.nom}</h2>
                                <p className="text-[14px] text-black/50">
                                    {selected.client.telephone}
                                    {selected.client.email && ` · ${selected.client.email}`}
                                    {selected.client.societe && ` · ${selected.client.societe}`}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 text-[14px]">
                                <div>
                                    <p className="text-black/50">Sujet</p>
                                    <p className="font-semibold capitalize">{selected.sujet}</p>
                                </div>
                                <div>
                                    <p className="text-black/50">Message</p>
                                    <p className="font-semibold">{selected.message}</p>
                                </div>
                            </div>

                            <form onSubmit={handleUpdate} className="flex flex-col gap-3 border-t border-black/10 pt-5">
                                <label className="block">
                                    <span className="block text-[14px] font-semibold mb-1.5">Nouveau statut</span>
                                    <select
                                        value={nextStatus}
                                        onChange={(e) => setNextStatus(e.target.value)}
                                        className="w-full border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500 bg-white"
                                    >
                                        {STATUS_ORDER.map((s) => (
                                            <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                                        ))}
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="block text-[14px] font-semibold mb-1.5">Note (optionnel, visible par le client)</span>
                                    <textarea
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        rows={3}
                                        className="w-full border border-black/20 rounded-xl p-3 outline-none focus:border-orange-500 resize-none"
                                        placeholder="Ex : devis envoyé, en attente de retour client..."
                                    />
                                </label>
                                <div className="flex flex-wrap gap-3 pt-1">
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="bg-black text-white hover:bg-orange-500 rounded-full font-bold px-6 py-3 disabled:opacity-60 transition-colors"
                                    >
                                        Mettre à jour le statut
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        disabled={saving || selected.closed}
                                        className="border border-black/20 rounded-full font-bold px-6 py-3 hover:bg-black/5 disabled:opacity-50 transition-colors"
                                    >
                                        {selected.closed ? "Dossier déjà clôturé" : "Clôturer le dossier"}
                                    </button>
                                </div>
                            </form>

                            <div className="border-t border-black/10 pt-5">
                                <p className="font-bold text-[16px] mb-3">Historique</p>
                                <ul className="space-y-2 text-[14px]">
                                    {[...selected.history].reverse().map((h, i) => (
                                        <li key={i} className="text-black/50">
                                            <span className="text-black font-semibold">{STATUS_LABELS[h.status]}</span>
                                            {" — "}{new Date(h.date).toLocaleString("fr-FR")}
                                            {h.note && <> · {h.note}</>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}