import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom"

import stat01 from "../images/PrinterRS.jpeg";
import stat02 from "../images/PremierBP.jpeg";
import stat03 from "../images/RFIDS.jpeg";
import stat04 from "../images/SCard.jpeg";
import logo01 from "../images/zebra.png";
import logo02 from "../images/crosscall.png";
import logo03 from "../images/Dell-logo.png";
import logo04 from "../images/getac.png";

import bgPompier from "../images/servicepubbg.jpg";
import bgSante from "../images/sante-bg.jpg";
import bgConstruction from "../images/techmobilebg.jpg";

import home from "../images/home.png"
import termmob from "../images/termmob.jpeg"
import impr from "../images/impr.jpeg"
import scanner from "../images/scanner.jpeg"
import rfid from "../images/rfid.jpeg"
import conso from "../images/conso.jpeg"
import tab from "../images/tab.jpeg"
import core_p6 from "../images/CORE-P6.png"
import core_h6ex1 from "../images/CORE-H6-Ex1.png"
import core_h6ex2 from "../images/CORE-H6-Ex2.png"
import gamme_stellar from "../images/gammestellar.png"
import gamme_core from "../images/gammecore.png"

import client01 from "../Logos/solibra.png"
import nouvellepspci from "../Logos/nouvellepspci.png"
import agl from "../Logos/agl.png"
import carrefour from "../Logos/carrefour.svg"
import cdci from "../Logos/CDCI.png"
import cnts from "../Logos/cnts.jpg"
import centaure from "../Logos/centaure.png"
import decathlon from "../Logos/Decathlon.png"
import dream from "../Logos/dream.png"
import fruinov from "../Logos/fruinov.jfif"
import threertechnologie from "../Logos/3rtechnologie.png"
import amsa from "../Logos/amsa.png"
import azadea from "../Logos/azadea.webp"
import citerminal from "../Logos/citerminal.jfif"
import dhl from "../Logos/DHL.webp"
import eburtis from "../Logos/eburtis.png"
import geantcasino from "../Logos/geantcasino.jpg"
import giz from "../Logos/giz.png"
import olam from "../Logos/olam.jpg"
import idh from "../Logos/IDH.jpg"
import innov from "../Logos/innov.png"
import majestic from "../Logos/majestic.jpg"
import mantra from "../Logos/mantra.png"
import orange from "../Logos/orange.jpg"
import snedai from "../Logos/snedai.png"

import aproposBg from "../images/Widevitech02.jpg";

// Brand palette used throughout: navy for the enterprise / data-capture line
// (Zebra) and orange for the rugged mobility line (Crosscall). Class names
// below are written out in full (not built from variables) because Tailwind
// only generates CSS for class strings it can literally find in the source.
//
// Navy    #0A2A4A / #071C33 (deep) / #1C5A96 (light)
// Orange  #F2801E / #C2600C (deep)
//
// Each hero theme pairs a background gradient with a CTA hover colour taken
// from the *other* brand colour, so the two families visually answer each
// other across the whole carousel instead of repeating one accent everywhere.
// NOTE: `panelBg` is currently unused — the desktop text panel is now an
// overlay with a transparent background — kept here in case that changes.
const THEMES = {
    navy: {
        panelBg: "md:bg-gradient-to-br md:from-[#071C33] md:via-[#0A2A4A] md:to-[#1C5A96]",
        hoverBtn: "hover:bg-[#F2801E] hover:text-white",
        panelText: "md:text-white",
        accent: "text-[#F2801E]",
        underline: "bg-[#F2801E]",
    },
    orange: {
        panelBg: "md:bg-gradient-to-br md:from-[#6B2E05] md:via-[#C2600C] md:to-[#F2801E]",
        hoverBtn: "hover:bg-[#0A2A4A] hover:text-white",
        panelText: "md:text-white",
        accent: "text-lime-600",
        underline: "bg-lime-600",
    },
    none: {
        panelBg: "md:bg-white",
        hoverBtn: "hover:bg-[#F2801E] hover:text-white",
        panelText: "md:text-[#F2801E]",
        accent: "text-[#F2801E]",
        underline: "bg-[#F2801E]",
    }
};

