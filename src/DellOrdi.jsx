import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import mc330l from "../images/MC330L.jpg"
import mc94 from "../images/MC94.jpg"
import tc27 from "../images/TC27.jfif"
import core_m6 from "../images/CORE-M6.webp"
import corez5 from "../images/CoreZ5.webp"
import core_s5 from "../images/CORE-S5.webp"
import stellar_x5s from "../images/STELLAR-X5S.webp"
import stellar_m6 from "../images/STELLAR-M6.webp"
import stellar_x5s0 from "../images/STELLAR-X5S0.webp"
import stellar_m60 from "../images/STELLAR-M60.webp"
import x_bike from "../images/X-BIKE.webp"
import x_car_pro from "../images/X-CAR_PRO.webp"
import x_vibes from "../images/X-VIBES.webp"
import x_glass from "../images/X-GLASS.webp"
import x_cable from "../images/X-CABLE.webp"
import x_power from "../images/X-POWER.webp"
import x_docke from "../images/X-DOCKER.webp"
import chargeur_usbc from "../images/Chargeur_USBC.webp"
import x_blocker from "../images/X-BLOCKER.webp"
import x_glass0 from "../images/X-GLASS_CORE-M6.webp"
import cable_usbc_usbc from "../images/CABLE_USB-C_USB-C.webp"
import stylus_case from "../images/STYLUS_CASE.webp"
import holster from "../images/HOLSTER.webp"
import dell01 from "../images/01.avif"
import dell02 from "../images/02.avif"
import tc57 from "../images/TC57.jpg"
import tc58 from "../images/TC58.jpg"
import tc78 from "../images/TC78.jpg"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"


export default function DellOrdi() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categorie, setCategorie] = useState("ordi")
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
        if (param === "ordi") {
            setCategorie(param)
        }
    }, [searchParams])

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-30 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "ordi" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("ordi")}
                    >
                        Ordinateurs portables
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    {categorie === "ordi" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell01} alt="" className="flex w-65 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Ordinateur portable Dell 16 Plus</h1>
                                    <p className="text-gray-500">Modèle: DB16250 | Écran: 16"</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.3</span>
                                    </div>
                                    <p className="font-bold">
                                        999,01 €
                                    </p>
                                    <button onClick={() => navigate('/Ordi-Dell/dell-16-plus')} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start md:w-90 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell02} alt="" className="flex w-65 mx-auto" />
                                    <h1 className="text-2xl font-light text-blue-600">Ordinateur portable Dell 15</h1>
                                    <p className="text-gray-500">Modèle: DB16250 | Écran: 16"</p>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.3</span>
                                    </div>
                                    <p className="font-bold">
                                        479,00 €
                                    </p>
                                    <button onClick={() => navigate('/Ordi-Dell/dell-15')} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}