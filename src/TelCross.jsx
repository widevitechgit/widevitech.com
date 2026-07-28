import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import core_m6 from "../images/CORE-M6.webp"
import corez5 from "../images/CoreZ5.webp"
import core_s5 from "../images/CORE-S5.webp"
import stellar_x5s from "../images/STELLAR-X5S.webp"
import stellar_m6 from "../images/STELLAR-M6.webp"
import stellar_x5s0 from "../images/STELLAR-X5S0.webp"
import stellar_m60 from "../images/STELLAR-M60.webp"
import core_p6 from "../images/CORE-P6.webp"
import core_h6ex1 from "../images/CORE-H6_EX1_FRONT.webp"
import core_h6ex2 from "../images/CORE-H6_EX2_FRONT.webp"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

function Stars({ note }) {
    return (
        <div className="flex items-center text-lime-400">
            {[1, 2, 3, 4, 5].map(i => {
                if (note >= i) return <FaStar key={i} />
                if (note >= i - 0.5) return <FaStarHalfAlt key={i} />
                return <FaRegStar key={i} />
            })}
            <span className="ml-4 text-black">{note}</span>
        </div>
    )
}

const PRODUITS_CORE = [
    { slug: "core-m6",  image: core_m6,  nom: "CORE-M6",  note: 4.4, },
    { slug: "core-z5",  image: corez5,   nom: "CORE-Z5",  note: 4.2, },
    { slug: "core-s5",  image: core_s5,  nom: "CORE-S5",  note: 3.9, },
    { slug: "core-p6",  image: core_p6,  nom: "CORE-P6", },
    { slug: "core-h6-ex1", image: core_h6ex1, nom: "CORE-H6 Ex1", },
    { slug: "core-h6-ex2", image: core_h6ex2, nom: "CORE-H6 Ex2", },
]

const PRODUITS_STELLAR = [
    { slug: "stellar-x5s-chamonix", image: stellar_x5s,  nom: "STELLAR-X5s Chamonix", note: 4.5, },
    { slug: "stellar-m6-chamonix",  image: stellar_m6,   nom: "STELLAR-M6 Chamonix", note: 4.3, },
    { slug: "stellar-x5s",          image: stellar_x5s0, nom: "STELLAR-X5S", note: 4.5, },
    { slug: "stellar-m6",           image: stellar_m60,  nom: "STELLAR-M6", note: 4.4, },
]

function ProduitCard({ p, navigate }) {
    return (
        <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
            <img src={p.image} alt="" className="flex w-55 mx-auto" />
            <h1 className="text-2xl font-bold uppercase">{p.nom}</h1>
            {p.note && <Stars note={p.note} />}
            <p className="font-bold">
                <span className="text-gray-500 text-[12px] line-through">{p.prixBarre}</span>{" "}{p.prix}
            </p>
            <button
                onClick={() => navigate(`/Téléphone-Crosscall/${p.slug}`)}
                className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold"
            >
                Voir le produit
            </button>
        </div>
    )
}

export default function TelCross() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [categorie, setCategorie] = useState("core")

    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val })
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "core" || param === "stellar") setCategorie(param)
        window.scrollTo(0, 0)
    }, [searchParams])

    return (
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-15 md:pt-43 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start gap-3 self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "core" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("core")}
                    >
                        Gammes CORE
                    </button>
                    <button
                        className={categorie === "stellar" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("stellar")}
                    >
                        Gammes STELLAR
                    </button>
                </div>

                <div className="flex flex-col text-start">
                    {categorie === "core" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 6</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                {PRODUITS_CORE.map(p => <ProduitCard key={p.slug} p={p} navigate={navigate} />)}
                            </div>
                        </div>
                    )}
                    {categorie === "stellar" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 4</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                {PRODUITS_STELLAR.map(p => <ProduitCard key={p.slug} p={p} navigate={navigate} />)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
