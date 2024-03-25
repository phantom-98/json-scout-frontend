'use client'

import { verifyEmail } from "@/app/backendApis";
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect } from "react";
import Image from "next/image"
import sms from "../../../public/sms.svg"


export default () => {
    const param = useSearchParams();
    const router = useRouter();
    const [verified, setVerified] = React.useState("")
    const [title, setTitle] = React.useState("")

    const verify = async () => {
        const token = param.get('token');
        if (!token) return;
        const res = await verifyEmail(token);
        if (res) {
            setTitle("Email Verified!")
            setVerified("You have verified your email. Taking you to the profile page...")
            setTimeout(() => {
                router.push("/login");
            }, 2000);
          
        } else {
            setTitle("Email not Verified!")
            setVerified("Your email verification is failed.")
        }
    }
    useEffect(() => {
        verify();
    }, []);
    return(
    <div className="sm:h-[50rem] w-[100%]">
        <div className="sm:py-[3rem] sm:px-[5rem] sm:mt-[25rem] sm:ml-[35%] w-[30%] shadow-lg flex flex-col items-center sm:rounded-[1rem]">
            <div className="sm:p-[1.5rem] sm:rounded-[1rem] border-[1px] border-[#F2F3F5]"><Image src={sms} alt="" className="sm:w-[3.5rem] h-auto"></Image></div>
            <div className="sm:mt-[3rem]">
            <p className="text-center sm:text-[2.7rem] sm:font-semibold">{title}</p>
            <p className="text-center sm:mt-[1rem] text-[#808080] sm:text-[1.8rem]">{verified}</p>
            </div>
        </div>
    </div>
    )
}