'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import axios, { AxiosError } from 'axios'
import Link from "next/link"
import sms from "../../../public/sms-notification.svg"
import secure from "../../../public/shield-security.svg"
import profile from "../../../public/profile.svg"
import eye from "../../../public/eye-slash.svg"
import { Roboto } from "next/font/google"
import { register } from "@/app/backendApis"
import { useRouter } from "next/navigation"
import { setCookie } from "cookies-next"
import erralert from "../../../public/warning-2.svg"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errmessage, setErrmessage] = useState("")
    const [err, setErr] = useState(0)
    const router = useRouter()

    

    function splitName(fullName: string) {
        const parts = fullName.trim().split(' ');
        const first_name = parts[0];
        // Assume last name is the last element
        const last_name = parts.length > 1 ? parts[parts.length - 1] : '';
        return { first_name, last_name };
    }

    const handleSubmit = async () => {
        const { first_name, last_name } = splitName(name);
        const res = await register(first_name, last_name, email, password);
        if (res == "Success") {
            
        } else {
            setErrmessage(res);
            setErr(1)
        }
    }

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem]`}>
            <div className="sm:mx-[27rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:text-[3rem] sm:leading-[6rem] sm:mb-[3rem] text-[10rem] leading-[20rem] text-center mb-[10rem] font-semibold">Sign Up</div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Name</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={profile} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="text" value={name} onChange={(e) => {setErr(0);setName(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" value={email} onChange={(e) => {setErr(0);setEmail(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type="password" value={password} onChange={(e) => {setErr(0);setPassword(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " />
                    </div>
                </div>
                <div className="sm:mb-[3rem] flex items-center mb-[6rem]">
                    <label className="sm:text-[2.1rem] sm:mr-[1.5rem] checkgroup text-[6.5rem] text-[#828A91] mr-[3rem]">You accept the terms and conditions?
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <Link href="#" className="sm:text-[2.1rem] text-[6.5rem] font-medium underline">Terms</Link>
                </div>
                <div className={`flex justify-center items-center ${err == 1?'':'hidden'}`}>
                    <div className={`sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                        <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errmessage}</span>
                        <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                    </div>   
                </div>
                <button onClick={() => {
                    handleSubmit();
                }} className="sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn ">Sign Up</button>
                <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center gap-[5rem] text-[6.5rem] mt-[8rem]">
                    <p className=" sm:text-[2.3rem] text-[#828A91]">Already have an account?</p>
                    <Link href="/login" className="sm:text-[2.3rem] font-semibold">Sign In</Link>
                </div>
            </div>
        </div>
    )
}