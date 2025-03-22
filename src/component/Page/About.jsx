import bgAbout from "../../assets/Image/bgAbout.png";
import map from '../../assets/Image/map.png';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    const [tiem, setTiem] = useState(0);
    const [support, setSupport] = useState(0);
    const [vnUsPh, setVnUsPh] = useState(0);

    const values = [
        {
            title: "Đổi Mới",
            description:
                "Zota liên tục tìm kiếm và áp dụng các ý tưởng và công nghệ mới nhất trong ngành để cung cấp các giải pháp sáng tạo và hiệu quả cho các chủ tiệm nails.",
            icon: "\uD83D\uDD04",
        },
        {
            title: "Trung Thực",
            description:
                "Zota cam kết đem đến sự trung thực và minh bạch trong mọi hoạt động và dịch vụ của mình, đảm bảo sự tin cậy và niềm tin từ phía khách hàng.",
            icon: "\uD83D\uDCAB",
        },
        {
            title: "Cộng Đồng",
            description:
                "Zota đối với việc tạo ra một cộng đồng mạnh mẽ và hỗ trợ cho các chủ tiệm nails, thông qua việc chia sẻ kiến thức, kinh nghiệm và tạo ra môi trường cộng tác tích cực.",
            icon: "\uD83C\uDF10",
        },
        {
            title: "Xuất Sắc",
            description:
                "Zota luôn hướng đến mục tiêu đạt được sự xuất sắc trong mọi dịch vụ và sản phẩm, từ việc đáp ứng nhu cầu của khách hàng đến việc cải thiện và phát triển sản phẩm của mình.",
            icon: "\uD83C\uDFC6",
        },
    ];

    const startAnimation = () => {
        let tiemStart = 0, supportStart = 0, vnUsPhStart = 0;
        const tiemTarget = 4000, supportTarget = 100, vnUsPhTarget = 3;
        const duration = 2000;
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setTiem(Math.floor(progress * tiemTarget));
            setSupport(Math.floor(progress * supportTarget));
            setVnUsPh(Math.floor(progress * vnUsPhTarget));
            if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        startAnimation();
        const interval = setInterval(startAnimation, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="w-full px-5 pb-10 bg-white">
            <div className="relative w-full min-h-screen overflow-hidden rounded-2xl shadow-2xl p-4" data-aos="fade-up">
                {/* Background Image */}
                <img src={bgAbout} alt="bgAbout" className="absolute inset-0 w-full h-full object-cover blur-sm" />

                {/* Nội dung */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {/* Tiêu đề */}
                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold">
                        Welcome to <span className="text-pink-400">ZOTA</span>
                    </h1>
                    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mt-2">
                        Đổi mới, sáng tạo và cung cấp giải pháp cho chủ doanh nghiệp
                    </p>

                    {/* Video */}
                    <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mt-6">
                        <div className="relative w-full aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/CZU7wEqLvSc?si=E9GPthQ6XdkkXBSO&autoplay=1&mute=1&loop=1&playlist=CZU7wEqLvSc&controls=0&vq=hd1080"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="rounded-2xl w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-32 md:flex-row items-center justify-center px-6 md:px-12 py-8 bg-white min-h-screen" data-aos="fade-up">
                <div className="w-96 h-96 md:w-96 md:h-96 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg
                        className="w-60 h-60 md:w-60 md:h-60 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                    </svg>
                </div>
                <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left max-w-lg flex flex-col gap-4">
                    <h2 className="text-6xl font-bold text-gray-900">
                        Our <span className="text-pink-500">Story</span>
                    </h2>
                    <p className="text-pink-500 mt-2 font-semibold text-lg">
                        Hãy cùng khám phá một chuyến hành trình ngắn của Zota:
                    </p>
                    <p className="text-gray-700 mt-4 leading-relaxed font-medium text-lg">
                        Từ một kinh nghiệm làm việc tại một tiệm nails nhỏ, Our CEO đã thấy
                        được những khó khăn mà các chủ tiệm nails phải đối mặt. Với lòng quyết
                        tâm và đam mê với công nghệ, anh đã thành lập Zota - một hệ sinh thái
                        công nghệ đầu tiên dành riêng cho ngành nails...
                    </p>

                    <div className='flex gap-8 mt-2'>
                        <div className=' bg-pink-400 px-8 py-2 rounded-2xl flex items-center text-base font-sans font-extrabold hover:bg-blue-900 cursor-pointer'>
                            Get Started
                        </div>
                        <div className="border-2 border-pink-400 bg-white text-black px-8 py-2 rounded-2xl flex items-center text-base font-sans font-extrabold hover:bg-pink-400 hover:text-white cursor-pointer">
                            Check Pricing
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-purple-900 to-pink-500 py-12 px-6 text-white text-center rounded-2xl" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center gap-2">
                            <div className="text-pink-500 text-4xl  mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold text-pink-600 mb-2">{value.title}</h3>
                            <p className="text-gray-700 font-medium">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-20 px-5' data-aos="fade-up">
                <div className=' flex gap-3 font-serif font-bold text-6xl text-blue-900'>
                    Thành Tựu của
                    <p className='text-pink-500'>
                        ZOTA
                    </p>
                </div>
                <p className="text-2xl text-gray-900 py-10 px-30">
                    Trong <span className="font-bold text-pink-500">hơn 10 năm</span> hoạt động,{" "}
                    <span className="font-bold text-pink-500">ZOTA (POS system for nail salons)</span> đã phát triển mạnh mẽ và có mặt tại hơn{" "}
                    <span className="text-pink-500 font-bold">4.000 tiệm</span>{" "}
                    <span className="text-pink-500">(hair salon - restaurant - nail salon)</span> trên 50 tiểu bang trên khắp nước Mỹ.
                </p>
                <img src={map} />
                <div className="flex justify-center items-center py-14 px-40 gap-52 bg-pink-400 text-white rounded-2xl shadow-lg">
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{tiem}+</div>
                        <div className="text-2xl">Tiệm</div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{support}+</div>
                        <div className="text-2xl">Support</div>
                    </div>
                    <div className="flex-2 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{vnUsPh}</div>
                        <div className="text-2xl">VN, US, PH</div>
                    </div>
                </div>
            </div>
            <div className="w-full " data-aos="fade-up">
                <iframe
                    width="1400"
                    height="788"
                    src="https://www.youtube.com/embed/IzUlkEN7QYw?si=HUvHtYLxfnIByo3Q&autoplay=1&mute=1&loop=1&playlist=IzUlkEN7QYw&controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-2xl shadow-2xl"
                />

            </div>

        </div >
    )
}

export default About;