'use client'

import { verifyEmail } from "@/app/backendApis";
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect } from "react";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


export default () => {
    const param = useSearchParams();
    const router = useRouter();
    const [verified, setVerified] = React.useState("")

    const verify = async () => {
        const token = param.get('token');
        if (!token) return;
        const res = await verifyEmail(token);
        if (res) {
            setVerified("Your email is successfully verified. Now redirecting sign in page...");
            setTimeout(() => {
                router.push("/login");
            }, 2000);
          
        } else {
            setVerified("Your email verification is failed.")
        }
    }
    useEffect(() => {
        verify();
    }, []);
    return(
        <div className="h-[90rem] pt-[30rem]">
            <div className={verified?'':'hidden'}>
                <p className="text-center text-[#ff8132] font-bold text-[5rem] leading-[7rem] sm:px-[20%]">{verified}</p>
            </div>
            <div className={verified?'hidden':''}>
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    
                    <LinearProgress color="success" />
                    
                </Stack>
            </div>
        </div>
    )
}