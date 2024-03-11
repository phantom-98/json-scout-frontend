'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from 'axios'
import Link from "next/link"
import sms from "../../public/sms-notification.svg"
import secure from "../../public/shield-security.svg"
import profile from "../../public/profile.svg"
import eye from "../../public/eye-slash.svg"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default (props : any) =>{

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('console.log=====>', email, name, password);
        }
    }, [name, email, password]);

    function splitName(fullName: string) {
        const parts = fullName.trim().split(' ');
        const first_name = parts[0];
        // Assume last name is the last element
        const last_name = parts.length > 1 ? parts[parts.length - 1] : '';
        return { first_name, last_name };
    }

    const handleSubmit = async () => {
        console.log('handle submit funtion=====>')
        const { first_name, last_name } = splitName(name);
        try {
            console.log('handle submit=====>',name)
            const res = await axios.post("https://backend-pgnweb265a-uc.a.run.app/register", {
                first_name, last_name, email, password
            });
            console.log("this is response", res);
        } catch (error) {
            console.log(error);
        }
    }
    // const handleSubmit = () => console.log('handle submit===>')
    // console.log('this is console')

    return(
        <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem]`}>
            <div className="sm:mx-[27rem] login px-[10rem] py-[10rem] rounded-[2rem]">
                <div className="sm:text-[3rem] sm:leading-[6rem] sm:mb-[3rem] text-[10rem] leading-[20rem] text-center mb-[10rem] font-semibold">Sign Up</div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Name</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={profile} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="sm:mb-[3rem] mb-[8rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={sms} alt="asvg" className=" sm:h-[3.5rem] h-[11rem] w-auto" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="sm:mb-[6rem] mb-[10rem]">
                    <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Password</p>
                    <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
                        <Image src={secure} alt="asecure"  className=" sm:h-[3.5rem] h-[11rem] w-auto"/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className=" sm:text-[2.3rem] sm:leading-[4rem] w-[80%] text-[6.5rem] leading-[10rem] focus:outline-none " placeholder="Enter your password" />
                        <Image src={eye} alt="aeye" className=" sm:h-[3.5rem] h-[11rem] w-auto " />
                    </div>
                </div>
                
                <button onClick={handleSubmit} className="sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn ">Sign Up</button>
                <div className=" sm:mt-[4rem] sm:gap-[2rem] flex justify-center items-center gap-[5rem] text-[6.5rem] mt-[8rem]">
                    <p className=" sm:text-[2.3rem] text-[#828A91]">Already have an account?</p>
                    <Link href="/login" className="sm:text-[2.3rem] font-semibold">Sign In</Link>
                </div>
            </div>
        </div>
    )
}