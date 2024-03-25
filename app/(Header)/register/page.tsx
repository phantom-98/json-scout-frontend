'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../../public/sms-notification.svg"
import secure from "../../../public/shield-security.svg"
import profile from "../../../public/profile.svg"
import eye from "../../../public/eye-slash.svg"
import { Roboto } from "next/font/google"
import { register } from "@/app/backendApis"
import { useRouter } from "next/navigation"
import erralert from "../../../public/warning-2.svg"
import eye1 from "../../../public/visible.svg"
import CircularProgress from '@mui/material/CircularProgress';


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    const [email, setEmail] = useState("")
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter()
    const [visible, setVisible] = useState(false)
    const [checked, setChecked] = useState(false)
    const [loading, setLoding] = useState(false)

    const handleSubmit = async () => {
        if (loading) return;
        if (!first_name) {
            setErrorMessage("Please input first name!");
            return;
        }
        if (!last_name) {
            setErrorMessage("Please input last name!");
            return;
        }
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
        setLoding(true)
        
        const res = await register(first_name, last_name, email, password);
        if (res == "Success") {
            router.push("/checkemail")
            
        } else {
            setErrorMessage(res);
        }

        setLoding(false)
    }

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem] mt-[5%]`}>
            <div className="sm:mx-[27rem] login px-[10rem] pt-[5rem] pb-[7rem] rounded-[2rem]">
                <div className="sm:text-[3rem] sm:leading-[6rem] sm:mb-[3rem] text-[10rem] leading-[20rem] text-center mb-[10rem] font-semibold">Sign Up</div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">First Name</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={profile} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="text" value={first_name} onKeyDown={e => {if (e.key === "Enter") handleSubmit()}} onChange={(e) => {setErrorMessage("");setFirstname(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your first name" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Last Name</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={profile} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="text" value={last_name} onKeyDown={e => {if (e.key === "Enter") handleSubmit()}} onChange={(e) => {setErrorMessage("");setLastname(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your last name" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" value={email} onKeyDown={e => {if (e.key === "Enter") handleSubmit()}} onChange={(e) => {setErrorMessage("");setEmail(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type={visible == false?'password':''} value={password} onKeyDown={e => {if (e.key === "Enter") handleSubmit()} } onChange={(e) => {setErrorMessage("");setPassword(e.target.value)}} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={visible == false?eye:eye1} alt="aeye" className=" cursor-pointer sm:h-[3.5rem] h-[11rem] w-auto " onClick={()=>{setVisible(!visible)}} />
                    </div>
                </div>
                <div className="sm:mb-[3rem] flex items-center mb-[6rem]">
                    <label className="sm:text-[2.1rem] sm:mr-[1.5rem] checkgroup text-[6.5rem] text-[#828A91] mr-[3rem]" 
                    >By Signing Up, I agree to the{" "}
                     <Link href="/terms" className="sm:text-[2.1rem] text-[6.5rem] font-medium underline">TOS</Link>
                     {" "}and <Link href="/privacy" className="sm:text-[2.1rem] text-[6.5rem] font-medium underline">JSON Scout Privacy Policy.</Link>
                        <input type="checkbox" onClick={()=>setChecked(!checked)}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                {errorMessage && (
                    <div className={`flex justify-center items-center`}>
                        <div className={`sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                            <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                            <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                        </div>   
                    </div>
                )}
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    disabled = {checked==false || !first_name || !last_name || !password || !email }
                    className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] ${checked && first_name && last_name && password && email && 'primary-btn'} disabled:bg-[#828A91] disabled:text-white`}
                >
                    {loading && (
                        <CircularProgress sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                            }}
                            size={24}
                            thickness={4} />
                    )}
                    Sign Up</button>
                    <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center gap-[5rem] text-[6.5rem] mt-[8rem]">
                    <p className=" sm:text-[2.3rem] text-[#828A91]">Already have an account?</p>
                    <Link href="/login" className="sm:text-[2.3rem] font-semibold underline">Sign In</Link>
                </div>
            </div>
        </div>
    )
}