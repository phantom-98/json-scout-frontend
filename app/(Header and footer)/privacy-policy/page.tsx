'use client'
import { Header3 } from "@/app/components/Header3/page"
import { Header4 } from "@/app/components/Header4/page"
import { Content } from "@/app/components/content/page"
import { Header1 } from "@/app/components/header1/page"
import { Question } from "@/app/components/question/page"
import React from "react"

import minus from "../../../public/minus.svg"
import plus from "../../../public/Group 1000001523.svg"
import { Context } from "@/app/components/context/context"
import { useContext } from "react"

import { Space_Grotesk } from "next/font/google";


const space_grotesk = Space_Grotesk({ subsets: ["latin"] });




export default () => {

    const {logState} = useContext(Context)
    const [order, setOrder] = React.useState(1)


    return (
        <>
            <div className="sm:w-[60%] sm:pt-[6rem]">
                <Header1 text = "Privacy policy" />
                <Header4 text = "Welcome to JSONScout privacy policy!" />
                <Content text = "Thank you for choosing JSON Scout API ('Service') offered by JSON Scout. This Privacy Policy outlines how we collect, use, disclose, and protect information when you use our API. By using the JSON Scout API, you agree to the terms of this Privacy Policy." />
                
                <Header3 text = "1. Information We Collect" />
                <Content text = "1.1 User Data: We may collect information that you provide when you use the JSON Scout API, including but not limited to your contact information, billing details, and any other information required for the provision of our Service." />
                <Content text = "1.2 API Usage Data: We may collect data related to your usage of the JSON Scout API, such as API requests, responses, and error logs. This information is used to ensure the proper functioning of the API and to improve our Service." />
                <Content text = "1.3 Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your interactions with our website and API. This information helps us enhance your experience and improve the performance of our Service." />
                
                <Header3 text = "2. How We Use Your Information" />
                <Content text = "2.1 Service Provision: We use the information collected to provide, maintain, and improve the JSON Scout API, as well as to deliver customer support." />
                <Content text = "2.2 Communication: We may use your contact information to send you important updates, announcements, and promotional materials related to the JSON Scout API. You can opt out of promotional communications at any time." />
                <Content text = "2.3 Billing: We use your billing information to process payments for subscription fees and other charges related to your use of the JSON Scout API." />
                
                <Header3 text = "3. Information Sharing and Disclosure" />
                <Content text = "3.1 Third-Party Service Providers: We may share your information with third-party service providers who assist us in delivering, maintaining, and improving the JSON Scout API. These service providers are bound by confidentiality agreements and are not permitted to use your information for any purpose other than providing services to us." />
                <Content text = "3.2 Legal Compliance: We may disclose your information if required by law or in response to a valid legal request, such as a court order or subpoena." />
                
                <Header3 text = "4. Data Security" />
                <Content text = "We take reasonable measures to protect the security of your information. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security." />
                
                <Header3 text = "5. Your Rights" />
                <Content text = "You have the right to access, correct, or delete your personal information. If you have any questions about the information we hold or would like to exercise your rights, please contact us at contact@jsonscout.com." />
                
                <Header3 text = "6. Changes to Privacy Policy" />
                <Content text = "We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy regularly." />
                
                <Header3 text = "7. Contact Information" />
                <Content text = "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at contact@jsonscout.com." />
                <Content text = "By using the JSON Scout API, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Service." />
            </div>
            <p className={`${logState?'sm:pt-[15rem]':'sm:pt-[15rem]'} sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>

            <div className="sm:mt-[9rem] sm:items-center sm:flex-row sm:px-[10rem] sm:gap-[4rem] flex flex-col justify-start gap-[6rem] px-[20px] mt-[18rem] mb-[12rem]">
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." n = {1} selected = {order} change={setOrder}/>
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." n = {2} selected = {order} change={setOrder} />
                    
                </div>
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." n = {3} selected = {order} change={setOrder} />
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." n = {4} selected = {order} change={setOrder} />
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." n = {5} selected = {order} change={setOrder} />
                </div>
            </div>
        </>
    )
}