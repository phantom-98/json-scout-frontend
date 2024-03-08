import Link from "next/link";

import Button from "../Buttons/Button"
import Image from "next/image";
import logoimg from "../../../public/JSON-LOGO 1.svg"
import frame from "../../../public/Frame.svg"
const Header = (props:any) => {

    return(
        <>
        <div className=" w-full pt-[48px] px-[20px] sm:px-[10rem] pb-[16px] sm:py-[6rem] sm:border-b-0 bg-white flex justify-between items-center border-b-[1.5px] border-[#E7E7E7]">
            <div className="sm:w-[17%] w-[44%]"><Image src={logoimg} alt="logimage" className="h-[43px] sm:h-auto w-auto sm:w-full  "></Image></div>
            <div className="sm:flex sm:flex-row sm:w-[71%] sm:justify-between sm:items-center hidden">
                <div className="sm:flex sm:justify-between sm:items-center  sm:font-medium sm:text-[2rem] sm:leading-[3rem] sm:w-[51%] ">
                    <Link href="/">Home</Link>
                    <Link href="/about">How it works</Link>
                    <Link href="/contact">Pricing</Link>
                    <Link href="/contact">API Docs</Link>
                </div>
                <div className="sm:w-[35%] sm:justify-between lg:gap-[22px] sm:flex sm:items-center sm:gap-2 xl:gap-4 2xl:gap-6">
                    <button className="sm:w-[45%] sm:text-[2rem] sm:leading-[2rem] sm:px-[2rem] sm:py-[2rem] sm:font-medium sm:rounded-[12px] secondary-btn ">LOG IN</button>
                    <button className="sm:w-[45%] sm:text-[2rem] sm:leading-[2rem] sm:px-[2rem] sm:py-[2rem] sm:font-medium sm:rounded-[12px] primary-btn">SIGN UP</button>
                </div>
            </div>
            <Image src={frame} alt="frame" className=" w-[20px] h-[20px] sm:hidden "></Image>
        </div>
        {/* <div className=" px-[20px] hidden">
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
            </div> */}
        </>
        
    )
}

export default Header;