import nail1 from '../../assets/Image/nail1.jpg';
import nail2 from '../../assets/Image/nail2.jpg';
import nail3 from '../../assets/Image/nail3.jpg';
import nail4 from '../../assets/Image/nail4.jpg';
import nail5 from '../../assets/Image/nail5.jpg';
import nail6 from '../../assets/Image/nail6.jpg';
import nail7 from '../../assets/Image/nail7.jpg';
import nail8 from '../../assets/Image/nail8.jpg';
import nail9 from '../../assets/Image/nail9.jpg';
import nail10 from '../../assets/Image/nail10.jpg';
import nail11 from '../../assets/Image/nail11.jpg';
import nail12 from '../../assets/Image/nail12.jpg';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SlideLogoTop = () => {
    const images = [nail1, nail2, nail3, nail4, nail5, nail6, nail7, nail8, nail9, nail10, nail11, nail12];
    const controlsTop = useAnimation();

    useEffect(() => {
        const moveSlider = async () => {
            await controlsTop.start({
                x: ["0%", "-60%", "0%"],
                transition: { ease: "linear", duration: 15, repeat: Infinity },
            });
        };
        moveSlider();
    }, [controlsTop]);

    return (
        <div className="max-w-[100%]  overflow-hidden rounded-t-2xl">
            <motion.div className="flex " animate={controlsTop}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-[300px] h-[200px] object-cover "
                    />
                ))}
            </motion.div>
        </div>
    )

}

const SlideLogoBottom = () => {
    const images = [nail1, nail2, nail3, nail4, nail5, nail6, nail7, nail8, nail9, nail10, nail11, nail12];
    const controlsBottom = useAnimation();

    useEffect(() => {
        const moveSlider = async () => {
            await controlsBottom.start({
                x: ["-60%", "0%", "-60%"],
                transition: { ease: "linear", duration: 15, repeat: Infinity },
            });
        };
        moveSlider();
    }, [controlsBottom]);

    return (
        <div className="max-w-[100%] overflow-hidden rounded-b-2xl ">
            <motion.div className="flex " animate={controlsBottom}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-[300px] h-[200px] object-cover "
                    />
                ))}
            </motion.div>
        </div>
    )

}

export { SlideLogoTop, SlideLogoBottom }