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

            <div className="sm:mx-[32rem] sm:px-[10rem] sm:py-[4rem] sm:mb-0 flex justify-center mb-[5rem] px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:w-[8rem] sm:h-[8rem] sm:leading-[8rem] sm:text-[2.5rem] w-[26rem] h-[26rem] rounded-full text-[7rem] leading-[26rem] text-center bg-[#F3F3F3] text-[#808080] font-semibold">1</div>
                <div className="sm:w-[50%] sm:h-[4rem] h-[13rem] w-[55rem] border-b-[#DADADA] border-b-[2px]"></div>
                <div className="sm:w-[8rem] sm:h-[8rem] sm:leading-[8rem] sm:text-[2.5rem] w-[26rem] h-[26rem] rounded-full text-[7rem] leading-[26rem] text-center primary-btn font-semibold">2</div>
            </div>

            <div className="sm:mx-[38rem] sm:p-[5rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                
                <div className="sm:mb-[3rem] flex flex-col items-center mb-[12rem]">
                    
                    <p className="sm:mb-0 sm:text-[3rem] sm:leading-[6rem] text-[10rem] leading-[20rem] my-[3rem] font-semibold">Set new password</p>
                    <p className="sm:leading-[3rem] sm:text-[2.1rem] sm:mr-[1.5rem] text-[6.5rem] leading-[8rem] w-[85%] text-center text-[#808080]" >Must be at least 8 characters.</p>
                </div>
                
                <div className="sm:mb-[2rem] mb-[6rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type="password" className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " />
                    </div>
                </div>
                <div className="sm:mb-[4rem] sm:gap-[2rem] flex justify-start gap-[4rem] mb-[8rem]">
                    <div className="sm:w-[6rem] w-[24rem] h-[4px] rounded-[1px] bg-[#449D5D]"></div>
                    <div className="sm:w-[6rem] w-[24rem] h-[4px] rounded-[1px] bg-[#449D5D]"></div>
                    <div className="sm:w-[6rem] w-[24rem] h-[4px] rounded-[1px] bg-[#449D5D]"></div>
                    <div className="sm:w-[6rem] w-[24rem] h-[4px] rounded-[1px] bg-[#449D5D]"></div>
                </div>

                <div className="sm:mb-[4rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type="password" className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " />
                    </div>
                </div>
                
                <button className="sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn ">Reset password</button>
                <div className=" sm:mt-[7rem] sm:gap-0 flex justify-center items-center text-[6.5rem] mt-[21rem]">
                    <Image src={arrowleft} alt="" className="sm:h-[4rem] h-[11rem] w-auto"></Image>
                    <p className="sm:mr-[2rem] sm:text-[2.3rem] text-[#828A91] mr-[5rem]">Back to </p>
                    <Link href="/login" className="sm:text-[2.3rem] font-semibold">Sign In</Link>
                </div>
            </div>
        </div>
    )
}