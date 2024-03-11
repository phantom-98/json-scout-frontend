import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../public/JSON-LOGO 1 (1).svg"
import frame318 from "../../../public/Frame 318.svg"
import frame319 from "../../../public/Frame 319.svg"
import frame320 from "../../../public/Frame 320.svg"
import frame321 from "../../../public/Frame 321.svg"

export const Footer = () => {
    
    return (
        <div className=" sm:pt-[15rem] sm:px-[14%] sm:pb-[10rem] pt-[34rem] pb-[10rem] bg-[#161C28] text-white">
            <div className="flex flex-col items-center">
                <p className=" sm:text-[9rem] sm:mb-[9rem] text-[15rem] items-center leading-[23rem] mb-[19rem] font-semibold">Ready to Get Started</p>
                <button className=" sm:text-[2.8rem] sm:px-[4rem] sm:py-[2rem] sm:leading-[6rem] sm:rounded-[2rem] text-[8rem] rounded-[5rem] leading-[10rem] px-[12rem] py-[7rem] primary-btn">Sign Up Now</button>
            </div>
            <div className=" sm:mt-[13rem] sm:flex-row sm:justify-between flex flex-col mt-[26rem] items-center gap-[8rem]">
                <Image src={logo1} alt="" className="sm:h-[8rem] h-[29rem] w-auto"></Image>
                <div className=" sm:gap-[2rem] flex justify-center gap-[11rem]">
                    <Link href="#" className=""><Image src={frame318} alt=""></Image></Link>
                    <Link href="#" className=""><Image src={frame319} alt=""></Image></Link>
                    <Link href="#" className=""><Image src={frame320} alt=""></Image></Link>
                    <Link href="#" className=""><Image src={frame321} alt=""></Image></Link>
                </div>
            </div>
            <div className="sm:mb-[8rem] sm:px-[7rem] sm:py-[7rem] sm:mt-[8rem] sm:flex-row sm:justify-between sm:gap-0 flex flex-col py-[12rem] my-[17rem] border-t-[#828A91] border-t-[1px] border-b-[#828A91] border-b-[1px] gap-[5rem]">
                <div className=" sm:w-[50%] flex flex-col items-center gap-[2rem]">
                    <p className="sm:text-[5.3rem] sm:leading-[10rem] text-[12rem] leading-[24rem]">About</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="#" className=" sm:text-[2.7rem] text-[8rem] text-[#828A91]">Terms of service</Link>
                    <Link href="#" className=" sm:text-[2.7rem] text-[8rem] text-[#828A91]">Privacy police</Link>
                    <Link href="#" className=" sm:text-[2.7rem] text-[8rem] text-[#828A91]">Blog</Link>
                    </div>
                </div>
                <div className="sm:w-[50%] flex flex-col items-center gap-[2rem]">
                    <p className="sm:text-[5.3rem] sm:leading-[10rem] text-[12rem] leading-[24rem]">Contact Us</p>
                    <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                    <Link href="#" className=" sm:text-[2.7rem] text-[8rem] text-[#828A91]">contact@jsonscout.com</Link>
                    <Link href="#" className=" sm:text-[2.7rem] text-[8rem] text-[#828A91]">+92-300-848-8985</Link>
                    </div>
                </div>
                
            </div>
            <div className=" sm:text-[2.5rem] sm:leading-[4rem] text-[7rem] text-center">© 2024 Json Scout. All rights reserved</div>
        </div>
    );
}