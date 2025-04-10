import { TextField, Button, Box } from "@mui/material";
import contact from "../../assets/Image/contact.png";
import SendIcon from '@mui/icons-material/Send';
import logo from '../../assets/Image/logoHomePage.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { toast } from "react-toastify";

const Footer = () => {

    const handleSubmit = (e) => {
        sendEmail(e)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                toast.success('Gửi thành công, chúng tôi sẽ liên hệ với bạn sớm nhất có thể. Xin cám ơn bạn!');
                e.target.reset();
            })
            .catch((error) => {
                console.log('FAILED...', error.text);
                toast.error('Gửi thất bại, vui lòng thử lại sau.');
            });
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <div className="flex flex-col w-full bg-white">
            <div className="w-full flex flex-col lg:flex-row px-5 lg:px-10 gap-10 lg:gap-20 justify-center">
                <img src={contact} className="w-full lg:w-2xl rounded-3xl" />
                <div className="w-full lg:w-1/3 flex flex-col items-center justify-center bg-white px-5 lg:px-0" data-aos="fade-up">
                    <div className="text-center text-2xl lg:text-3xl text-pink-600 font-bold">
                        Liên Hệ Với Chúng Tôi <br /> Tư Vấn Miễn Phí!
                    </div>
                    <form onSubmit={handleSubmit} className="w-full">

                        <input type="hidden" name="time" id="time" />

                        <div className="mt-6 flex flex-col gap-5 w-full">
                            <TextField
                                fullWidth
                                label="Name*"
                                placeholder="Your name"
                                name="user_name"
                                variant="filled"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Your phone number*"
                                placeholder="Your phone number"
                                name="phone_number"
                                variant="filled"
                                type="tel"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Your email*"
                                placeholder="Your email address"
                                name="user_email"
                                type="email"
                                variant="filled"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Message*"
                                placeholder="Enter your message"
                                name="message"
                                multiline
                                rows={4}
                                variant="filled"
                                required
                            />
                            <Box className="flex justify-center">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className="bg-pink-400 hover:bg-blue-900 text-white w-full py-4 rounded-full"
                                    type="submit"
                                    endIcon={<SendIcon />}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-black flex flex-col mt-32 lg:mt-0 lg:flex-row p-5 lg:p-10 gap-10">
                <div className="w-full lg:w-1/4 flex flex-col items-center justify-center gap-5 lg:gap-10">
                    <img src={logo} alt="ZOTA" className='w-32 lg:w-52' />
                    <div className="text-center text-sm lg:text-base">
                        Zota là một công ty có kinh nghiệm trên 15 năm hoạt động rộng rãi trong nhiều lĩnh vực...
                    </div>
                    <div className='flex gap-3'>
                        <IconButton onClick={() => window.open("https://www.facebook.com/thonguyenzota", "_blank")}>
                            <FacebookOutlinedIcon className="text-blue-700" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.instagram.com/zota_tho_nguyen", "_blank")}>
                            <InstagramIcon className="text-pink-500" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.facebook.com/ZotaByThoNguyenDPS/", "_blank")}>
                            <FacebookIcon className="text-blue-600" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon className="text-red-600" sx={{ fontSize: 30 }} />
                        </IconButton>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col gap-5">
                    <div className="text-center font-bold text-lg text-pink-400 mt-5 lg:mt-8">Contact Us</div>
                    <div><strong>Address:</strong> 4131 Marlton Pike, Pennsauken, NJ 08109</div>
                    <div><strong>Phone:</strong> (404) 806-4448</div>
                    <div><strong>Website:</strong> zotapossystem.com</div>
                    <div><strong>Email:</strong> nguyenhuutho029@gmail.com</div>
                </div>
                <div className="w-full lg:w-1/8 flex flex-col items-center lg:items-start gap-3">
                    <div className="text-center font-bold text-lg text-pink-400 mt-5 lg:mt-8">Services</div>
                    <a
                        href="/pos-system"
                        className="italic underline hover:text-pink-500"
                    >
                        Pos system
                    </a>
                    <a
                        href="/merchant-service"
                        className="italic underline hover:text-pink-500"
                    >Credit card processing</a>
                    <a className="italic">Marketing</a>
                    <a
                        href="/website"
                        className="italic underline hover:text-pink-500"
                    >
                        Website</a>
                    <a
                        href="/templates"
                        className="italic underline hover:text-pink-500"
                    >
                        Gift card</a>
                    <a
                        href="/templates"
                        className="italic underline hover:text-pink-500"
                    >Digital</a>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col gap-5">
                    <div className="text-center font-bold text-lg text-pink-400 mt-5 lg:mt-8">Location</div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1913250055527!2d-75.0763019236801!3d39.93710987152087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c91e907f6d83%3A0x4ae56efe841deea1!2sZOTA%20Payment%20Services!5e0!3m2!1svi!2s!4v1741907087747!5m2!1svi!2s"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <hr className="border-t border-gray-300 w-full my-4" />
            <div className="text-gray-700 text-sm text-center py-2">
                Copyright by NMS © 2022.
            </div>
        </div>


    )
}

export default Footer;