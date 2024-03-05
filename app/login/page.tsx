import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import sms from "../../public/sms-notification.svg"
import secure from "../../public/shield-security.svg"
import eye from "../../public/eye-slash.svg"

export default (props : any) =>{

    // const [email, setEmail] = useState("")

    return(
        <div className="flex justify-center pt-[140px]">
            <div className=" w-[384px] h-[495px] login px-[24px]">
                <div className=" w-full py-[32px] text-center font-bold text-[20px] leading-[20px]  ">Sign In</div>
                <div className=" gap-[12px] flex flex-col justify-center">
                    <p className="w-full py-0 font-bold text-[13.3px] leading-[16.63px]">Email</p>
                    <div className="w-full h-[52px] rounded-[8px] px-[20px] py-[14px] border-[2.22px] border-[#F2F3F5] flex ">
                        <Image src={sms} alt="asvg" />
                        <input type="email" className=" focus:outline-none px-[15px] py-[4px]" placeholder="Enter your email" />
                    </div>
                </div>
                <div className=" gap-[12px] flex flex-col justify-center mt-[20px]">
                    <p className="w-full py-0 font-bold text-[13.3px] leading-[16.63px]">Password</p>
                    <div className="w-full justify-between h-[52px] rounded-[8px] px-[20px] py-[14px] border-[2.22px] border-[#F2F3F5] flex">
                        <Image src={secure} alt="asecure" />
                        <input type="password" className="flex flex-1 focus:outline-none px-[15px] py-[4px] " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" cursor-pointer" />
                    </div>
                </div>
                <div className=" mt-[20px] flex flex-row ">
                <label className="checkgroup text-[14px] leading-[20px] text-[#828A91] font-medium">You accept the terms and conditions?
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <Link href="#" className=" pl-[5px] underline text-[14px] leading-[20px] text-[#17191C] font-medium">Terms</Link>
                </div>
                <div className=" mt-[12px] flex flex-row">
                    <p className="text-[14px] leading-[20px] text-[#828A91] font-medium">Forgot your password?</p>
                    <Link href="#" className=" pl-[5px] underline text-[14px] leading-[20px] text-[#17191C] font-medium">Recover Password</Link>
                </div>
                <div className=" mt-[20px] cursor-pointer text-[white] text-[15.52px] leading-[44px] text-center font-bold w-full h-[44px] rounded-[8px] login-button">Sign In</div>
                <div className=" mt-[25px] flex flex-row justify-center">
                    <p className="text-[15px] text-[#828A91] leading-[15px] font-medium">Don’t have an account?</p>
                    <Link href="#" className="text-[15px] text-[#020318] leading-[15px] pl-[8px] font-medium">Sign up</Link>
                </div>
            </div>
        </div>
    )
}