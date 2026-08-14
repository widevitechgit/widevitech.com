import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import zc11 from "../images/ZC11.png"
import tc27 from "../images/TC27.jfif"
import tc78 from "../images/TC78.jpg"
import tc58 from "../images/TC58.jpg"
import mc330l from "../images/MC330L.jpg"
import mc94 from "../images/MC94.jpg"
import tc57 from "../images/TC57.jpg"
import vc83 from "../images/VC83.jpg"
import rs5 from "../images/RS5.jfif"
import rs21 from "../images/RS21.jfif"
import zc32 from "../images/ZC32.jpg"
import zd621 from "../images/ZD621.jpg"
import zd621r from "../images/ZD621R.jpg"
import zq620 from "../images/ZQ620.jpg"
import zq630 from "../images/ZQ630.jpg"
import zt231 from "../images/ZT231.jpg"
import zd510 from "../images/ZD510-HC.jpg"
import zq511r from "../images/zq511r.jpg"
import zt411 from "../images/zt411.jpg"
import zt620 from "../images/zt620.jpg"
import zq310_plus from "../images/zq310-plus.jpg"
import zt510 from "../images/zt510.jpg"
import zc10l from "../images/zc10l.jpg"
import zxp7 from "../images/zxp7.jpg"

// Un seul état remplace les 12 booléens
// "portables" | "embarques" | "transportables"

