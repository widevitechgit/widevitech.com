import { Link } from "react-router-dom"
import logo from "../Logos/logo.png"
import { useState, useEffect } from "react"
import PremierBP from "../images/PremierBP.jpg"
import card from "../images/SCard.png"
import printerrs from "../images/PrinterRS.png"
import rfids from "../images/RFIDS.png"
import crosslogo from "../images/crosslogo.svg"


// ─── Données de navigation ────────────────────────────────────────────────────

const NAV_MATERIELS = [
    {
        id: "terminaux",
        label: "Terminaux mobiles",
        color: "orange",
        description: "La gamme de terminaux mobiles de Zebra équipe votre personnel des appareils dont ils ont besoin, des ordinateurs de poche et des tablettes aux appareils portables et aux terminaux embarqués.",
        links: [
            { label: "Terminaux portables",    to: "/Terminaux-portables?categorie=portables" },
            { label: "Terminaux embarqués",    to: "/Terminaux-portables?categorie=embarques" },
            { label: "Terminaux transportables", to: "/Terminaux-portables?categorie=transportables" },
        ],
    },
    {
        id: "imprimantes",
        label: "Imprimantes",
        color: "orange",
        description: "Qu'elles soient mobiles, portables, industrielles ou de bureau, les imprimantes de Zebra pour étiquettes de codes-barres, reçus, étiquettes RFID et cartes vous permettent de suivre et gérer vos biens et marchandises de manière plus intelligente.",
        links: [
            { label: "Imprimantes de bureau",            to: "/Imprimantes?categorie=bureau" },
            { label: "Imprimantes mobiles",              to: "/Imprimantes?categorie=mobiles" },
            { label: "Imprimantes industrielles",        to: "/Imprimantes?categorie=industrielles" },
            { label: "Imprimantes pour cartes d'identification", to: "/Imprimantes?categorie=cartes" },
            /*{ label: "Moteurs d'impression",             to: "/Imprimantes?categorie=moteurs" },*/
            { label: "Imprimantes pour le secteur de la santé", to: "/Imprimantes?categorie=sante" },
        ],
    },
    {
        id: "scanners",
        label: "Scanners de codes-barres",
        color: "orange",
        description: "Les scanners de codes-barres de Zebra 1D et 2D avec et sans fil anticipent tous les défis de lecture dans divers environnements, qu'il s'agisse de commerce de détail, du secteur de la santé, des transports et de la logistique ou de la fabrication.",
        links: [
            { label: "Scanners portables universels", to: "/Scanner?categorie=portable" },
            { label: "Scanners ultra-durcis",         to: "/Scanner?categorie=durcis" },
            { label: "Scanners fixes",                to: "/Scanner?categorie=fixe" },
            { label: "Lecteurs pour la santé",        to: "/Scanner?categorie=sante" },
        ],
    },
    {
        id: "rfid",
        label: "RFID",
        color: "orange",
        description: "La vaste gamme de lecteurs, antennes et imprimantes RFID RAIN de Zebra vous fournit des données de suivi et de localisation homogènes et précises.",
        links: [
            { label: "Lecteurs RFID portables",          to: "/RFID?categorie=portables" },
            { label: "Lecteurs RFID fixes et infrastructure", to: "/RFID?categorie=fixe" },
            { label: "Antennes RFID",                   to: "/RFID?categorie=antennes" },
            /*{ label: "Imprimantes RFID",                to: "/RFID?categorie=imprimantes" },*/
        ],
    },
    {
        id: "consommables",
        label: "Consommables pour l'impression",
        color: "orange",
        description: "Choisissez les codes-barres, RFID et consommables d'étiquettes Zebra pour bénéficier d'impressions haute performance, durables, lisibles et de qualité.",
        links: [
            { label: "Étiquettes", to: "/Consommables?categorie=etiquette" },
            { label: "Rubans",     to: "/Consommables?categorie=rubans" },
            { label: "Cartes",     to: "/Consommables?categorie=cartes" },
            { label: "Bracelet",   to: "/Consommables?categorie=bracelet" },
        ],
    },
    {
        id: "tablettes",
        label: "Tablettes",
        color: "orange",
        description: "Les tablettes durcies et les ordinateurs portables 2-en-1 de Zebra sont fins et légers, mais assez robustes pour travailler où que vous soyez, avec un système d'exploitation Windows ou Android familier et facile à utiliser.",
        links: [
            { label: "Gamme ET4x",    to: "/Tablettes?categorie=et4x" },
            { label: "Gamme ET4x-HC", to: "/Tablettes?categorie=et4x-hc" },
            { label: "Gamme ET6x",    to: "/Tablettes?categorie=et6x" },
            /*{ label: "Gamme ET8x",    to: "/Tablettes?categorie=et8x" },*/
        ],
    },
    {
        id: "accessoires",
        label: "Accessoires",
        color: "orange",
        description: "Découvrez la gamme Zebra d'accessoires, des chargeurs aux câbles de communication et aux étuis qui vous permettent de personnaliser vos périphériques mobiles pour en garantir une efficacité maximale.",
        links: [
            { label: "Accessoires pour imprimantes",      to: "/Accessoire?categorie=imprimantes" },
            { label: "Accessoires pour terminaux mobiles", to: "/Accessoire?categorie=terminaux" },
            { label: "Accessoires pour tablettes",        to: "/Accessoire?categorie=tablettes" },
            { label: "Accessoires de scanners",           to: "/Accessoire?categorie=scanners" },
        ],
    },
]

