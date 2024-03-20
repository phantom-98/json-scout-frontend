'use client'
import { CustomCodeBlock } from "@/app/components/CustomCodeBlock/page"
import { Header3 } from "@/app/components/Header3/page"
import { Content } from "@/app/components/content/page"
import { Header1 } from "@/app/components/header1/page"
import { Header2 } from "@/app/components/header2/page"
import { Question } from "@/app/components/question/page"
import { Session1 } from "@/app/components/session1/page"
import { Session2 } from "@/app/components/session2/page"
import { Session3 } from "@/app/components/session3/page"
import plus from "../../../public/Group 1000001523.svg"
import minus from "../../../public/minus.svg"
import React, { useContext } from "react"
import { Space_Grotesk } from "next/font/google"
import { Context } from "@/app/components/context/context"
import { Header4 } from "@/app/components/Header4/page"


const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default (props:any)=> {

    const code1 : string  = `
    /* import requests */
    payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)",
        "content": ["My purchase was made back in january 12, 2012 I am not sure if i am eligible for a refund, but i wold like to kanow", "Date submited; 01/01/2024. i made my purchase 2 weeks ago and wanted to know about warranty information.", "my wife and i bought a new car on jul 1, 2017. we are wondering when the next oil change is due"]}`

    const [order, setOrder] = React.useState(1)

    const {activeHeader, setActiveHeader} = useContext(Context)


    React.useEffect(()=>{
        setActiveHeader("Docs")
    },[])

    


    return (
        <>
            <div className="w-full flex justify-between sm:pt-[8rem]">
                <div className="w-[20%]">
                    <Session1 text = "Getting Started" />
                    <Session2 text = "Installation" />
                    <Session2 text = "Installation" />
                    <Session1 text = "Build your application" />
                    <Session2 text = "Installation" />
                    <Session2 text = "Installation" />
                </div>
                <div className="w-[76%] flex justify-between">
                <div className="sm:w-[75%]">
                    <Header1 text = "Introduction" />
                    <Header4 text = "Welcome to JSONScout Documentation!" />
                    <Header2 text = "What is JSONScout?" />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <div className="sm:mt-[10rem] sm:mb-[8rem]"><CustomCodeBlock code = {code1} centerTitle="New Method" leftTitle="EXAMPLE" rightTitle={["CURL", "node.js", "python"]}/></div>
                    <Header2 text = "What is JSONScout?" />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <Content text = "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift." />
                    <Header3 text = "Easy steps" />
                    <Content text = "JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it" />
                    
                    
                
                
                
                
                
                </div>
                <div className="w-[fit-content]]">
                    <Session1 text = "On this page" />
                    <Session3 text = "Whats is JSONScout?" selected = {true} />
                    <Session3 text = "Main Features" selected = {false} />
                    <Session3 text = "How to Use These Docs" selected = {false} />
                    <Session3 text = "Pre-Requisite Knowledge" selected = {false} />
                    <Session3 text = "Accessibility" selected = {false} />
                    <Session3 text = "Join our Community" selected = {false} />
                </div>
                </div>
            </div>
            <p className={`sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>
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