'use client'
import { CustomCodeBlock } from "@/app/components/CustomCodeBlock/page"
import { Header3 } from "@/app/components/Header3/page"
import { Content } from "@/app/components/content/page"
import { Header1 } from "@/app/components/header1/page"
import { Header2 } from "@/app/components/header2/page"

import { Session1 } from "@/app/components/session1/page"
import { Session2 } from "@/app/components/session2/page"
import { Session3 } from "@/app/components/session3/page"

import React, { useContext, useRef, useState } from "react"
import { Context } from "@/app/components/context/context"
import { Header4 } from "@/app/components/Header4/page"
import { FAQ } from "@/app/components/FAQ/page"

export default (props:any)=> {

    const code1 : string  = `
    /* import requests */
    payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)",
        "content": ["My purchase was made back in january 12, 2012 I am not sure if i am eligible for a refund, but i wold like to kanow", "Date submited; 01/01/2024. i made my purchase 2 weeks ago and wanted to know about warranty information.", "my wife and i bought a new car on jul 1, 2017. we are wondering when the next oil change is due"]}`

    const [order, setOrder] = React.useState(1)

    const {activeHeader, setActiveHeader} = useContext(Context)

    const sidebarRef = useRef<HTMLDivElement>(null);
    const [show, openSidebar] = useState(false);
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


    React.useEffect(()=>{
        setActiveHeader("Docs")
    },[])

    return (
        <>
            <div className="w-full flex justify-between sm:pt-[8rem]">
                <div className={`sm:w-[20%] w-full sm:relative fixed left-0 top-0 bottom-0 bg-[#0007] z-[100] sm:block ${show?"":"hidden"}`}>
                    <div ref={sidebarRef} className={`sm:w-full w-[max-content] h-full bg-white px-[10rem] pt-[20rem] sm:p-0 ${show?"animate-show":"animate-hide"}`}>
                        <Session1 text = "Getting Started" />
                        <Session2 text = "Installation" />
                        <Session2 text = "Installation" />
                        <Session1 text = "Build your application" />
                        <Session2 text = "Installation" />
                        <Session2 text = "Installation" />
                    </div>
                </div>
                <div className="sm:w-[76%] w-full flex justify-between">
                    <div className="sm:w-[75%] w-full">
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
                </div>
            </div>
            <FAQ/>
        </>
    )
}