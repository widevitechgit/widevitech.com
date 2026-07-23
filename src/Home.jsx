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
import gamme_stellar from "../images/GAMME_STELLAR.png"
import gamme_core from "../images/GAMME_CORE.png"

import aproposBg from "../images/Widevitech02.jpg";

// Slide, stat and partner data pulled out of the JSX so the markup below
// stays simple and new entries can be added without touching the layout.
const slides = [
    {
        image: termmob,
        title: "Terminaux Mobiles",
        to: '/Terminaux-portables',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Transformez les performances de terrain en un avantage concurrentiel. Les terminaux mobiles Zebra connectent en temps réel personnes, appareils et données, permettant ainsi des décisions plus rapides, des flux de travail plus intelligents et de meilleurs résultats opérationnels, afin de permettre à vos équipes de donner le meilleur d’elles-mêmes, et cela dans n’importe quel environnement.",
    },
    {
        image: impr,
        title: "Imprimantes",
        to: '/Imprimantes',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Améliorez l’efficacité sur le terrain avec les imprimantes durables Zebra, faciles à configurer, à gérer et à sécuriser. S’appuyant sur plus de 50 ans d’expertise, les imprimantes et moteurs d’impression mobiles, de bureau, industriels, de cartes et RFID de Zebra offrent des performances fiables maximisant autant la productivité que la disponibilité.",
    },
    {
        image: scanner,
        title: "Scanners de Codes-Barres",
        to: '/Scanner',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Les scanners Zebra aident les équipes de terrain à travailler avec plus de précision, de visibilité et d’être plus productives. Soutenus par le logiciel Zebra DNA®, ils simplifient les workflows, fonctionnent de manière fiable dans des environnements difficiles et permettent des opérations sans heurts dans toute votre entreprise.",
    },
    {
        image: rfid,
        title: "Produits RFID",
        to: '/RFID',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Zebra RFID automatise la capture de données, réduit les erreurs et fournit des informations en temps opportun sur l’ensemble de vos opérations, permettant ainsi une prise de décision plus intelligente et plus rapide. Assurez le suivi des moments clés pour les actifs, les stocks, le personnel et plus encore afin d’améliorer l’efficacité et d’atteindre le plein potentiel de votre entreprise.",
    },
    {
        image: conso,
        title: "Consommables pour l’impression",
        to: '/Consommables?categorie=etiquette',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Améliorez les performances et la qualité d’impression avec les consommables certifiés Zebra, conçus et testés pour fonctionner de manière transparente avec les imprimantes Zebra. S’appuyant sur plus de 50 ans d’expertise, nos consommables réduisent le nombre de réimpressions, réduisent les temps d’arrêt et garantissent des résultats fiables garantissant le bon déroulement des opérations.",
    },
    {
        image: tab,
        title: "Tablettes",
        to: '/Tablettes?categorie=et4x',
        gradient: "from-gray-700/90 via-gray-500/90 to-gray-300/90 shadow-xl/30",
        text: "Les tablettes durcies Zebra sont conçues pour s’adapter aux flux de travail spécifiques des équipes de terrain. Grâce à une connectivité solide, des options de configuration flexibles, une sécurité et un support fiables, elles contribuent à accroître la productivité et à fluidifier les opérations, permettant ainsi aux équipes de fonctionner au mieux de leurs performances.",
    },
    {
        image: core_p6,
        title: "CORE-P6",
        to: '/Téléphone-Crosscall/core-p6',
        /*no: "hidden",
        none: "none",*/
        gradient: "from-lime-700/90 via-lime-500/90 to-lime-300/90 shadow-xl/30",
        text: "Conçu pour aider les équipes à communiquer clairement, à agir plus rapidement et à rester opérationnelles sur le terrain, le CORE-P6 allie l'ergonomie d'une radio, des performances adaptées à la large bande et une technologie vocale de pointe dans un appareil de nouvelle génération dédié aux missions critiques.",
    },
    {
        image: core_h6ex1,
        title: "CORE-H6 Ex1",
        /*none: "none",*/
        to: '/Téléphone-Crosscall/core-h6-ex1',
        gradient: "from-lime-700/90 via-lime-500/90 to-lime-300/90 shadow-xl/30",
        /*no: "hidden",*/
        text: "Conçu pour aider les équipes à communiquer clairement, à agir plus rapidement et à rester opérationnelles sur le terrain, le CORE-P6 allie l'ergonomie d'une radio, des performances adaptées à la large bande et une technologie vocale de pointe dans un appareil de nouvelle génération dédié aux missions critiques.",
    },
    {
        image: core_h6ex2,
        title: "CORE-H6 Ex2",
        /*no: "hidden",
        none: "none",*/
        to: '/Téléphone-Crosscall/core-h6-ex2',
        gradient: "from-lime-700/90 via-lime-500/90 to-lime-300/90 shadow-xl/30",
        text: "Protégez vos équipes et maintenez leur productivité, même dans les environnements les plus extrêmes. Sa structure renforcée, étanche et résistante à la poussière, son fonctionnement en températures extrêmes, sa batterie amovible et sécurisée, ainsi que sa certification ATEX / IECEx Zone 2/22 en font un outil fiable et durable sur le terrain.",
    },
    {
        image: gamme_stellar,
        title: "GAMME STELLAR",
        to: '/Téléphone-Crosscall?categorie=stellar',
        gradient: "from-lime-700/90 via-lime-500/90 to-lime-300/90 shadow-xl/30",
        text: "Protégez vos équipes et maintenez leur productivité, même dans les environnements les plus extrêmes. Sa structure renforcée, étanche et résistante à la poussière, son fonctionnement en températures extrêmes, sa batterie amovible et sécurisée, ainsi que sa certification ATEX / IECEx Zone 2/22 en font un outil fiable et durable sur le terrain.",
    },
    {
        image: gamme_core,
        title: "GAMME CORE",
        to: '/Téléphone-Crosscall?categorie=core',
        gradient: "from-lime-700/90 via-lime-500/90 to-lime-300/90 shadow-xl/30",
        text: "Protégez vos équipes et maintenez leur productivité, même dans les environnements les plus extrêmes. Sa structure renforcée, étanche et résistante à la poussière, son fonctionnement en températures extrêmes, sa batterie amovible et sécurisée, ainsi que sa certification ATEX / IECEx Zone 2/22 en font un outil fiable et durable sur le terrain.",
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
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.title}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="relative md:mt-0 -mt-10 w-full h-75 md:h-screen object-cover scale-65"
                                loading="eager"
                            />
                            <div className="md:absolute md:inset-0 bg-black/25"></div>
                            <div className="flex flex-col text-start items-start md:mt-25 justify-center md:mx-10 text-white md:absolute md:inset-0">
                                <div
                                    className={`flex flex-col md:bg-none bg-gradient-to-t ${slide.gradient} md:w-140 md:p-10 p-8 gap-6 md:rounded-2xl`}
                                >
                                    <h1 className={`md:text-4xl text-3xl font-bold md:${slide.no}`}>
                                        {slide.title}
                                    </h1>
                                    <hr className={`border-2 ${slide.no}`} />
                                    <p className={`md:${slide.no}`}>{slide.text}</p>
                                    <Link to={`${slide.to}`}  className="bg-white flex text-center items-center justify-center mt-auto text-black p-1.5 rounded-xl hover:shadow-xl text-xl">
                                        <button>
                                            Découvrir
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="flex flex-col min-h-130 p-6 text-center items-center justify-center bg-black text-white gap-10">
                <h1 className="md:text-3xl text-xl font-semibold uppercase">
                    Notre Statut ZEBRA
                </h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                    {stats.map((stat) => (
                        <div key={stat.alt}>
                            <img
                                src={stat.src}
                                alt={stat.alt}
                                loading="lazy"
                                className="w-80 rounded-2xl"
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
                <div className="absolute inset-0 bg-white/35" />

                <h1 className="relative z-10 md:text-3xl text-xl font-semibold uppercase">
                    À propos de WIDEVITECH
                </h1>

                <div className="relative z-10 flex flex-col gap-10 max-w-5xl w-full">
                    <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-10 flex flex-col gap-4 text-left md:text-lg leading-relaxed">
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
                            <span className="font-semibold">
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

                    <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-10 border-l-4 border-blue-700 text-left">
                        <p className="uppercase text-sm tracking-widest text-blue-700 font-semibold mb-3">
                            Mot du directeur
                        </p>
                        <p className="md:text-lg italic leading-relaxed">
                            « Chez WIDEVITECH, chaque solution que nous déployons vise un seul
                            objectif : faire gagner nos clients en fiabilité, en productivité
                            et en performance. »
                        </p>
                        <p className="mt-4 font-semibold">Serge Bruno Waounwa</p>
                        <p className="text-sm text-gray-600">Directeur Général, WIDEVITECH</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col min-h-80 p-6 text-center items-center justify-center bg-white text-black gap-10">
                <h1 className="md:text-3xl text-xl font-semibold uppercase">
                    Nos partenaires
                </h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                    {partners.map((partner) => (
                        <div key={partner.alt}>
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                loading="lazy"
                                className="w-40 rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
