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
import et40 from "../images/et40.jpg"
import et60 from "../images/ET60.jpg"
import et40hc from "../images/ET40-HC.jpg"
import et80 from "../images/ET80.jpg"

export default function Tablette () {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [categorie, setCategorie] = useState("portables")
    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }

    // Lit le query param à l'arrivée sur la page
    // Ex: /terminaux?categorie=embarques  →  setCategorie("embarques")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "et4x") {
            setCategorie(param)
        }
        else if (param === "et4x-hc") {
            setCategorie(param)
        }
        else if (param === "et6x") {
            setCategorie(param)
        }
        else if (param === "et8x") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">

                {categorie === "et4x" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TABLETTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Gammes ET4x</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/tabet4x.png')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "et4x-hc" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TABLETTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Gammes ET4x-HC</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/tabet4x-hc.png')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "et6x" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TABLETTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Gammes ET6x</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/tabet6x.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "et8x" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TABLETTES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Gammes ET8x</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/tabet8x.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>

            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-300 gap-5 py-6">

                {categorie === "et4x" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">GAMMES ET4x</p>
                        <h1 className="text-3xl font-bold text-black">Tablettes durcies professionnelles, au juste prix</h1>
                        <p className="md:p-6 p-4">
                            Les tablettes grand public peuvent apparaître comme des options rentables pour votre entreprise, car leur prix semble juste. Mais sans les bonnes fonctionnalités, les
                            économies peuvent rapidement se transformer en coûts cachés : vous devrez peut-être acheter un boîtier pour augmenter la durabilité de la tablette ou un scanner pour les
                            tâches de numérisation intensives, et vous devrez remplacer les tablettes plus fréquemment.
                        </p>
                    </div>
                )}

                {categorie === "et4x-hc" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Gammes ET4x-HC</p>
                        <h1 className="text-3xl font-bold text-black">Tablettes ET4x-HC pour le secteur de la santé</h1>
                        <p className="md:p-6 p-4">
                            Les tablettes grand public peuvent sembler rentables du fait de leur prix. Mais leur manque de fonctionnalités pour le secteur de la santé crée des problèmes de sécurité
                            et des coûts, allant de l’impossibilité de désinfecter pour empêcher la propagation des germes à la nécessité d’acheter des scanners pour la capture de codes-barres et au
                            remplacement plus fréquent des équipements en raison de leur faible durabilité.
                        </p>
                    </div>
                )}

                {categorie === "et6x" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Gammes ET6x</p>
                        <h1 className="text-3xl font-bold text-black">La plus polyvalente des tablettes professionnelles durcies Android et Windows</h1>
                        <p className="md:p-6 p-4">
                            Boostez votre productivité et l’efficacité de votre entreprise avec des tablettes professionnelles qui en font plus : plus de fonctionnalité, de puissance, de sécurité et
                            de robustesse, mais aussi plus de polyvalence. Ces tablettes Android et Windows dopées par l’IA sont conçues pour un travail intensif. Les tablettes ET6x présentent une
                            esthétique similaire à celles destinées au grand public, mais solides comme un char d’assaut et prêtes à affronter les environnements les plus hostiles ! Le moteur d’IA
                            dédié des tablettes Windows ET6x offre une puissance suffisante pour exécuter des applications IA et la technologie d’IA intégrée améliore l’expérience de l’utilisateur.
                        </p>
                    </div>
                )}

                {categorie === "et8x" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Gammes ET8x</p>
                        <h1 className="text-3xl font-bold text-black">Des tablettes durcies qui, comme vous, font toute la différence</h1>
                        <p className="md:p-6 p-4">
                            Équipes de secours, techniciens de service sur le terrain et ressources en usine sur la ligne de production, vous avez tous une chose essentielle en commun : vous êtes
                            indispensables au bon fonctionnement de la société. Nombreux sont ceux qui comptent sur vous. Il vous faut un terminal mobile fiable et ultra-performant, où que vous soyez,
                            pour garantir votre efficacité. Pour réussir et exceller, il vous faut les nouvelles tablettes durcies Windows Zebra ET80 et ET85 2-en-1.
                        </p>
                    </div>
                )}

                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">

                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start gap-3 self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "et4x" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("et4x")}
                        >
                            Gamme ET4x
                        </button>
                        <button
                            className={categorie === "et4x-hc" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("et4x-hc")}
                        >
                            Gamme ET4x-HC
                        </button>
                        <button
                            className={categorie === "et6x" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("et6x")}
                        >
                            Gamme ET6x
                        </button>
                        <button
                            className={categorie === "et8x" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("et8x")}
                        >
                            Gamme ET8x
                        </button>
                    </div>

                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">

                        {categorie === "et4x" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et40} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET40<br /><span className="text-[14px]">&#40;ET40AB-001C1B0-A6&#41;</span></h1>
                                        <p>ET40, 10 , WIFI6, SE4100, 4 Go/64 Go, ANDROID GMS, SKU RANGÉE</p>
                                        <button onClick={() => {navigate("/tablettes/ET40AB-001C1B0-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et40} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET45<br /><span className="text-[14px]">&#40;ET45CB-101D2B0-A6&#41;</span></h1>
                                        <p>ET45, 10, 5G, Wi-Fi 6, SE4710, 8 Go/128 Go, Android GMS, ROW SKU</p>
                                        <button onClick={() => {navigate("/tablettes/ET45CB-101D2B0-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "et4x-hc" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et40hc} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET40-HC<br /><span className="text-[14px]">&#40;ET40AB-0H1C1B0-A6&#41;</span></h1>
                                        <p>ET40 HC, 10 pouces, Wi-Fi 6, SE4100, 4 Go/64 Go, Android GMS, ROW SKU</p>
                                        <button onClick={() => {navigate("/tablettes/ET40AB-0H1C1B0-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et40hc} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET45-HC<br /><span className="text-[14px]">&#40;ET45CB-1H1C1B0-A6&#41;</span></h1>
                                        <p>ET45 HC, 10 pouces, 5G, Wi-Fi 6, SE4100, 4 Go/64 Go, Android GMS, ROW SKU</p>
                                        <button onClick={() => {navigate("/tablettes/ET45CB-1H1C1B0-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "et6x" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et60} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET60<br /><span className="text-[14px]">&#40;ET60AW-0SQAGS00A0-A6&#41;</span></h1>
                                        <p>ET60, écran tactile standard, 8/128 Go de RAM/mémoire flash, Android GMS, batterie standard, ROW</p>
                                        <button onClick={() => {navigate("/tablettes/ET60AW-0SQAGS00A0-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "et8x" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={et80} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ET80 2 EN 1<br /><span className="text-[14px]">&#40;ET80A-0P5B2-CF0&#41;</span></h1>
                                        <p>Tablette robuste, ET80, 12 pouces, Wi-Fi, Windows Pro, i5, 16 Go, SSD 256 Go, BCR, lecteur d'empreintes digitales, NFC, IP65, garantie 3 ans</p>
                                        <button onClick={() => {navigate("/tablettes/ET80A-0P5B2-CF0"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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