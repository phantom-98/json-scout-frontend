'use client';

import { useState } from 'react';
import { Roboto } from "next/font/google"
import { getCookie } from "cookies-next"
import { CircularProgress } from "@mui/material"
import { submitContactForm } from "@/app/backendApis"
import Script from 'next/script';
import erralert from "../../../public/warning-2.svg"
import Image from 'next/image';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [contactType, setContactType] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [subState, setSubState] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const siteKey = "6Lev8MUoAAAAAKp3bYSwQo3lTykrWGHEzGAP1qqd"
  
  const process = async (props: { token: string }) => {
    setLoading(true);
    setIsSubmitted(true);
    const accesstoken = getCookie("access_token")
    if(accesstoken != null) {
      
      const res = await submitContactForm(email, contactType, message, props.token, accesstoken)
      setSubState(res)
    }
    
    setLoading(false);
    
    setTimeout(()=>{setSubState("")}, 3000)
  }
  
  const submitForm = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        setErrorMessage('Please provide a valid email.');
        return;
      }
      
      if (message.length < 150) {
        setErrorMessage('The message must be more than 150 characters.');
        return;
      }

      setErrorMessage('');

      grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, {action: 'submit'}).then(function (token) {
            // Add your logic to submit to your backend server here.
            process({ token: token });
        });
    });
    
  };

  return (<>
    <Script src={`https://www.google.com/recaptcha/api.js?render=6Lev8MUoAAAAAKp3bYSwQo3lTykrWGHEzGAP1qqd`}></Script>
    <div className={`${roboto.className} sm:mb-[10rem] px-[14rem] mb-[18rem] mt-[5%]`}>
      <div className="sm:mx-[27rem] login px-[10rem]  pt-[10rem] pb-[10rem] rounded-[2rem]">
        <div className="sm:text-[3rem] sm:leading-[6rem] sm:mb-[3rem] text-[10rem] leading-[20rem] text-center mb-[10rem] font-semibold">Contact Us</div>
        <div className="sm:mb-[3rem] mb-[8rem]">
          <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Email</p>
          <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[80%]" placeholder="Enter your email" />
          </div>
        </div>
        <div className="sm:mb-[3rem] mb-[8rem]">
          <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Contact Type</p>
          <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
            <select onChange={(e) => setContactType(e.target.value)} className="sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[100%]">
              <option value="">Select...</option>
              <option value="General">General</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>
        <div className="sm:mb-[3rem] mb-[8rem]">
          <p className="sm:text-[2rem] sm:mb-[2rem] font-semibold text-[6rem] mb-[4rem]">Message</p>
          <div className="sm:px-[2rem] sm:py-[1.5rem] sm:rounded-[1rem] sm:gap-[3rem] items-center flex px-[7rem] py-[4rem] gap-[7rem] border-[1px] border-[#F2F3F5] rounded-[4rem]">
            <textarea onChange={(e) => setMessage(e.target.value)} className="sm:text-[2.3rem] sm:leading-[4rem] text-[6.5rem] leading-[10rem] focus:outline-none w-[100%]" placeholder="Enter your message"></textarea>
          </div>
        </div>
        {errorMessage && (
            <div className={`flex justify-center items-center`}>
                <div className={`sm:mb-[3rem] mb-[6rem] sm:rounded-[1rem] rounded-[2rem] flex justify-start sm:gap-[1rem] w-[fit-content] sm:py-[1rem] py-[3rem] sm:px-[2rem] px-[5rem] shadow-lg`}>
                    <span className="text-[#FF2F52] sm:text-[2.5rem] text-[7rem] font-medium sm:leading-[3rem] leading-[8rem]">{errorMessage}</span>
                    <div className="sm:h-[3rem] h-[8rem] sm:w-[3rem] w-[8rem] rounded-full sm:bg-[#FFECEF] flex justify-center items-center"><Image src={erralert} alt="" className="sm:h-[2rem] h-[7rem] w-auto"></Image></div>
                </div>   
            </div>
        )}    
        <button onClick={submitForm} disabled={isSubmitted} className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn`}>
          {loading ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
          {loading && (
            <CircularProgress sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            }}
            size={24}
            thickness={4} />
          )}
        </button>
        {subState && (
          <div className='flex justify-center'>
            <span className='sm:text-[#449D5D] sm:text-[2.3rem] sm:py-[0.8rem] sm:px-[1.5rem] shadow-effect sm:mt-[3rem] rounded-[1rem]'>{subState}</span>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ContactForm;