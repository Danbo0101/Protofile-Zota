import bgAbout from "../../assets/Image/bgAbout.png";
import map from '../../assets/Image/map.png';
import { useEffect, useState, useRef } from "react";
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
            <div className="relative w-full min-h-[600px] lg:min-h-[100vh] overflow-hidden rounded-2xl shadow-2xl p-4" data-aos="fade-up">
                <img src={bgAbout} alt="bgAbout" className="absolute inset-0 w-full h-full object-cover blur-sm" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center  px-4 gap-5">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-bold mt-1 sm:mt-2 md:mt-4 lg:mt-6">
                        Welcome to <span className="text-pink-400">ZOTA</span>
                    </h1>
                    <p className="text-white text-lg  md:text-xl lg:text-2xl font-medium mt-2">
                        Đổi mới, sáng tạo và cung cấp giải pháp cho chủ doanh nghiệp
                    </p>

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
            <div className="flex flex-col gap-24 md:gap-32 md:flex-row items-center justify-center px-6 md:px-12 py-8 bg-white min-h-screen" data-aos="fade-up">
                <div className="hidden md:flex  md:w-96 md:h-96 bg-pink-500 rounded-full  items-center justify-center">
                    <svg
                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                    </svg>
                </div>
                <div className="mt-4 sm:mt-6 md:mt-0 md:ml-12 text-center md:text-left max-w-lg flex flex-col items-center gap-3 sm:gap-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                        Our <span className="text-pink-500">Story</span>
                    </h2>
                    <div className="sm:block md:hidden flex w-64 h-64 bg-pink-500 rounded-full items-center justify-center">
                        <svg
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                        </svg>
                    </div>
                    <p className="text-pink-500 mt-2 sm:mt-3 font-semibold text-lg">
                        Hãy cùng khám phá một chuyến hành trình ngắn của Zota:
                    </p>
                    <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed font-medium text-lg">
                        Từ một kinh nghiệm làm việc tại một tiệm nails nhỏ, Our CEO đã thấy
                        được những khó khăn mà các chủ tiệm nails phải đối mặt. Với lòng quyết
                        tâm và đam mê với công nghệ, anh đã thành lập Zota - một hệ sinh thái
                        công nghệ đầu tiên dành riêng cho ngành nails...
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-6">
                        <a
                            href="tel:+14048064448"
                            className="w-full sm:w-auto bg-pink-400 px-8 py-3 rounded-2xl text-base font-extrabold text-white shadow-md hover:bg-blue-900 transition-all duration-300">
                            Get Started
                        </a>
                        <a
                            href="tel:+14048064448"
                            className="w-full sm:w-auto border-2 border-pink-400 bg-white text-black px-8 py-3 rounded-2xl text-base font-extrabold hover:bg-pink-400 hover:text-white transition-all duration-300">
                            Check Pricing
                        </a>
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
                <div className=' flex flex-col items-center lg:flex-row gap-3 font-serif font-bold text-5xl lg:text-6xl text-blue-900'>
                    <span className="whitespace-nowrap">Thành Tựu của</span>
                    <p className="text-pink-500">ZOTA</p>
                </div>
                <p className="text-2xl text-gray-900 py-10 text-center lg:px-30">
                    Trong <span className="font-bold text-pink-500">hơn 10 năm</span> hoạt động,{" "}
                    <span className="font-bold text-pink-500">ZOTA (POS system for nail salons)</span> đã phát triển mạnh mẽ và có mặt tại hơn{" "}
                    <span className="text-pink-500 font-bold">4.000 tiệm</span>{" "}
                    <span className="text-pink-500">(hair salon - restaurant - nail salon)</span> trên 50 tiểu bang trên khắp nước Mỹ.
                </p>
                <img src={map} />
                <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-16 lg:py-14 lg:px-40 gap-16 lg:gap-52 bg-pink-400 text-white rounded-2xl shadow-lg">
                    <div className="flex-1 text-center">
                        <div className="text-4xl lg:text-5xl font-bold min-w-[100px]">{tiem}+</div>
                        <div className="text-xl lg:text-2xl">Tiệm</div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="text-4xl lg:text-5xl font-bold min-w-[100px]">{support}+</div>
                        <div className="text-xl lg:text-2xl">Support</div>
                    </div>
                    <div className="flex-2 text-center">
                        <div className="text-4xl lg:text-5xl font-bold min-w-[100px]">{vnUsPh}</div>
                        <div className="text-xl lg:text-2xl">VN, US, PH</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center" data-aos="fade-up">
                <div className="relative w-full max-w-8xl aspect-video rounded-2xl shadow-2xl overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/IzUlkEN7QYw?si=HUvHtYLxfnIByo3Q&autoplay=1&mute=1&loop=1&playlist=IzUlkEN7QYw&controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    />
                </div>
            </div>
        </div >
    )
}

export default About;