import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import zc11 from "../images/ZC11.jfif"
import tc27 from "../images/TC27.jfif"
import tc78 from "../images/TC78.jpg"
import tc58 from "../images/TC58.jpg"
import mc330l from "../images/MC330L.jpg"
import mc94 from "../images/MC94.jpg"
import tc57 from "../images/TC57.jpg"
import vc83 from "../images/VC83.jpg"
import rs5 from "../images/RS5.jfif"
import rs21 from "../images/RS21.jfif"
import mc3330xr from "../images/MC3330XR.jpg"
import fxr90 from "../images/FXR90.jpg"
import an720 from "../images/AN720.jpg"
import zd621r from "../images/ZD621R.jpg"

export default function RFID () {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }
    const [categorie, setCategorie] = useState("portables")

    // Lit le query param à l'arrivée sur la page
    // Ex: /terminaux?categorie=embarques  →  setCategorie("embarques")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "portables") {
            setCategorie(param)
        }
        else if (param === "fixe") {
            setCategorie(param)
        }
        else if (param === "antennes") {
            setCategorie(param)
        }
        else if (param === "imprimantes") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">

                {categorie === "portables" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">RFID ZEBRA</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Lecteurs RFID portables</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=46"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du portefeuille de la RFID
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/rfidport.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "fixe" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">RFID</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Lecteurs RFID fixes et infrastructure</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=46"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du portefeuille de la RFID
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/rfidfixe.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "antennes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">RFID</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Antennes RFID</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=46"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du portefeuille de la RFID
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/rfidant.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "imprimantes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes RFID</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=46"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du portefeuille de la RFID
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/rfidimpr.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>

            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-300 gap-5 py-6">

                {categorie === "portables" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">LECTEURS RFID PORTABLES</p>
                        <h1 className="text-3xl font-bold text-black">Accéder aux actifs et aux données de l’entreprise : Partout, tout le temps</h1>
                        <p>
                            Pour une utilisation dans les entrepôts, les quais de chargement ou les espaces d’accueil client confortables, les lecteurs RAIN RFID portables Zebra vous permettent d’obtenir<br/>
                            une visibilité maximale sur les actifs de votre entreprise. Conçus pour résister aux environnements de travail exigeants, les lecteurs et appareils Zebra améliorent l’efficacité de<br/>
                            la chaîne d’approvisionnement et la productivité des employés.
                        </p>
                    </div>
                )}

                {categorie === "fixe" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">LECTEURS RFID FIXES ET INFRASTRUCTURES</p>
                        <h1 className="text-3xl font-bold text-black">Une visibilité des stocks de niveau supérieur pour une gestion sans faille</h1>
                        <p>
                            Obtenez une visibilité maximale sur les actifs de l’ensemble de votre entreprise grâce aux lecteurs RFID RAIN fixes de Zebra. Profitez d'une gestion des stocks et des flux de<br/>
                            marchandises plus rapides et plus simples grâce à une visibilité totale des mouvements de vos actifs. En plus, les lecteurs fixes RFID de Zebra vous fournissent davantage de<br/>
                            données exploitables. La technologie de pointe utilisée est capable de localiser avec précision tous vos actifs étiquetés, même s'ils circulent sur votre site.
                        </p>
                    </div>
                )}

                {categorie === "antennes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Antennes rfid</p>
                        <h1 className="text-3xl font-bold text-black">Une antenne pour chaque situation</h1>
                        <p>
                            Suivi rapide et précis des stocks et des actifs. La performance, la portée et la robustesse des antennes RFID RAIN de Zebra permettent un comptage précis quelque soit le<br/>
                            nombre de passages.
                        </p>
                    </div>
                )}

                {categorie === "imprimantes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Imprimantes rfid</p>
                        <h1 className="text-3xl font-bold text-black">Des données RFID fiables</h1>
                        <p>
                            Votre solution dépend de la fiabilité des données. La diversité de notre gamme d’imprimantes vous permet d’imprimer et de coder avec précision vos étiquettes, vignettes et<br/>
                            cartes RFID RAIN partout où vous en avez besoin. Le codeur RFID installable en usine ou sur site permet de répondre à vos besoins actuels ou futurs.
                        </p>
                    </div>
                )}

                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">

                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "portables" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("portables")}
                        >
                            Lecteurs RFID portables
                        </button>
                        <button
                            className={categorie === "fixe" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("fixe")}
                        >
                            Lecteurs RFID fixe
                        </button>
                        <button
                            className={categorie === "antennes" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("antennes")}
                        >
                            Antennes RFID
                        </button>
                        <button
                            className={categorie === "imprimantes" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("imprimantes")}
                        >
                            Imprimantes RFID
                        </button>
                    </div>

                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">

                        {categorie === "portables" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={mc3330xr} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">MC3330XR<br /><span className="text-[14px]">&#40;MC333U-GJ4EG4EU&#41;</span></h1>
                                        <p>Pistolet RFID UHF MC3330XR, antenne circulaire, Wi-Fi 802.11 a/b/g/n/ac, lecteur 2D SE4770, 47 touches, batterie haute capacité, GMS, 4 Go de RAM / 32 Go de ROM, bandes ETSI</p>
                                        <button onClick={() => {navigate("/rfid/MC333U-GJ4EG4EU"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "fixe" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={fxr90} alt="" className="flex w-75 mx-auto" />
                                        <h1 className="text-2xl font-bold">FXR90<br /><span className="text-[14px]">&#40;FXR90011-400000-WR&#41;</span></h1>
                                        <p>Lecteur RFID fixe ultra-robuste FXR90, RFID UHF, Bluetooth 5.3, Wi-Fi 6, antenne linéaire à polarisation croisée intégrée, 4 ports d'antenne externes, compatible avec les fréquences mondiales 800 MHz et 900 MHz</p>
                                        <button onClick={() => {navigate("/rfid/FXR90011-400000-WR"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "antennes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 20</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={an720} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">AN720<br /><span className="text-[14px]">&#40;AN720-L51NF00WEU&#41;</span></h1>
                                        <p>ANT: RFID, ROBUSTE, FRÉQUENCE EU, ARTICLE À UTILISATION RESTREINTE DE CLASSE 4, CERTIFICATION CORRESPONDANTE REQUISE.</p>
                                        <button onClick={() => {navigate("/rfid/AN720-L51NF00WEU"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "imprimantes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 20</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zd621r} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZD621R<br /><span className="text-[14px]">&#40;ZD6A142-30ELR2EZ&#41;</span></h1>
                                        <p>La Zebra ZD621R est une imprimante d’étiquettes RFID professionnelle offrant une impression haute qualité en 203 dpi, un écran tactile couleur intuitif et de nombreuses options de connectivité. Idéale pour la gestion d’inventaire, la traçabilité et les applications logistiques nécessitant l’encodage RFID UHF.</p>
                                        <button onClick={() => {navigate("/rfid/ZD6A142-30ELR2EZ"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}