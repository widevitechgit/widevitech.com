import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import dell_km7321w from "../images/DELL-KM7321W.avif"
import alienware_aw510k from "../images/ALIENWARE-AW510K.avif"
import dell_ms3320w from "../images/DELL-MS3320W.avif"
import alienware_aw510h from "../images/ALIENWARE-AW510H.avif"
import dell_wl5024 from "../images/DELL-WL5024.avif"
import dell_sb522a from "../images/DELL-SB522A.avif"
import dell_65w from "../images/DELL-CHARGEUR-65W.avif"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"


export default function AccDell() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categorie, setCategorie] = useState("clavier_souris")
    const navigate = useNavigate()
    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }

    // Lit le query param à l'arrivée sur la page
    // Ex: /Accessoires-Dell?categorie=audio  →  setCategorie("audio")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "clavier_souris") {
            setCategorie(param)
        }
        else if (param === "audio") {
            setCategorie(param)
        }
        else if(param === "chargeur") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-20 md:pt-43 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className={categorie === "clavier_souris" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-blue-500"}
                        onClick={() => switchCategorie("clavier_souris")}
                    >
                        Claviers & Souris
                    </button>
                    <button
                        className={categorie === "audio" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-blue-500"}
                        onClick={() => switchCategorie("audio")}
                    >
                        Audios
                    </button>
                    <button
                        className={categorie === "chargeur" ? "font-bold w-55 h-10 text-start p-2 hover:bg-blue-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-blue-500"}
                        onClick={() => switchCategorie("chargeur")}
                    >
                        Chargeurs
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    {categorie === "clavier_souris" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell_km7321w} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">DELL KM7321W</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.5</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">69,99€</span> 54,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/dell-km7321w")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={alienware_aw510k} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">ALIENWARE AW510K</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">4.2</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">119,99€</span> 89,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/alienware-aw510k")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell_ms3320w} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">DELL MS3320W</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">4.0</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">39,99€</span> 27,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/dell-ms3320w")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {categorie === "audio" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={alienware_aw510h} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">ALIENWARE AW520H</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.6</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">129,99€</span> 99,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/alienware-aw510h")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell_wl5024} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">DELL PRO WIRELESS WL5024</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">4.1</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">89,99€</span> 69,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/dell-wl5024")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell_sb522a} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">DELL PRO SP325</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaRegStar/>
                                        <span className="ml-4 text-black">3.9</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">49,99€</span> 34,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/dell-sb522a")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {categorie === "chargeur" && (
                        <div>
                            <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                    <img src={dell_65w} alt="" className="flex w-55 mx-auto" />
                                    <h1 className="text-2xl font-bold uppercase">CHARGEUR DELL 65W USB-C</h1>
                                    <div className="flex items-center text-blue-400">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStarHalfAlt/>
                                        <span className="ml-4 text-black">4.4</span>
                                    </div>
                                    <p className="font-bold">
                                        <span className="text-gray-500 text-[12px] line-through">49,99€</span> 34,99€
                                    </p>
                                    <button onClick={() => navigate("/Accessoires-Dell/chargeur-dell-65w")} className="bg-black mt-auto text-white hover:bg-blue-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
