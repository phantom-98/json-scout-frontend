'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

import Image from "next/image";
import logoimg from "../../../public/JSON-LOGO 1.svg"
import frame from "../../../public/Frame.svg"
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { getCookie, } from "cookies-next";
import { getProfile } from "@/app/backendApis";
import avatar from "../../../public/Profile-Button.svg"
import setting2 from "../../../public/setting-2.svg"
import logout from "../../../public/logout.svg"


const Header = (props:any) => {
    const {user, setUser} = useAuth();
    const router = useRouter();

    const [show, setShow] = React.useState(false);
    const [selected, setSelected] = React.useState(
        usePathname() == "/" ? 1:
        usePathname() == "/how"? 2:
        usePathname() == "/price"? 3:
        usePathname() == "/docs"? 4:
        0
    );

    function deleteAllCookies() {
        // Example implementation, adjust as needed
        const cookies = document.cookie.split(";");
      
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        }
      }
    

    const [popup, setPop] = React.useState(false)

    const setSelection = (no:number) => {
        setSelected(no);
        setShow(false);
    }

    const linkpage = () =>{
        router.push("/profile")
    }

    const out = () => {
        setUser({})
        deleteAllCookies()
        router.push("/")
        
    }

    const fetchProfile = async () => {
        const token = getCookie("access_token");
        if (token != null) {
            const res = await getProfile(token);
            if (res["email"] != null) {
                setUser(res);
            } else {
                setUser({})
            }
            
        }
        else {
        }
    }

    
    useEffect(() => {
        fetchProfile();
    }, []);

    return(
        <div className="w-full flex justify-between items-center p-[8rem] sm:px-[14%] sm:py-12  whitespace-nowrap">
            <div className="sm:w-[12%] w-[44%] z-40 cursor-pointer" onClick={()=>{router.push("/")}}><Image src={logoimg} alt="logimage" className="sm:h-auto w-auto sm:w-full"></Image></div>
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
            {user['email'] && (<div className="relative group">
                <div className="sm:h-[6rem] sm:w-[6rem] sm:rounded-full sm:cursor-pointer hover:">
                    <Image src={avatar} alt="" className="sm:w-full sm:h-full"></Image>
                </div>
                <div className={`sm:p-[1.5rem] sm:absolute sm:right-0 sm:shadow-md sm:rounded-[1rem] hidden group-hover:block`}>
                    <div className="sm:flex sm:gap-[1rem] sm:py-[1rem] sm:pr-[2rem] sm:pl-[1rem] sm:cursor-pointer sm:rounded-[0.5rem] text-[#828A91] hover:text-black stroke-[#828A91] hover:stroke-black hover:bg-[#F4F4F4]" onClick={()=>{linkpage()}}>
                        <svg width="3rem" height="3rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.16699 7.5135V6.48683C1.16699 5.88017 1.66283 5.3785 2.27533 5.3785C3.33116 5.3785 3.76283 4.63183 3.23199 3.716C2.92866 3.191 3.10949 2.5085 3.64033 2.20517L4.64949 1.62767C5.11033 1.3535 5.70533 1.51683 5.97949 1.97767L6.04366 2.0885C6.56866 3.00433 7.43199 3.00433 7.96283 2.0885L8.02699 1.97767C8.30116 1.51683 8.89616 1.3535 9.35699 1.62767L10.3662 2.20517C10.897 2.5085 11.0778 3.191 10.7745 3.716C10.2437 4.63183 10.6753 5.3785 11.7312 5.3785C12.3378 5.3785 12.8395 5.87433 12.8395 6.48683V7.5135C12.8395 8.12017 12.3437 8.62183 11.7312 8.62183C10.6753 8.62183 10.2437 9.3685 10.7745 10.2843C11.0778 10.8152 10.897 11.4918 10.3662 11.7952L9.35699 12.3727C8.89616 12.6468 8.30116 12.4835 8.02699 12.0227L7.96283 11.9118C7.43783 10.996 6.57449 10.996 6.04366 11.9118L5.97949 12.0227C5.70533 12.4835 5.11033 12.6468 4.64949 12.3727L3.64033 11.7952C3.10949 11.4918 2.92866 10.8093 3.23199 10.2843C3.76283 9.3685 3.33116 8.62183 2.27533 8.62183C1.66283 8.62183 1.16699 8.12017 1.16699 7.5135Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="sm:text-[2rem] sm:leading-[3rem]">Settings</span>
                    </div>
                    <div className="sm:flex sm:gap-[1rem] sm:py-[1rem] sm:pr-[2rem] sm:pl-[1rem] sm:cursor-pointer sm:rounded-[0.5rem] text-[#828A91] hover:text-black stroke-[#828A91] hover:stroke-black  hover:bg-[#F4F4F4]" onClick={()=>{out()}}>
                        <svg width="3rem" height="3rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.19141 4.40965C5.37224 2.30965 6.45141 1.45215 8.81391 1.45215H8.88974C11.4972 1.45215 12.5414 2.49632 12.5414 5.10382V8.90715C12.5414 11.5146 11.4972 12.5588 8.88974 12.5588H8.81391C6.46891 12.5588 5.38974 11.713 5.19724 9.64798" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.74966 7H2.11133" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.41217 5.0459L1.45801 7.00007L3.41217 8.95423" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="sm:text-[2rem] sm:leading-[3rem]">Log Out</span>
                    </div>
                </div>
                </div>
            )}
            

            <Image src={frame} alt="frame" className="w-auto h-full sm:hidden z-40" onClick={() => {
                setShow(prev => !prev)
            }}></Image>
        </div>
    )
}

export default Header;