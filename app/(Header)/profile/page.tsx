import React from "react"
import Image from "next/image"
import profile from "../../../public/profile1.svg"
import key from "../../../public/key.svg"
import arrow from "../../../public/arrow-swap-horizontal.svg"
import personal from "../../../public/personalcard.svg"



export default (props:any) => {
    return(
        <>
        <div className="sm:h-[100rem] sm:flex sm:pt-[7rem]">
            <div className="sm:w-[16%] sm:flex sm:flex-col sm:p-[2rem] sm:justify-start sm:gap-[2rem]">
                <p className="sm:text-[3rem] sm:font-semibold sm:pl-[1rem]">Settings</p>
                <div className="sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ">
                    <Image src={profile} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="text-[2.1rem]"> Profile</span>
                </div>
                <div className="sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ">
                    <Image src={key} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="text-[2.1rem]">API Key</span>
                </div>
                <div className="sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ">
                    <Image src={arrow} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="text-[2.1rem]">Requests</span>
                </div>
                <div className="sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ">
                    <Image src={personal} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="text-[2.1rem]">My Plan</span>
                </div>
            </div>
            <div></div>

        </div>

        </>
    )
}