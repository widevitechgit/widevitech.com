import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import dell05 from "../images/05.avif"
import dell06 from "../images/06.avif"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"


export default function Ecrans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categorie, setCategorie] = useState("ecran")
    const navigate = useNavigate()
    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }

    // Lit le query param à l'arrivée sur la page
    // Ex: /terminaux?categorie=embarques  →  setCategorie("embarques")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "ecran") {
            setCategorie(param)
        }
    }, [searchParams])

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-30 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "ecran" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("ecran")}
                    >
                        Écrans
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    {categorie === "ecran" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell05} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Écran Dell 24 Plus - S2425HSM</h1>
                                    <p className="text-gray-500 uppercase">N° de réf. fabricant TFFDX<br/>N° de réf. Dell 210-BSZD</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.7</span>
                                    </div>
                                    <p className="font-bold">
                                        138,99 €
                                    </p>
                                    <button onClick={() => navigate("/Ecrans/ecran-24-plus")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell06} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Écran QHD Dell 27 Plus avec port USB-C S2725DC</h1>
                                    <p className="text-gray-500 uppercase">N° de réf. fabricant G3NV2<br/>N° de réf. Dell 210-BSRL</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <span className="ml-4 text-black">4.9</span>
                                    </div>
                                    <p className="font-bold">
                                        279,00 €
                                    </p>
                                    <button onClick={() => navigate("/Ecrans/ecran-27-qhd")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}