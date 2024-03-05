import Link from "next/link";

import Button from "../Buttons/Button"
import Image from "next/image";
import logoimg from "../../../public/JSON-LOGO 1.svg"
import frame from "../../../public/Frame.svg"
const Header = (props:any) => {

    return(
        <>
        <div className=" w-full pt-[48px] px-[20px] sm:px-[80px] lg:px-[110px] pb-[16px] sm:py-[28px] sm:border-b-0 bg-white flex justify-between items-center border-b-[1.5px] border-[#E7E7E7]">
            <div className="sm:w-[110px] md:w-[140px] lg:w-[170px] xl:w-[190px] 2xl:w-[210px]"><Image src={logoimg} alt="logimage" className="h-[43px] sm:h-auto w-auto sm:w-full  "></Image></div>
            <div className="sm:flex sm:flex-row sm:w-9/12 lg:w-8/12 sm:justify-between sm:items-center hidden">
                <div className="sm:flex sm:justify-between sm:items-center  sm:font-medium sm:text-sm md:text-base sm:leading-4 sm:w-7/12 md:w-8/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12">
                    <Link href="/">Home</Link>
                    <Link href="/about">How it works</Link>
                    <Link href="/contact">Pricing</Link>
                    <Link href="/contact">API Docs</Link>
                </div>
                <div className="sm:flex sm:items-center sm:gap-2 xl:gap-4 2xl:gap-6">
                    <button className="sm:text-sm sm:font-medium sm:px-3 lg:px-4 xl:px-5 2xl:px-6 sm:py-3 lg:py-4 xl:py-5 sm:rounded-[12px] secondary-btn ">LOG IN</button>
                    <button className="sm:text-sm sm:font-medium sm:px-3 lg:px-4 xl:px-5 2xl:px-6 sm:py-3 lg:py-4 xl:py-5 sm:rounded-[12px] primary-btn">SIGN UP</button>
                </div>
            </div>
            <Image src={frame} alt="frame" className=" w-[20px] h-[20px] sm:hidden "></Image>
        </div>
        <div className=" px-[20px] hidden">
                <div className=" w-full h-[360px] flex flex-col text-[18px] font-medium">
                    <Link href="/" className="w-full h-[90px] flex justify-center items-center border-b-[1px] border-[#F6F6F6]"><span className="py-[10px] gap-[10px]">Home</span></Link>
                    <Link href="/about" className="w-full h-[90px] flex justify-center items-center border-b-[1px] border-[#F6F6F6]"><span className="py-[10px] gap-[10px]">How it works</span></Link>
                    <Link href="/contact" className="w-full h-[90px] flex justify-center items-center border-b-[1px] border-[#F6F6F6]"><span className="py-[10px] gap-[10px]">Pricing</span></Link>
                    <Link href="/contact" className="w-full h-[90px] flex justify-center items-center"><span className="py-[10px] gap-[10px]">API Docs</span></Link>
                </div>
                <div className="w-full h-[112px] mt-[22px] flex flex-col justify-center gap-[16px]">
                    <Button label="LOG IN" type="secondary" mobile="Y"/>
                    <Button label="SIGN UP" type="primary" mobile="Y"/>
                </div>
            </div>
        </>
        
    )
}

export default Header;