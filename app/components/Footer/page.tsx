'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo_white.svg";

import linkedIn from "../../../public/social/linkedIn.svg";
import twitter from "../../../public/social/twitter.svg";

import background from "../../../public/Background.svg";
import { Context } from "../context/context";

export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const {logState} = React.useContext(Context)

    return (
        <>
        <div className={`${logState?'sm:pt-[5rem] pt-[12rem]':'sm:pt-[15rem]'}  sm:px-[14%] sm:w-full sm:pb-[5rem] pt-[34rem] pb-[10rem] bg-[#161C28] text-white relative`}>
            {!logState && <div className="flex flex-col items-center">
                <p className=" sm:text-[8rem] sm:mb-[12rem] sm:leading-[10rem] text-[15rem] items-center leading-[23rem] mb-[19rem] font-semibold">Ready to Get Started</p>
                <Link href="/register"><button className=" sm:text-[2.5rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[5rem] sm:rounded-[1rem] text-[8rem] rounded-[5rem] leading-[10rem] px-[12rem] py-[7rem] primary-btn">Sign Up Now</button></Link>
            </div>}
            <div className=" sm:mt-[8rem] sm:flex-row sm:justify-between flex flex-col mt-[26rem] items-center gap-[8rem]">
                <Image src={logo} alt="" className="sm:h-[6rem] h-[29rem] w-auto"></Image>
                <div className=" sm:gap-[2rem] flex justify-center gap-[11rem] ">
                    <Link href="#" className="cursor-pointer"><Image src={linkedIn} alt="" className="sm:w-[8rem] w-[24rem]"></Image></Link>
                    <Link href="https://twitter.com/jsonscout" className="cursor-pointer" style={{zIndex: 1}}><Image src={twitter} alt="" className="sm:w-[8rem] w-[24rem]"></Image></Link>
                </div>
            </div>
            <div className="sm:mb-[5rem] sm:mt-[5rem] sm:px-[4rem] sm:py-[3rem] sm:flex-row sm:justify-between sm:gap-0 flex flex-col py-[12rem] my-[17rem] border-t-[#828A91] border-t-[1px] border-b-[#828A91] border-b-[1px] gap-[5rem]">
                <div className=" sm:w-[50%] flex flex-col items-center gap-[2rem] ">
                    <p className="sm:text-[4rem] sm:leading-[8rem] text-[12rem] leading-[24rem]">About</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="/terms" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Terms of Service</Link>
                    <Link href="/privacy" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Privacy Policy</Link>
                    <Link href="/contact" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Contact</Link>
                    </div>
                </div>
                <div className="sm:w-[50%] flex flex-col items-center gap-[2rem]">
                    <p className="sm:text-[4rem] sm:leading-[8rem] text-[12rem] leading-[24rem]">Contact Us</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="mailto:contact@jsonscout.com" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">contact@jsonscout.com</Link>
                    </div>
                </div>
                
            </div>
            <div className="sm:text-[2rem] sm:leading-[4rem] text-[7rem] text-center">© {currentYear} JSON Scout. All rights reserved</div>
            <Image src={background} alt="" className="absolute right-0 top-0 sm:w-[20%] w-[70rem] h-auto"></Image>
        </div>
        </>
    );
}