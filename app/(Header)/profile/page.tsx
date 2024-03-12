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
import sms from "../../../public/sms.svg"
import unlock from "../../../public/unlock.svg"
import eye from "../../../public/eye-slash.svg"
import eye1 from "../../../public/visible.svg"



export default (props:any) => {

    const [state, setState] = React.useState(1)
    const [visible, setVisible] = React.useState(0)

    return(
        <>
        <div className="sm:flex sm:justify-between sm:pt-[7rem]">
            <div className="sm:rounded-[2rem] sm:shadow-lg sm:w-[16%] sm:flex sm:flex-col sm:p-[2rem] sm:justify-start sm:gap-[2rem] sm:h-[40rem]">
                <p className="sm:text-[3rem] sm:font-semibold sm:pl-[1rem]">Settings</p>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] cursor-pointer ${state === 1?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(1);setVisible(0);}} >
                    <Image src={state === 1?profile:profile1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="sm:text-[2.1rem]"> Profile</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] cursor-pointer ${state === 2?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(2);setVisible(0);}}>
                    <Image src={state === 2?key:key1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">API Key</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] cursor-pointer ${state === 3?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(3);setVisible(0);}}>
                    <Image src={state === 3?arrow:arrow1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">Requests</span>
                </div>
                <div className={`sm:flex sm:items-center sm:justify-start sm:gap-[1rem] sm:p-[0.5rem] cursor-pointer ${state === 4?'sm:bg-[#F4F4F4] sm:text-black':'sm:text-[#828A91]'}`} onClick={()=>{setState(4);setVisible(0);}}>
                    <Image src={state === 4?personal:personal1} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span  className="sm:text-[2.1rem]">My Plan</span>
                </div>
            </div>
            <div className="sm:w-[77%] sm:pb-[5rem]">
                <div className="sm:pb-[3rem] sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:flex sm:items-center sm:gap-[1.5rem]">
                    <span className="sm:text-[3rem] sm:font-semibold">Settings</span>
                    <Image src={arrowright} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="sm:text-[2rem] sm:text-[#828A91]">{state === 1?'Profile':state === 2?'API Key':state === 3?'Requests':'My Plan'}</span>
                </div>
                <div className={`sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:justify-start sm:gap-[4rem] sm:py-[4rem] ${state === 1?'':'hidden'}`}>
                    <div className="sm:flex sm:justify-between sm:items-center sm:mb-[4rem]">
                        <div className="sm:flex sm:justify-start sm:items-center sm:gap-[3rem]">
                            <div className="sm:h-[11rem] sm:w-[11rem] sm:rounded-full sm:overflow-hidden"><Image src={profileimg} alt="" className="sm:w-full sm:h-full"></Image></div>
                            <div>
                                <p className="sm:text-[2.5rem] sm:font-medium">Profile picture</p>
                                <p className="sm:text-[#828A91] sm:text-[1.8rem]">PNG, JPEG under 15MB</p>
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
                    <div className="sm:flex sm:justify-between">
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">First name</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={profile1} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input type="text" placeholder="John" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none"></input>
                            </div>
                        </div>
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">Last name</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={profile1} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input type="text" placeholder="Doe" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none"></input>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className={`sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:py-[4rem]  ${state === 1?'':'hidden'}`}>
                    <p className="sm:text-[2.5rem] sm:font-medium">Contact email</p>
                    <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[2rem]">Manage your accounts email address for the invoices</p>
                    <div className="sm:flex sm:justify-between sm:items-end">
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">Email</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={sms} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input type="email" placeholder="jdoe@email.com" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none"></input>
                            </div>
                        </div>
                        <div className="sm:h-[5rem] sm:leading-[3rem] sm:text-[2rem] sm:font-medium sm:px-[1.5rem] sm:py-[1rem] sm:shadow-lg">Add another email</div>
                    </div>
                </div>

                <div className={`sm:py-[4rem] ${state === 1?'':'hidden'}`}>
                    <p className="sm:text-[2.5rem] sm:font-medium">Password</p>
                    <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[2rem]">Modify your current password</p>
                    <div className="sm:flex sm:justify-between">
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">Current password</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={unlock} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input type="password" placeholder="" className="sm:text-[2.3rem] sm:w-[77%] sm:focus:outline-none"></input>
                                <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                            </div>
                        </div>
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">New password</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={unlock} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input type="password" placeholder="" className="sm:text-[2.3rem] sm:w-[77%] sm:focus:outline-none"></input>
                                <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={` sm:text-[2.3rem] sm:px-[1.5rem] sm:py-[1rem] sm:rounded-[1rem] sm:mt-[3rem] primary-btn ${state === 1?'':'hidden'} `}>Save Changes</button>


                <div className={`mt-[6rem] ${state === 2?'':'hidden'}`}>
                    <div className="flex justify-between items-center">
                        <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:w-[70%] sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:h-[7rem] sm:rounded-[1rem]">
                            <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                            <input type="password" placeholder="" className="sm:text-[2.3rem] sm:w-[90%] sm:focus:outline-none"></input>
                        </div>
                        <div className="primary-btn sm:w-[15%] sm:text-[2.5rem] sm:text-center sm:leading-[7rem] sm:rounded-[1rem]">Copy</div>
                        <div className="bg-[#F4F4F4] sm:w-[12%] text-[#828A91] sm:text-[2.5rem] sm:text-center sm:leading-[7rem] sm:rounded-[1rem]">Reset</div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}