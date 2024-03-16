'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../public/JSON-LOGO 1 (1).svg";
import frame318 from "../../../public/Frame 318.svg";
import frame319 from "../../../public/Frame 319.svg";
import frame320 from "../../../public/Frame 320.svg";
import frame321 from "../../../public/Frame 321.svg";
import background from "../../../public/Background.svg";
import { useAuth } from "../context/authContext";

export const Footer = () => {

    const { user } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        setLoggedIn(user['email']);
    }, [user]);
    
    return (
        <div className={`${isLoggedIn?'sm:pt-[5rem] pt-[12rem]':'sm:pt-[15rem]'}  sm:px-[14%] sm:pb-[5rem] pt-[34rem] pb-[10rem] bg-[#161C28] text-white relative`}>
            {!isLoggedIn && <div className="flex flex-col items-center">
                <p className=" sm:text-[8rem] sm:mb-[12rem] sm:leading-[10rem] text-[15rem] items-center leading-[23rem] mb-[19rem] font-semibold">Ready to Get Started</p>
                <Link href="/register"><button className=" sm:text-[2.5rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[5rem] sm:rounded-[1rem] text-[8rem] rounded-[5rem] leading-[10rem] px-[12rem] py-[7rem] primary-btn">Sign Up Now</button></Link>
            </div>}
            <div className=" sm:mt-[8rem] sm:flex-row sm:justify-between flex flex-col mt-[26rem] items-center gap-[8rem]">
                <Image src={logo1} alt="" className="sm:h-[6rem] h-[29rem] w-auto"></Image>
                <div className=" sm:gap-[2rem] flex justify-center gap-[11rem] ">
                    <Link href="#" className="cursor-pointer"><Image src={frame318} alt=""></Image></Link>
                    <Link href="#" className="cursor-pointer"><Image src={frame319} alt=""></Image></Link>
                    <Link href="#" className="cursor-pointer"><Image src={frame320} alt=""></Image></Link>
                    <Link href="#" className="cursor-pointer"><Image src={frame321} alt=""></Image></Link>
                </div>
            </div>
            <div className="sm:mb-[5rem] sm:mt-[5rem] sm:px-[4rem] sm:py-[3rem] sm:flex-row sm:justify-between sm:gap-0 flex flex-col py-[12rem] my-[17rem] border-t-[#828A91] border-t-[1px] border-b-[#828A91] border-b-[1px] gap-[5rem]">
                <div className=" sm:w-[50%] flex flex-col items-center gap-[2rem] ">
                    <p className="sm:text-[4rem] sm:leading-[8rem] text-[12rem] leading-[24rem]">About</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="#" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Terms of service</Link>
                    <Link href="#" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Privacy police</Link>
                    <Link href="#" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Blog</Link>
                    </div>
                </div>
                <div className="sm:w-[50%] flex flex-col items-center gap-[2rem]">
                    <p className="sm:text-[4rem] sm:leading-[8rem] text-[12rem] leading-[24rem]">Contact Us</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="#" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">contact@jsonscout.com</Link>
                    <Link href="#" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">+92-300-848-8985</Link>
                    </div>
                </div>
                
            </div>
            <div className=" sm:text-[2rem] sm:leading-[4rem] text-[7rem] text-center">© 2024 Json Scout. All rights reserved</div>
            <Image src={background} alt="" className="absolute right-0 top-0 sm:w-[20%] w-[70rem] h-auto"></Image>
        </div>
    );
}