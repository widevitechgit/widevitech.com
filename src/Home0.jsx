import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import stat01 from "../images/PrinterRS.png"
import stat02 from "../images/PremierBP.png"
import stat03 from "../images/RFIDS.png"
import logo01 from "../images/zebra.png"
import logo02 from "../images/crosscall.png"
import logo03 from "../images/Dell-logo.png"
import logo04 from "../images/getac.png"

export default function Home() {

    return(
        <>
        <section className="min-h-screen md:pt-0 pt-15">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <img src="../images/servicepubbg.jpg" alt="" />
                    <div className="flex flex-col text-start items-start justify-center md:mx-10 text-white md:absolute md:inset-0">
                        <div className="flex flex-col bg-gradient-to-t from-red-900/80 md:w-140 via-red-700/80 to-red-500/80 md:p-10 p-8 gap-6 md:rounded-2xl">
                            <h1 className="md:text-4xl text-3xl font-bold ">Zebra pour les Pompier</h1>
                            <hr className="border-2" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
                                accusantium beatae, sed sunt, laudantium illum reprehenderit excepturi, 
                                dolorum quia omnis officia aliquam deleniti numquam neque at in nesciunt 
                                dicta repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Harum doloribus fugiat, rem quasi cum dicta. Omnis molestias officia odio 
                                labore, sunt, facilis velit dolore delectus qui nulla quidem doloremque culpa.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/sante-bg.jpg" alt="" />
                    <div className="flex flex-col text-start items-start justify-center md:mx-10 text-white md:absolute md:inset-0">
                        <div className="flex flex-col bg-gradient-to-t from-blue-900/80 md:w-140 via-blue-700/80 to-blue-500/80 md:p-10 p-8 gap-6 md:rounded-2xl">
                            <h1 className="md:text-4xl text-3xl font-bold ">Zebra pour les Hopitaux</h1>
                            <hr className="border-2" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
                                accusantium beatae, sed sunt, laudantium illum reprehenderit excepturi, 
                                dolorum quia omnis officia aliquam deleniti numquam neque at in nesciunt 
                                dicta repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Harum doloribus fugiat, rem quasi cum dicta. Omnis molestias officia odio 
                                labore, sunt, facilis velit dolore delectus qui nulla quidem doloremque culpa.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../images/techmobilebg.jpg" alt="" />
                    <div className="flex flex-col text-start items-start justify-center md:mx-10 text-white md:absolute md:inset-0">
                        <div className="flex flex-col bg-gradient-to-t from-orange-900/80 md:w-140 via-orange-700/80 to-orange-500/80 md:p-10 p-8 gap-6 md:rounded-2xl">
                            <h1 className="md:text-4xl text-3xl font-bold ">Zebra pour la Construction</h1>
                            <hr className="border-2" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
                                accusantium beatae, sed sunt, laudantium illum reprehenderit excepturi, 
                                dolorum quia omnis officia aliquam deleniti numquam neque at in nesciunt 
                                dicta repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Harum doloribus fugiat, rem quasi cum dicta. Omnis molestias officia odio 
                                labore, sunt, facilis velit dolore delectus qui nulla quidem doloremque culpa.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>


        <section className="flex flex-col min-h-130 p-6 text-center items-center justify-center bg-black text-white gap-10">
            <h1 className="md:text-3xl text-xl font-semibold uppercase">Notre Statut ZEBRA</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                <div>
                    <img src={stat01} className="w-80 rounded-2xl" alt="" />
                </div>
                <div>
                    <img src={stat02} className="w-80 rounded-2xl" alt="" />
                </div>
                <div>
                    <img src={stat03} className="w-80 rounded-2xl" alt="" />
                </div>
            </div>
        </section>


        <section className="flex flex-col min-h-80 p-6 text-center items-center justify-center bg-white text-black gap-10">
            <h1 className="md:text-3xl text-xl font-semibold uppercase">Nos partenaires</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                <div>
                    <img src={logo01} className="w-40 rounded-2xl" alt="" />
                </div>
                <div>
                    <img src={logo02} className="w-40 rounded-2xl" alt="" />
                </div>
                <div>
                    <img src={logo03} className="w-40 rounded-2xl" alt="" />
                </div>
                <div>
                    <img src={logo04} className="w-40 rounded-2xl" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}