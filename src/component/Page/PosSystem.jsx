import { SlideLogoTop } from "../General/SlideLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bgPosSystem from "../../assets/Image/bgPosSystem.png";
import PosSystem21 from "../../assets/Image/PosSystem21.png";
import PosSystem1 from "../../assets/Image/PosSystem1.png";
import posBanner from "../../assets/Image/posBanner.jpg";
import posTurn from "../../assets/Image/posTurn.png";
import posPayroll from "../../assets/Image/posPayroll.png";
import posAppointment from "../../assets/Image/posAppointment.png";
import posCheckIn from "../../assets/Image/posCheckIn.png";
import posSign from "../../assets/Image/posSign.png";
import zomoApp from "../../assets/Image/zomoApp.png";

const PosSystem = () => {


    const videos = [
        "https://www.youtube.com/embed/4MB1HI3PzQU?si=fMQEcaEti9rxDFxW",
        "https://www.youtube.com/embed/uLxfe7IMLy8?si=yHWzT-IL3GUoYkLQ",
        "https://www.youtube.com/embed/MfXKWxgrDrA?si=ZzrxyRkh_fu7zB5J",
    ];

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="relative w-full px-5 pb-20 bg-white ">
            <div data-aos="fade-up">
                <img
                    src={bgPosSystem}
                    alt="Background"
                    className="w-full h-[180vh] object-cover rounded-2xl "
                />
                <div className="absolute top-15 inset-0 bg-transparent">
                    <div className='flex w-full flex-col items-center'>
                        <div className='w-full flex flex-col justify-center items-center gap-5 ml-3 text-white'>
                            <div className='text-base font-serif font-stretch-90% '>
                                SALON SOFTWARE
                            </div>
                            <div className='text-5xl font-sans font-bold'>
                                Phần mềm tốt nhất cho salon hiện nay
                            </div>
                            <div className='flex gap-8 mt-20'>
                                <div className=' bg-pink-400 px-8 py-2 rounded-2xl flex items-center text-base font-sans font-extrabold hover:bg-blue-900 cursor-pointer'>
                                    Get Started
                                </div>
                                <div className="border-2 border-pink-400 bg-white text-black px-8 py-2 rounded-2xl flex items-center text-base font-sans font-extrabold hover:bg-pink-400 hover:text-white cursor-pointer">
                                    Check Pricing
                                </div>
                            </div>
                        </div>
                        <img src={PosSystem21} className="" />
                    </div>

                </div>
            </div>
            <div className='mt-10 rounded-2xl shadow-xl ' data-aos="fade-up">
                <SlideLogoTop />
            </div>
            <img src={posBanner} className=" w-full py-24" data-aos="fade-up" />
            <div className="flex gap-16 justify-center py-10" data-aos="fade-left">
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Màn Hình <p className="text-pink-400"> POS 21" </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Khi làm việc trên màn hình lớn và sắc nét, các thông tin và ứng dụng cần thiết sẽ được sắp xếp và hiển thị rõ ràng cùng một lúc, giúp bạn thao tác dễ dàng, linh hoạt hơn. Ngoài ra, màn hình lớn còn giúp bạn rút ngắn được nhiều công đoạn khi cần chỉnh sửa hoặc bổ sung cho hóa đơn.
                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>
                <img src={PosSystem1} className="w-[600px]" />
            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-right">
                <img src={posTurn} className="w-[600px]" />
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Chia Turn <p className="text-pink-400"> Tự Động </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        ZOTA hiểu rõ việc chia turn công bằng là một trong những mối quan tâm hàng đầu của mỗi người chủ, nên đã phát triển tính năng chia turn tự động. Ưu điểm của tính năng này là khả năng lập trình cụ thể, có thể đáp ứng theo cách thức sinh hoạt riêng biệt của mỗi tiệm nails.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>

            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-left">
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Tính Lương <p className="text-pink-400"> Tự Động </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Để quý khách bớt đi một mối lo lắng, ZOTA đã tối ưu hoá phần mềm tính lương tự động, giúp tính toán chính xác mọi cách tính lương từ cơ bản đến phức tạp (theo ngày, giờ, tháng, hay theo sản phẩm), và in báo cáo chỉ với một thao tác đơn giản trên màn hình POS.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>
                <img src={posPayroll} className="w-[600px]" />
            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-right">
                <img src={posAppointment} className="w-[600px]" />
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Đặt Hẹn  <p className="text-pink-400"> Online/Offline </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Hệ thống đặt hẹn online của ZOTA hoạt động và cập nhật 24/7, giúp khách hàng đặt hẹn mọi lúc mọi nơi dễ dàng. Chi tiết mỗi cuộc hẹn sẽ tự động cập nhật về máy POS và hiển thị theo trình tự nên bạn không cần phải sắp xếp qua điện thoại, đồng thời giảm thiểu tình trạng trùng lịch hẹn. Ngoài ra, tính năng đặt hẹn onine của chúng tôi còn có thể sáp nhập dữ liệu, giúp thu hút thêm khách hàng tiềm năng.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>

            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-left">
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Smart <p className="text-pink-400"> Check-in </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Smart Check-in là một giải pháp toàn diện giúp thu thập thông tin Khách hàng một cách thông minh và hiệu quả. Bên cạnh việc có các tiện ích như Mini game và Chương trình khách hàng thân thiết, Smart Check-in còn giúp duy trì và cập nhật liên lạc thông tin của Khách hàng một cách liên tục.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>
                <img src={posCheckIn} className="w-[600px]" />
            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-right">
                <img src={posSign} className="w-[600px]" />
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        Signature <p className="text-pink-400"> Pad </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Cho phép khách dùng chữ ký điện tử khi thanh toán bằng thẻ tín dụng, giảm thiểu việc sử dụng giấy, giúp chủ không những tiết kiệm tiền, thời gian mà còn bảo vệ môi trường. Ngoài ra, bảng chữ ký điện tử còn khuyến khích khách cho tips mà không cần thu ngân phải mở lời.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>

            </div>
            <div className="flex gap-16 justify-center py-10" data-aos="fade-left">
                <div className="flex flex-col w-[600px] justify-center gap-20">
                    <div className="text-blue-800 flex gap-2 text-5xl font-medium">
                        ZOMO <p className="text-pink-400"> App </p>
                    </div>
                    <div className="text-black text-lg font-normal">
                        Những khi chủ tiệm không có mặt, ZOMO chính là giải pháp! Chỉ cần cài đặt ứng dụng ZOMO trên điện thoại, người chủ có thể dễ dàng truy cập tất cả doanh thu, bảng lương, và những giao dịch chuyển khoản mọi lúc mọi nơi. Đồng thời, ZOMO còn có tính năng tính toán tự động những khoản hoa hồng và tiền tips của thợ một cách chính xác nhất.                    </div>
                    <div type="button" class="text-white w-1/2 font-sans font-extrabold bg-gradient-to-br from-blue-500 to-pink-600 hover:bg-gradient-to-bl hover:text-pink-200 focus:ring-4 focus:outline-none rounded-lg text-lg py-2.5 text-center me-2 mb-2 cursor-pointer">
                        Get Started
                    </div>

                </div>
                <img src={zomoApp} className="w-[600px]" />
            </div>
            <div className="bg-pink-500 py-10 px-5 text-center flex flex-col gap-10 rounded-2xl shadow-xl" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-white">
                    Video <span className="text-blue-900">Demo</span>
                </h2>
                <div className="mt-6 flex flex-wrap justify-center gap-16">
                    {videos.map((video, index) => (
                        <div key={index} className="w-full md:w-[350px]">
                            <iframe
                                className="w-full h-60 rounded-lg shadow-lg"
                                src={video}
                                title={`Video ${index + 1}`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <div
                        className='w-1/4 bg-pink-400 px-8 py-2 rounded-2xl flex items-center justify-center text-lg font-sans font-extrabold hover:bg-blue-900 cursor-pointer'
                        onClick={() => window.open("https://www.youtube.com/watch?v=uJwPOEd5jig&list=PLgnIChgUz5W45d40doAPWRm_oynNYhEoY", "_blank")}
                    >
                        Xem nhiều hơn
                    </div>
                </div>

            </div>

        </div>
    );
}

export default PosSystem;