import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import logo from '../../assets/Image/logoHomePage.png';
import { IconButton } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/pos-system', label: 'POS SYSTEM' },
        { path: '/merchant-service', label: 'MERCHANT SERVICES' },
        { path: '/templates', label: 'TEMPLATES' },
        { path: '/about', label: 'ABOUT US' }
    ];

    return (
        <div className=' bg-white shadow-md  '>
            <div className='py-4 flex justify-center items-center'>
                <img src={logo} alt="ZOTA" className='w-40 cursor-pointer' onClick={() => navigate("/")} />
                <div className='flex justify-between items-center gap-6 px-8'>
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`${location.pathname === item.path
                                ? 'text-pink-500 underline'
                                : 'text-black'
                                } font-normal no-underline hover:underline hover:text-pink-500`}
                            style={{ textUnderlineOffset: '6px' }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className='px-3'>
                    <IconButton>
                        <FacebookOutlinedIcon
                            className="text-blue-700 cursor-pointer"
                            sx={{ fontSize: "35px" }}
                            onClick={() => window.open("https://www.facebook.com/thonguyenzota", "_blank")}
                        />
                    </IconButton>
                    <IconButton className=''>
                        <InstagramIcon
                            className="text-pink-500 cursor-pointer"
                            sx={{ fontSize: "35px" }}
                            onClick={() => window.open("https://www.instagram.com/zota_tho_nguyen?fbclid=IwY2xjawJI3ThleHRuA2FlbQIxMAABHbcPrnkX9MzVde07uKTIvn_uDmHi0UIojtzZLr8BNDR9FdZHUpGW71lH8Q_aem_BoZcKPsrHsw-kPwZwJ2hPg", "_blank")}
                        />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon
                            className=' text-blue-600 '
                            sx={
                                {
                                    fontSize: "35px",
                                }
                            } />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon
                            className=' text-red-600 '
                            sx={
                                {
                                    fontSize: "35px",
                                }
                            } />
                    </IconButton>
                </div>
                <a
                    href="tel:+14048064448"
                    className='flex justify-center items-center gap-2 ml-7 font-bold text-sm bg-gradient-to-r from-[#EA4999] to-[#FF99CC] px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'
                >
                    <CallIcon sx={{ fontSize: "17px" }} />
                    (404) 806-4448
                </a>

            </div>

        </div >
    );
};

export default Header;