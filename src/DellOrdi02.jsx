import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import dell03 from "../images/03.avif"
import dell04 from "../images/04.avif"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"


export default function DellOrdi02() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categorie, setCategorie] = useState("bureau")
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
        if (param === "bureau") {
            setCategorie(param)
        }
    }, [searchParams])

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-20 md:pt-43 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "bureau" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("bureau")}
                    >
                        Ordinateurs bureau
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    {categorie === "bureau" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell03} alt="" className="flex w-25 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Ordinateur de bureau Dell Slim</h1>
                                    <p className="text-gray-500 uppercase">Modèle: ECS1250</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.6</span>
                                    </div>
                                    <p className="font-bold">
                                        499,01 €
                                    </p>
                                    <button onClick={() => navigate("/Ordi-Bureau-Dell/dell-slim")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell04} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Dell 27 All-in-One</h1>
                                    <p className="text-gray-500 uppercase">Modèle: EC27250</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <p className="font-bold">
                                        999,00 €
                                    </p>
                                    <button onClick={() => navigate("/Ordi-Bureau-Dell/dell-27-aio")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}