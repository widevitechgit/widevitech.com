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
import btry from "../images/BTRY.jpg"
import cordon from "../images/cordon.jpg"
import cbl_tc51 from "../images/CBL-TC51.jpg"
import cbl_dc from "../images/CBL-DC.jpg"
import cbl_mc33 from "../images/CBL-MC33.jpg"
import cbl_tc2x from "../images/CBL-TC2X.jpg"
import cbl_tc5x from "../images/CBL-TC5X.jpg"
import sac_mc33 from "../images/SAC-MC33.jpg"
import crd_mc33 from "../images/CRD-MC33.jpg"
import crd_et4x from "../images/CRD-ET4X.jpg"
import p10 from "../images/P10.jpg"
import kit from "../images/Kit.jpg"
import tete from "../images/tete.jpg"
import kit_crd from "../images/Kit-CRD.jpg"
import cable from "../images/cable.jpg"
import power from "../images/power.jpg"
import protection from "../images/protection.jpg"
import coque from "../images/coque.jpg"
import trigger from "../images/trigger.jpg"
import handle from "../images/handle.jpg"



export default function Accessoire () {
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
        if (param === "imprimantes") {
            setCategorie(param)
        }
        else if (param === "terminaux") {
            setCategorie(param)
        }
        else if (param === "tablettes") {
            setCategorie(param)
        }
        else if (param === "scanners") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">

                {categorie === "imprimantes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">ACCESSOIRES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Accessoires pour imprimantes</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termportbg.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "terminaux" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">ACCESSOIRES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Accessoires pour terminaux mobiles</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termembar.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "tablettes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">ACCESSOIRES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Accessoires pour tablettes</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/termtranp.png')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "scanners" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">ACCESSOIRES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Accessoires pour scanner</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
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

                {categorie === "imprimantes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Accessoires pour imprimantes</p>
                        <h1 className="text-3xl font-bold text-black">L'outil ultime pour améliorer la productivité du personnel</h1>
                        <p>
                            Le terminal mobile de Zebra permet aux utilisateurs d'accéder aux informations, aux applications et aux personnes nécessaires à l'accomplissement de leur travail. Le<br />
                            résultat : la productivité augmente et les clients bénéficient du meilleur service possible. Avec Zebra, vous êtes en bonnes mains. Les plus grands détaillants, fabricants,<br />
                            entreprises de transport et de logistique, organisations de services et prestataires de soins de santé du monde entier s'appuient sur les terminaux mobiles de Zebra pour<br />
                            poursuivre leurs activités.
                        </p>
                    </div>
                )}

                {categorie === "terminaux" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Accessoires pour Terminaux mobiles</p>
                        <h1 className="text-3xl font-bold text-black">Des terminaux durcis et performants pour un traitement sans faille des commandes</h1>
                        <p>
                            Les terminaux embarqués Zebra ultra-durcis permettent à votre personnel de première ligne d'atteindre de nouveaux sommets en termes de performances. Conçus pour être<br />
                            montés sur des équipements de manutention, nos terminaux sont fabriqués pour résister aux environnements difficiles des entrepôts, à la chaîne du froid et aux chantiers, aux<br />
                            chocs et aux vibrations, et bien plus encore. Notre gamme de terminaux prêts à l'emploi permet à vos employés d'exécuter les tâches plus rapidement, sans pour autant<br />
                            sacrifier la précision.
                        </p>
                    </div>
                )}

                {categorie === "tablettes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Accessoires pour tablettes</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p>
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à<br />
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture<br />
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour<br />
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                {categorie === "scanners" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Accessoires pour scanners</p>
                        <h1 className="text-3xl font-bold text-black">Plus de productivité, plus de mobilité et plus de flexibilité</h1>
                        <p>
                            Les solutions transportables robustes de Zebra sont conçues pour votre entreprise. De nos terminaux mobiles portables Android™ à nos diverses bagues de lecture, donnez à<br />
                            votre personnel de terrain l'avance technologique en termes de performances dont il a besoin. Profitez des fonctions intelligentes intégrées et des performances de lecture<br />
                            inégalées qui permettent à vos employés d'en faire plus. Notre technologie portable, dotée de caractéristiques uniques, offre la flexibilité opérationnelle nécessaire pour<br />
                            remplacer la complexité par la productivité.
                        </p>
                    </div>
                )}

                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">

                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "imprimantes" ? "font-bold md:w-85 0 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("imprimantes")}
                        >
                            Accessoires pour imprimantes
                        </button>
                        <button
                            className={categorie === "terminaux" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("terminaux")}
                        >
                            Accessoires pour terminaux mobiles
                        </button>
                        <button
                            className={categorie === "tablettes" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("tablettes")}
                        >
                            Accessoires pour tablette
                        </button>
                        <button
                            className={categorie === "scanners" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("scanners")}
                        >
                            Accessoires pour scanners
                        </button>
                    </div>

                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">

                        {categorie === "imprimantes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 7</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={p10} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">KIT<br /><span className="text-[14px]">&#40;P1031365-042&#41;</span></h1>
                                        <p>KIT ACC,QLn/ZQ5/ZQ6,ZQ6 Plus,ADAPTATEUR CA POUR MOBILE, CÂBLE UE</p>
                                        <button onClick={() => navigate("/accessoires/P1031365-042")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={kit} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CLEANING CARD KIT<br /><span className="text-[14px]">&#40;105999-311-01&#41;</span></h1>
                                        <p>Kit de cartes de nettoyage (amélioré), ZC100/300, 5 cartes</p>
                                        <button onClick={() => navigate("/accessoires/105999-311-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={tete} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">TÊTE D’IMPRESSION<br /><span className="text-[14px]">&#40;P1058930-012&#41;</span></h1>
                                        <p>Kit, tête d'impression 203 dpi, ZT420, ZT421</p>
                                        <button onClick={() => navigate("/accessoires/P1058930-012")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "terminaux" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cbl_tc51} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CBL TC51<br /><span className="text-[14px]">&#40;CBL-TC51-USB1-01&#41;</span></h1>
                                        <p>CÂBLE DE CHARGE/USB ROBUSTE TC51</p>
                                        <button onClick={() => navigate("/accessoires/CBL-TC51-USB1-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cbl_mc33} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CBL-MC33<br /><span className="text-[14px]">&#40;CBL-MC33-USBCHG-01&#41;</span></h1>
                                        <p>Le câble USB et de charge MC3300 / MC3300x / MC3300ax, MC3400 / MC3450 permet une charge rapide lorsqu'il est utilisé avec une batterie MC33x/MC34x et un adaptateur secteur. De plus, il assure la communication USB avec l'appareil lorsqu'il est connecté à un ordinateur.</p>
                                        <button onClick={() => navigate("/accessoires/CBL-MC33-USBCHG-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cbl_tc5x} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CBL-TC5X<br /><span className="text-[14px]">&#40;CBL-TC5X-USBC2A-01&#41;</span></h1>
                                        <p>Câble de communication et de charge USB-A vers USB-C. Ce câble mesure environ 1 mètre (3,25 pieds). Il peut être utilisé avec l'adaptateur allume-cigare USB (CHG-AUTO-USB1-01) pour la charge en véhicule.</p>
                                        <button onClick={() => navigate("/accessoires/CBL-TC5X-USBC2A-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={sac_mc33} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Four-slot battery charger<br /><span className="text-[14px]">&#40;SAC-MC33-4SCHG-01&#41;</span></h1>
                                        <p>Chargeur de batterie à quatre emplacements pour MC3300 / MC3300x / MC3300ax, MC3400 / MC3450. Vendus séparément : bloc d’alimentation (PWR-BGA12V50W0WW), câble CC (CBL-DC-388A1-01) et cordon d’alimentation secteur spécifique au pays.</p>
                                        <button onClick={() => navigate("/accessoires/SAC-MC33-4SCHG-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={crd_mc33} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">CRADLE MC33<br /><span className="text-[14px]">&#40;CRD-MC33-2SUCHG-01&#41;</span></h1>
                                        <p>Chargeur à un emplacement avec station de charge USB pour un appareil MC3300/MC3300x/MC3300ax, MC3400/MC3450 et sa batterie. Vendus séparément : bloc d’alimentation (PWR-BGA12V50W0WW), câble CC (CBL-DC-388A1-01), câble micro-USB (25-124330-01R), câble d’alimentation secteur (spécifique au pays).</p>
                                        <button onClick={() => navigate("/accessoires/CRD-MC33-2SUCHG-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={kit_crd} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">KIT STATION DE CHARGE ET CONNEXION<br /><span className="text-[14px]">&#40;KT-CRD-MC33-2SUCHG01&#41;</span></h1>
                                        <p>KIT Station de Charge et de Connexion pour 1 Terminal MC33 contenant un chargeur de batterie 1 position avec 1 Port micro USB Maître/Esclave. Garantie 1 an.﻿ Inclus : Câble d'Alimentation (CBL-DC-388A1-01); Alimentation (PWR-BGA12V50W0WW); Câble avec Prise Secteur Europe Terre (50-16000-220R). Ne contient pas le Câble USB (25-124330-01R) ﻿à commander.</p>
                                        <button onClick={() => navigate("/accessoires/KT-CRD-MC33-2SUCHG01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={coque} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">COQUE TC22/TC27<br /><span className="text-[14px]">&#40;SG-TC2L-BOOT-01&#41;</span></h1>
                                        <p>Coque de protection pour TC22/TC27 compatible avec la dragonne et utilisable avec batterie standard ou étendue.</p>
                                        <button onClick={() => navigate("/accessoires/SG-TC2L-BOOT-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={trigger} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">ELECTRONIC TRIGGER<br /><span className="text-[14px]">&#40;TRG-NGTC7-ELEC-01&#41;</span></h1>
                                        <p>Poignée électronique à gâchette. Utilise une gâchette électrique via les contacts situés à l'arrière du TC73/TC78. Compatible avec les batteries standard et à capacité étendue. Vendu séparément : Courroie de poignet optionnelle SG-PD40-WLD1-01.</p>
                                        <button onClick={() => navigate("/accessoires/TRG-NGTC7-ELEC-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={handle} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">TRIGGER HANDLE<br /><span className="text-[14px]">&#40;TRG-TC2L-SNP1-01&#41;</span></h1>
                                        <p>Poignée avec Gachette pour lecture codes barres pour TC22/27. Nécessite la coque de protection référence SG-TC2L-BOOT-01.</p>
                                        <button onClick={() => navigate("/accessoires/TRG-TC2L-SNP1-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "tablettes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cordon} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CORDON<br /><span className="text-[14px]">&#40;50-16000-220R&#41;</span></h1>
                                        <p>CORDON : PWR, 18 AWG, 6 A, 250 V, EUROPE</p>
                                        <button onClick={() => navigate("/accessoires/50-16000-220R")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cbl_dc} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CBL-DC<br /><span className="text-[14px]">&#40;CBL-DC-388A1-01&#41;</span></h1>
                                        <p>CÂBLE D'ASSEMBLAGE, ALIMENTATION, 12 V CC, 4,16 A</p>
                                        <button onClick={() => navigate("/accessoires/CBL-DC-388A1-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cbl_tc2x} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CBL-ET51<br /><span className="text-[14px]">&#40;CBL-TC2X-USBC-01&#41;</span></h1>
                                        <p>Un câble USB-A vers USB-C se connectant au port USB-C situé sous l'appareil. Ce câble mesure environ 1,5 mètre (5 pieds) de long et est muni d'une perle de ferrite.</p>
                                        <button onClick={() => navigate("/accessoires/CBL-TC2X-USBC-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={crd_et4x} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">CRD-ET4X<br /><span className="text-[14px]">&#40;CRD-ET4X-4S10I1-01&#41;</span></h1>
                                        <p>Station de charge ET4X à quatre emplacements pour 10 ET40, ET45, ET40HC, ET45HC (Compatible avec les tablettes 10 pouces, exosquelettes, terminaux de paiement, extensions, dragonnes médicales) (Alimentation vendue séparément)</p>
                                        <button onClick={() => navigate("/accessoires/CRD-ET4X-4S10I1-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={cable} alt="" className="flex w-45 mx-auto" />
                                        <h1 className="text-2xl font-bold">CÂBLE AVEC PRISE<br /><span className="text-[14px]">&#40;450042&#41;</span></h1>
                                        <p>CORDON D'ALIMENTATION, ADAPTATEUR D'ALIMENTATION EU (ET8X,L10,R12) ARTICLE RESTREINT CLASSE 4, CERTIFICATION CORRESPONDANTE REQUISE.</p>
                                        <button onClick={() => navigate("/accessoires/450042")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={power} alt="" className="flex w-45 mx-auto" />
                                        <h1 className="text-2xl font-bold">BLOC D'ALIMENTATION<br /><span className="text-[14px]">&#40;PWR-BGA12V50W0WW&#41;</span></h1>
                                        <p>Bloc d'alimentation CA/CC de niveau VI permettant d'alimenter un socle à un emplacement ou un chargeur de batterie à quatre emplacements. Câble CC (CBL-DC-388A1-01) et cordon d'alimentation CA spécifique au pays vendus séparément.</p>
                                        <button onClick={() => navigate("/accessoires/PWR-BGA12V50W0WW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={protection} alt="" className="flex w-45 mx-auto" />
                                        <h1 className="text-2xl font-bold">PROTECTION ET4X<br /><span className="text-[14px]">&#40;SG-ET4X-10EXOSKL1-01&#41;</span></h1>
                                        <p>Protection supplémentaire pour ET4X 10 pouces. Augmente la protection contre les chutes à 1,55 m. Possède des points d'accroche pour les clips en D (SG ET4X DCLIPS 0) et les sangles (SG ET5X SHDRSTP 01 ou 58 40000 007R) Compatible avec les chargeurs mono et multiple.</p>
                                        <button onClick={() => navigate("/accessoires/SG-ET4X-10EXOSKL1-01")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "scanners" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={btry} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">BATTERIE<br /><span className="text-[14px]">&#40;BTRY-36IAB0E-00&#41;</span></h1>
                                        <p>BLOC-BATTERIE, BATTERIE DE RECHANGE, FAMILLE DS36XX</p>
                                        <button onClick={() => navigate("/accessoires/BTRY-36IAB0E-00")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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