// Slide, stat and partner data pulled out of the JSX so the markup below
// stays simple and new entries can be added without touching the layout.
const slides = [
    {
        image: home,
        theme: "none",
        title: "A Propos",
        to: "#apropos",
        buttonLabel: "Découvrir Widevitech",
        hideOnDesktop: true,
        position: "mb-18"
    },
    {
        image: termmob,
        title: "Terminaux",
        stitle: "Mobiles",
        to: '/Terminaux-portables',
        theme: "navy",
    },
    {
        image: impr,
        title: "Imprimantes",
        stitle: "Zebra",
        to: '/Imprimantes',
        theme: "navy",
    },
    {
        image: scanner,
        title: "Scanners de",
        stitle: "Codes-Barres",
        to: '/Scanner',
        theme: "navy",
    },
    {
        image: rfid,
        title: "Produits",
        stitle: "RFID",
        to: '/RFID',
        theme: "navy",
    },
    {
        image: tab,
        title: "Tablettes",
        stitle: "Zebra",
        to: '/Tablettes?categorie=et4x',
        theme: "navy",
    },
    {
        image: conso,
        title: "Consommables pour",
        stitle: "impression",
        to: '/Consommables?categorie=etiquette',
        theme: "navy",
    },
    {
        image: core_p6,
        title: "CORE-P6",
        to: '/Téléphone-Crosscall/core-p6',
        theme: "orange",
        ajust: "md:object-center object-right",
        position: "mr-100"
    },
    {
        image: core_h6ex1,
        title: "CORE-H6",
        stitle: "Ex1",
        to: '/Téléphone-Crosscall/core-h6-ex1',
        theme: "orange",
        text: "Certifié ATEX",
        ajust: "md:object-cover object-right",
        position: "ml-140"
    },
    {
        image: core_h6ex2,
        title: "CORE-H6",
        stitle: "Ex2",
        to: '/Téléphone-Crosscall/core-h6-ex2',
        theme: "orange",
        text: "Certifié ATEX / IECEx",
        ajust: "md:object-cover object-right",
        position: "ml-140"
    },
    {
        image: gamme_stellar,
        title: "GAMME",
        stitle: "STELLAR",
        to: '/Téléphone-Crosscall?categorie=stellar',
        theme: "orange",
        text: "Edition Chamonix-Mont-Blanc",
    },
    {
        image: gamme_core,
        title: "GAMME",
        stitle: "CORE",
        to: '/Téléphone-Crosscall?categorie=core',
        theme: "orange",
        text: "Core M6, core z5 etc...",
    },
];

const stats = [
    { src: stat01, alt: "Imprimante RS Zebra", order: "order-2 md:order-1" },
    { src: stat02, alt: "Statut Premier Business Partner Zebra", order: "order-1 md:order-2" },
    { src: stat03, alt: "Solutions RFID Zebra", order: "order-3 md:order-3" },
    { src: stat04, alt: "Specialist CARD", order: "order-4 md:order-4" },
];

const partners = [
    { src: logo01, alt: "Zebra" },
    { src: logo02, alt: "Crosscall" },
    { src: logo03, alt: "Dell" },
    { src: logo04, alt: "Getac" },
];

