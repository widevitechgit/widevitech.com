import { useNavigate } from "react-router-dom"
import icon0 from "../images/cardstudio.png"
import icon1 from "../images/zebradesigner.png"

export default function Logiciel() {
    const navigate = useNavigate()

    return (
        <section className="md:pt-30 pt-17 min-h-screen">
            <div className="flex flex-col bg-black text-white md:p-6 p-4">
                <p>Logiciels</p>
                <h1 className="text-3xl font-bold text-blue-600 uppercase">Logiciels pour Imprimantes</h1><br />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 p-4 gap-5 text-center items-center justify-center">
                <div className="flex flex-col text-center items-center hover:shadow-2xl justify-center text-white bg-blue-600 p-4 gap-4 rounded-2xl">
                    <div className="flex text-start items-center justify-center gap-4">
                        <img src={icon0} className="md:w-45 w-35" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl">CardStudio</h1>
                            <p className="text-[11px]">
                                Développez vos capacités de conception<br />
                                et d'émission de cartes avec le logiciel<br />
                                de conception de cartes d'identification<br />
                                CardStudio de Zebra.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/logiciel/cardstudio")}
                        className="bg-black font-semibold text-2xl p-3 rounded-xl shadow-xl w-60 h-13 flex text-center justify-center items-center hover:bg-gray-800 transition-colors"
                    >
                        Voir le produit
                    </button>
                </div>
                <div className="flex hover:shadow-2xl flex-col text-center items-center justify-center text-white bg-blue-600 p-4 gap-4 rounded-2xl">
                    <div className="flex text-start items-center justify-center gap-4">
                        <img src={icon1} className="md:w-45 w-35" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl">ZebraDesigner</h1>
                            <p className="text-[11px]">
                                Créez facilement et rapidement une<br />
                                solution d'impression personnalisée en<br />
                                fonction de vos besoins.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/logiciel/zebradesigner")}
                        className="bg-black font-semibold text-2xl p-3 rounded-xl shadow-xl w-60 h-13 flex text-center justify-center items-center hover:bg-gray-800 transition-colors"
                    >
                        Voir le produit
                    </button>
                </div>
            </div>
        </section>
    )
}
