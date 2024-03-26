'use client';

import { useState } from 'react';
import { Roboto } from "next/font/google"
import { getCookie } from "cookies-next"
import { CircularProgress } from "@mui/material"
import { submitContactForm } from "@/app/backendApis"
import { useRef } from 'react';
import Script from 'next/script';
import { access } from 'fs';

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

  const siteKey = "6Lev8MUoAAAAAKp3bYSwQo3lTykrWGHEzGAP1qqd"
  
  
  const process = async (props: { token: string }) => {
    setLoading(true);
    const accesstoken = getCookie("access_token")
    if(accesstoken != null) {
      
      const res = await submitContactForm(email, contactType, message, props.token, accesstoken)
      setSubState(res)
    }
    
    setLoading(false);
    
    setTimeout(()=>{setSubState("")}, 3000)
  }

  
  
  
  const submitForm = async () => {

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

        <button onClick={submitForm} className={`flex justify-center sm:gap-[4rem] gap-[8rem] items-center sm:text-[2.7rem] sm:px-[2rem] sm:py-[1rem] sm:leading-[6rem] sm:rounded-[1rem] text-[9rem] w-full leading-[11rem] py-[5rem] rounded-[3rem] primary-btn`}>
          {loading && (
            <CircularProgress sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            }}
            size={24}
            thickness={4} />
        )}Submit</button>
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