// Logos clients à afficher dans le bandeau défilant "Nos clients".
// Même format que `partners` ci-dessus : ajoute tes imports en haut du
// fichier (ex: import client01 from "../images/client01.png";) puis
// référence-les ici.
const clients = [
    { src: client01, alt: "Solibra" },
    { src: nouvellepspci, alt: "Nouvelle PSP CI" },
    { src: agl, alt: "AGL" },
    { src: carrefour, alt: "Carrefour" },
    { src: cdci, alt: "CDCI" },
    { src: cnts, alt: "CNTS" },
    { src: centaure, alt: "Centaure" },
    { src: decathlon, alt: "Decathlon" },
    { src: dream, alt: "Dream cosmétics" },
    { src: fruinov, alt: "Fruinov" },
    { src: threertechnologie, alt: "3r Technologie" },
    { src: amsa, alt: "Amsa" },
    { src: azadea, alt: "Azadea" },
    { src: citerminal, alt: "Ci Terminal" },
    { src: dhl, alt: "DHL" },
    { src: eburtis, alt: "EBURTIS" },
    { src: geantcasino, alt: "GeantCasino" },
    { src: giz, alt: "GIZ" },
    { src: olam, alt: "OLAM" },
    { src: idh, alt: "IDH" },
    { src: innov, alt: "INNOV" },
    { src: majestic, alt: "Majestic One" },
    { src: mantra, alt: "Mantra" },
    { src: orange, alt: "Orange Ci" },
    { src: snedai, alt: "Snedai" },
];

