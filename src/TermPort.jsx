import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import zc11 from "../images/ZC11.jfif"
import tc27 from "../images/TC27.jfif"
import tc78 from "../images/TC78.jpg"
import tc58 from "../images/TC58.jpg"
import mc330l from "../images/MC330L.jpg"
import mc345b from "../images/MC34X0.jpg"
import mc3401 from "../images/MC34X0.jpg"
import mc94 from "../images/MC94.jpg"
import tc57 from "../images/TC57.jpg"
import vc83 from "../images/VC83.jpg"
import rs5 from "../images/RS5.jfif"
import rs21 from "../images/RS21.jfif"

// Un seul état remplace les 12 booléens
// "portables" | "embarques" | "transportables"
export default function TermPort() {
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
        if (param === "embarques") {
            setCategorie(param)
        }
        else if (param === "transportables") {
            setCategorie(param)
        }
        else if (param === "portables") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return (
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">

                {categorie === "portables" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TERMINAUX MOBILES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Terminaux Portables</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur le terminal mobile
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termportbg.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "embarques" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TERMINAUX MOBILES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Terminaux embarqués</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur le terminal mobile
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termembar.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "transportables" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-43 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">TERMINAUX MOBILES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Terminaux transportables</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure sur le terminal mobile
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termtranp.png')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>

            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-300 gap-5 py-6">

                {categorie === "portables" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">TERMINAUX PORTABLES</p>
                        <h1 className="text-3xl font-bold text-black">L'outil ultime pour améliorer la productivité du personnel</h1>
                        <p className="md:p-6 p-4">
                            Le terminal mobile de Zebra permet aux utilisateurs d'accéder aux informations, aux applications et aux personnes nécessaires à l'accomplissement de leur travail. Le
                            résultat : la productivité augmente et les clients bénéficient du meilleur service possible. Avec Zebra, vous êtes en de bonnes mains. Les plus grands détaillants, fabricants,
                            entreprises de transport et de logistique, organisations de services et prestataires de soins de santé du monde entier s'appuient sur les terminaux mobiles de Zebra pour
                            poursuivre leurs activités.
                        </p>
                    </div>
                )}

                {categorie === "embarques" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux embarqués</p>
                        <h1 className="text-3xl font-bold text-black">Des terminaux durcis et performants pour un traitement sans faille des commandes</h1>
                        <p className="md:p-6 p-4">
                            Les terminaux embarqués Zebra ultra-durcis permettent à votre personnel de première ligne d'atteindre de nouveaux sommets en termes de performances. Conçus pour être
                            montés sur des équipements de manutention, nos terminaux sont fabriqués pour résister aux environnements difficiles des entrepôts, à la chaîne du froid et aux chantiers, aux
                            chocs et aux vibrations, et bien plus encore. Notre gamme de terminaux prêts à l'emploi permet à vos employés d'exécuter les tâches plus rapidement, sans pour autant
                            sacrifier la précision.
                        </p>
                    </div>
                )}

                {categorie === "transportables" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Terminaux transportables</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p className="md:p-6 p-4">
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à<br />
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture<br />
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour<br />
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">

                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start gap-3 self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "portables" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("portables")}
                        >
                            Terminaux portables
                        </button>
                        <button
                            className={categorie === "embarques" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("embarques")}
                        >
                            Terminaux embarqués
                        </button>
                        <button
                            className={categorie === "transportables" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("transportables")}
                        >
                            Terminaux transportables
                        </button>
                    </div>

                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">

                        {categorie === "portables" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 7</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={tc27} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">TC27</h1>
                                        <p>TC27, WWAN, 5G, Wi-Fi 6, SE4710, écran 6 pouces, 6 Go/64 Go, caméra frontale 16 Mpx, caméra frontale 5 Mpx, connecteurs arrière 2 broches, batterie standard, NFC, Bluetooth, USB-C, SIM et eSIM, GMS, compatible avec le reste du monde</p>
                                        <button onClick={() => {navigate("/terminaux/WCMTB-T27B6ABC2-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={tc27} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">TC27</h1>
                                        <p>TC27, WWAN, 5G, Wi-Fi 6, SE4710, écran 6 pouces, 8 Go/128 Go, caméra frontale 16 Mpx, caméra frontale 5 Mpx, connecteur arrière 8 broches, batterie longue durée, NFC, Bluetooth, USB-C, SIM et eSIM, GMS, compatible avec le reste du monde</p>
                                        <button onClick={() => {navigate("/terminaux/WCMTB-T27B8ABE8-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={tc58} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">TC58</h1>
                                        <p>TC58, WAN, écran 6 pouces, 5G FR1, Wi-Fi 6E, 4 Go de RAM/64 Go de ROM, capteur d'image SE4720, caméra frontale 8 MP, caméra frontale 16 MP, batterie rechargeable, batterie standard 4680 mAh, GMS, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/TC58B1-3T1E4B1080-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={tc78} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">TC78</h1>
                                        <p>TC78, WAN, écran 6 pouces, 5G Sub-6, Wi-Fi 6E, mémoire flash 8/128 Go, SE55, caméra frontale 8 Mpx, caméra arrière 16 Mpx, remplacement à chaud, recharge sans fil, batterie standard 4 680 mAh, GMS, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/TC78B1-3T1K6B1A80-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={mc330l} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">MC330L</h1>
                                        <p>MC : WLAN, BT, pistolet, 2D, 38 KY, 2,5X, GMS, 4/32 Go, SNSR, NFC, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/MC330L-GJ3EG4RW"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={mc345b} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">MC345B</h1>
                                        <p>MC34, WAN, 5G/LTE, GPS, LAN, Wi-Fi 6E, une carte SIM + eSIM, pistolet, Bluetooth, NFC, écran 4 pouces, vibreur, GMS, imageur SE4770, 6 Go de RAM/64 Go UFS, 38 touches, batterie standard 7000 mAh, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/MC345B-3G1J53SS-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={mc3401} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">MC3401</h1>
                                        <p>MC34, LAN, Wi-Fi 6E, pistolet, Bluetooth, NFC, écran 4 pouces, vibreur, GMS, appareil photo SE58, 6 Go de RAM/64 Go UFS, 47 touches, batterie standard 7000 mAh, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/MC3401-0G1M54SS-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={mc94} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">MC94</h1>
                                        <p>MC94, LAN, Wi-Fi 6E, pistolet, Bluetooth, NFC, écran 4,3 pouces, vibreur, GMS, appareil photo SE58, caméra frontale 8 MP, caméra frontale 16 MP, 6 Go de RAM/128 Go UFS, clavier 34 touches, batterie standard 7000 mAh, ROW</p>
                                        <button onClick={() => {navigate("/terminaux/MC9401-0G1R6BSS-A6"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "embarques" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={vc83} alt="" className="flex w-75 mx-auto" />
                                        <h1 className="text-2xl font-bold">VC8300</h1>
                                        <p>Nombre d'utilisateurs finaux : 8 (1280 x 720), clavier QWERTY, plage de température standard (-30 °C à +50 °C), affichage lisible en extérieur, écran tactile capacitif, processeur QC SD660, 4 Go de RAM, 32 Go de mémoire MMC (pSLC), Android GMS, Ivanti Velocity, E/S de base (2 ports USB, 2 ports RS232, haut-parleur/microphone), version NA (États-Unis, Canada, Porto Rico)</p>
                                        <button onClick={() => {navigate("/terminaux/VC83-08SOCQBAABANA"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "transportables" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={rs5} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">RS5000X</h1>
                                        <p>Scanner portable filaire RS5000X, SE4770, câble court, déclenchement standard au doigt, distribution mondiale</p>
                                        <button onClick={() => {navigate("/terminaux/RS5000X-TCFSSWR"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={rs21} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">RS21</h1>
                                        <p>Scanner portable S2100, imageur 1D/2D SE4770/SR560, batterie intégrée, distribution mondiale. Support pour le dos de la main vendu séparément : SG-RS2X-HMTRA-xx (main droite) ou SG-RS2X-HMTLA-xx (main gauche).</p>
                                        <button onClick={() => {navigate("/terminaux/RS21C0-TS00ZWR"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={rs5} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">RS5000X</h1>
                                        <p>Scanner portable filaire RS5000X, SE4770/SR560, câble court, grande gâchette avec dragonne isotherme, livraison internationale</p>
                                        <button onClick={() => {navigate("/terminaux/RS5000X-TCFSXWR"), window.scrollTo(0,0)}} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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
