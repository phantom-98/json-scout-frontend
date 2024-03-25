'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import secure from "../../../public/shield-security.svg"
import eye from "../../../public/eye-slash.svg"
import { Roboto } from "next/font/google"
import arrowleft from "../../../public/arrow-left.svg"
import eye1 from "../../../public/visible.svg"

import erralert from "../../../public/warning-2.svg"
import { useRouter, useSearchParams } from "next/navigation"
import { resetpassword } from "@/app/backendApis"
import { Box, CircularProgress } from "@mui/material"
import PasswordStrengthBar from "react-password-strength-bar"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const param = useSearchParams();
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const  handleSubmit =  async () => {
        if(password.length >= 8) {
            if(password == confirm) {
                setLoading(true)                
                const token = param.get('token');
                if (!token) return;
                const res = await resetpassword(token, password)
                if(res == "Success") {
                    router.push("/login")
                } else {
                    setErrorMessage("Reset error")
                }
                setLoading(false)
            } else {
                setErrorMessage("Passwords are not matched!")
            }
        } else {
            setErrorMessage("Password should be at least 8 characters long!")
        }
    }


    

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem] mt-[10%]`}>
            <div className="sm:mx-[32rem] sm:p-[5rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:mb-[3rem] flex flex-col items-center mb-[12rem]">
                    
                    <p className="sm:mb-0 sm:text-[3rem] sm:leading-[6rem] text-[10rem] leading-[20rem] my-[3rem] font-semibold">Set new password</p>
                    <p className="sm:leading-[3rem] sm:text-[2.1rem] sm:mr-[1.5rem] text-[6.5rem] leading-[8rem] w-[85%] text-center text-[#808080]" >Must be at least 8 characters.</p>
                </div>
                
                <div className="sm:mb-[2rem] mb-[6rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type={visible1?'':'password'} value={password} onKeyDown={e => {if (e.key === "Enter") handleSubmit()}} onChange={(e)=>{setErrorMessage(""); setPassword(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={visible1 == false?eye:eye1} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " onClick={()=>{setVisible1(!visible1)}} />
                    </div>
                </div>
                <PasswordStrengthBar minLength={8} password={password}/>

                <div className="sm:mb-[4rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Confirm Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type={visible2?'':'password'} value={confirm} onKeyDown={e => {if (e.key === "Enter") handleSubmit()}} onChange={(e)=>{setErrorMessage(""); setConfirm(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={visible2 == false?eye:eye1} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " onClick={()=>{setVisible2(!visible2)}}/>
                    </div>
                </div>

                {errorMessage && (
                    <div className={`flex justify-center items-center`}>
                        <div className={`sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                            <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                            <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                        </div>   
                    </div>
                )}
                
                <button onClick={()=>{handleSubmit()}}  className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn`}
                >
                    {loading && (
                        <CircularProgress sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                            }}
                            size={24}
                            thickness={4} />
                    )}Reset password</button>
                <div className=" sm:mt-[7rem] sm:gap-0 flex justify-center items-center text-[6.5rem] mt-[21rem]">
                    <Image src={arrowleft} alt="" className="sm:h-[4rem] h-[11rem] w-auto"></Image>
                    <p className="sm:mr-[2rem] sm:text-[2.3rem] text-[#828A91] mr-[5rem]">Back to </p>
                    <Link href="/login" className="sm:text-[2.3rem] font-semibold underline">Sign In</Link>
                </div>
            </div>
        </div>
    )
}