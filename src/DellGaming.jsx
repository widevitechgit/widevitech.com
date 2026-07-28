import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import alienware_x16 from "../images/ALIENWARE-X16.avif"
import alienware_m18 from "../images/ALIENWARE-M18.avif"
import { useNavigate } from "react-router-dom"


export default function DellGaming() {
    const navigate = useNavigate()

    return(
        <section className="min-h-screen bg-gray-300 p-4">
            <div className="flex md:flex-row pt-20 md:pt-43 flex-col text-center items-center justify-center gap-4">
                <div className="flex flex-col text-start items-start self-start">
                    <h1 className="text-2xl mb-7">Catégories</h1>
                    <button
                        className="font-bold w-55 h-10 text-start p-2 hover:bg-blue-500"
                    >
                        Produits Dell gaming
                    </button>
                </div>
                <div className="flex flex-col text-start">
                    <h1 className="text-2xl mb-7">Produits Dell</h1>
                    <div>
                        <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                            <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                <img src={alienware_x16} alt="" className="flex w-55 mx-auto" />
                                <h1 className="text-2xl font-bold uppercase">ALIENWARE X16 R2</h1>
                                <div className="flex items-center text-lime-400">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStarHalfAlt/>
                                    <span className="ml-4 text-black">4.6</span>
                                </div>
                                <p className="font-bold">
                                    <span className="text-gray-500 text-[12px] line-through">2 499,99€</span> 2 199,99€
                                </p>
                                <button onClick={() => navigate("/Dell-Gaming/alienware-x16-r2")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                            </div>
                            <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                <img src={alienware_m18} alt="" className="flex w-55 mx-auto" />
                                <h1 className="text-2xl font-bold uppercase">ALIENWARE M18 R2</h1>
                                <div className="flex items-center text-lime-400">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStarHalfAlt/>
                                    <span className="ml-4 text-black">4.7</span>
                                </div>
                                <p className="font-bold">
                                    <span className="text-gray-500 text-[12px] line-through">3 299,99€</span> 2 949,99€
                                </p>
                                <button onClick={() => navigate("/Dell-Gaming/alienware-m18-r2")} className="bg-black mt-auto text-white hover:bg-lime-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
