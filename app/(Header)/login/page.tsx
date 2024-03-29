'use client'
import React, { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../../public/sms-notification.svg"
import secure from "../../../public/shield-security.svg"
import eye from "../../../public/eye-slash.svg"
import eye1 from "../../../public/visible.svg"
import { Roboto } from "next/font/google"
import { useRouter } from 'next/navigation'
import erralert from "../../../public/warning-2.svg"
import { setCookie } from "cookies-next"
import { getProfile, signin } from "@/app/backendApis"
import { CircularProgress } from "@mui/material"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState("")
    const [visible, setVisible] = React.useState(false)
    
    const router = useRouter()

    const [loading, setLoading] = React.useState(false)
    
    async function submitBtn() {
        if (loading) return;
        if (!email) {
            setErrorMessage("Please input email!");
            return;
        }
        if (!/^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErrorMessage("Please input correct email!");
            return;
        }
        if (!password) {
            setErrorMessage("Please input password!");
            return;
        }
        setLoading(true)
        const res = await signin(email, password);
        if (res["access_token"] != null) {
            Object.keys(res).map(val=>{
                setCookie(val, res[val]);
            })
            
            const profile = await getProfile(res["access_token"]);
            if (profile["email"] != null) {
                Object.keys(profile).forEach((key)=>{
                    localStorage.setItem(key, profile[key])
                })
            }

            router.push("/")
        } else {
            setErrorMessage(res["message"])
        }
        setLoading(false)
    }

    React.useEffect(()=>{
    }, [])

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem] mt-[5%]`}>
            <div className="sm:mx-[27rem] login px-[10rem]  pt-[10rem] pb-[10rem] rounded-[2rem]">
                <div className="sm:text-[3rem] sm:leading-[6rem] sm:mb-[3rem] text-[10rem] leading-[20rem] text-center mb-[10rem] font-semibold">Sign In</div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" onKeyDown={e => {if (e.key === "Enter") submitBtn()}}  onChange={(e)=>{setErrorMessage("");setEmail(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="sm:mb-[4rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type={visible == true?'':'password'}  onKeyDown={e => {if (e.key === "Enter") submitBtn()}} onChange={(e)=>{setErrorMessage("");setPassword(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={visible == true?eye1:eye} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto cursor-pointer " onClick={()=>{setVisible(!visible)}} />
                    </div>
                </div>
                
                <div className="sm:mb-[2.5rem] flex items-center mb-[8rem]">
                    <p className="sm:text-[2.1rem] sm:mr-[1.5rem] text-[6.5rem] text-[#828A91] mr-[3rem]">Forgot your password?</p>
                    <Link href="/forgot-password" className="sm:text-[2.1rem] text-[6.5rem] font-medium underline">Recover Password</Link>
                </div>
                {errorMessage && (
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
                    )}Sign In</button>
                <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center gap-[5rem] text-[6.5rem] mt-[8rem]">
                    <p className=" sm:text-[2.3rem] text-[#828A91]">Don’t have an account?</p>
                    <Link href="/register" className="sm:text-[2.3rem] font-semibold underline">Sign up</Link>
                </div>
            </div>
        </div>
    )
}