import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom"

import stat01 from "../images/PrinterRS.png";
import stat02 from "../images/PremierBP.png";
import stat03 from "../images/RFIDS.png";
import logo01 from "../images/zebra.png";
import logo02 from "../images/crosscall.png";
import logo03 from "../images/Dell-logo.png";
import logo04 from "../images/getac.png";

import bgPompier from "../images/servicepubbg.jpg";
import bgSante from "../images/sante-bg.jpg";
import bgConstruction from "../images/techmobilebg.jpg";

import termmob from "../images/termmob.png"
import impr from "../images/impr.png"
import scanner from "../images/scanner.png"
import rfid from "../images/rfid.png"
import conso from "../images/conso.png"
import tab from "../images/tab.png"
import core_p6 from "../images/CORE-P6.png"
import core_h6ex1 from "../images/CORE-H6-Ex1.png"
import core_h6ex2 from "../images/CORE-H6-Ex2.png"
import gamme_stellar from "../images/gammestellar.png"
import gamme_core from "../images/gammecore.jpg"

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
const THEMES = {
    navy: {
        gradient: "md:from-[#071C33]/95 md:via-[#0A2A4A]/90 md:to-[#1C5A96]/75",
        hoverBtn: "hover:bg-[#F2801E] hover:text-white",
    },
    orange: {
        gradient: "md:from-[#6B2E05]/95 md:via-[#C2600C]/90 md:to-[#F2801E]/78",
        hoverBtn: "hover:bg-[#0A2A4A] hover:text-white",
    },
};

// Slide, stat and partner data pulled out of the JSX so the markup below
// stays simple and new entries can be added without touching the layout.
const slides = [
    {
        image: termmob,
        title: "Terminaux Mobiles",
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
        title: "Scanners de Codes-Barres",
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
        image: conso,
        title: "Consommables pour",
        stitle: "l’impression",
        to: '/Consommables?categorie=etiquette',
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
        image: core_p6,
        title: "CORE-P6",
        to: '/Téléphone-Crosscall/CORE-P6.png',
        theme: "orange",
        ajust: "md:object-cover object-right",
    },
    {
        image: core_h6ex1,
        title: "CORE-H6",
        stitle: "Ex1",
        to: '/Téléphone-Crosscall/core-h6-ex1',
        theme: "orange",
        text: "Certifié ATEX Zone 1/21",
    },
    {
        image: core_h6ex2,
        title: "CORE-H6",
        stitle: "Ex2",
        to: '/Téléphone-Crosscall/core-h6-ex2',
        theme: "orange",
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
    { src: stat01, alt: "Imprimante RS Zebra" },
    { src: stat02, alt: "Statut Premier Business Partner Zebra" },
    { src: stat03, alt: "Solutions RFID Zebra" },
];

const partners = [
    { src: logo01, alt: "Zebra" },
    { src: logo02, alt: "Crosscall" },
    { src: logo03, alt: "Dell" },
    { src: logo04, alt: "Getac" },
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
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`relative md:mt-0 -mt-10 w-full h-75 md:h-screen object-cover ${slide.ajust}`}
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-10 md:items-start md:justify-center md:text-start md:pt-0 md:mt-25 md:mx-10 text-white">
                                    <div
                                        className={`flex flex-col items-center text-center md:items-start md:text-start md:bg-gradient-to-t ${theme.gradient} w-fit md:w-140 px-6 md:p-10 gap-3 md:gap-6 md:rounded-2xl md:shadow-2xl md:shadow-black/40`}
                                    >
                                        <h1 className="md:text-[58px] scale-y-110 md:scale-y-130 flex flex-col text-2xl font-extrabold leading-none tracking-tight">
                                            <span>{slide.title}</span>
                                            {slide.stitle && (
                                                <span className="-mt-1 text-[#F2801E]">{slide.stitle}</span>
                                            )}
                                        </h1>
                                        <span className="w-10 md:w-14 h-1 rounded-full bg-[#F2801E]" />
                                        {slide.text && (
                                            <p className="text-sm md:text-xl scale-y-105 md:scale-y-110 font-medium leading-snug">
                                                {slide.text}
                                            </p>
                                        )}
                                        <Link
                                            to={`${slide.to}`}
                                            className={`bg-white ${theme.hoverBtn} flex text-center w-40 h-11 md:w-52 md:h-15 font-bold items-center justify-center mt-1 md:mt-auto text-[#0A2A4A] p-1.5 rounded-tr-2xl rounded-bl-2xl transition-colors duration-300 hover:shadow-xl text-base md:text-xl`}
                                        >
                                            <button>
                                                Découvrir
                                            </button>
                                        </Link>
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
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                    {stats.map((stat) => (
                        <div
                            key={stat.alt}
                            className="bg-white/5 border border-white/10 rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-[#F2801E]/60"
                        >
                            <img
                                src={stat.src}
                                alt={stat.alt}
                                loading="lazy"
                                className="w-80 max-w-full rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative flex flex-col min-h-100 p-6 md:px-20 items-center justify-center text-black gap-8 overflow-hidden">
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
                        <p>
                            Notre entreprise WIDEVITECH est spécialisée dans la distribution
                            de solutions technologiques innovantes, de matériel
                            d'identification et de traçabilité ainsi que d'intégration de
                            solutions informatiques et de télécommunications.
                        </p>
                        <p>
                            Notre service après-vente apporte une très grande valeur ajoutée à
                            notre activité. Nous sommes fiers d'être les représentants
                            exclusifs de grandes marques leaders du marché telles que{" "}
                            <span className="font-bold text-[#0A2A4A]">
                                ZEBRA, CROSSCALL, GETAC, KASPERSKY, 6 GRAIN, GEOTHENTIC,
                                KAYMERA, HP et DELL
                            </span>
                            .
                        </p>
                        <p>
                            Nous fournissons des solutions complètes pour les entreprises qui
                            cherchent à améliorer leurs processus de gestion des données.
                            Notre objectif est d'offrir à nos clients des produits et des
                            services de qualité supérieure pour améliorer la traçabilité, la
                            productivité, la rentabilité, les aider à réussir et à atteindre
                            leurs objectifs.
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