const NAV_CROSSCALL = [
    {
        id: "telephones",
        label: "Téléphones",
        color: "lime",
        description: "Partez à l'aventure en toute sérénité avec des téléphones étanches et ultra-résistants, conçus pour durer et vous accompagner jusqu'à 5 ans.",
        links: [
            { label: "Gamme CORE",    to: "/Téléphone-Crosscall?categorie=core" },
            { label: "Gamme STELLAR", to: "/Téléphone-Crosscall?categorie=stellar" },
        ],
    },
    {
        id: "acc-crosscall",
        label: "Accessoires",
        color: "lime",
        description: "Personnalisez et optimisez votre expérience Crosscall grâce à des accessoires innovants conçus pour vous accompagner dans toutes vos aventures, au bureau comme en extérieur.",
        links: [
            { label: "Accessoires Téléphone", to: "/Accessoire-Crosscall?categorie=tel" },
            { label: "Accessoires Vélo",      to: "/Accessoire-Crosscall?categorie=velo" },
            { label: "Accessoires Voiture",   to: "/Accessoire-Crosscall?categorie=voiture" },
            { label: "Écouteurs",             to: "/Accessoire-Crosscall?categorie=ecouteur" },
        ],
    },
]

const NAV_DELL = [
    {
        id: "laptops",
        label: "Ordinateurs Portables",
        color: "blue",
        description: "Les ordinateurs portables Dell font vivre l'héritage de la famille Inspiron en associant la fiabilité et la simplicité à la puissance de l'IA pour fournir sans effort tous les éléments essentiels.",
        links: [{ label: "Ordinateurs portables Dell", to: "/Ordi-Dell" }],
    },
    {
        id: "desktop",
        label: "Ordinateurs Bureau",
        color: "blue",
        description: "Des ordinateurs de bureau optimisés par l'IA et des PC tout-en-un conçus pour toutes vos activités : les jeux vidéo, les études ou le travail.",
        links: [{ label: "Ordinateurs de bureau Dell", to: "/Ordi-Bureau-Dell" }],
    },
    {
        id: "ecrans",
        label: "Écrans",
        color: "blue",
        description: "Les écrans Dell se distinguent par leur qualité d'affichage remarquable, offrant des dalles IPS ou OLED avec une reproduction des couleurs précise et des angles de vision larges, idéaux aussi bien pour le travail que pour le multimédia.",
        links: [{ label: "Écrans Dell", to: "/Ecrans" }],
    },
    {
        id: "gaming",
        label: "Gaming",
        color: "blue",
        description: "Achetez les meilleurs équipements de gaming Dell et Alienware. Découvrez les produits de gaming proposés dès aujourd'hui.",
        links: [{ label: "Produits Dell gaming", to: "/Gaming-Dell" }],
    },
    {
        id: "acc-pc",
        label: "Accessoires PC",
        color: "blue",
        description: "Améliorez votre configuration avec des claviers, des souris et bien plus encore.",
        links: [
            { label: "Claviers & souris", to: "/Accessoires-Dell?clavier_souris" },
            { label: "Audios",            to: "/Accessoires-Dell?audio" },
            { label: "Chargeurs",         to: "/Accessoires-Dell?chargeur" },
        ],
    },
]

