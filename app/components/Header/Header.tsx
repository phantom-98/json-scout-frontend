'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

import Image from "next/image";
import logoimg from "../../../public/JSON-LOGO 1.svg"
import frame from "../../../public/Frame.svg"
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { getCookie } from "cookies-next";
import { getProfile } from "@/app/backendApis";
import avatar from "../../../public/Profile-Button.svg"
import setting2 from "../../../public/setting-2.svg"
import logout from "../../../public/logout.svg"


const Header = (props:any) => {
    const {user, setUser} = useAuth();

    const [show, setShow] = React.useState(false);
    const [selected, setSelected] = React.useState(
        usePathname() == "/" ? 1:
        usePathname() == "/how"? 2:
        usePathname() == "/price"? 3:
        usePathname() == "/docs"? 4:
        0
    );

    const [popup, setPop] = React.useState(false)

    const setSelection = (no:number) => {
        setSelected(no);
        setShow(false);
    }

    const fetchProfile = async () => {
        const token = getCookie("access_token");
        if (token != undefined) {
            const res = await getProfile(token);
            if (res) {
                setUser(res);
            }
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return(
        <div className=" sm:relative w-full flex justify-between items-center p-[8rem] sm:px-[14%] sm:py-12  whitespace-nowrap">
            <div className="sm:w-[12%] w-[44%] z-40"><Image src={logoimg} alt="logimage" className="sm:h-auto w-auto sm:w-full"></Image></div>
            <div className={`flex justify-between sm:flex-row flex-col sm:gap-[24rem] items-center sm:[position:inherit] fixed w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0 bg-white z-30 sm:bottom-[inherit] sm:w-[fit-content] sm:h-[fit-content] font-medium sm:text-[2rem] text-[12rem] sm:leading-[3rem] leading-[16rem] sm:[display:inherit] ${show?"":"hidden"}`}>
                <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-[5rem] gap-[0px] w-full px-[10rem] pt-[38rem] sm:p-0">
                    <Link onClick={()=>setSelection(1)} className="w-full sm:w-[fit-content] border-y-gray-100 border-y-2 sm:border-y-0 py-[10rem] sm:py-4 flex justify-center" href="/"><span className={`${selected == 1?'selected':''}`}>Home</span></Link>
                    <Link onClick={()=>setSelection(2)} className="w-full sm:w-[fit-content] border-y-gray-100 border-b-2 sm:border-y-0 py-[10rem] sm:py-4 flex justify-center" href="/how"><span className={`${selected == 2?'selected':''}`}>How it works</span></Link>
                    <Link onClick={()=>setSelection(3)} className="w-full sm:w-[fit-content] border-y-gray-100 border-b-2 sm:border-y-0 py-[10rem] sm:py-4 flex justify-center" href="/price"><span className={`${selected == 3?'selected':''}`}>Pricing</span></Link>
                    <Link onClick={()=>setSelection(4)} className="w-full sm:w-[fit-content] border-y-gray-100 border-b-2 sm:border-y-0 py-[10rem] sm:py-4 flex justify-center" href="/docs"><span className={`${selected == 4?'selected':''}`}>API docs</span></Link>
                </div>
                {!user['email'] && (
                    <div className="justify-between flex items-center sm:flex-row flex-col sm:gap-16 gap-[16rem] w-full px-[10rem] pb-[36rem] sm:p-0">
                        <Link onClick={()=>setSelection(0)} className="w-full sm:w-[fit-content]" href={"/login"}><button className="sm:px-[4rem] sm:py-[2rem] w-full sm:w-[fit-content] py-[8rem] rounded-[8px] secondary-btn ">LOG IN</button></Link>
                        <Link onClick={()=>setSelection(0)} className="w-full sm:w-[fit-content]" href={"/register"}><button className="sm:px-[4rem] sm:py-[2rem] w-full sm:w-[fit-content] py-[8rem] rounded-[8px] primary-btn">SIGN UP</button></Link>
                    </div>
                )}
            </div>
            {user['email'] && (<>
                <div className="sm:h-[6rem] sm:w-[6rem] sm:rounded-full sm:cursor-pointer" onClick={()=>{popup == false?setPop(true):setPop(false)}}>
                    <Image src={avatar} alt="" className="sm:w-full sm:h-full"></Image>
                </div>
                <div className={`sm:p-[2rem] sm:absolute sm:right-[14%] sm:top-[8rem] ${popup == false?'hidden':''}`}>
                    <div className="sm:flex sm:gap-[2rem] sm:py-[0.5rem]">
                        <Image src={setting2} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                        <span className="sm:text-[2rem] sm:leading-[3rem]">Settings</span>
                    </div>
                    <div className="sm:flex sm:gap-[2rem] sm:py-[0.5rem]">
                        <Image src={logout} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                        <span className="sm:text-[2rem] sm:leading-[3rem]">Log Out</span>
                    </div>
                </div>
                </>
            )}
            

            <Image src={frame} alt="frame" className="w-auto h-full sm:hidden z-40" onClick={() => {
                console.log(show, "show");
                setShow(prev => !prev)
            }}></Image>
        </div>
    )
}

export default Header;