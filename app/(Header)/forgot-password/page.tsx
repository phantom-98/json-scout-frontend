'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../../public/sms-notification.svg"
import { Roboto } from "next/font/google"
import smss from "../../../public/sms.svg"
import arrowleft from "../../../public/arrow-left.svg"
import { Box, CircularProgress } from "@mui/material"
import { sendemail } from "@/app/backendApis"
import { useRouter } from "next/navigation"
import erralert from "../../../public/warning-2.svg"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState("")

    const submitBtn = async () => {
        if (loading) return;
        if (!email) {
            setErrorMessage("Please input email!");
            return;
        }
        if (!/^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErrorMessage("Please input correct email!");
            return;
        }
        setLoading(true)
        const res = await sendemail(email)
        if(res == "Success") {
            router.push("/check-email")
        }
        else{
            setErrorMessage(res)
        }
        setLoading(false)
    }

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem] mt-[5%]`}>
            <div className="sm:mx-[32rem] sm:p-[5rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:mb-[2rem] flex flex-col items-center mb-[12rem]">
                    <div className="sm:w-[6rem] sm:h-[6rem] sm:rounded-[2rem] w-[17rem] h-[17rem] border-[1px] border-[#F2F3F5] rounded-[5rem] flex justify-center items-center">
                        <Image src={smss} alt="" className="w-[50%] h-auto"></Image>
                    </div>
                    <p className="sm:mb-0 sm:mt-[2rem] sm:text-[3rem] sm:leading-[6rem] text-[10rem] leading-[20rem] my-[3rem] font-semibold">Forgot Password?</p>
                    <p className="sm:leading-[3rem] sm:text-[2.1rem] sm:mr-[1.5rem] text-[6.5rem] leading-[8rem] w-[85%] text-center text-[#808080]" >No worries, we’ll send you reset instructions.</p>
                </div>
                
                <div className="sm:mb-[3rem] mb-[11rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" value={email}  onKeyDown={e => {if (e.key === "Enter") submitBtn()}} onChange={(e)=>{setErrorMessage(""); setEmail(e.target.value)}} className=" w-[80%] sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none" placeholder="Enter your email" />
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

                <button onClick={submitBtn} className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn`}
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
                    <Link href="login" className="sm:text-[2.3rem] font-semibold underline">Sign In</Link>
                </div>
            </div>
        </div>
    )
}