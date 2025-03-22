import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import merchantSer1 from "../../assets/Image/merchantSer1.jpg";
import merchantSer2 from "../../assets/Image/merchantSer2.jpg";
import merchantSer3 from "../../assets/Image/merchantSer3.jpg";
import merchantSer4 from "../../assets/Image/merchantSer4.jpg";
import merchantSer5 from "../../assets/Image/merchantSer5.png";
import merchantSer6 from "../../assets/Image/merchantSer6.png";
import merchantSer7 from "../../assets/Image/merchantSer7.png";
import merchantSer8 from "../../assets/Image/merchantSer8.png";
import merchantA920 from "../../assets/Image/merchantA920.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlideLogoTop } from "../General/SlideLogo";



const MerchantService = () => {

    const images = [
        { src: merchantSer1, text: "Interchange" },
        { src: merchantSer2, text: "Surcharge" },
        { src: merchantSer3, text: "Flat rate" },
        { src: merchantSer4, text: "Cash Discount" }
    ];

    const [index, setIndex] = useState(0);

    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsZoomed((prev) => !prev);
        }, 2000); // Đổi trạng thái mỗi 2 giây

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // 1.5s để có hiệu ứng mượt hơn

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="w-full px-5 pb-10 bg-white">
            <div className="relative w-full min-h-screen flex flex-col items-center" data-aos="fade-up">
                <div className="relative top-32 px-5 md:px-20 flex flex-col md:flex-row gap-10 md:gap-40">
                    <div className="w-full md:w-2/5 flex flex-col justify-center gap-5">
                        <div className="text-pink-400 text-4xl md:text-6xl font-serif font-semibold">
                            Tiết kiệm cùng với <span className="text-blue-900">Zota</span>
                        </div>
                        <div className="flex gap-4 md:gap-8 mt-5">
                            <div className="bg-pink-400 px-6 py-2 md:px-8 md:py-3 rounded-2xl text-sm md:text-base font-extrabold hover:bg-blue-900 cursor-pointer">
                                Get Started
                            </div>
                            <div className="border-2 border-pink-400 px-6 py-2 md:px-8 md:py-3 bg-white text-black rounded-2xl text-sm md:text-base font-extrabold hover:bg-pink-400 hover:text-white cursor-pointer">
                                Check Pricing
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-20 items-center">
                        <motion.img
                            src={merchantA920}
                            alt="Zoomable"
                            className="w-[250px] md:w-[500px] h-auto"
                            initial={{ scale: 1 }}
                            animate={{ scale: isZoomed ? 2 : 1 }}
                            transition={{ duration: 10, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                <div className="relative w-full mt-10 md:mt-30">
                    {images.map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute left-1/2 transform -translate-x-1/2 w-[150px] md:w-[200px] flex flex-col items-center z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: i === index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                src={item.src}
                                className="w-full"
                            />
                            <motion.p className="mt-2 text-sm md:text-xl text-pink-400 font-semibold font-serif text-center">
                                {item.text}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2 mt-10 rounded-2xl shadow-xl ' data-aos="fade-up">
                <SlideLogoTop />
            </div>
            <div className=" flex flex-col justify-center items-center mt-32 gap-10" data-aos="fade-up">
                <div className="text-pink-400 text-6xl  font-bold flex gap-3 ">
                    Những Loại <spam className="text-blue-900 ">Rate</spam> Phổ Biến Hiện Nay
                </div>
                <img src={merchantSer5} className="w-11/12 rounded-2xl " />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center py-40 bg-white" data-aos="fade-right">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={merchantSer6}
                            alt="POS Terminal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:mt-0 md:pl-12 ">
                    <h2 className="text-pink-500 text-5xl font-bold">CASH DISCOUNT</h2>
                    <div className="flex items-center mt-4">
                        <span className="text-8xl font-extrabold text-blue-900">0</span>
                        <span className="text-4xl font-bold text-pink-500">%</span>
                        <div className="ml-3">
                            <span className="block text-2xl font-bold text-blue-900">Credit Card</span>
                            <span className="block text-2xl font-bold text-blue-900">Processing</span>
                        </div>
                    </div>
                    <p className="text-pink-500 text-xl font-semibold mt-2">Thu 100% doanh số xử lý của bạn</p>
                    <ul className="mt-4 text-gray-700 text-lg space-y-2">
                        <li>✔ Không Phí Giao Dịch | Không Phí Ẩn!</li>
                        <li>✔ 100% hợp pháp. Có sẵn tại tất cả 50 tiểu bang</li>
                        <li>✔ Loại bỏ hoàn toàn các khoản phí xử lý</li>
                        <li>✔ Nhận tiền vào ngày tiếp theo</li>
                        <li>✔ Không Cần Thanh Toán Trước</li>
                    </ul>
                    <div className="w-1/3">
                        <div className=" text-center mt-6 px-8 py-3 bg-blue-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-400 hover:text-white cursor-pointer transition duration-300">
                            Tìm Hiểu Thêm
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-pink-100 flex items-center justify-center p-10 rounded-2xl shadow-xl" data-aos="fade-left">
                <div className="max-w-5xl flex  md:flex-row items-center gap-60">
                    <div className="text-left w-2/3 flex flex-col gap-2">
                        <h2 className="text-pink-500 text-5xl font-bold ">FLAT RATE</h2>
                        <h3 className="flex text-2xl font-bold font-serif text-blue-900 mt-2 items-end ">
                            <div className="flex flex-col">
                                <span className="font-extrabold text-4xl">TAKE</span> <span className="font-extrabold text-4xl">CARE</span>
                            </div>
                            <span className="text-pink-500 font-extrabold">%</span> Dễ Dàng
                        </h3>
                        <p className="text-pink-500 mt-2 text-xl font-semibold">Không Care Về Loại Thẻ</p>
                        <ul className=" mt-4 text-gray-700 space-y-1 text-lg">
                            <li>✔ Không Monthly Fee</li>
                            <li>✔ Dễ Dàng Kiểm Tra Hàng Tháng</li>
                            <li>✔ Nhận tiền vào ngày tiếp theo</li>
                            <li>✔ Không Fee Ẩn</li>
                        </ul>
                        <div className="w-full">
                            <div className=" text-center mt-6 px-8 py-3 bg-blue-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-400 hover:text-white cursor-pointer transition duration-300">
                                Tìm Hiểu Thêm
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
                            <img
                                src={merchantSer7}
                                alt="POS Terminal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center py-40 bg-white" data-aos="fade-right">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={merchantSer8}
                            alt="POS Terminal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:mt-0 md:pl-12 ">
                    <h2 className="text-pink-500 text-5xl font-bold">INTERCHANGE FEE</h2>
                    <div className="flex items-end mt-4">
                        <div className="flex flex-col text-blue-900 font-serif font-extrabold">
                            <span className=" text-4xl">Low</span> <span className=" text-4xl">Processing</span>
                        </div>
                        <span className="text-5xl font-bold text-pink-500">%</span>
                    </div>
                    <p className="text-pink-500 text-xl font-semibold mt-2">Thu 100% doanh số xử lý của bạn</p>
                    <ul className="mt-4 text-gray-700 text-lg space-y-2">
                        <li>✔ Không Phí Giao Dịch | Không Phí Ẩn!</li>
                        <li>✔ 100% hợp pháp. Có sẵn tại tất cả 50 tiểu bang</li>
                        <li>✔ Loại bỏ hoàn toàn các khoản phí xử lý</li>
                        <li>✔ Nhận tiền vào ngày tiếp theo</li>
                        <li>✔ Không Cần Thanh Toán Trước</li>
                    </ul>
                    <div className="w-1/3">
                        <div className=" text-center mt-6 px-8 py-3 bg-blue-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-400 hover:text-white cursor-pointer transition duration-300">
                            Tìm Hiểu Thêm
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-pink-100 flex items-center justify-center p-10 rounded-2xl shadow-xl" data-aos="fade-left">
                <div className="max-w-5xl flex  md:flex-row items-center gap-60">
                    <div className="text-left w-2/3 flex flex-col gap-5">
                        <h2 className="text-pink-500 text-5xl font-bold ">SURCHARGE</h2>
                        <div className="text-black text-lg font-medium">
                            <span className="text-blue-800 font-extrabold">Surcharge</span> là khoản phí khách hàng phải trả khi họ thanh toán bằng thẻ credit card, để bù đắp cho chi phí xử lý thẻ tín dụng của tiệm. Khi khách hàng sử dụng thẻ debit card, thì chi phí xử lý thẻ tín dụng thường được chủ tiệm chịu, không phải khách hàng.
                        </div>
                        <div className="w-1/2">
                            <div className=" text-center mt-6 px-8 py-3 bg-blue-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-400 hover:text-white cursor-pointer transition duration-300">
                                Tìm Hiểu Thêm
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
                            <img
                                src={merchantSer7}
                                alt="POS Terminal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MerchantService;