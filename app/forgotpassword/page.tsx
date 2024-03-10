import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../public/sms-notification.svg"
import secure from "../../public/shield-security.svg"
import profile from "../../public/profile.svg"
import eye from "../../public/eye-slash.svg"
import { Roboto } from "next/font/google"
import smss from "../../public/sms.svg"
import arrowleft from "../../public/arrow-left.svg"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    // const [email, setEmail] = useState("")

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[30rem]`}>

            <div className="sm:mx-[27rem] flex justify-center mb-[5rem] px-[10rem] py-[10rem] rounded-[2rem]">
                <div className=" w-[20rem] h-[20rem] rounded-full text-[7rem] leading-[20rem] text-center primary-btn font-semibold">1</div>
                <div className="h-[10rem] w-[55rem] border-b-[#DADADA] border-b-[2px]"></div>
                <div className=" w-[20rem] h-[20rem] rounded-full text-[7rem] leading-[20rem] text-center secondary-btn font-semibold">2</div>
            </div>

            <div className="sm:mx-[27rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                
                <div className="flex flex-col items-center mb-[12rem]">
                    <div className="w-[17rem] h-[17rem] border-[1px] border-[#F2F3F5] rounded-[5rem] flex justify-center items-center">
                        <Image src={smss} alt="" className="w-[50%] h-auto"></Image>
                    </div>
                    <p className="text-[10rem] leading-[20rem] my-[3rem] font-semibold">Forgot Password?</p>
                    <p className="text-[6.5rem] leading-[8rem] w-[85%] text-center text-[#808080]" >No worries we’ll send you reset instructions.</p>
                </div>
                
                <div className="sm:mb-[3rem] mb-[11rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none" placeholder="Enter your email" />
                    </div>
                </div>
                
                <button className="sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn ">Reset password</button>
                <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center text-[6.5rem] mt-[21rem]">
                    <Image src={arrowleft} alt="" className="h-[11rem] w-auto"></Image>
                    <p className=" sm:text-[2.3rem] text-[#828A91] mr-[5rem]">Back to </p>
                    <Link href="#" className="sm:text-[2.3rem] font-semibold">Sign In</Link>
                </div>
            </div>
        </div>
    )
}