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
import ds2208 from "../images/DS2208.jpg"
import zq620 from "../images/ZQ620.jpg"
import zq630 from "../images/ZQ630.jpg"
import ds3600 from "../images/ds3600.jpg"
import ds3600xr from "../images/DS3600xr.jpg"
import ls2208 from "../images/LS2208.jpg"
import ds55 from "../images/DS55.jpg"
import zd510 from "../images/ZD510-HC.jpg"
import ds8208hc from "../images/DS8208-HC.jpg"

export default function Scanner() {
    //const [searchParams] = useSearchParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [categorie, setCategorie] = useState("portable")
    const switchCategorie = (val) => {
        setCategorie(val)
        setSearchParams({ categorie: val }) // ← ajoute ça
        window.scrollTo(0, 0)
    }

    // Lit le query param à l'arrivée sur la page
    // Ex: /terminaux?categorie=embarques  →  setCategorie("embarques")
    useEffect(() => {
        const param = searchParams.get("categorie")
        if (param === "portable") {
            setCategorie(param)
        }
        else if (param === "main_libre") {
            setCategorie(param)
        }
        else if (param === "durcis") {
            setCategorie(param)
        }
        else if (param === "fixe") {
            setCategorie(param)
        }
        else if (param === "sante") {
            setCategorie(param)
        }
        window.scrollTo(0, 0)
    }, [searchParams])

    return(
        <>
            {/* ───── SECTION HERO ───── */}
            <section className="flex text-center items-center justify-center min-h-screen md:p-0 p-2">
        
                {categorie === "portable" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">SCANNERS</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Scanners portables universels</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du scanner
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/scanport2.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
        
                {categorie === "durcis" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">SCANNERS</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Scanners ultra-durcis</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du scanner
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/scandur.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "fixe" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-orange-900 via-orange-700 to-orange-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">SCANNERS</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Scanners de codes-barres fixes</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du scanner
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/scanfixe.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}

                {categorie === "sante" && (
                    <div className="flex md:flex-row flex-col-reverse w-full justify-center md:gap-5 gap-2 md:pt-34 pt-17">
                        <div className="flex flex-col text-start items-start justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white md:h-120 h-70 md:p-15 p-7 w-full md:w-[40%] md:rounded-l-none rounded-2xl">
                            <p className="md:text-[15px] text-[13px] font-bold text-white/80">SCANNERS</p>
                            <h1 className="md:text-4xl text-2xl font-bold mb-14">Scanners de codes-barres pour le secteur de la santé</h1>
                            <button onClick={() => navigate('/Contact-Commercial')} className="bg-white text-black p-2 md:rounded-full rounded-2xl font-semibold md:px-6 px-2">
                                Contacter notre service commercial
                            </button>
                            <button className="bg-white text-black p-2 rounded-full font-semibold px-6 mt-5">
                                <a
                                    href="https://zebraportfolioguide.com/zebra-portfolio-guide-fr-fr/full-view.html?p=10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Brochure du scanner
                                </a>
                            </button>
                        </div>
                        <div className="relative bg-[url('../images/scansnate.jpg')] md:h-120 h-70 bg-center bg-cover w-full md:w-[60%] md:rounded-r-none rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                    </div>
                )}
            </section>
        
            {/* ───── SECTION PRODUITS ───── */}
            <section className="flex flex-col text-center items-center justify-center min-h-screen px-4 bg-gray-300 gap-5 py-6">
        
                {categorie === "portable" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold text-black/60">SCANNERS PORTABLES UNIVERSELS</p>
                        <h1 className="text-3xl font-bold text-black">Imprimantes de bureau compactes et faciles d’utilisation pour chaque application</h1>
                        <p>
                            Offrez à vos employés la possibilité de fournir un excellent service à la clientèle grâce à des scanners à haute fonctionnalité. Rationalisez toutes les tâches, de la gestion des<br/>
                            stocks à l’enregistrement, grâce aux scanners portables universels de Zebra. Profitez d’une autonomie de batterie longue durée qui dure toute la journée. Obtenez une<br/>
                            meilleure compréhension des données clients grâce à des informations exploitables. Scannez en toute confiance n’importe quoi, même les codes-barres endommagés ou de mauvaise qualité, dans n’importe quel environnement.
                        </p>
                    </div>
                )}
        
                {categorie === "durcis" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Scanners ultra-durcis</p>
                        <h1 className="text-3xl font-bold text-black">Gérez aisément vos enjeux, avec des scanners de codes-barres ultra-performants</h1>
                        <p>
                            Les scanners ultra-durcis de Zebra sont conçus pour relever les défis uniques de l’industrie et de la logistique. Ces scanners sont conçus pour résister à des conditions<br/>
                            difficiles, pour lire à des vitesses étonnantes et pour fournir aux travailleurs une puissance ininterrompue pendant toute la durée du travail. Les codes-barres à longue<br/>
                            distance, endommagés ou emballés sous film plastique ne posent aucun problème : nos scanners les lisent rapidement et facilement, ce qui vous permet de poursuivre vos<br/>
                            activités. Et grâce à une analyse en temps réel, vous pouvez rationaliser la gestion de votre flotte, avec le soutien d’experts en intelligence d’entreprise.
                        </p>
                    </div>
                )}

                {categorie === "fixe" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Scanners de codes-barres fixes</p>
                        <h1 className="text-3xl font-bold text-black">Lecture mains libres, pour de gros volume et à grande vitesse</h1>
                        <p>
                            Qu’il s’agisse d’accroître l’efficacité ou la polyvalence, la gamme de scanners de codes-barres fixes de Zebra offre des performances élevées, une lecture mains libres et des<br/>
                            applications sans encombrement. Les utilisateurs peuvent rapidement déployer des scanners sans perturber les workflows. Choisissez parmi tous les scanners de notre<br/>
                            gamme, chacun pouvant être intégré dans une grande variété de produits ou utilisé seul.
                        </p>
                    </div>
                )}

                {categorie === "sante" && (
                    <div className="flex flex-col gap-5">
                        <p className="text-[15px] font-bold uppercase text-black/60">Scanners de codes-barres pour le secteur de la santé</p>
                        <h1 className="text-3xl font-bold text-black">Proposez à vos patients un service et des soins de qualité avec nos scanners médicaux</h1>
                        <p>
                            Le personnel de santé est très sollicité et se doit d’être toujours disponible pour apporter les soins les plus critiques aux patients. C’est pour cette raison que les scanners<br/>
                            médicaux de Zebra ont été conçus pour fonctionner pendant toute la durée des gardes, en mode silencieux pendant la nuit, et pour offrir une protection maximale contre la<br/>
                            propagation des infections. En utilisant un scanner de codes-barres pour le secteur de la santé, le personnel hospitalier peut bénéficier d’un système d’identification des<br/>
                            patients par code-barres qui contribuera à simplifier l’admission des patients et permettra d’accéder aux informations et aux dossiers médicaux importants des patients,<br/>
                            garantissant ainsi un niveau de soins plus élevé et réduisant le risque d’erreurs. La numérisation des étiquettes de soins de santé permet de suivre facilement les médicaments<br/>
                            et de les administrer avec précision, ce qui contribue à garantir la sécurité de vos patients.
                        </p>
                    </div>
                )}
        
                <div className="flex md:flex-row flex-col text-center items-center justify-center gap-4">
        
                    {/* ── Sidebar catégories ── */}
                    <div className="flex flex-col text-start items-start self-start">
                        <h1 className="text-2xl mb-7">Catégories</h1>
                        <button
                            className={categorie === "portable" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("portable")}
                        >
                            Scanners Portables
                        </button>
                        <button
                            className={categorie === "durcis" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("durcis")}
                        >
                            Scanners Durcis
                        </button>
                        <button
                            className={categorie === "fixe" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("fixe")}
                        >
                            Scanners Fixes
                        </button>
                        <button
                            className={categorie === "sante" ? "font-bold md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500" : "bg-white/50 md:w-85 w-80 h-10 text-start p-2 hover:bg-orange-500"}
                            onClick={() => switchCategorie("sante")}
                        >
                            Scanners pour la Santé
                        </button>
                    </div>
        
                    {/* ── Grille produits ── */}
                    <div className="flex flex-col text-start">
        
                        {categorie === "portable" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds2208} alt="" className="flex w-55 mx-auto rounded-2xl" />
                                        <h1 className="text-2xl font-bold">DS2208<br /><span className="text-[14px]">&#40;DS2208-SR00007ZZWW&#41;</span></h1>
                                        <p>DS2208 : Caméra de surface, portée standard, filaire, noir crépuscule</p>
                                        <button onClick={() => navigate("/scanners/DS2208-SR00007ZZWW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ls2208} alt="" className="flex w-40 mx-auto rounded-2xl" />
                                        <h1 className="text-2xl font-bold">LS2208<br /><span className="text-[14px]">&#40;LS2208-SR20007R-UR&#41;</span></h1>
                                        <p>KT:LS2208, NOIR, CÂBLE USB, SUPPORT</p>
                                        <button onClick={() => navigate("/scanners/LS2208-SR20007R-UR")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}
        
                        {categorie === "durcis" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 3</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds3600} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS3678-HP<br /><span className="text-[14px]">&#40;DS3678-HP3U42A0SFW&#41;</span></h1>
                                        <p>Kit DS3678-HP RUGGED GREEN STANDARD CASTER USB (sans câble d'alimentation) : scanner DS3678-HP2F003VZWW, câble USB blindé CBA-U42-S07PAR (compatible avec une alimentation 12 V), socle STB3678-C100F3WW, alimentation PWRS-14000-148R</p>
                                        <button onClick={() => navigate("/scanners/DS3678-HP3U42A0SFW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds3600} alt="" className="flex w-55 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS3608<br /><span className="text-[14px]">&#40;DS3608-SR00003VZWW&#41;</span></h1>
                                        <p>DS3608 : Caméra de surface robuste, gamme standard, filaire, vert industriel, moteur à vibration</p>
                                        <button onClick={() => navigate("/scanners/DS3608-SR00003VZWW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds3600xr} alt="" className="flex w-40 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS3678-XR<br /><span className="text-[14px]">&#40;DS3678-XR3U42A2SVW&#41;</span></h1>
                                        <p>Kit DS3678-XR robuste avec moteur à vibration vert, station d'accueil standard et port USB (sans câble d'alimentation) : scanner DS3678-XR6F003VZWW, câble USB blindé CBA-U42-S07PAR (compatible avec une alimentation 12 V), station d'accueil STB3678-C100F3WW, alimentation PWR-BGA12V50W0WW</p>
                                        <button onClick={() => navigate("/scanners/DS3678-XR3U42A2SVW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "fixe" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 1</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds55} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS5502-SR<br /><span className="text-[14px]">&#40;DS5502-SR4US70MMZW&#41;</span></h1>
                                        <p>Kit USB DS5502-SR Noir (avec support multiple) : Scanner DS5502-SR40004ZZWW, câble USB CBL-U10755-01 7_, BRKT-MM0055C-04</p>
                                        <button onClick={() => navigate("/scanners/DS5502-SR4US70MMZW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {categorie === "sante" && (
                            <div>
                                <h1 className="text-xl mb-7">Produits de <span className="text-xl font-bold">1 - 2</span></h1>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds8208hc} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS8208-HC<br /><span className="text-[14px]">&#40;DS8208-HC4000BVZWW&#41;</span></h1>
                                        <p>DS8208 : APPAREIL D'IMAGERIE DE ZONE, SOINS DE SANTÉ, FILAIRE, ÉCLAIRAGE BLANC, HC BLANC, VIBRATION</p>
                                        <button onClick={() => navigate("/scanners/DS8208-HC4000BVZWW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
                                    </div>
                                    <div className="flex flex-col text-start w-70 bg-white rounded-2xl p-4 gap-4">
                                        <img src={ds8208hc} alt="" className="flex w-35 mx-auto" />
                                        <h1 className="text-2xl font-bold">DS8208-HC<br /><span className="text-[14px]">&#40;DS8208-HCBU2104ZVW&#41;</span></h1>
                                        <p>KIT USB à vibrations blanches DS8208-HC : scanner DS8208-HC4000BVZWW, câble USB blindé CBA-U21-S07ZBR</p>
                                        <button onClick={() => navigate("/scanners/DS8208-HCBU2104ZVW")} className="bg-black mt-auto text-white hover:bg-orange-500 w-45 self-center h-11 rounded-2xl text-[16px] font-bold">Voir le produit</button>
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