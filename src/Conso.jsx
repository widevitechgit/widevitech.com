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
import transth from "../images/transth.jpeg"
import t2000 from "../images/2000T.jpeg"
import etiq03 from "../images/etiq03.jfif"
import d2000 from "../images/2000d.jpeg"
import etiq06 from "../images/etiq06.jpeg"
import etiq07 from "../images/etiq07.jpeg"
import ribbon from "../images/ribbon.jpg"
import ribbon02 from "../images/rubbon02.png"
import ribbon03 from "../images/ribbon03.jpg"
import ribbon04 from "../images/ribbon04.jpg"
import ribbon05 from "../images/ribbon05.jpeg"
import ribbon06 from "../images/ribbon06.jpg"
import ribbon07 from "../images/ribbon07.jpg"
import carte from "../images/carte.jpg"
import brac from "../images/brac.jpg"


export default function Conso () {
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
        if (param === "etiquette") {
            setCategorie(param)
        }
        else if (param === "rubans") {
            setCategorie(param)
        }
        else if (param === "cartes") {
            setCategorie(param)
        }
        else if (param === "bracelet") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
        {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">

                {categorie === "etiquette" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">CONSOMMABLES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Étiquettes</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/etiq.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "rubans" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">CONSOMMABLES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Rubans</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/rub.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "cartes" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">CONSOMMABLES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Cartes plastiques</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/cartes.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "bracelet" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">CONSOMMABLES</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Bracelet</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/bracelet.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>

            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-300 gap-5 py-6">

                {categorie === "etiquette" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">Etiquettes Zebra</p>
                        <h1 className="text-3xl font-bold text-black">Étiquettes haute performance en papier, synthétiques et RFID</h1>
                        <p>
                            Toutes les étiquettes de codes-barres ne se valent pas. Il en existe dans des milliers de matériaux différents, chacun ayant ses propres caractéristiques influant sur la durabilité<br/>
                            et les performances de l’imprimante. Pour s’assurer que vos étiquettes correspondent à vos besoins, nos experts en sciences des matériaux ont pré-testé, sélectionné et<br/>
                            certifié les matériaux d’étiquettes les plus performants afin de garantir une impression durable et une usure minimale de l’imprimante, le tout en tenant compte de votre<br/>
                            budget et de votre application.
                        </p>
                    </div>
                )}

                {categorie === "rubans" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Rubans Zebra</p>
                        <h1 className="text-3xl font-bold text-black">Ces rubans thermiques à la qualité éprouvée vous offrent une performance constante et optimale</h1>
                        <p>
                            Des rubans d’impression thermique inférieurs peuvent donner lieu à une impression d’étiquettes de mauvaise performance, des têtes d’impression endommagées, une perte<br/>
                            de productivité et, au final, une réduction des bénéfices. Évitez-les. Zebra vous garantit une qualité d’impression supérieure et une performance constante à chaque fois.<br/>
                            Comment ? Notre équipe R&D en consommables effectue des contrôles de qualité rigoureux pour garantir que nos rubans restent constants dans la qualité et la durabilité<br/>
                            des impressions. Quel est le résultat ? Des têtes d’impression à la durée de vie prolongée, une baisse du coût total de possession et une performance de lecture<br/>
                            exceptionnelle.
                        </p>
                    </div>
                )}

                {categorie === "cartes" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Cartes</p>
                        <h1 className="text-3xl font-bold text-black">Imprimez, Identifiez, Contrôlez avec les Cartes Zebra</h1>
                        <p>
                            Les cartes Zebra sont conçues pour offrir une qualité d’impression exceptionnelle, une grande durabilité et une sécurité renforcée. Idéales pour la création de badges d’entreprise,<br/>
                            cartes d’identification, cartes de fidélité ou cartes de contrôle d’accès, elles garantissent des résultats professionnels et fiables. Grâce à leur finition de haute qualité et à leur<br/>
                            compatibilité avec les imprimantes Zebra, ces cartes répondent parfaitement aux besoins des entreprises, des établissements scolaires, des institutions et des organisations soucieuses<br/>
                            de leur image et de la sécurité de leurs utilisateurs.
                        </p>
                    </div>
                )}

                {categorie === "bracelet" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Bracelets</p>
                        <h1 className="text-3xl font-bold text-black">Bracelets Zebra : Une Identification Intelligente pour une Gestion Simplifiée</h1>
                        <p>
                            Offrez à votre organisation une solution d’identification moderne, fiable et sécurisée avec les bracelets Zebra. Conçus pour allier confort et performance, ils permettent d’identifier<br/>
                            instantanément patients, visiteurs, participants ou clients tout en réduisant les risques d’erreur. Résistants, faciles à utiliser et compatibles avec les imprimantes Zebra, ces bracelets<br/>
                            garantissent une traçabilité optimale et une expérience utilisateur fluide. Que ce soit pour un hôpital, un événement, un parc de loisirs ou un hôtel, les bracelets Zebra sont le choix idéal<br/>
                            pour renforcer la sécurité et améliorer l’efficacité de vos opérations.
                        </p>
                    </div>
                )}

                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">

                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "etiquette" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("etiquette")}
                        >
                            Étiquettes
                        </button>
                        <button
                            className={categorie === "rubans" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("rubans")}
                        >
                            Rubans
                        </button>
                        <button
                            className={categorie === "cartes" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("cartes")}
                        >
                            cartes
                        </button>
                        <button
                            className={categorie === "bracelet" ? "font-bold w-55 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 w-55 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("bracelet")}
                        >
                            Bracelet
                        </button>
                    </div>

                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">

                        {categorie === "etiquette" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 7</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={transth} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">8100T CryoCool<br /><span className="text-[14px]">&#40;SAMPLE35938&#41;</span></h1>
                                        <p>ÉTIQUETTE, POLYESTER, 50,8 x 25,4 mm, TRANSFERT THERMIQUE, 8100T CRYOCOOL, PERMANENTE HAUTE PERFORMANCE, NOYAU 76,2 mm, ÉCHANTILLON</p>
                                        <button onClick={() => navigate("/consommables/SAMPLE35938")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={t2000} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Select 2000T Label<br /><span className="text-[14px]">&#40;76528&#41;</span></h1>
                                        <p>Étiquette, papier, 102 x 102 mm, impression par transfert thermique, Z-Select 2000T, couchée, adhésif permanent, mandrin de 76 mm</p>
                                        <button onClick={() => navigate("/consommables/76528")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={etiq03} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">PolyPro 3000T Clear Label<br /><span className="text-[14px]">&#40;3004428&#41;</span></h1>
                                        <p>ÉTIQUETTE, POLYPROPYLÈNE, 75 x 35 mm, TRANSFERT THERMIQUE, POLYPRO 3000T TRANSPARENT, ADHÉSIF PERMANENT, MANCHE DE 25 MM, MARQUE DE DÉTECTION NOIRE</p>
                                        <button onClick={() => navigate("/consommables/3004428")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={t2000} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Select 2000T Label<br /><span className="text-[14px]">&#40;76054&#41;</span></h1>
                                        <p>Étiquette, papier, 70 x 32 mm, impression par transfert thermique, Z-Select 2000T, couchée, adhésif permanent, mandrin de 76 mm</p>
                                        <button onClick={() => navigate("/consommables/76054")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={d2000} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Select 2000D Label<br /><span className="text-[14px]">&#40;800262-125&#41;</span></h1>
                                        <p>Étiquette, papier, 57,2 x 31,8 mm (2,25 x 1,25 po), impression thermique directe, Z-Select 2000D, revêtement haute performance, adhésif toutes températures, mandrin de 25,4 mm (1 po).</p>
                                        <button onClick={() => navigate("/consommables/800262-125")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={etiq06} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Select 2000D Label<br /><span className="text-[14px]">&#40;3014816-T&#41;</span></h1>
                                        <p>LAB-RL-DT-PAP-50,8X25,4MM</p>
                                        <button onClick={() => navigate("/consommables/3014816-T")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={etiq07} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Perform 1000T Label<br /><span className="text-[14px]">&#40;880003-025D&#41;</span></h1>
                                        <p>Étiquette, papier, 38 x 25 mm, impression par transfert thermique, Z-Perform 1000T, non couchée, adhésif permanent, mandrin de 25 mm</p>
                                        <button onClick={() => navigate("/consommables/880003-025D")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "rubans" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Sample Wax Resin Ribbon<br /><span className="text-[14px]">&#40;03200BK11005&#41;</span></h1>
                                        <p>Échantillon de ruban en résine cirée, 110 mm x 50 m, 3200, haute performance, âme de 25 mm</p>
                                        <button onClick={() => navigate("/consommables/03200BK11005")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon02} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Sample TT RIBBON GOLD<br /><span className="text-[14px]">&#40;05319GD11005&#41;</span></h1>
                                        <p>Échantillon de ruban zèbre doré 110 mm x 50 m</p>
                                        <button onClick={() => navigate("/consommables/05319GD11005")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon03} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Sample TT RIBBON BLACK<br /><span className="text-[14px]">&#40;05095BK11005&#41;</span></h1>
                                        <p>Échantillon de ruban zebra TT noir 110 mm 50 m</p>
                                        <button onClick={() => navigate("/consommables/05095BK11005")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon04} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">1600 Wax<br /><span className="text-[14px]">&#40;01600BK11045&#41;</span></h1>
                                        <p>Ruban ciré, 110 mm x 450 m (4,33 po x 1476 pi), 1600 unités, standard, mandrin de 25 mm (1 po), 18 unités/boîte</p>
                                        <button onClick={() => navigate("/consommables/01600BK11045")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon05} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">2300 Wax<br /><span className="text-[14px]">&#40;02300GS06407&#41;</span></h1>
                                        <p>Ruban ciré, 64 mm x 74 m, 2300, standard, mandrin de 12 mm, 12/boîte</p>
                                        <button onClick={() => navigate("/consommables/02300GS06407")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon06} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">3200 Wax/Resin<br /><span className="text-[14px]">&#40;03200GS11007&#41;</span></h1>
                                        <p>Ruban cire/résine, 110 mm x 74 m (4,33 po x 242 pi), 3200, haute performance, âme de 12 mm (0,5 po), 12 rubans/boîte</p>
                                        <button onClick={() => navigate("/consommables/03200GS11007")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ribbon07} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">Ruban YMCKLL<br /><span className="text-[14px]">&#40;800300-564EM&#41;</span></h1>
                                        <p>Ruban, couleur YMCKLL, 200 images, ZC300, EMEA</p>
                                        <button onClick={() => navigate("/consommables/03200GS11007")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "cartes" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 20</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={carte} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">ZEBRA WHITE PVC CARDS<br /><span className="text-[14px]">&#40;104523-111&#41;</span></h1>
                                        <p>CARTES EN PVC BLANC ZEBRA, 30 MIL (500 CARTES)</p>
                                        <button onClick={() => navigate("/consommables/104523-111")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}


                        {categorie === "bracelet" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 20</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={brac} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">Z-Band Direct Wristband<br /><span className="text-[14px]">&#40;10006995K&#41;</span></h1>
                                        <p>Bracelet, polypropylène, 1 x 11 po (25,4 x 279,4 mm), thermique direct, bande Z, fermeture adhésive, cartouche, 200/rouleau, 6/boîte.</p>
                                        <button onClick={() => navigate("/consommables/10006995K")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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