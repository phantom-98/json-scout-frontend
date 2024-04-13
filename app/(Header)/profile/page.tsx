'use client'
import React, { useContext, useEffect, useRef, useState } from "react"
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
import sms from "../../../public/sms.svg"
import unlock from "../../../public/unlock.svg"
import eye from "../../../public/eye-slash.svg"
import eye1 from "../../../public/visible.svg"
import close from "../../../public/close-circle.png"
import { Request } from "@/app/components/Request/page"
import { Cell } from "@/app/components/Cell/page"
import { useRouter } from "next/navigation"
import { getCookie, setCookie } from "cookies-next"
import { getProfile, reset, updateProfile, reviewMembership, changeMembership, cancelMembership, restartMembership, getRequests, createPortal } from "@/app/backendApis"
import { CardMembership } from "@/app/components/Card/page"
import erralert from "../../../public/warning-2.svg"
import { CircularProgress } from "@mui/material"

import { Pagination } from '@/app/components/Pagination/page'

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CustomCodeBlock } from "@/app/components/CustomCodeBlock/page"

export default (props:any) => {
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
    const [api_key, setApi_Key] = React.useState("")
    const [token_limit, setToken_Limit] = React.useState("")
    const [tokens_used, setTokens_Used] = React.useState("")
    const [batch_limit, setBatch_Limit] = React.useState("")
    const [character_limit, setCharacter_Limit] = React.useState("")
    const [pricing, setPricing] = React.useState("monthly")
    const [apiState, setApiState] = React.useState("")
    const [currentPlan, setCurrentPlan] = useState<string | null>(null);
    const [is_plan_cancelled, setIsPlanCancelled] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [requests, setRequests] = useState([]);
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);

    const [showDialog, setShowDialog] = useState(false);
    const [nextInvoiceDate, setNextInvoiceDate] = useState<string | null>(null);
    const [upcomingChargeAmount, setUpcomingChargeAmount] = useState<string | null>(null);
    const [nextPaymentAmount, setNextPaymentAmount] = useState<string | null>(null);
    const [nextPaymentDate, setNextPaymentDate] = useState<string | null>(null);

    function formatNumber(num: number) {
        if (num >= 1000000) {
          return (num / 1000000).toFixed(2) + 'M';
        } else if (num >= 100000) {
          return (num / 1000).toFixed(2) + 'K';
        } else {
          return num;
        }
    }

    const getUpcomingInvoice = async (price_id: string) => {
        const token = getCookie("access_token");
        if(token != null) {
            const response = await reviewMembership(token, price_id);

            return response;
        } else {
            console.error('No access token found');
        }
    }

    const reviewChangeMembership = async (event: React.MouseEvent, price_id: string) => {

        event.preventDefault();

        const token = getCookie("access_token");
        if(token != null) {
            const result = await reviewMembership(token, price_id);
            if(result !== "Success") {
                console.error('Failed to change membership:', result);
            } else {
                setShowDialog(true); // Show the dialog
            }
        } else {
            console.error('No access token found');
        }
    }

    const confirmChangeMembership = async (event: React.MouseEvent, price_id: string) => {
        event.preventDefault();

        const token = getCookie("access_token"); // Assuming you have a function getCookie to get the access token
        if(token != null) {
          const result = await changeMembership(token, price_id); // Replace 'membership' with the actual membership value
          if(result !== "Success") {
            console.error('Failed to change membership:', result);
          }
        } else {
          console.error('No access token found');
        }
    };

    const viewRequest = (id:number) =>{
        const request = requests.data.find(item => item.id == id);
        setContent(JSON.stringify(request, null, 4));
        setShow(true);
    }

    useEffect(() => {
        settingProfile()

        const token = getCookie("access_token");
        if (token) {
            getRequests(token, currentPage).then(data => setRequests(data));
        }
        
    }, [currentPage])

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

    const cancelPlan = async () => {
        const token = getCookie("access_token"); // Assuming you have a function getCookie to get the access token
        if(token != null) {
          const result = await cancelMembership(token); // Replace with your actual function to cancel the membership
          if(result !== "Success") {
            console.error('Failed to cancel membership:', result);
          } else {
            // Handle successful cancellation
            localStorage.removeItem('current_plan');
            setCurrentPlan(null);
            toast.success('Plan Cancelled Succesfully')
          }
        } else {
          console.error('No access token found');
        }
      };

      const openBillingPortal = async () => {
        const token = getCookie("access_token"); // Assuming you have a function getCookie to get the access token
        if(token != null) {
          const result = await createPortal(token); // Replace with your actual function to create a portal
          if(result) {
            window.location.href = result;
          } else {
            console.error('Failed to create portal:', result);
          }
        } else {
          console.error('No access token found');
        }
      }
      
    const restartSubscription = async () => {
        const token = getCookie("access_token"); // Assuming you have a function getCookie to get the access token
        if(token != null) {
          const result = await restartMembership(token); // Replace with your actual function to create a portal
          
          if (result === 'Success') {
            toast.success('Plan Restarted Succesfully')
          }
        }
      }

    const settingProfile = async () => {
        if(getCookie("access_token")) {
            const token = getCookie("access_token")
            if(token != null) {
                const profile = await getProfile(token)
                if (profile["email"] != null) {
                    Object.keys(profile).forEach((key)=>{
                        localStorage.setItem(key, profile[key])
                    })
                }
            }

            const first = localStorage.getItem("first_name");
            const last = localStorage.getItem("last_name")
            const ema = localStorage.getItem("email")
            const apikey = localStorage.getItem("api_key")
            const characterlimit = localStorage.getItem("character_limit")
            const batchlimit = localStorage.getItem("batch_limit")
            const tokenlimit = localStorage.getItem("token_limit")
            const tokens_used = localStorage.getItem("tokens_used")
            const current_plan = localStorage.getItem("current_plan")
            const is_plan_cancelled = localStorage.getItem('is_plan_cancelled') === 'true';


            if(first != null && last != null && ema != null && apikey != null && characterlimit != null && batchlimit != null && tokenlimit != null && tokens_used != null && is_plan_cancelled != null) {
                setFirstName(first);
                setLastName(last);
                setEmail(ema);
                setApi_Key(apikey);
                setCharacter_Limit(characterlimit);
                setBatch_Limit(batchlimit);
                setToken_Limit(tokenlimit);
                setTokens_Used(tokens_used);
                setIsPlanCancelled(is_plan_cancelled);
                if(current_plan != null) {
                    setCurrentPlan(current_plan);
                } else {
                    setCurrentPlan(null);
                }
            }

            // Get the upcoming invoice data using the current plan
            if (current_plan) {
                const nextInvoiceData = await getUpcomingInvoice(current_plan);

                if (nextInvoiceData) {
                    // Set the nextPaymentAmount and nextPaymentDate
                    setNextPaymentAmount(nextInvoiceData.new_price);
                    setNextPaymentDate(nextInvoiceData.next_invoice_date);
                }
            }

        } else {
            router.push("/login")
        }
    }

    const resetAPI = async () => {
        const token = getCookie("access_token")
        if(token != null) {
            const res = await reset(token)
            console.log(res)
            if(res == "Success") {
                const profile = await getProfile(token)
                const key = profile["api_key"]
                setApi_Key(key)
                setCookie("api_key",key)
                localStorage.setItem("api_key", key)
                setApiState("Api_key has been reset successfully")
                setTimeout(()=>{setApiState("")}, 3000)
            }}
    }

    const sidebarRef = useRef<HTMLDivElement>(null);
    const [opened, openSidebar] = useState(false);
    let X = 10000;
    window.addEventListener("click", (e) => {
        if (e.target !== sidebarRef.current) {
            openSidebar(false);
        }
    });
    window.addEventListener("touchstart", (e) => {
        if (e.changedTouches) {
            X = e.changedTouches[0].pageX;
        }
    }, false)
    window.addEventListener("touchend", (e) => {
        if (e.changedTouches) {
            if (e.changedTouches[0].pageX > X + 100) {
                openSidebar(true);
            } else if (X > e.changedTouches[0].pageX + 100) {
                openSidebar(false);
            }
        }
    }, false);

    return(
        <>
        <div className="flex justify-between sm:mt-[7rem] mt-[-30rem]">
            <div className={`sm:w-[16%] w-full sm:relative fixed left-0 top-0 bottom-0 bg-[#0007] sm:bg-white z-[100] sm:block ${opened?"":"hidden"}`}>
                <div className={`sm:w-full w-[max-content] h-full ${opened?"animate-show":"animate-hide"} bg-white sm:rounded-[2rem] sm:shadow-lg flex flex-col justify-start sm:p-[2rem] sm:gap-[2rem] sm:h-[40rem] px-[8rem] py-[24rem] gap-[10rem]`}>
                    <p className="sm:text-[3rem] font-semibold sm:pl-[1rem] text-[16rem] pl-[6rem]">Settings</p>
                    <div className={`flex items-center justify-start sm:gap-[1rem] gap-[5rem] sm:p-[0.5rem] p-[2rem] cursor-pointer ${state === 1?'bg-[#F4F4F4] text-black':'text-[#828A91]'}`} onClick={()=>{setState(1);setVisible(0);}} >
                        <Image src={state === 1?profile:profile1} alt="" className="sm:h-[3rem] h-[10rem]"></Image>
                        <span className="sm:text-[2.1rem] text-[9rem]">Profile</span>
                    </div>
                    <div className={`flex items-center justify-start sm:gap-[1rem] gap-[5rem] sm:p-[0.5rem] p-[2rem] cursor-pointer ${state === 2?'bg-[#F4F4F4] text-black':'text-[#828A91]'}`} onClick={()=>{setState(2);setVisible(0);}}>
                        <Image src={state === 2?key:key1} alt="" className="sm:h-[3rem] h-[10rem]"></Image>
                        <span  className="sm:text-[2.1rem] text-[9rem]">API Key</span>
                    </div>
                    <div className={`flex items-center justify-start sm:gap-[1rem] gap-[5rem] sm:p-[0.5rem] p-[2rem] cursor-pointer ${state === 3?'bg-[#F4F4F4] text-black':'text-[#828A91]'}`} onClick={()=>{setState(3);setVisible(0);}}>
                        <Image src={state === 3?arrow:arrow1} alt="" className="sm:h-[3rem] h-[10rem]"></Image>
                        <span  className="sm:text-[2.1rem] text-[9rem]">Requests</span>
                    </div>
                    <div className={`flex items-center justify-start sm:gap-[1rem] gap-[5rem] sm:p-[0.5rem] p-[2rem] cursor-pointer ${state === 4?'bg-[#F4F4F4] text-black':'text-[#828A91]'}`} onClick={()=>{setState(4);setVisible(0);}}>
                        <Image src={state === 4?personal:personal1} alt="" className="sm:h-[3rem] h-[10rem]"></Image>
                        <span  className="sm:text-[2.1rem] text-[9rem]">My Plan</span>
                    </div>
                </div>
            </div>
            <div className="sm:w-[77%] w-full sm:pb-[10rem]">
                <div className="sm:pb-[3rem] pb-[4rem] border-b-[1px] border-b-[#EAEAEA] flex items-center sm:gap-[1.5rem] gap-[5rem]">
                    <span className="sm:text-[3rem] text-[9rem] font-semibold">Settings</span>
                    <Image src={arrowright} alt="" className="sm:h-[3rem] h-[8rem]"></Image>
                    <span className="sm:text-[2rem] text-[7rem] text-[#828A91]">{state === 1?'Profile':state === 2?'API Key':state === 3?'Requests':'My Plan'}</span>
                </div>
                
                <div className={`${state === 1?'':'hidden'} sm:mb-[4rem] mb-[12rem]`}>
                    <div className={`border-b-[1px] border-b-[#EAEAEA] justify-start sm:gap-[4rem] sm:py-[4rem] gap-[10rem] py-[10rem]`}>
                        <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-[6rem]">
                            <div className="sm:w-[46%] w-full">
                                <p className="sm:text-[2rem] text-[#828A91] sm:mb-[1rem] text-[11rem] mb-[4rem]">First name</p>
                                <div className="flex sm:px-[2rem] sm:py-[1.2rem] items-center justify-start sm:gap-[2rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] px-[6rem] py-[4rem] gap-[6rem] rounded-[4rem]">
                                    <Image src={profile1} alt="" className="sm:h-[3.5rem] h-[16rem]"></Image>
                                    <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e =>{setErrorMessage(""); setFirstName(e.target.value)} } type="text" placeholder="John" className="sm:text-[2.3rem] text-[12rem] w-full outline-none" value={firstName}></input>
                                </div>
                            </div>
                            <div className="sm:w-[46%] w-full">
                                <p className="sm:text-[2rem] text-[#828A91] sm:mb-[1rem] text-[11rem] mb-[4rem]">Last name</p>
                                <div className="flex sm:px-[2rem] sm:py-[1.2rem] items-center justify-start sm:gap-[2rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] px-[6rem] py-[4rem] gap-[6rem] rounded-[4rem]">
                                    <Image src={profile1} alt="" className="sm:h-[3.5rem] h-[16rem]"></Image>
                                    <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setLastName(e.target.value)}} type="text" placeholder="Doe" className="sm:text-[2.3rem] text-[12rem] w-full outline-none" value={lastName}></input>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className={`border-b-[1px] border-b-[#EAEAEA] sm:py-[4rem] py-[12rem] `}>
                        <p className="sm:text-[2.5rem] text-[12rem] font-medium">Contact email</p>
                        <p className="sm:text-[2rem] text-[8rem] text-[#828A91] sm:mb-[2rem] mb-[3rem]">Manage your accounts email address for the invoices</p>
                        <div className="flex justify-between items-end">
                            <div className="sm:w-[46%] w-full">
                                <p className="sm:text-[2rem] text-[10rem] text-[#828A91] sm:mb-[1rem] mb-[4rem]">Email</p>
                                <div className="flex sm:px-[2rem] sm:py-[1.2rem] items-center justify-start sm:gap-[2rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] px-[6rem] py-[4rem] gap-[6rem] rounded-[4rem]">
                                    <Image src={sms} alt="" className="sm:h-[3.5rem] h-[12rem]"></Image>
                                    <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage("");setEmail(e.target.value)}} type="email" placeholder="jdoe@email.com" className="sm:text-[2.3rem] text-[11rem] w-full outline-none" value={email}></input>
                                </div>
                            </div>
                            {/* <div className="sm:h-[5rem] sm:leading-[3rem] sm:text-[2rem] sm:font-medium sm:px-[1.5rem] sm:py-[1rem] sm:shadow-lg">Add another email</div> */}
                        </div>
                    </div>

                    <div className={`sm:py-[4rem] py-[6rem]`}>
                        <p className="sm:text-[2.5rem] text-[12rem] font-medium">Password</p>
                        <p className="sm:text-[2rem] text-[8rem] text-[#828A91] sm:mb-[2rem] mb-[3rem]">Modify your current password</p>
                        <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-[6rem]">
                            <div className="sm:w-[46%] w-full">
                                <p className="sm:text-[2rem] text-[10rem] text-[#828A91] sm:mb-[1rem] mb-[4rem]">Current password</p>
                                <div className="flex sm:px-[2rem] sm:py-[1.2rem] items-center justify-start sm:gap-[2rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] px-[6rem] py-[4rem] gap-[6rem] rounded-[4rem]">
                                    <Image src={unlock} alt="" className="sm:h-[3.5rem] h-[12rem]"></Image>
                                    <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setCurrentPassword(e.target.value)}} type={visible === 0?'password':''} placeholder="" className="sm:text-[2.3rem] text-[12rem] w-[77%] outline-none" value={current_password}></input>
                                    <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] h-[12rem] cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                                </div>
                            </div>
                            <div className="sm:w-[46%] w-full">
                                <p className="sm:text-[2rem] text-[10rem] text-[#828A91] sm:mb-[1rem] mb-[4rem]">New password</p>
                                <div className="flex sm:px-[2rem] sm:py-[1.2rem] items-center justify-start sm:gap-[2rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] px-[6rem] py-[4rem] gap-[6rem] rounded-[4rem]">
                                    <Image src={unlock} alt="" className="sm:h-[3.5rem] h-[12rem]"></Image>
                                    <input onKeyDown={(e)=>{if(e.key == "Enter") saveChange()}} onChange={e => {setErrorMessage(""); setNewPassword(e.target.value)}} type={visible1 === 0?'password':''} placeholder="" className="sm:text-[2.3rem] text-[12rem] w-[77%] outline-none" value={new_password}></input>
                                    <Image src={visible1 === 0?eye:eye1} alt="" className="sm:h-[3.5rem] h-[12rem] cursor-pointer" onClick={()=>{visible1 === 0?setVisible1(1):setVisible1(0)}}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${!errorMessage?'hidden':''} sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start items-center sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                        <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                        <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                    </div>
                    
                    <button className={`flex justify-center sm:gap-[1rem] gap-[4rem] items-center sm:text-[2.5rem] text-[8rem] sm:px-[2.5rem] px-[8rem] sm:py-[1.3rem] py-[6rem] sm:rounded-[1rem] rounded-[4rem] sm:mt-[3rem] mt-[6rem] primary-btn `} onClick={saveChange}>
                        
                    {loading && (
                            <CircularProgress sx={{
                                color: (theme) =>
                                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                                }}
                                size={21}
                                thickness={4} />
                        )}Save Changes</button>
                </div>


                <div className={`mt-[6rem] ${state === 2?'':'hidden'} sm:h-[80rem]`}>
                    <div className="flex justify-between items-center">
                    <div className="flex sm:px-[2rem] sm:py-[1.2rem] px-[6rem] py-[4rem] items-center w-[74%] justify-start sm:gap-[2rem] gap-[4rem] border-[2px] border-[#F2F3F5] sm:rounded-[1rem] rounded-[4rem] relative">
                        <Image src={visible === 0?eye:eye1} alt="" className="sm:h-[3.5rem] cursor-pointer" onClick={()=>{visible === 0?setVisible(1):setVisible(0)}}></Image>
                        <input type={visible === 1? "text":"password"} placeholder="" className="sm:text-[2.3rem] text-[10rem] w-[94%] outline-none" value={api_key} readOnly></input>
                        <div className="sm:mt-[5rem] flex justify-center absolute left-[36%] bottom-[-120%]">
                            {apiState && (<span className="text-[#449D5D] sm:text-[2.5rem] text-[8rem] font-medium text-center sm:py-[1rem] sm:px-[2rem] sm:rounded-[1rem] py-[3rem] px-[5rem] rounded-[4rem] shadow-effect ">{apiState}</span>)}
                        </div>
                    </div>
                    <CopyToClipboard text={api_key} onCopy={(text, result) => {setApiState("Copied to clipboard");setTimeout(()=>{setApiState("")}, 2000)}}><div className="primary-btn w-[12%] sm:text-[2.5rem] text-[6rem] cursor-pointer text-center sm:leading-[7rem] leading-[23rem] sm:rounded-[1rem] rounded-[4rem]" onClick={()=>{ }}>Copy</div></CopyToClipboard>
                        <div className="bg-[#F4F4F4] w-[12%] text-[#828A91] cursor-pointer sm:text-[2.5rem] text-[6rem] text-center sm:leading-[7rem] leading-[23rem] sm:rounded-[1rem] rounded-[4rem] reset-button" onClick={()=>{resetAPI()}}>Reset</div>
                    </div>
                </div>

                <div className={`${state === 3 ?'':'hidden'}`}>
                    <div className="flex justify-start sm:gap-[3rem] sm:py-[3rem] gap-[6rem] py-[9rem]">
                        <Request text = "Tokens Available" num = {formatNumber(Number(token_limit) - Number(tokens_used))} color = "#449D5D" />
                        <Request text = "Batch Limit" num = {Number(batch_limit)} color = "#FDA235" />
                        <Request text = "Character Limit" num = {Number(character_limit)} color = "#FDA235" />
                    </div>
                    <p className="sm:text-[3rem] text-[12rem] font-semibold">Request history</p>
                    <div className="sm:mt-[3rem] mt-[8rem]">
                        <div className="flex justify-start sm:px-[4rem] p-[4rem] sm:py-[2rem] bg-[#F4F4F4] sm:text-[2.3rem] sm:leading-[3rem] text-[10rem] leading-[18rem] font-medium">
                            <span className="sm:w-[50rem] w-[28rem]">ID</span>
                            <span className="sm:w-[50rem]">Date Created</span>
                        </div>

                        {Array.isArray(requests.data) && requests.data.map((request: any) => (
                            <Cell ID={request.id} Created={request.date_created} view={viewRequest} />
                        ))}

                        <Pagination start={currentPage * 10 - 9} size={requests.items_per_page} total={requests.total_items} onNext={() => {
                            currentPage < requests.total_pages && setCurrentPage(currentPage + 1);
                        }} onPrevious={() => {
                            currentPage > 1 && setCurrentPage(currentPage - 1);
                        }}/>
                    </div>
                    <ViewDetails content={content} setContent={setContent} show={show} setShow={setShow}/>
                </div>

                <div className={`${state === 4 ?'':'hidden'}`}>
                    {currentPlan && (
                        <div className="flex flex-col bg-white shadow-md rounded-lg py-6 px-12 mt-6">
                            <h2 className="sm:text-[2.4rem] text-[10rem] font-bold mb-4">Billing Summary</h2>
                            <div className="sm:text-[2rem] text-[8rem] mb-2">
                                <span className="font-medium">Your next payment</span>
                                <span className="block">${nextPaymentAmount} Due By {nextPaymentDate}</span>
                            </div>
                            
                            <div className="flex flex-row justify-end items-center sm:gap-[1rem] sm:text-[1.8rem] text-[6rem] gap-[2rem]">
                                <button onClick={openBillingPortal} className="bg-[#FF8132] text-white sm:py-2 sm:px-4 px-12 py-8 rounded-[4px] hover:bg-[#FDA235] transition duration-200 ease-in-out">
                                    Billing Portal
                                </button>

                                {is_plan_cancelled ? (
                                    <button onClick={restartSubscription} className="bg-green-500 text-white sm:py-2 sm:px-4 px-12 py-8 rounded-[4px] hover:bg-green-600 transition duration-200 ease-in-out">
                                        Restart Subscription
                                    </button>
                                ) : (
                                    <button onClick={cancelPlan} className="bg-red-500 text-white sm:py-2 sm:px-4 px-12 py-8 rounded-[4px] hover:bg-red-600 transition duration-200 ease-in-out">
                                        Cancel Plan
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col items-center">

                        <div className="flex sm:p-[0.5rem] p-[1.5rem] sm:mt-[7rem] mt-[20rem] bg-gray-200 border-[1px] border-gray-200 shadow-effect rounded-[0.7rem]">
                            <div className={`sm:text-[1.7rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[1.7rem] px-[6rem] sm:py-[1rem] py-[3rem] rounded-[0.7rem] font-semibold cursor-pointer ${pricing == "monthly"?'bg-[#FF8132] text-white':'text-[#828A91]'}`} onClick={()=>{setPricing("monthly")}}>Monthly billing</div>
                            <div className={`sm:text-[1.7rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[1.7rem] px-[6rem] sm:py-[1rem] py-[3rem] rounded-[0.7rem] font-semibold cursor-pointer ${pricing == "yearly"?'bg-[#FF8132] text-white':'text-[#828A91]'}`} onClick={()=>{setPricing("yearly")}}>Yearly billing</div>
                        </div>                
                        <div className="scroll-bar-step flex justify-around sm:gap-16 gap-[8rem] sm:mt-[3rem] sm:mb-[13rem] sm:w-full w-[90%] mt-[5rem] mb-[20rem] sm:py-[7rem] px-16 py-[10rem]">
                            {/* <div className="sm:px-[2rem] flex sm:w-full w-[720rem] sm:gap-[1rem] justify-between"> */}

                                <CardMembership
                                    className="w-[33%]"
                                    title="STARTER"  price={pricing == "monthly"?'9':'99'} description="Great for getting started!" link="/" allowed={[
                                    "100,000 Tokens",
                                    "Basic Data Extraction",
                                    "250 Character Limit",
                                ]} unallowed={[
                                    "Batch Processing"
                                ]} 
                                isCurrentPlan={currentPlan === 'price_1OSAI4GiLNj7uqwLT22xq8Ay' || currentPlan === 'price_1OSAI4GiLNj7uqwLH8uZPlTt'}
                                button="Choose Starter" id="starter" type={pricing == "monthly"?'/ Month':'/ Year'} 
                                onClick={(event) => reviewChangeMembership(event, pricing == "monthly" ? 'price_1OSAI4GiLNj7uqwLT22xq8Ay' : 'price_1OSAI4GiLNj7uqwLH8uZPlTt')} />
                                <CardMembership 
                                    className="w-[33%]"
                                    title="STANDARD"  price={pricing == "monthly"?'99':'1,089'} description="Our most popular plan!" link="/" allowed={[
                                    "4M Tokens",
                                    "Basic Data Extraction",
                                    "500 Character Limit",
                                    "100 Batch Limit"
                                ]} unallowed={[]} 
                                isCurrentPlan={currentPlan === 'price_1Oja8kGiLNj7uqwLYaZTwdu0' || currentPlan === 'price_1Oja95GiLNj7uqwL3RkUYDt5'}
                                button="Choose Standard" standard id="standard" type={pricing == "monthly"?'/ Month':'/ Year'} 
                                onClick={(event) => reviewChangeMembership(event, pricing == "monthly" ? 'price_1Oja8kGiLNj7uqwLYaZTwdu0' : 'price_1Oja95GiLNj7uqwL3RkUYDt5')} />
                                <CardMembership 
                                    className="w-[33%]"
                                    title="PREMIUM" price={pricing == "monthly"?'499':'5,489'} description="For the power user!" link="" allowed={[
                                    "20M Tokens",
                                    "Basic Data Extraction",
                                    "1000 Character Limit",
                                    "500 Batch Limit",
                                ]} unallowed={[]}
                                isCurrentPlan={currentPlan === 'price_1OjaAMGiLNj7uqwL0N9JQYOm' || currentPlan === 'price_1OjaAUGiLNj7uqwLK0Bmu8Vm'}
                                button="Choose Premium" id="premium" type={pricing == "monthly"?'/ Month':'/ Year' } 
                                onClick={(event) => reviewChangeMembership(event, pricing == "monthly" ? 'price_1OjaAMGiLNj7uqwL0N9JQYOm' : 'price_1OjaAUGiLNj7uqwLK0Bmu8Vm')} />

                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const ViewDetails = (props:{show: boolean, setShow: Function, content: string, setContent: Function}) => {
    const ref = useRef();
    window.onclick = (e) => {
        if (e.target == ref.current) {
            props.setShow(false);
            props.setContent("");
        }
    }
    return (
        <div ref={ref} className={`${props.show?"[display:block]":"[display:none]"} fixed z-[100] left-0 top-0 right-0 bottom-0 bg-[#0007]`}>
            <div className={`mx-auto sm:my-[8%] my-[16%] bg-white sm:w-1/2 w-10/12 rounded-[16px] relative`}>
                <CustomCodeBlock className="w-full" code={props.content} leftTitle="JSON" centerTitle="Request Details" loading={!props.content}/>
                <Image onClick={() => {
                    props.setShow(false);
                    props.setContent("");
                }} src={close} alt="" className="absolute top-0 right-0 sm:m-[1.4rem] sm:w-[3rem] m-[7.2rem] w-[12rem]"/>
            </div>
        </div>
    );
}