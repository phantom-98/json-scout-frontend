'use client'
import React from "react"
import Image from "next/image"
import profile from "../../../public/profile1.svg"
import profile1 from "../../../public/profile2.svg"
import key1 from "../../../public/key.svg"
import key from "../../../public/key1.svg"
import arrow1 from "../../../public/arrow-swap-horizontal.svg"
import arrow from "../../../public/arrow-swap-horizontal1.svg"
import personal1 from "../../../public/personalcard.svg"
import personal from "../../../public/personalcard1.svg"
import arrowright from "../../../public/arrow-right.svg"
import profileimg from "../../../public/Profile-Button.svg"
import trash from "../../../public/trash.svg"



export default (props:any) => {

    const [state, setState] = React.useState(1)

    return(
        <>
        <div className="sm:flex sm:justify-between sm:pt-[7rem]">
            <div className="sm:rounded-[2rem] sm:shadow-lg sm:w-[16%] sm:flex sm:flex-col sm:p-[2rem] sm:justify-start sm:gap-[2rem]">
                <p className="sm:text-[3rem] sm:font-semibold sm:pl-[1rem]">Settings</p>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ${state === 1?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(1)}} >
                    <Image src={state === 1?profile:profile1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="sm:text-[2.1rem]"> Profile</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ${state === 2?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(2)}}>
                    <Image src={state === 2?key:key1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">API Key</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ${state === 3?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(3)}}>
                    <Image src={state === 3?arrow:arrow1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">Requests</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] ${state === 4?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(4)}}>
                    <Image src={state === 4?personal:personal1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">My Plan</span>
                </div>
            </div>
            <div className="sm:w-[77%]">
                <div className="sm:pb-[3rem] sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:flex sm:items-center sm:gap-[1.5rem]">
                    <span className="sm:text-[3rem] sm:font-semibold">Settings</span>
                    <Image src={arrowright} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="sm:text-[2rem] sm:text-[#828A91]">{state === 1?'Profile':state === 2?'API Key':state === 3?'Requests':'My Plan'}</span>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center sm:py-[5rem]">
                    <div className="sm:flex sm:justify-start sm:items-center sm:gap-[3rem]">
                        <div className="sm:h-[11rem] sm:w-[11rem] sm:rounded-full sm:overflow-hidden"><Image src={profileimg} alt="" className="sm:w-full sm:h-full"></Image></div>
                        <div>
                            <p className="sm:text-[2rem] sm:font-medium">Profile picture</p>
                            <p className="sm:text-[1.6rem]">PNG, JPEG under 15MB</p>
                        </div>
                    </div>
                    <div className="sm:flex sm:justify-center sm:gap-[2rem]">
                        <div className="sm:text-[2rem] sm:font-medium sm:px-[1.5rem] sm:py-[1rem] sm:shadow-lg">Upload new picture</div>
                        <div className="sm:flex sm:items-center sm:gap-[1rem] sm:px-[1.5rem] sm:py-[1rem] sm:bg-[#F4F4F4]">
                            <Image src={trash} alt="" className="sm:h-[2rem] sm:w-auto"></Image>
                            <p className="sm:text-[2rem] sm:text-[#828A91]">Delete</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}