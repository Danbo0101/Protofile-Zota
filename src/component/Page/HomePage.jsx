import bgHideVideo from '../../assets/Video/bgHide.mp4';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import appMobile from '../../assets/Image/appMobile.jpg';
import mkt from '../../assets/Image/mkt.jpg';
import signPad from '../../assets/Image/signPad.jpg';
import map from '../../assets/Image/map.png';
import salonInBox from '../../assets/Image/salonInBox1.png';
import zotaPC21 from '../../assets/Image/zotaPC21.jpg';
import checkInTablet from '../../assets/Image/checkInTablet.jpg';
import signatureTablet from '../../assets/Image/signatureTablet.jpg';
import paxA920 from '../../assets/Image/paxA920.jpg';
import printer from '../../assets/Image/printer.jpg';
import paxA35 from '../../assets/Image/paxA35.jpg';
import cashDrawer from '../../assets/Image/cashDrawer.jpg';
import router from '../../assets/Image/router.jpg';
import ecoSystem from '../../assets/Image/ecoSystem.png';
import cashDiscount from '../../assets/Image/cashDiscount.png';
import { SlideLogoBottom, SlideLogoTop } from '../General/SlideLogo';
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    const [tiem, setTiem] = useState(0);
    const [support, setSupport] = useState(0);
    const [vnUsPh, setVnUsPh] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRefs = useRef([]);

    const cards = [
        {
            title: "App Mobile",
            description:
                "Khi chủ tiệm vắng mặt, ZOMO là giải pháp quản lý, theo dõi linh hoạt trên điện thoại.",
            image: appMobile,

        },
        {
            title: "Elite Marketing",
            description:
                "Đẩy mạnh hơn nữa Marketing ( SEO, Website, Facebook, Google, App Map, Yelp......)",
            image: mkt,

        },
        {
            title: "Signature Pad",
            description:
                "Cho phép khách dùng chữ ký điện tử và lưu trữ. Ngoài ra khuyến khích khách cho tips.",
            image: signPad,

        },
    ];

    const sections = [
        { title: "Zota PC", content: { img: zotaPC21, description: "Màn hình 21' và sắc nét giúp tối ưu hóa thao tác và giảm bớt công đoạn chỉnh sửa." } },
        { title: "Check-in", content: { img: checkInTablet, description: "Thu thập thông tin từ khách hàng, giúp hiểu rõ doanh nghiệp và xu hướng thị trường." } },
        { title: "Signature Pad", content: { img: signatureTablet, description: "Kích thích khách để lại tips và lưu trữ reciept." } },
        { title: "Mobile POS", content: { img: paxA920, description: "Linh hoạt, nhanh chóng và tiện lợi. Di chuyển tự do trong tiệm mọi lúc, mọi nơi." } },
        { title: "Epson Printer", content: { img: printer, description: "In hóa đơn rõ ràng, chi tiết với thông tin về dịch vụ, người thợ, thời gian và discount." } },
        { title: "Pax A35", content: { img: paxA35, description: "Giúp khách thanh toán nhanh chóng và dễ dàng, liên kết hoàn hảo với hệ thống POS." } },
        { title: "Cash Drawer", content: { img: cashDrawer, description: "Lưu trữ, quản lý, và thanh toán dễ dàng tiền cash." } },
        { title: "Mikrotik Router", content: { img: router, description: "Giúp ổn định hệ thống POS." } },
    ];

    const handleClick = (index) => {
        setCurrentIndex(index);
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

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
        <div className="w-full px-5 bg-white">
            <div className="relative w-full min-h-[1000px] md:min-h-[900px] lg:min-h-[800px]  overflow-hidden rounded-2xl shadow-2xl">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute left-0 w-full h-full object-cover"
                >
                    <source src={bgHideVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center px-6 text-center">
                    <div className="w-full max-w-8xl flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
                        <div className="w-full lg:w-1/3 flex flex-col lg:items-start justify-center gap-5">
                            <h2 className="text-pink-400 text-4xl md:text-5xl lg:text-6xl font-serif">
                                Vượt Trội Hơn
                            </h2>
                            <h2 className="text-blue-900 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold">
                                Mỗi Ngày
                            </h2>
                            <div className='block sm:hidden'>
                                <iframe
                                    className="rounded-2xl w-full aspect-video"
                                    src="https://player.vimeo.com/video/916024376?autoplay=1&controls=0&loop=1&autopause=0&playsinline=1&muted=1"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="flex justify-center gap-4 sm:gap-8 mt-4">
                                <button className="bg-pink-400 px-6 sm:px-8 py-2 rounded-2xl text-lg font-sans font-extrabold hover:bg-blue-900 cursor-pointer">
                                    Get Started
                                </button>
                                <button className="border-2 border-pink-400 bg-white text-black px-6 sm:px-8 py-2 rounded-2xl text-lg font-sans font-extrabold hover:bg-pink-400 hover:text-white cursor-pointer">
                                    Check Pricing
                                </button>
                            </div>
                        </div>
                        <div className="w-full hidden sm:block md:max-w-4xl lg:max-w-4xl">
                            <iframe
                                className="rounded-2xl w-full aspect-video"
                                src="https://player.vimeo.com/video/916024376?autoplay=1&controls=0&loop=1&autopause=0&playsinline=1&muted=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 py-10">
                        {[
                            { title: "Quản Lý Thông Minh", desc: "Tối ưu quy trình, đơn giản hóa công việc hàng ngày." },
                            { title: "Tiết Kiệm Tối Ưu", desc: "Giảm chi phí vận hành, tăng hiệu suất kinh doanh." },
                            { title: "Kết Quả Xuất Sắc", desc: "Đạt hiệu suất cao nhất với hệ thống tối ưu." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                                <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-10 rounded-2xl shadow-xl ' data-aos="fade-up">
                <SlideLogoTop />
                <SlideLogoBottom />
            </div>
            <div className="grid md:grid-cols-3 gap-10 p-10 mt-10" data-aos="fade-up">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 cursor-pointer group"
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <h3
                            className="mt-4 text-xl font-semibold text-pink-500 transition-colors duration-300 group-hover:text-blue-700 "
                        >
                            {card.title} →
                        </h3>
                        <p className="mt-2 text-gray-600">{card.description}</p>
                    </div>
                ))}
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
                <img src={salonInBox} className='mt-30 rounded-2xl shadow-xl' />
            </div>
            <div className="flex flex-col items-center justify-center py-10 md:py-20" data-aos="fade-up">
                <div className="relative w-full overflow-x-auto no-scrollbar">
                    <div className="flex space-x-10 md:space-x-52 mx-auto px-5 md:px-10">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className={`text-3xl md:text-5xl font-bold transition duration-300 whitespace-nowrap cursor-pointer ${index === currentIndex ? "text-pink-500" : "text-pink-200"
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                {section.title}
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="bg-pink-50 p-6 md:p-8 rounded-lg shadow-lg w-11/12 mt-6 flex flex-col md:flex-row justify-center items-center"
                >
                    <img
                        src={sections[currentIndex].content.img}
                        alt={sections[currentIndex].title}
                        className="w-full md:w-1/3 rounded-lg"
                    />
                    <p className="mt-4 md:mt-10 md:ml-10 text-lg md:text-xl font-semibold text-gray-600 text-center md:text-left">
                        {sections[currentIndex].content.description}
                    </p>
                </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center py-10 md:py-20 px-5" data-aos="fade-up">
                <div className="flex gap-2 md:gap-3 font-serif font-bold text-4xl md:text-6xl text-blue-900 text-center">
                    <p className="text-pink-500">ZOTA</p>
                    <span>eco-system</span>
                </div>
                <p className="text-lg md:text-2xl text-gray-900 text-center mt-6 md:mt-10">
                    Tối ưu hoạt động với hệ sinh thái Zota: thông minh, đầy đủ, ổn định cho tiệm
                    <span className="text-pink-500 font-medium block">
                        NAIL SALON - HAIR SALON - BEAUTY SPA <span className="block md:inline">của người Việt.</span>
                    </span>
                </p>
                <img src={ecoSystem} alt="ZOTA Eco-System" className="w-full max-w-[400px] md:max-w-none mt-6 md:mt-10" />
            </div>
            <div className="flex flex-col md:flex-row items-center p-6 md:p-10 mt-6 md:mt-10 rounded-2xl shadow-lg bg-pink-400 text-white" data-aos="fade-up">
                <div className="flex flex-col justify-center gap-3 md:gap-5 text-center md:text-left">
                    <h3 className="mt-2 md:mt-4 text-4xl md:text-6xl font-semibold transition-colors duration-300">
                        CASH DISCOUNT PROGRAM
                    </h3>
                    <p className="mt-1 md:mt-2 text-2xl md:text-4xl font-thin italic">
                        0% CREDIT CARD PROCESSING
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-10">
                        <div className="bg-white text-pink-400 px-6 md:px-8 py-3 md:py-4 rounded-2xl flex items-center justify-center text-lg md:text-xl font-sans font-extrabold hover:bg-blue-900 cursor-pointer">
                            Get Started
                        </div>
                        <div className="text-white bg-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-2xl flex items-center justify-center text-lg md:text-xl font-sans font-extrabold hover:bg-pink-400 border-2 border-blue-900 cursor-pointer">
                            Check Pricing
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg p-10 md:p-20 w-full max-w-[400px] md:max-w-none">
                    <img
                        src={cashDiscount}
                        alt="Cash Discount Program"
                        className="w-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full items-center gap-5 md:gap-20 px-5 md:px-10 py-10 md:py-20" data-aos="fade-up">
                <div className="flex flex-col gap-5 md:gap-10 justify-center text-center md:text-left">
                    <div className="flex justify-center md:justify-start text-blue-900 text-4xl md:text-6xl font-serif font-normal">
                        <p className="text-pink-400 font-semibold">ZOMO</p> Mobile App
                    </div>
                    <div className="text-black text-base md:text-xl font-light">
                        Những khi chủ tiệm không có mặt, ZOMO chính là giải pháp! Chỉ cần cài đặt ứng dụng ZOMO trên điện thoại, người chủ có thể dễ dàng truy cập tất cả doanh thu, bảng lương, và những giao dịch chuyển khoản mọi lúc mọi nơi. Đồng thời, ZOMO còn có tính năng tính toán tự động những khoản hoa hồng và tiền tips của thợ một cách chính xác nhất.
                    </div>
                </div>
                <div className="w-full">
                    <iframe
                        className="w-full h-auto lg:w-[700px] lg:h-[394px] aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/930-ohw-qnc?controls=0&modestbranding=1&showinfo=0&rel=0&autoplay=1&mute=1"
                        title="[ZOMO App Tutorials] Giới Thiệu Các Tính Năng Cơ Bản Trên ZOMO"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

        </div>




    )
}

export default HomePage;