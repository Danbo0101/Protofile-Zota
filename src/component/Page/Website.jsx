import { motion } from "framer-motion";
import TiltedCard from "../General/TiltedCard";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import website1 from "../../assets/Image/website1.png";
import website2 from "../../assets/Image/website2.png";
import website3 from "../../assets/Image/website3.png";
import website4 from "../../assets/Image/website4.png";
import website5 from "../../assets/Image/website5.png";

const pinkTheme = createTheme({
    palette: {
        primary: {
            main: "#ec4899",
        },
    },
});

const Website = () => {

    const [page, setPage] = useState(1);
    const cardsPerPage = 6;

    const cardData = [
        { id: 1, image: website1, link: "https://danbo.zotapossystem.com/template-1" },
        { id: 2, image: website2, link: "https://danbo.zotapossystem.com/template-2" },
        { id: 3, image: website3, link: "https://danbo.zotapossystem.com/template-3" },
        { id: 4, image: website4, link: "https://danbo.zotapossystem.com/template-4" },
        { id: 5, image: website5, link: "https://danbo.zotapossystem.com/template-5" },
        // { id: 6, image: website1, link: "https://example.com/nail6" },
        // { id: 7, image: website1, link: "https://example.com/nail7" },
        // { id: 8, image: website1, link: "https://example.com/nail8" },
        // { id: 9, image: website1, link: "https://example.com/nail9" },
        // { id: 10, image: website1, link: "https://example.com/nail10" },
        // { id: 11, image: website1, link: "https://example.com/nail11" },
        // { id: 12, image: website1, link: "https://example.com/nail12" },
    ];

    const pageCount = Math.ceil(cardData.length / cardsPerPage);
    const startIndex = (page - 1) * cardsPerPage;
    const currentCards = cardData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <ThemeProvider theme={pinkTheme}>
            <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 text-gray-800 font-['Playfair Display',serif]">
                <div className="px-4 md:px-20 py-10">
                    <div className="text-center py-16 md:py-20 font-playfair px-4">
                        <motion.h2
                            className="text-4xl md:text-6xl font-extrabold mb-4 text-pink-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            Thiết kế website cho tiệm Nail chuyên nghiệp
                        </motion.h2>
                        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-gray-700 italic">
                            Website đẹp như bộ nail xinh – Đặt tiệm bạn lên bản đồ số
                        </p>
                    </div>

                    <section className="py-12 md:py-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-center text-pink-600 mb-10 md:mb-12">Mẫu giao diện website tiệm Nail</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-32 gap-y-12 md:gap-y-16">
                            {currentCards.map((item) => (
                                <div key={item.id} className="flex flex-col items-center px-4">
                                    <TiltedCard
                                        imageSrc={item.image}
                                        captionText={`Website Nail mẫu ${item.id}`}
                                        containerHeight="320px"
                                        imageHeight="250px"
                                        imageWidth="100%"
                                        scaleOnHover={1.08}
                                        rotateAmplitude={10}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        overlayContent={
                                            <div className="text-white text-sm bg-pink-500 bg-opacity-70 px-3 py-1 rounded-md shadow-md">
                                                Website Nail mẫu {item.id}
                                            </div>
                                        }
                                    />
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button className="mt-4 bg-pink-500 text-white hover:bg-pink-600 px-5 py-2 rounded-full shadow-md transition duration-300">
                                            Xem chi tiết
                                        </button>
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 md:mt-24 flex justify-center">
                            <Stack spacing={2}>
                                <Pagination
                                    count={pageCount}
                                    page={page}
                                    onChange={(_, value) => setPage(value)}
                                    color="primary"
                                />
                            </Stack>
                        </div>
                    </section>
                </div>
            </div>
        </ThemeProvider>

    );
}

export default Website;
