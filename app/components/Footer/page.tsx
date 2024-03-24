'use client'
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../public/JSON-LOGO 1 (1).svg";
import frame320 from "../../../public/Frame 320.svg";
import frame321 from "../../../public/Frame 321.svg";
import background from "../../../public/Background.svg";
import { Context, useAuth } from "../context/context";
import { Roboto } from "next/font/google";
import sms from "../../../public/sms-notification.svg"
import CircularProgress from "@mui/material/CircularProgress";
import erralert from "../../../public/warning-2.svg"
import arrow_down from "../../../public/arrow-down.svg"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export const Footer = () => {

    const {logState} = React.useContext(Context)
    const [showContact, setShowContact] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [contactType, setContactType] = React.useState("")


    const submitBtn = () => {

    }
   
    
    return (
        <div className={`${logState?'sm:pt-[5rem] pt-[12rem]':'sm:pt-[15rem]'}  sm:px-[14%] sm:w-full sm:pb-[5rem] pt-[34rem] pb-[10rem] bg-[#161C28] text-white relative`}>
            {!logState && <div className="flex flex-col items-center">
                <p className=" sm:text-[8rem] sm:mb-[12rem] sm:leading-[10rem] text-[15rem] items-center leading-[23rem] mb-[19rem] font-semibold">Ready to Get Started</p>
                <Link href="/register"><button className=" sm:text-[2.5rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[5rem] sm:rounded-[1rem] text-[8rem] rounded-[5rem] leading-[10rem] px-[12rem] py-[7rem] primary-btn">Sign Up Now</button></Link>
            </div>}
            <div className=" sm:mt-[8rem] sm:flex-row sm:justify-between flex flex-col mt-[26rem] items-center gap-[8rem]">
                <Image src={logo1} alt="" className="sm:h-[6rem] h-[29rem] w-auto"></Image>
                <div className=" sm:gap-[2rem] flex justify-center gap-[11rem] ">
                    <Link href="#" className="cursor-pointer"><Image src={frame320} alt=""></Image></Link>
                    <Link href="#" className="cursor-pointer"><Image src={frame321} alt=""></Image></Link>
                </div>
            </div>
            <div className="sm:mb-[5rem] sm:mt-[5rem] sm:px-[4rem] sm:py-[3rem] sm:flex-row sm:justify-between sm:gap-0 flex flex-col py-[12rem] my-[17rem] border-t-[#828A91] border-t-[1px] border-b-[#828A91] border-b-[1px] gap-[5rem]">
                <div className=" sm:w-[50%] flex flex-col items-center gap-[2rem] ">
                    <p className="sm:text-[4rem] sm:leading-[8rem] text-[12rem] leading-[24rem]">About</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="/terms-of-service" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Terms of Service</Link>
                    <Link href="/privacy-policy" className=" sm:text-[2.3rem] text-[8rem] text-[#828A91]">Privacy Policy</Link>
                    <span className=" sm:text-[2.3rem] text-[8rem] text-[#828A91] cursor-pointer" onClick={()=>{setShowContact(true)}}>Contact</span>
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
            <div className="sm:text-[2rem] sm:leading-[4rem] text-[7rem] text-center">© 2024 JSON Scout. All rights reserved</div>
            <Image src={background} alt="" className="absolute right-0 top-0 sm:w-[20%] w-[70rem] h-auto"></Image>
            {showContact && (
            <div className={`fixed w-[100vw] h-[100vh] ${roboto.className} bg-[#47476b]/75   top-0 left-0 z-20`}>
                <div className="mx-auto sm:p-[5rem] sm:w-[75rem] sm:mt-[15rem] login px-[10rem] py-[10rem] rounded-[2rem] bg-white">
                    <div className="sm:mb-[2rem] flex flex-col items-center mb-[12rem]">
                        <p className="sm:mb-0 sm:mt-[2rem] sm:text-[3rem] sm:leading-[6rem] text-[10rem] leading-[20rem] my-[3rem] text-black font-semibold">Contact us!</p>
                        <p className="sm:leading-[3rem] sm:text-[2.1rem] sm:mr-[1.5rem] text-[6.5rem] leading-[8rem] w-[85%] text-center text-[#808080]" >Reach out and we’ll get in touch within 24 hours.</p>
                    </div>
                    <div className="sm:mb-[3rem] mb-[11rem]">
                        <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] text-black mb-[4rem]">Email</p>
                        <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                            <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                            <input type="email" value={email}  onKeyDown={e => {if (e.key === "Enter") submitBtn()}} onChange={(e)=>{setErrorMessage(""); setEmail(e.target.value)}} className="text-black w-[80%] sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="sm:mb-[3rem] mb-[8rem]">
                        <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem] text-black">Contact type</p>
                        <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                            <input type="text" value={contactType} onKeyDown={e => {if (e.key === "Enter") submitBtn()}} onChange={(e) => {setErrorMessage("");setContactType(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] text-black focus:outline-none w-[90%]" placeholder="Message" />
                            <Image src={arrow_down} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        </div>
                    </div>

                { errorMessage && (
                    <div className={`flex justify-center items-center`}>
                        <div className={`sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                            <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                            <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                        </div>   
                    </div>  
                )} 
                    <button onClick={submitBtn} className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn`}>
                        {loading && (
                            <CircularProgress sx={{
                                color: (theme) =>
                                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                                }}
                                size={24}
                                thickness={4} />
                        )}Send
                    </button>
                </div>
            </div>)}
        </div>
                );
        }