import { STATUS, STATUS_LABELS } from "../lib/db.js"

function dotColor(status) {
    if (status === STATUS.CLOTURE) return "bg-black"
    if (status === STATUS.TRAITE) return "bg-orange-500"
    return "bg-blue-600"
}

function formatDate(iso) {
    return new Date(iso).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export default function StatusTimelineCommercial({ history }) {
    const ordered = [...(history || [])].sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
        <ol className="relative border-l-2 border-black/10 pl-6 space-y-6">
            {ordered.map((entry, i) => {
                const isLast = i === ordered.length - 1
                return (
                    <li key={i} className="relative">
                        <span
                            className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full ${dotColor(entry.status)} ${
                                isLast ? "ring-4 ring-blue-500/20" : ""
                            }`}
                        />
                        <p className={`font-bold uppercase tracking-wide text-[14px] ${isLast ? "text-black" : "text-black/50"}`}>
                            {STATUS_LABELS[entry.status] || entry.status}
                        </p>
                        <p className="text-[13px] text-black/50">{formatDate(entry.date)}</p>
                        {entry.note && <p className="text-[13px] text-black/80 mt-1">{entry.note}</p>}
                    </li>
                )
            })}
        </ol>
    )
}