'use client'
import React, { useContext, useEffect, useState } from "react"
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
import { Request } from "@/app/components/Request/page"
import { Cell } from "@/app/components/Cell/page"
import { Context, useAuth } from "@/app/components/context/context"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { getProfile } from "@/app/backendApis"
import { CardMembership1 } from "@/app/components/Card/page"
import erralert from "../../../public/warning-2.svg"
import { CircularProgress } from "@mui/material"
import { updateProfile } from "@/app/backendApis"
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";



export default (props:any) => {
    const {user, setUser} = useAuth();
    const router = useRouter();
    const [current_password, setCurrentPassword] = useState("");
    const [new_password, setNewPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const [state, setState] = React.useState(1)
    const [visible, setVisible] = React.useState(0)
    const [visible1, setVisible1] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const {activeHeader, setActiveHeader} = useContext(Context)
    const [logged, setLogged] = React.useState(true)
    
    
    const [pricing, setPricing] = React.useState("monthly")

    

    const viewRequest = (i:number) =>{
        
    }

    useEffect(() => {
        settingProfile()
        
    }, [])

    const saveChange = async () => {
        
        
        if(loading) return

        if(!firstName) {setErrorMessage("Input first name");return}
        if(!email) {setErrorMessage("Input email");return}
        if(!/^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {setErrorMessage("Input correct email");return}
        if(current_password){
            if(new_password.length < 8) {setErrorMessage("Password must be at least 8 characters"); return}
        }   

        
        setLoading(true)

        const token = getCookie("access_token");
        if(token != null) {
            const response = await updateProfile(token, firstName, lastName, email, current_password, new_password)
            localStorage.setItem("first_name", firstName)
            localStorage.setItem("last_name", lastName)
            localStorage.setItem("email", email)

            if(response == "success") {
                toast.success("Profile updated successfully.",{
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Slide,
                    })
                router.push("/profile")
            }
            setLoading(false)
        }

    }

    const settingProfile = async () => {
        if(localStorage.getItem("email")) {
            
            const first = localStorage.getItem("first_name");
            const last = localStorage.getItem("last_name")
            const ema = localStorage.getItem("email")
            if(first != null && last != null && ema != null) {
                setFirstName(first);
                setLastName(last);
                setEmail(ema)
            } 
        } else {
            router.push("/login")
        }
    }

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
            <div className="sm:w-[77%] sm:pb-[10rem]">
                <div className="sm:pb-[3rem] sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:flex sm:items-center sm:gap-[1.5rem]">
                    <span className="sm:text-[3rem] sm:font-semibold">Settings</span>
                    <Image src={arrowright} alt="" className="sm:h-[3rem] sm:w-auto"></Image>
                    <span className="sm:text-[2rem] sm:text-[#828A91]">{state === 1?'Profile':state === 2?'API Key':state === 3?'Requests':'My Plan'}</span>
                </div>
                <div className={`sm:border-b-[1px] sm:border-b-[#EAEAEA] sm:justify-start sm:gap-[4rem] sm:py-[4rem] ${state === 1?'':'hidden'}`}>
                    {/* <div className="sm:flex sm:justify-between sm:items-center sm:mb-[4rem]">
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
                    </div> */}
                    <div className="sm:flex sm:justify-between">
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">First name</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={profile1} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e =>{setErrorMessage(""); setFirstName(e.target.value)} } type="text" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none" value={firstName}></input>
                            </div>
                        </div>
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">Last name</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={profile1} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setLastName(e.target.value)}} type="text" placeholder="Doe" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none" value={lastName}></input>
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
                                <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage("");setEmail(e.target.value)}} type="email" placeholder="jdoe@email.com" className="sm:text-[2.3rem] sm:w-[87%] sm:focus:outline-none" value={email}></input>
                            </div>
                        </div>
                        {/* <div className="sm:h-[5rem] sm:leading-[3rem] sm:text-[2rem] sm:font-medium sm:px-[1.5rem] sm:py-[1rem] sm:shadow-lg">Add another email</div> */}
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
                                <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setCurrentPassword(e.target.value)}} type={visible === 0?'password':''} placeholder="" className="sm:text-[2.3rem] sm:w-[77%] sm:focus:outline-none" value={current_password}></input>
                                <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                            </div>
                        </div>
                        <div className="sm:w-[46%]">
                            <p className="sm:text-[2rem] sm:text-[#828A91] sm:mb-[1rem]">New password</p>
                            <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:rounded-[1rem]">
                                <Image src={unlock} alt="" className="sm:h-[3.5rem] sm:w-auto"></Image>
                                <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setNewPassword(e.target.value)}} type={visible1 === 0?'password':''} placeholder="" className="sm:text-[2.3rem] sm:w-[77%] sm:focus:outline-none" value={new_password}></input>
                                <Image src={visible1 === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible1 === 0?setVisible1(1):setVisible1(0)}}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${!errorMessage?'hidden':''} ${state === 1?'':'hidden'} sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start items-center sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                    <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                    <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                </div>   
                
                <button className={`flex justify-center sm:gap-[1rem] items-center sm:text-[2.5rem] sm:px-[2.5rem] sm:py-[1.3rem] sm:rounded-[1rem] sm:mt-[3rem] primary-btn ${state === 1?'':'hidden'} `} onClick={saveChange}>
                    
                {loading && (
                        <CircularProgress sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                            }}
                            size={21}
                            thickness={4} />
                    )}Save Changes</button>


                <div className={`mt-[6rem] ${state === 2?'':'hidden'} sm:h-[80rem]`}>
                    <div className="flex justify-between items-center">
                        <div className="sm:flex sm:px-[2rem] sm:py-[1.2rem] sm:items-center sm:w-[70%] sm:justify-start sm:gap-[2rem] sm:border-[2px] sm:border-[#F2F3F5] sm:h-[7rem] sm:rounded-[1rem]">
                            <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] sm:w-auto cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                            <input type={visible === 1? "":"password"} placeholder="" className="sm:text-[2.3rem] sm:w-[90%] sm:focus:outline-none" value={user['api_key']}></input>
                        </div>
                        <div className="primary-btn sm:w-[15%] sm:text-[2.5rem] sm:text-center sm:leading-[7rem] sm:rounded-[1rem]">Copy</div>
                        <div className="bg-[#F4F4F4] sm:w-[12%] text-[#828A91] sm:text-[2.5rem] sm:text-center sm:leading-[7rem] sm:rounded-[1rem]">Reset</div>
                    </div>
                </div>

                <div className={`${state === 3 ?'':'hidden'}`}>
                    <div className="sm:flex sm:justify-start sm:gap-[3rem] sm:py-[3rem]">
                        <Request text = "Requests Available" num={98} color = "#449D5D" />
                        <Request text = "Requests used" num = {2} color = "#FDA235" />
                    </div>
                    <p className="sm:text-[3rem] sm:font-semibold">Request history</p>
                    <div className="sm:mt-[3rem]">
                        <div className="sm:flex sm:justify-start sm:px-[4rem] sm:py-[2rem] bg-[#F4F4F4]">
                            <span className="sm:text-[2.3rem] sm:leading-[3rem] sm:font-medium sm:w-[50rem]">ID</span>
                            <span className="sm:text-[2.3rem] sm:leading-[3rem] sm:font-medium sm:w-[50rem]">Created</span>
                        </div>
                        <Cell ID={111111} Created="Nov 12, 2024" view={viewRequest}/>
                        <Cell ID={222222} Created="Nov 12, 2024" view={viewRequest} />
                        <Cell ID={333333} Created="Nov 12, 2024" view={viewRequest} />
                        <Cell ID={444444} Created="Nov 12, 2024" view={viewRequest} />
                        <Cell ID={555555} Created="Nov 12, 2024" view={viewRequest} />
                    </div>
                </div>

                <div className={`${state === 4 ?'':'hidden'} flex flex-col items-center`}>
                <div className="flex sm:p-[0.5rem] p-[1.5rem] sm:mt-[7rem] mt-[20rem] bg-orange-300 border-[1px] border-gray-200 rounded-full">
                    <div className={`sm:text-[1.7rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[1.7rem] px-[6rem] sm:py-[1rem] py-[3rem] rounded-full font-semibold cursor-pointer ${pricing == "monthly"?'bg-white':''}`} onClick={()=>{setPricing("monthly")}}>Monthly billing</div>
                    <div className={`sm:text-[1.7rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[1.7rem] px-[6rem] sm:py-[1rem] py-[3rem] rounded-full font-semibold cursor-pointer ${pricing == "yearly"?'bg-white':''}`} onClick={()=>{setPricing("yearly")}}>Yearly billing</div>
                </div>                
                <div id="pricing" className="sm:mt-[0rem] sm:mb-[13rem] sm:w-full w-[90%] mt-[5rem] mb-[20rem] overflow-auto sm:py-[7rem] px-0 py-[10rem] scroll-smooth">
                    <div className="sm:px-[2rem] flex sm:w-full w-[720rem] sm:gap-[1rem] justify-between">
                       
                    <CardMembership1 title="FREE TRIAL" price={pricing == "monthly"?'0':'0'} description="Get started for 100 requests" allowed={[
                        "100 Requests"
                    ]} unallowed={[
                        "Basic Data Extraction",
                        "Character Limit",
                        "GPT - 4"
                    ]} button="Choose Free Trial" id="trial" type={pricing == "monthly"?'Per month':'Per year'}/>
                    <CardMembership1 title="STARTER"  price={pricing == "monthly"?'9':'90'} description="Great for getting started!" allowed={[
                        "1000 Requests",
                        "250 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4"
                    ]} unallowed={[]} button="Choose Starter" id="starter" type={pricing == "monthly"?'Per month':'Per year'}/>
                    <CardMembership1 title="STANDARD"  price={pricing == "monthly"?'24':'240'} description="Our most popular plan!" allowed={[
                        "2500 Requests",
                        "500 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input"
                    ]} unallowed={[]} button="Choose Standard" standard id="standard" type={pricing == "monthly"?'Per month':'Per year'}/>
                    <CardMembership1 title="PREMIUM" price={pricing == "monthly"?'50':'500'} description="For the power user!" allowed={[
                        "5000 Requests",
                        "1000 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input",
                        "Suggested For Long Form Content"
                    ]} unallowed={[]} button="Choose Premium" id="premium" type={pricing == "monthly"?'Per month':'Per year'}/>

                    </div>
                </div>
                </div>
            </div>

        </div>

        </>
    )
}