// Small reusable "eyebrow" label used above section titles to keep the
// orange/navy pairing consistent site-wide.
function Eyebrow({ children, dark = false }) {
    return (
        <span
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.25em] ${
                dark ? "text-[#F2801E]" : "text-[#C2600C]"
            }`}
        >
            {children}
        </span>
    );
}

// Hero slide text block (title, underline, text, CTA). Rendered twice per
// slide: once in a dedicated colour panel next to the image on desktop,
// once in normal document flow below the image on mobile (see the
// `variant` prop, "panel" vs "mobile").
function SlideContent({ slide, theme, variant }) {
    const isPanel = variant === "panel";
    // The panel background is now fully transparent (text sits directly on
    // the photo), so the white CTA always needs its own border/shadow for
    // definition — there's no solid colour behind it anymore to lean on.
    const buttonClasses = `bg-white ${theme.hoverBtn} flex text-center w-40 h-11 md:w-52 md:h-15 font-bold items-center justify-center mt-1 md:mt-0 shrink-0 text-[#0A2A4A] p-1.5 rounded-tr-2xl rounded-bl-2xl transition-colors duration-300 hover:shadow-xl text-base md:text-xl border border-[#0A2A4A]/15 shadow-md`;
    // A hash target ("#apropos") points to a section further down this same
    // page, so it needs a plain anchor tag to get the browser's native
    // scroll-to-element behaviour. A router Link is only for real routes.
    const isHash = slide.to?.startsWith("#");
    // With no panel background left, the text needs its own halo to stay
    // legible over an arbitrary photo: a dark glow behind the white text of
    // the navy/orange themes, a light glow behind the dark navy "none" text.
    const dropShadow = theme.panelText.includes("text-white")
        ? "md:[filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.85))]"
        : "md:[filter:drop-shadow(0_2px_10px_rgba(255,255,255,0.9))]";

    return (
        <div
            className={`flex flex-col items-center text-center md:flex-row md:items-center md:justify-center md:text-start text-[#0A2A4A] ${theme.panelText} w-fit md:w-full gap-3 md:gap-8 ${
                isPanel ? dropShadow : ""
            }`}
        >
            <h1 className="md:text-[58px] scale-y-110 md:scale-y-130 flex flex-col text-2xl font-extrabold leading-none tracking-tight">
                <span>{slide.title}</span>
                {slide.stitle && (
                    <span className={`-mt-1 ${theme.accent}`}>{slide.stitle}</span>
                )}
            </h1>
            {/* Horizontal bar on mobile (under the title), vertical divider
                between items once the row switches on for desktop. */}
            <span className={`w-10 h-1 md:w-1 md:h-14 rounded-full ${theme.underline} shrink-0`} />
            {slide.text && (
                <p className="text-sm md:text-xl md:max-w-xs scale-y-105 md:scale-y-110 font-medium leading-snug">
                    {slide.text}
                </p>
            )}
            {slide.to && (
                isHash ? (
                    <a href={slide.to} className={buttonClasses}>
                        <button>{slide.buttonLabel || "Découvrir"}</button>
                    </a>
                ) : (
                    <Link to={slide.to} className={buttonClasses}>
                        <button>{slide.buttonLabel || "Découvrir"}</button>
                    </Link>
                )
            )}
        </div>
    );
}

export default function Home() {
    return (
        <>
            <section className="md:min-h-screen md:pt-0 pt-15">
                <Swiper
                    modules={[Autoplay, Pagination, Keyboard]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    loop={true}
                    aria-label="Secteurs d'activité Zebra"
                >
                    {slides.map((slide) => {
                        const theme = THEMES[slide.theme];
                        return (
                            <SwiperSlide key={slide.title + (slide.stitle || "")}>
                                {/* Desktop: full-height image, text/CTA panel overlaid on top
                                    of it, pinned to the bottom, background fully transparent. */}
                                <div className="relative md:h-screen">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className={`relative md:mt-0 -mt-10 w-full h-75 md:h-full object-cover ${slide.ajust}`}
                                        loading="eager"
                                    />
                                    {/* Desktop: text/CTA row overlaid at the bottom of the photo */}
                                    <div className={`${slide.position} hidden md:flex md:absolute md:inset-x-0 md:bottom-0 items-center justify-center bg-transparent px-14 pb-14 pt-10`}>
                                        <SlideContent slide={slide} theme={theme} variant="panel" />
                                    </div>
                                    {/* Mobile: text below the image, in normal flow */}
                                    <div className="flex md:hidden flex-col items-center bg-white px-6 py-8">
                                        <SlideContent slide={slide} theme={theme} variant="mobile" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>

            <section className="flex flex-col min-h-130 p-6 text-center items-center justify-center bg-gradient-to-br from-[#071C33] via-[#0A2A4A] to-[#124272] text-white gap-10">
                <div className="flex flex-col items-center gap-3">
                    <Eyebrow dark>Certification</Eyebrow>
                    <h1 className="md:text-3xl text-xl font-extrabold uppercase tracking-tight">
                        Notre Statut ZEBRA
                    </h1>
                    <span className="w-16 h-1 rounded-full bg-[#F2801E]" />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
                    {stats.map((stat) => (
                        <div
                            key={stat.alt}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-[#F2801E]/60 ${stat.order || ""}`}
                        >
                            <img
                                src={stat.src}
                                alt={stat.alt}
                                loading="lazy"
                                className="w-60 max-w-full rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section id="apropos" className="relative flex flex-col min-h-100 p-6 md:px-20 items-center justify-center text-black gap-8 overflow-hidden">
                <img
                    src={aproposBg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-[#0A2A4A]/40" />

                <div className="relative z-10 flex flex-col items-center gap-3">
                    <Eyebrow dark>Qui sommes-nous</Eyebrow>
                    <h1 className="md:text-3xl text-xl font-extrabold uppercase text-white tracking-tight text-center">
                        À propos de WIDEVITECH
                    </h1>
                    <span className="w-16 h-1 rounded-full bg-[#F2801E]" />
                </div>

                <div className="relative z-10 flex flex-col gap-10 max-w-5xl w-full">
                    <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-10 flex flex-col gap-4 text-left md:text-lg leading-relaxed border-t-4 border-[#0A2A4A]">
                        <h1 className="text-[#0A2A4A] font-bold md:text-4xl text-2xl">Bienvenue chez Widevitech</h1>
                        <p>
                            À l'ère de l'hyper-connectivité et de l'optimisation opérationnelle,
                            Widevitech accompagne les entreprises dans la transformation de leurs
                            processus métiers. En tant que partenaire de confiance et distributeur
                            des solutions Zebra et Crosscall, nous mettons à votre disposition des technologies
                            de pointe conçues pour connecter vos équipes, vos actifs et vos données
                            en temps réel.
                        </p>
                        <p>
                            De la gestion de la chaîne d'approvisionnement (Supply Chain) à l'inventaire
                            en magasin, en passant par le secteur de la santé, de l'industrie et de la
                            logistique, nous vous apportons un écosystème complet de solutions durables
                            et performantes :
                        </p>
                        <p>
                            <li className="">
                                Lecteurs de codes-barres & Scanners industriels : Capturez vos données
                                avec une précision inégalée, même dans les environnements les plus exigeants.
                            </li>
                            <li className="">
                                Terminal mobiles & Tablettes durcies : Donnez à vos collaborateurs sur
                                le terrain les outils d'une mobilité intelligente et sécurisée.
                            </li>
                            <li className="">
                                Imprimantes thermiques & Identification RFID : Assurez une traçabilité totale
                                et une gestion fluide de vos flux de marchandises.
                            </li>
                            <li className="">
                                Consommables certifiés Zebra : Maximisez la durée de vie de vos équipements grâce
                                à des fournitures d'origine garanties.
                            </li>

                        </p>
                    </div>

                    <div className="bg-[#0A2A4A] shadow-xl rounded-2xl p-6 md:p-10 border-l-4 border-[#F2801E] text-left text-white">
                        <p className="uppercase text-sm tracking-widest text-[#F2801E] font-bold mb-3">
                            Mot du directeur
                        </p>
                        <p className="md:text-lg italic leading-relaxed">
                            « Chez WIDEVITECH, chaque solution que nous déployons vise un seul
                            objectif : faire gagner nos clients en fiabilité, en productivité
                            et en performance. »
                        </p>
                        <p className="mt-4 font-bold">Serge Bruno Waounwa</p>
                        <p className="text-sm text-white/70">Directeur Général, WIDEVITECH</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col min-h-fit py-10 text-center items-center justify-center bg-white text-black gap-10 overflow-hidden">
                <div className="flex flex-col items-center gap-3 px-6">
                    <h1 className="md:text-3xl text-xl font-extrabold uppercase tracking-tight text-[#0A2A4A]">
                        Nos clients
                    </h1>
                    <span className="w-16 h-1 rounded-full bg-[#F2801E]" />
                </div>

                {/* Bandeau défilant de droite à gauche. Le tableau `clients` est
                    dupliqué une fois pour obtenir une boucle continue et sans
                    saut : dès que la 1re copie sort de l'écran à gauche, la 2e
                    (identique) prend le relais pile au même endroit. */}
                <div className="relative w-full">
                    {/* Fondus latéraux pour adoucir l'entrée/sortie des logos */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="clients-marquee flex w-max">
                        {[...clients, ...clients].map((client, i) => (
                            <div
                                key={client.alt + i}
                                className="mx-3 md:mx-5 shrink-0 w-40 md:w-48 bg-white rounded-2xl p-4 shadow-sm border border-black/5 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-[#F2801E]/50 hover:-translate-y-1"
                            >
                                <img
                                    src={client.src}
                                    alt={client.alt}
                                    loading="lazy"
                                    className="w-full max-w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animation du défilement + pause au survol. En <style> ici (et
                    non en config Tailwind) pour rester autonome dans ce fichier :
                    aucune modification de tailwind.config à prévoir ailleurs. */}
                <style>{`
                    @keyframes clients-marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .clients-marquee {
                        animation: clients-marquee 28s linear infinite;
                    }
                    .clients-marquee:hover {
                        animation-play-state: paused;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .clients-marquee {
                            animation: none;
                        }
                    }
                `}</style>
            </section>

            <section className="flex flex-col min-h-80 p-6 text-center items-center justify-center bg-[#F5F7FA] text-black gap-10">
                <div className="flex flex-col items-center gap-3">
                    <Eyebrow>Ils nous font confiance</Eyebrow>
                    <h1 className="md:text-3xl text-xl font-extrabold uppercase tracking-tight text-[#0A2A4A]">
                        Nos partenaires
                    </h1>
                    <span className="w-16 h-1 rounded-full bg-[#F2801E]" />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                    {partners.map((partner) => (
                        <div
                            key={partner.alt}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-[#F2801E]/50 hover:-translate-y-1"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                loading="lazy"
                                className="w-40 max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}