export default function Imprimante() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [categorie, setCategorie] = useState("bureau")
    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }

    // Lit le query param à l'arrivée sur la page
    // Ex: /terminaux?categorie=embarques  →  setCategorie("embarques")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "mobiles") {
            setCategorie(param)
        } else if(param === "industrielles") {
            setCategorie(param)
        } else if(param === "cartes") {
            setCategorie(param)
        } else if(param === "moteurs") {
            setCategorie(param)
        } else if(param === "sante") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">
        
                {categorie === "bureau" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes de bureau</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprbur.png')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
        
                {categorie === "mobiles" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes mobiles</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprmob.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
        
                {categorie === "industrielles" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes industrielles</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprindus.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "cartes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes pour cartes d'identification</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprcarte.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "moteurs" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Moteurs d'impression</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprmot.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "sante" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">IMPRIMANTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Imprimantes pour le secteur de la santé</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur les imprimantes
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/imprsante.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>
        
            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-300 gap-5 py-6">
        
                {categorie === "bureau" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">TERMINAUX DE BUREAU ZEBRA</p>
                        <h1 className="text-3xl font-bold text-black">Imprimantes de bureau compactes et faciles d’utilisation pour chaque application</h1>
                        <p className="md:p-6 p-4">
                            Compactes et simples d’emploi, les imprimantes de bureau Zebra offrent toute la robustesse qu’exige votre entreprise pour l’impression de volume faible à moyen. Avec une
                            imprimante à un prix si attractif, ne sacrifiez plus la performance au profit des économies. Pour toutes vos applications d’étiquettes code-barres, de reçus, de bracelets et de
                            RFID, il existe une imprimante de bureau Zebra qui convient parfaitement.
                        </p>
                    </div>
                )}
        
                {categorie === "mobiles" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Imprimantes Mobiles</p>
                        <h1 className="text-3xl font-bold text-black">Des terminaux durcis et performants pour un traitement sans faille des commandes</h1>
                        <p className="md:p-6 p-4">
                            Les terminaux embarqués Zebra ultra-durcis permettent à votre personnel de première ligne d'atteindre de nouveaux sommets en termes de performances. Conçus pour être
                            montés sur des équipements de manutention, nos terminaux sont fabriqués pour résister aux environnements difficiles des entrepôts, à la chaîne du froid et aux chantiers, aux
                            chocs et aux vibrations, et bien plus encore. Notre gamme de terminaux prêts à l'emploi permet à vos employés d'exécuter les tâches plus rapidement, sans pour autant
                            sacrifier la précision.
                        </p>
                    </div>
                )}
        
                {categorie === "industrielles" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux transportables</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p className="md:p-6 p-4">
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                {categorie === "cartes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux transportables</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p className="md:p-6 p-4">
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                {categorie === "moteurs" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux transportables</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p className="md:p-6 p-4">
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                {categorie === "sante" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux transportables</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p className="md:p-6 p-4">
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}
        
                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">
        
                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start gap-3 self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "bureau" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("bureau")}
                        >
                            Imprimantes de bureau
                        </button>
                        <button
                            className={categorie === "mobiles" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("mobiles")}
                        >
                            Imprimantes mobiles
                        </button>
                        <button
                            className={categorie === "industrielles" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("industrielles")}
                        >
                            Imprimantes industrielles
                        </button>
                        <button
                            className={categorie === "cartes" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("cartes")}
                        >
                            Imprimantes pour cartes d'identifications
                        </button>
                        {/*<button
                            className={categorie === "moteurs" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("moteurs")}
                        >
                            Moteurs d'impression
                        </button>*/}
                        <button
                            className={categorie === "sante" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("sante")}
                        >
                            Imprimantes pour le secteur de la santé
                        </button>
                    </div>
        
                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">
        
                        {categorie === "bureau" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zd621} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZD621</h1>
                                        <p>
                                            Imprimante à transfert thermique (74/300 m) ZD621, écran tactile couleur LCD, 203 ppp, USB, hôte USB, Ethernet, série, BTLE5, distributeur (décolleur), câbles UE et Royaume-Uni, police suisse, EZPL
                                        </p>
                                        <button onClick={() => {navigate("/imprimantes/ZD6A142-31EF00EZ"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zd621r} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZD621R</h1>
                                        <p>
                                            Imprimante à transfert thermique (74/300 m) ZD621R, écran tactile couleur LCD, 203 ppp, USB, hôte USB, Ethernet, série, BTLE5, ROW, RFID UHF, câbles UE et Royaume-Uni, police suisse, EZPL
                                        </p>
                                        <button onClick={() => {navigate("/imprimantes/ZD6A142-31EF00EZ0"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zd510} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZD510-HC</h1>
                                        <p>
                                            Bracelet pour imprimante DT ZD510, ZPL II, XML, 300 dpi, câbles UE et Royaume-Uni, USB, hôte USB, Ethernet uniquement
                                        </p>
                                        <button onClick={() => {navigate("/imprimantes/ZD51013-D0ER00FZ0"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}
        
                        {categorie === "mobiles" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zq310_plus} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZQ310 Plus</h1>
                                        <p>Imprimante DT ZQ310 Plus, 802AC/BT 4.X, papier ligné, avec capteur d'étiquettes, intérieur, anglais, groupe E</p>
                                        <button onClick={() => {navigate("/imprimantes/ZQ31-A0W03RE-00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zq511r} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZQ511R</h1>
                                        <p>Imprimante DT ZQ511, largeur du support 3,15 pouces / 80 mm, polices anglaises/latines, RFID, double Wi-Fi 802.11ac/Bluetooth 4.X, batterie standard, certifications EMEA</p>
                                        <button onClick={() => {navigate("/imprimantes/ZQ51-BUW030E-00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zq620} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZQ620</h1>
                                        <p>Imprimante DT ZQ620 Plus 3 / 72 mm, polices anglaises, double connectivité 802.11ac / BT4.x, plateau ligné, noyau 0,75 mm, groupe E, bandoulière, clip ceinture</p>
                                        <button onClick={() => {navigate("/imprimantes/ZQ62-AUWAE14-00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zq630} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZQ630</h1>
                                        <p>Imprimante DT ZQ630 Plus, polices anglaises, BT 4.x, plateau ligné, noyau de 0,75 pouce, groupe E, bandoulière, clip ceinture</p>
                                        <button onClick={() => {navigate("/imprimantes/ZQ63-AUFAE14-00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}
        
                        {categorie === "industrielles" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt231} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT231</h1>
                                        <p>Imprimante TT ZT231, 4 pouces, 300 dpi, transfert thermique, découpe facile, câbles EU/UK, USB, série, Ethernet, BTLE, hôte USB, EZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT23143-T0E000FZ"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt411} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT411</h1>
                                        <p>Imprimante TT ZT411, 4 pouces, 203 dpi, câble européen et britannique, série, USB, Ethernet 10/100, Bluetooth 4.1/MFi, hôte USB, EZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT41142-T0E0000Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt411} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT411</h1>
                                        <p>Imprimante TT ZT411, 4 pouces, 300 dpi, câble européen et britannique, série, USB, Ethernet 10/100, Bluetooth 4.1/MFi, hôte USB, EZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT41143-T0E0000Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt620} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT620</h1>
                                        <p>Imprimante TT ZT620, 6 pouces, 203 dpi, câble européen et britannique, série, USB, Ethernet Gigabit, Bluetooth 4.1, hôte USB, fonction Tear, écran tactile couleur, ZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT62062-T0E0100Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt620} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT620</h1>
                                        <p>Imprimante TT ZT620, 6 pouces, 300 dpi, câble européen et britannique, série, USB, Ethernet Gigabit, Bluetooth 4.0, hôte USB, fonction Tear, écran tactile couleur, ZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT62063-T0E0100Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt510} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT510</h1>
                                        <p>Imprimante TT ZT620, 6 pouces, 300 dpi, câble européen et britannique, série, USB, Ethernet Gigabit, Bluetooth 4.0, hôte USB, fonction Tear, écran tactile couleur, ZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT51042-T0E0000Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zt510} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZT510</h1>
                                        <p>Imprimante TT ZT620, 6 pouces, 300 dpi, câble européen et britannique, série, USB, Ethernet Gigabit, Bluetooth 4.0, hôte USB, fonction Tear, écran tactile couleur, ZPL</p>
                                        <button onClick={() => {navigate("/imprimantes/ZT51043-T2E0000Z"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "cartes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zc10l} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZC10L</h1>
                                        <p>Imprimante ZC10L, support pour cartes épaisses, USB 2.0, pilote Windows, démo 2.0, US, EMEA, LA, APAC ARTICLE DE CLASSE 5 FABRIQUÉ PAR LE CLIENT, DEMANDER UN DEVIS.</p>
                                        <button onClick={() => {navigate("/imprimantes/ZC10L-00QT0US00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zxp7} alt="" className="flex w-50 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZXP 7</h1>
                                        <p>Imprimante ZXP Series 7 PRO, double face, câbles UK/EU, USB, Ethernet 10/100, aimant ISO HiCo/LoCo sélectionnable par logiciel, bac de sortie haute capacité</p>
                                        <button onClick={() => {navigate("/imprimantes/Z72-0M0C00H0EM00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zc11} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZC300</h1>
                                        <p>Imprimante ZC300, recto verso, câble UK/EU, USB et Ethernet, pilote Windows, application CardStudio 2.0 (standard), 200 cartes PVC, ruban YMCKOK (200 images)</p>
                                        <button onClick={() => {navigate("/imprimantes/ZC32-000CQ00EM00"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "moteurs" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={rs5} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">RS5000X</h1>
                                        <p>Scanner portable filaire RS5000X, SE4770, câble court, déclenchement standard au doigt, distribution mondiale</p>
                                        <button onClick={() => {navigate("/imprimantes/RS5000X-TCFSSWR-MOT"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "sante" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={zd510} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZD510-HC</h1>
                                        <p>Bracelet pour imprimante DT ZD510, ZPL II, XML, 300 dpi, câbles UE et Royaume-Uni, USB, hôte USB, Ethernet uniquement</p>
                                        <button onClick={() => {navigate("/imprimantes/ZD51013-D0ER00FZ"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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