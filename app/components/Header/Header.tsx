'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

import Image from "next/image";
import logoimg from "../../../public/JSON-LOGO 1.svg"
import frame from "../../../public/Frame.svg"
import React from "react";
const Header = (props:any) => {
    const [show, setShow] = React.useState(false);
    const router = useRouter()

    return(
        <div className="w-full flex justify-between items-center p-[8rem] sm:px-[14%] sm:py-12">
            <div className="sm:w-[12%] w-[44%]"><Image src={logoimg} alt="logimage" className="sm:h-auto w-auto sm:w-full"></Image></div>
            <div className={`sm:flex sm:justify-between sm:gap-[24rem] items-center ${show?"":"hidden"}`}>
                <div className="sm:flex sm:justify-between sm:items-center  sm:font-medium sm:text-[2rem] sm:leading-[3rem] sm:gap-[5rem]">
                    <Link href="/">Home</Link>
                    <Link href="/how">How it works</Link>
                    <Link href="/price">Pricing</Link>
                    <Link href="/docs">API Docs</Link>
                </div>
                <div className="justify-between flex items-center sm:gap-16">
                    <Link href={"/login"}><button className="sm:text-[2rem] sm:leading-[2rem] sm:px-[4rem] sm:py-[2rem] sm:font-medium sm:rounded-[1rem] secondary-btn ">LOG IN</button></Link>
                    <Link href={"/register"}><button className="sm:text-[2rem] sm:leading-[2rem] sm:px-[4rem] sm:py-[2rem] sm:font-medium sm:rounded-[1rem] primary-btn">SIGN UP</button></Link>
                </div>
            </div>
            <Image src={frame} alt="frame" className="w-[20px] h-[20px] sm:hidden" onClick={() => {
                console.log(show, "show");
                setShow(prev => !prev)
            }}></Image>
        </div>
    )
}

export default Header;