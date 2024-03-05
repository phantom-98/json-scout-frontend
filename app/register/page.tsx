import Image from "next/image"
import Link from "next/link"
import sms from "../../public/sms-notification.svg"
import secure from "../../public/shield-security.svg"
import eye from "../../public/eye-slash.svg"
import profile from "../../public/profile.svg"

export default (props : any) =>{

    // const [email, setEmail] = useState("")

    return(
        <div className="flex justify-center sm:pt-[140px]">
            <div className=" w-[384px] h-[495px] login px-[24px]">
                <div className=" w-full py-[32px] text-center font-bold text-[20px] leading-[20px]  ">Sign Up</div>
                <div className=" gap-[12px] flex flex-col justify-center">
                    <p className="w-full py-0 font-bold text-[13.3px] leading-[16.63px]">Name</p>
                    <div className="w-full h-[52px] rounded-[8px] px-[20px] py-[14px] border-[2.22px] border-[#F2F3F5] flex ">
                        <Image src={profile} alt="aprofile" />
                        <input type="text" className=" focus:outline-none px-[15px] py-[4px]" placeholder="Enter your name" />
                    </div>
                </div>
                <div className=" gap-[12px] flex flex-col justify-center mt-[20px]">
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
                
                <div className=" mt-[25px] cursor-pointer text-[white] text-[15.52px] leading-[44px] text-center font-bold w-full h-[44px] rounded-[8px] login-button">Sign Up</div>
                <div className=" mt-[23px] flex flex-row justify-center">
                    <p className="text-[15px] text-[#828A91] leading-[15px] font-medium">Already have an account?</p>
                    <Link href="#" className="text-[15px] text-[#020318] leading-[15px] pl-[8px] font-medium">Sign In</Link>
                </div>
            </div>
        </div>
    )
}