const NAV_LOGICIELS = [
    {
        id: "logiciel-embarque",
        label: "Logiciel Embarqué",
        color: "orange",
        description: null,
        links: [
            { label: "Logiciels pour imprimantes", to: "/logiciel", sub: "Découvrez les logiciels d'impression Zebra pour intégrer, gérer et surveiller facilement les imprimantes." },
        ],
    },
]

// ─── Couleurs par marque ───────────────────────────────────────────────────────
const COLOR = {
    orange: { bg: "bg-orange-500", hover: "hover:bg-orange-500", hoverLight: "hover:bg-orange-300", text: "text-orange-500", decoration: "decoration-orange-500" },
    lime:   { bg: "bg-lime-500",   hover: "hover:bg-lime-500",   hoverLight: "hover:bg-lime-300",   text: "text-lime-500",   decoration: "decoration-lime-400" },
    blue:   { bg: "bg-blue-500",   hover: "hover:bg-blue-500",   hoverLight: "hover:bg-blue-300",   text: "text-blue-500",   decoration: "decoration-blue-500" },
}

// ─── Sous-composants ───────────────────────────────────────────────────────────

/** Panneau desktop : sidebar + contenu */
function DesktopPanel({ items, activeId, onSelect, onClose }) {
    const active = items.find(i => i.id === activeId) || items[0]
    const c = COLOR[active?.color || "orange"]

    return (
        <div className="w-full flex list-none items-start gap-6 py-6 px-12 mt-5">
            {/* Sidebar */}
            <div className="flex flex-col gap-1 bg-gray-300 w-60 py-5 rounded-2xl text-black/80 font-bold shrink-0">
                {items.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`text-left px-4 py-1 ${
                            activeId === item.id
                                ? `${COLOR[item.color].bg} text-white underline`
                                : `${COLOR[item.color].hover} hover:text-white`
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Contenu */}
            {active && (
                <div className="text-black">
                    <h2 className="font-bold text-xl">{active.label}</h2>
                    {active.description && <p className="text-[14px] mt-1 text-gray-600">{active.description}</p>}
                    <div className="flex flex-wrap gap-x-20 gap-y-2 mt-8 font-bold text-[16px]">
                        {active.links.map(link => (
                            <Link
                                key={link.to + link.label}
                                to={link.to}
                                onClick={onClose}
                                className={`${c.hoverLight} py-1 px-3 rounded-full hover:underline block`}
                            >
                                {link.label}
                                {link.sub && <span className="block text-gray-500 text-[13px] font-normal">{link.sub}</span>}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

/** Menu mobile : accordéon par catégorie */
function MobileMenu({ onClose }) {
    const [openSection, setOpenSection] = useState(null)   // "materiels" | "crosscall" | "dell" | "logiciels"
    const [openItem, setOpenItem]       = useState(null)   // id du sous-item ouvert

    const toggleSection = (key) => {
        setOpenSection(prev => prev === key ? null : key)
        setOpenItem(null)
    }
    const toggleItem = (id) => setOpenItem(prev => prev === id ? null : id)

    const sections = [
        { key: "materiels",  label: "Matériels",  items: NAV_MATERIELS,  color: "orange" },
        /*{ key: "logiciels",  label: "Logiciels",  items: NAV_LOGICIELS,  color: "orange" },*/
        { key: "crosscall",  label: "Crosscall",  items: NAV_CROSSCALL,  color: "lime" },
        { key: "dell",       label: "Dell",        items: NAV_DELL,       color: "blue" },
    ]

    return (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20">
            <div className="flex flex-col divide-y divide-gray-200">

                {/* Numéro & actualité (repris ici pour le mobile) */}
                <div className="flex flex-col gap-3 px-6 py-4">
                    <p className="text-[14px] font-medium">Cel : 05 55 55 56 56 - Fixe : 27 21 28 49 52</p>
                    <button className="self-start py-1 px-5 rounded-full bg-gray-100 font-bold shadow-xl">
                        Actualité
                    </button>
                </div>

                {/* Home */}
                <Link to="/" onClick={onClose} className="px-6 py-4 font-bold text-lg">
                    Home
                </Link>

                {/* Suivi commercial */}
                <Link to="/suivi-commercial" onClick={onClose} className="px-6 py-4 font-bold text-lg">
                    Suivre ma demande
                </Link>

                {sections.map(({ key, label, items, color }) => {
                    const c = COLOR[color]
                    return (
                        <div key={key}>
                            {/* Section principale */}
                            <button
                                onClick={() => toggleSection(key)}
                                className="w-full flex justify-between items-center px-6 py-4 font-bold text-lg"
                            >
                                <span className={openSection === key ? c.text : ""}>{label}</span>
                                <span className="text-gray-400 text-xl">{openSection === key ? "−" : "+"}</span>
                            </button>

                            {openSection === key && (
                                <div className="bg-gray-50 divide-y divide-gray-100">
                                    {items.map(item => (
                                        <div key={item.id}>
                                            {/* Sous-section */}
                                            <button
                                                onClick={() => toggleItem(item.id)}
                                                className="w-full flex justify-between items-center px-8 py-3 font-semibold text-gray-800"
                                            >
                                                <span>{item.label}</span>
                                                <span className="text-gray-400">{openItem === item.id ? "−" : "+"}</span>
                                            </button>

                                            {openItem === item.id && (
                                                <div className="px-10 pb-3 flex flex-col gap-2">
                                                    {item.description && (
                                                        <p className="text-[13px] text-gray-500 mb-2">{item.description}</p>
                                                    )}
                                                    {item.links.map(link => (
                                                        <Link
                                                            key={link.to + link.label}
                                                            to={link.to}
                                                            onClick={onClose}
                                                            className={`text-[15px] font-medium ${c.text} py-1`}
                                                        >
                                                            → {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}

                {/* Bouton contact */}
                {/*<div className="px-6 py-6">
                    <button
                        className="w-full bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-orange-500 transition-all"
                        >
                            <Link to="/contact">Contacter Nous</Link>
                    </button>
                </div>*/}
            </div>
        </div>
    )
}

// ─── Composant principal ───────────────────────────────────────────────────────

export default function Header() {
    // Menu actif desktop : null | "materiels" | "crosscall" | "dell" | "logiciels"
    const [activeMenu, setActiveMenu] = useState(null)
    // Sous-item actif dans chaque menu desktop
    const [activeSub, setActiveSub] = useState({
        materiels: "terminaux",
        crosscall: "telephones",
        dell:      "laptops",
        logiciels: "logiciel-embarque",
        sav: "savwide"
    })
    // Menu mobile ouvert/fermé
    const [mobileOpen, setMobileOpen] = useState(false)
    // Header transparent en haut de page, bg-white/80 dès qu'on scroll
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = (key) => {
        if (activeMenu === key) {
            setActiveMenu(null)
        } else {
            setActiveMenu(key)
        }
    }

    const closeAll = () => {
        setActiveMenu(null)
        setMobileOpen(false)
    }

    const setSubItem = (menu, id) => setActiveSub(prev => ({ ...prev, [menu]: id }))

    // Couleur de soulignement par menu
    const underlineClass = (key) => {
        const map = { materiels: "decoration-orange-500", crosscall: "decoration-lime-400", dell: "decoration-blue-500", logiciels: "decoration-orange-500" }
        return activeMenu === key
            ? `underline decoration-4 underline-offset-6 ${map[key]} cursor-pointer`
            : "cursor-pointer"
    }

    return (
        <>
            <header
                className={`fixed w-full px-10 md:p-2 p-2 z-50 transition-all duration-300 ${
                    scrolled || activeMenu ? "bg-white/80 backdrop-blur-md shadow-xl" : "bg-white/50"
                }`}
            >
                {/* Numéro & actualité : visibles seulement en desktop, repris dans le menu déroulant mobile */}
                <div className={`hidden md:flex justify-between text-center items-center rounded-full px-5 ${
                    scrolled || activeMenu ? "pb-2" : "bg-white/20 py-1.5"
                }`}>
                    <p>
                        Cel : 05 55 55 56 56 - Fixe : 27 21 28 49 52
                    </p>
                    <div className="flex gap-3">
                        <img src={PremierBP} className="w-17" alt="Partner" />
                        <img src={printerrs} className="w-17" alt="Partner" />
                        <img src={rfids} className="w-17" alt="Partner" />
                        <img src={card} className="w-17" alt="Partner" />
                    </div>
                    <div className="flex gap-2">
                        <img src={crosslogo} className="w-40" alt="Partner" />
                        <button className={`py-1 px-5 rounded-full bg-transparent font-bold shadow-xl`}>
                            Actualité
                        </button>
                    </div>
                </div>
                <nav className="flex text-center items-center justify-between w-full gap-13 md:bg-gray-300 md:px-4 md:p-2 rounded-full">

                    {/* ── Burger mobile ── */}
                    <button
                        className="text-black font-bold md:hidden text-2xl leading-none"
                        onClick={() => setMobileOpen(prev => !prev)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>

                    {/* ── Liens desktop ── */}
                    <ul className="md:flex hidden gap-5 font-bold">
                        <Link to="/" onClick={closeAll}>Accueil</Link>

                        <button className={underlineClass("materiels")} onClick={() => toggleMenu("materiels")}>
                            Zebra
                        </button>

                        <button className={underlineClass("crosscall")} onClick={() => toggleMenu("crosscall")}>
                            Crosscall
                        </button>

                        <button className={underlineClass("dell")} onClick={() => toggleMenu("dell")}>
                            Dell
                        </button>

                        {/*<button className={underlineClass("logiciels")} onClick={() => toggleMenu("logiciels")}>
                            Logiciels
                        </button>*/}

                        <button onClick={() => {window.open("https://sav.widevitech.com/","_blank"), toggleMenu("savwide")}} className="cursor-pointer">
                            SAV
                        </button>

                        <Link to="/suivi-commercial" onClick={closeAll} className="cursor-pointer">
                            Suivre ma demande
                        </Link>
                    </ul>

                    {/* ── Logo ── */}
                    <Link to="/" onClick={closeAll}>
                        <img src={logo} className="w-40" alt="logo" />
                    </Link>

                    {/* ── Bouton contact desktop ── */}
                    <button className="bg-blue-700 text-white h-10 md:text-[14px] text-2xl md:w-50 w-20 font-bold md:rounded-full rounded-2xl shadow-xl hover:bg-orange-500 transition-all md:block hidden">
                        <Link to="/Contact-Commercial">
                            Contacter Nous
                        </Link>
                    </button>

                    {/* ── Bouton contact mobile ── */}
                    <button className="bg-blue-700 text-white h-10 text-2xl md:w-50 w-20 font-bold md:rounded-full rounded-2xl shadow-xl hover:bg-orange-500 transition-all md:hidden block">
                        <Link to="/Contact-Commercial">
                            &#9993;
                        </Link>
                    </button>
                </nav>

                {/* ── Panneaux desktop ── */}
                {activeMenu === "materiels" && (
                    <DesktopPanel
                        items={NAV_MATERIELS}
                        activeId={activeSub.materiels}
                        onSelect={(id) => setSubItem("materiels", id)}
                        onClose={closeAll}
                    />
                )}
                {activeMenu === "crosscall" && (
                    <DesktopPanel
                        items={NAV_CROSSCALL}
                        activeId={activeSub.crosscall}
                        onSelect={(id) => setSubItem("crosscall", id)}
                        onClose={closeAll}
                    />
                )}
                {activeMenu === "dell" && (
                    <DesktopPanel
                        items={NAV_DELL}
                        activeId={activeSub.dell}
                        onSelect={(id) => setSubItem("dell", id)}
                        onClose={closeAll}
                    />
                )}
                {/*{activeMenu === "logiciels" && (
                    <DesktopPanel
                        items={NAV_LOGICIELS}
                        activeId={activeSub.logiciels}
                        onSelect={(id) => setSubItem("logiciels", id)}
                        onClose={closeAll}
                    />
                )}*/}
            </header>

            {/* ── Menu mobile (en dehors du header pour prendre tout l'écran) ── */}
            {mobileOpen && <MobileMenu onClose={closeAll} />}
        </>
    )
}