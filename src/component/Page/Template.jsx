import digitalThumbnail from "../../assets/Image/digitalThumbnail.png";
import giftcardThumbnaill from "../../assets/Image/giftcardThumbnaill.png";
import logoThumbnail from "../../assets/Image/logoThumbnail.png";
import webThumbnail from "../../assets/Image/webThumbnail.png";
import banner from "../../assets/Image/banner.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import contactVideo from "../../assets/Video/contactVideo.mp4"
import { SlideLogoTop } from "../General/SlideLogo";


const Templates = () => {

    const services = [
        {
            title: "LOGO",
            image: logoThumbnail, // Thay thế bằng đường dẫn hình ảnh thực tế
        },
        {
            title: "WEBSITE",
            image: webThumbnail,
        },
        {
            title: "DIGITAL SIGNAGE",
            image: digitalThumbnail,
        },
        {
            title: "GIFT CARD",
            image: giftcardThumbnaill,
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="w-full px-5 pb-10 bg-white">
            <img src={banner} className="w-full rounded-2xl shadow-2xl mb-20" data-aos="fade-up" />
            <div className="flex flex-wrap justify-center items-center gap-16 " data-aos="fade-up">
                {services.map((service, index) => (
                    <div key={index} className="text-center relative w-64 cursor-pointer">
                        <div className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-72 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                            />
                            <h3 className="mt-6 text-lg font-semibold uppercase text-gray-800 tracking-wide border-t-2 border-pink-500 pt-4">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-10 " data-aos="fade-up">
                <video
                    // controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className=" w-full h-full object-cover rounded-2xl"
                >
                    <source src={contactVideo} type="video/mp4" />
                </video>
            </div>
            <div className='flex flex-col gap-2 mt-10 rounded-2xl shadow-xl ' data-aos="fade-up">
                <SlideLogoTop />
            </div>
        </div>
    )

}

export default Templates;