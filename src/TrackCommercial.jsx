import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCommercialRequestByCode, STATUS, STATUS_LABELS } from "./lib/db.js"
import StatusTimelineCommercial from "./components/StatusTimelineCommercial.jsx"

export default function TrackCommercial() {
    const { code: codeFromUrl } = useParams()
    const navigate = useNavigate()
    const [input, setInput] = useState(codeFromUrl || "")
    const [request, setRequest] = useState(null)
    const [searched, setSearched] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(false)

    async function search(code) {
        setLoading(true)
        setSearched(true)
        try {
            const found = await getCommercialRequestByCode(code)
            setRequest(found)
            setNotFound(!found)
        } catch (err) {
            console.error("Erreur lors de la recherche du dossier :", err)
            setRequest(null)
            setNotFound(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (codeFromUrl) search(codeFromUrl)
    }, [codeFromUrl])

    function handleSubmit(e) {
        e.preventDefault()
        if (!input.trim()) return
        navigate(`/suivi-commercial/${input.trim().toUpperCase()}`)
    }

    return (
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-[40vh] md:p-0 p-2 md:pt-34 pt-17">
                <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-48 h-40 md:p-15 p-7 w-full rounded-2xl">
                    <p className="md:text-[15px] text-[13px] font-bold text-white/80">SUIVI DE DEMANDE</p>
                    <h1 className="md:text-4xl text-2xl font-bold">Où en est votre demande ?</h1>
                </div>
            </section>

            <section className="flex items-center justify-center md:p-0 p-2 pb-20">
                <div className="w-full md:w-[70%]">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8 mt-8">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ex : COM-4F8A2C"
                            className="flex-1 border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-orange-500 font-mono uppercase tracking-widest"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-black text-white hover:bg-orange-500 rounded-full font-bold px-8 py-3 disabled:opacity-60 transition-colors"
                        >
                            {loading ? "Recherche..." : "Rechercher"}
                        </button>
                    </form>

                    {searched && notFound && (
                        <div className="bg-white border border-black/10 rounded-2xl p-6 text-black/70">
                            Aucune demande ne correspond à ce code. Vérifiez qu'il a été saisi correctement
                            (il ressemble à <span className="font-mono">COM-XXXXXX</span>).
                        </div>
                    )}

                    {request && (
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden text-start">
                            <div className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white p-6">
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <div>
                                        <p className="font-mono text-[12px] uppercase tracking-widest text-white/70">{request.code}</p>
                                        <p className="text-2xl font-bold">{STATUS_LABELS[request.status]}</p>
                                    </div>
                                    {request.closed && (
                                        <span className="text-[11px] uppercase tracking-widest border border-white/40 px-3 py-1 rounded-full">
                                            Dossier clôturé
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 text-[14px]">
                                    <div>
                                        <p className="text-black/50">Sujet</p>
                                        <p className="font-semibold capitalize">{request.sujet}</p>
                                    </div>
                                    <div>
                                        <p className="text-black/50">Message</p>
                                        <p className="font-semibold">{request.message}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-[16px] mb-4">Historique</p>
                                    <StatusTimelineCommercial history={request.history} />
                                </div>

                                {request.status === STATUS.TRAITE && (
                                    <p className="bg-orange-50 border border-orange-300 rounded-2xl px-4 py-3 text-[14px] text-orange-900">
                                        Votre demande a été traitée par notre équipe commerciale.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}