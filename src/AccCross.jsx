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
import tc57 from "../images/TC57.jpg"
import tc58 from "../images/TC58.jpg"
import tc78 from "../images/TC78.jpg"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"


export default function AccCross() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categorie, setCategorie] = useState("tel")
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
        if (param === "tel") {
            setCategorie(param)
        }
        else if (param === "velo") {
            setCategorie(param)
        }
        else if(param === "voiture") {
            setCategorie(param)
        }
        else if(param === "ecouteur") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-15 md:pt-43 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start gap-3 self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "tel" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("tel")}
                    >
                        Accessoires Téléphone
                    </button>
                    <button
                        className={categorie === "velo" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("velo")}
                    >
                        Accessoires Vélo
                    </button>
                    <button
                        className={categorie === "voiture" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("voiture")}
                    >
                        Accessoires Voiture
                    </button>
                    <button
                        className={categorie === "ecouteur" ? "font-bold w-55 h-10 text-start p-2 hover:bg-lime-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-lime-500"}
                        onClick={() => switchCategorie("ecouteur")}
                    >
                        Ecouteurs
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    {categorie === "tel" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 10</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_glass} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-GLASS</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.3</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-glass")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_cable} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-CABLE</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-cable")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_power} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-POWER</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.5</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-power")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_docke} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-DOCKE</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.5</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/chargeur-usbc")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={chargeur_usbc} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">Chargeur USB-C</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.5</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-glass-core-m6")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_blocker} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-BLOCKER</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-blocker")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_glass0} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">X-GLASS CORE-M6</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-docker")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={cable_usbc_usbc} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">CÂBLE USB-C / USB-C</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.5</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/cable-usbc-usbc")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={stylus_case} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">STYLUS CASE</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">3.9</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/stylus-case")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={holster} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold">HOLSTER</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">3.8</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/holster")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {categorie === "velo" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_bike} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">X-BIKE</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-bike")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}


                    {categorie === "voiture" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 4</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_car_pro} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">X-CAR PRO</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-car-pro")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}


                    {categorie === "ecouteur" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 4</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={x_vibes} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">X-VIBES</h1>
                                    <div className="flex items-center text-lime-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">4.2</span>
                                    </div>
                                    <button onClick={() => navigate("/Accessoires-Crosscall/x-vibes")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}