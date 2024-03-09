import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../public/sms-notification.svg"
import secure from "../../public/shield-security.svg"
import eye from "../../public/eye-slash.svg"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    // const [email, setEmail] = useState("")

    return(
        <div className={`${roboto.className} px-[10rem]`}>
            <div className="sm:mx-[50rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:text-[6rem] sm:leading-[10rem] sm:mb-[3rem] text-[16rem] leading-[20rem] text-center mb-[10rem]">Sign In</div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[3rem] sm:mb-[2rem] font-semibold text-[9rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[3rem] sm:py-[2rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[4rem] h-[13rem] w-auto" />
                        <input type="email" className=" sm:text-[3rem] sm:leading-[4rem] text-[8.5rem] leading-[9rem] focus:outline-none" placeholder="Enter your email" />
                    </div>
                </div>
                <div className=" mb-[4rem]">
                    <p className="sm:text-[3rem] sm:mb-[2rem] font-semibold text-[9rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[3rem] sm:py-[2rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[4rem] h-[13rem] w-auto"/>
                        <input type="password" className=" sm:text-[3rem] sm:leading-[4rem] w-[80%] text-[8.5rem] leading-[9rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" sm:h-[4rem] h-[13rem] w-auto " />
                    </div>
                </div>
                <div className="flex items-center mb-[3rem]">
                <label className="sm:text-[2.5rem] sm:mr-[1.5rem] checkgroup text-[7rem] text-[#828A91] mr-[3rem]">You accept the terms and conditions?
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <Link href="#" className="sm:text-[2.5rem] text-[7rem] font-medium underline">Terms</Link>
                </div>
                <div className="sm:mb-[5rem] flex items-center mb-[16rem]">
                    <p className="sm:text-[2.5rem] sm:mr-[2rem] text-[7rem] text-[#828A91] mr-[3rem]">Forgot your password?</p>
                    <Link href="#" className="sm:text-[2.5rem] text-[7rem] font-medium underline">Recover Password</Link>
                </div>
                <button className="sm:text-[3rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn ">Sign In</button>
                <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center gap-[5rem] text-[7rem] mt-[13rem]">
                    <p className=" sm:text-[3rem] text-[#828A91]">Don’t have an account?</p>
                    <Link href="#" className="sm:text-[3rem] font-semibold">Sign up</Link>
                </div>
            </div>
        </div>
    )
}