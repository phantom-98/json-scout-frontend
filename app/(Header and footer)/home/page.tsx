'use client'
import Image from "next/image"
import { Space_Grotesk } from "next/font/google";
import { Manrope } from "next/font/google";
import frame17 from "../../../public/Frame 17.svg"
import vector3 from "../../../public/Vector 3.svg"
import vector4 from "../../../public/Vector 4.svg"
import frame18 from "../../../public/Frame 18.svg"
import frame19 from "../../../public/Frame 19.svg"
import frame355 from "../../../public/Frame 355.png"
import highlightO from "../../../public/Highlight_05.svg"
import highlight1 from "../../../public/Highlight_05 (1).svg"
import highlight from "../../../public/Highlight_05 (2).svg"
import frame117 from "../../../public/Frame 117.svg"
import frame191 from "../../../public/Frame 119(2).svg"
import frame1192 from "../../../public/Frame 119 (1).svg"
import frame1193 from "../../../public/Frame 119(3).svg"
import frame1194 from "../../../public/Frame 118.svg"
import check from "../../../public/CheckMark.svg"
import laby from "../../../public/lyn.svg"
import { CustomCodeBlock } from "../../components/CustomCodeBlock/page";
import plus from "../../../public/Group 1000001523.svg"
import { Step } from "../../components/Step/page";
import { Card, CardCan, CardMembership } from "../../components/Card/page";
import minus from "../../../public/minus.svg"
import React, { useContext, useEffect } from "react";
import { Question } from "../../components/question/page";
import { Context, useAuth } from "@/app/components/context/context";
import Link from "next/link";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
const manrop = Manrope({ subsets: ["latin"]})

const jsonSnippet: string =`
payload = {
    "api_key": "secret_key",
    "desired_output": "date_purchased (mm-dd-yyyy)"
    "content": [
        "My purchase was made back in janary 12, 2012. i am not sure if i am eligible for a refund, but i would like to know."
    ]
    "output": "json": {
        "classification": "Purchase Inquiry",
        "date_purchased": "01-12-2012",
    }
}
`;

const oldMethodSnippet: string = `
import re, datetime
content = "My purchase was made back in january 12, 2012. I am not sure if I am eligible for a refund, but I would like to know.",
/* Create the REGEX pattern */
date_pattern = r'[a-zA-Z]+\s\d{1,2},\s\d{4}'
/* Grab the date from the content*/
date = re.search(date_pattern, content).group(0)
/* Convert the date to a datetime object */
date_object = datetime.datetime.strptime(date, '%B %d, %Y').date()
date_string_1 = date_object.strftime('%m-%d-%Y')
`;

const newMethodSnippet: string = `
import requests, json
url = "https://fetch.jsonscout.com/"
payload = json.dumps({
    "desired_output": "date_purchased (mm-dd-yyyy)"
    "content": "My purchase was made back in january 12, 2012. I am not sure if I am eligible for a refund, but I would like to know."
})
headers = {
    'Content-Type': 'application/json',
    'api_key': 'secret_key'
}
response = requests.request("POST", url, headers=headers, data=payload)
`;

const  codeLeft: string[] = [
    `
payload = {
    "api_key": "secret_key",
    "desired_output": "date_purchased (mm-dd-yyyy)"
    "content": [
        "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
        "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
    ]
}
    `,
    `
payload = {
    "api_key": "secret_key",
    "desired_output": "address, apt_number, city, state, zip"
    "content": "5123 Queens West, #123, New York, New York, 10001"
}
    `,
    `
payload = {
    "api_key": "secret_key",
    "desired_output": "product, sentiment (good or bad), improvements"
    "content": "I've been using the Galaxy Explorer Smartwatch for about two weeks now, and I'm mostly impressed. The battery life is incredible, easily lasting three days on a single charge, even with heavy use. However, the touchscreen responsiveness leaves a lot to be desired. It often takes several taps to register an action, which can be quite frustrating. The fitness tracking features are spot on, providing accurate readings and a great variety of workouts. But, the watch band feels cheap and started showing signs of wear already. I wish there were more customization options for the watch faces. Overall, it's a good watch, but there's definitely room for improvement."
}
    `,
    `
payload = {
    "api_key": "secret_key",
    "desired_output": "first_name, email"
    "content": "hey, im reaching out to you about my recent purchase, it was for a microwave and i am having some issues with it. my email is johndoe@gmail.com, thanks john."
}
    `,
    `
payload = {
    "api_key": "secret_key",
    "desired_output": "upc, lot_code, expiration_date, complaint"
    "content": "good day, i bought a pack of tea bags on january 12, 2012 and they taste burnt. the lot is 1234 and exp date is 12-12-2024."
}
    `,
]

const codeRight:string[] = [
    `
"data": 
    {
        "classification": "Inquiry",
        "date_purchased": "01-12-2012",
        "date_returned": ""
    },
    {
        "classification": "Inquiry",
        "date_purchased": "12-18-2023",
        "date_returned": ""
    }
"tokens_remaining": 999
    `,
    `
"data":
    {
        "address_1": "5123 Queens West",
        "apt_num": "123",
        "city": "New York",
        "classification": "residential",
        "state": "New York",
        "zip": "10001"
    }
"tokens_remaining": 999
    `,
    `"data": {
        "classification": "review",
        "improvements": [
            "touchscreen responsiveness",
            "durability of the watch band",
            "customization options for the watch faces"
        ],
        "product": "Galaxy Explorer Smartwatch",
        "sentiment": "good"
    },
"tokens_remaining": 999
    `,
    `
"data": 
    {
        "classification": "product issue",
        "email": "johndoe@gmail.com",
        "first_name": "John"
    }
"tokens_remaining": 999
    `,
    `
"data": 
    {
        "classification": "quality issue",
        "complaint": "they taste burnt",
        "expiration_date": "12-12-2024",
        "lot_code": "1234",
        "upc": ""
    }
"tokens_remaining": 999
    `,
] 




export const Home = (props : any) => {

    const [num, setNum] = React.useState(0) 
    

    const {user, setUser} = useAuth()


    const [order, setOrder] = React.useState(1)

    const [pricing, setPricing] = React.useState("monthly")

    const {activeHeader, setActiveHeader, logState, setLogState} = useContext(Context)

    React.useEffect(()=>{
        

    },[])

    const home = async () => {

        

    }
    

    return (
        <>
            {!logState && (
                <>
                    <div className="my-[10rem] sm:mb-[2.8rem] sm:mt-[8rem]">
                <span className="text-[8rem] leading-[5rem] px-[8rem] py-[4rem] sm:px-[2.4rem] sm:py-[1.6rem] sm:text-[2rem] rounded-full font-semibold text-[#449D5D] shadow-lg">Register for a free 2,000 tokens!</span>
            </div>
            <div className="mt-[10rem] sm:mt-[2rem] sm:flex sm:justify-between">
                
                <div className="sm:w-1/2 w-full">
                    <div className="">
                        <div className={`text-[22rem] leading-[32rem] sm:text-[7rem] sm:leading-[10rem] font-bold text-wrap ${space_grotesk.className}`}>
                           <span className="mr-12 px-2 sm:px-0 sm:mr-0">Escape the</span>  <span className=" text-[#FDA235] bg-[#ffcbb7c9] px-4 rounded-[1.6rem] mr-0">Regex </span>
                           <span className="relative">
                                Labyrinth
                                <Image src={laby} alt="laby" className="absolute left-0"/>
                            </span>.
                        </div>
                        <div className="mt-[6rem] text-[8rem] leading-[18rem] font-normal sm:mt-[2rem] sm:text-[1.8rem] sm:leading-[5rem] text-[#828A91] sm:w-[80%] sm:text-wrap">
                        In the digital age, data is your most valuable asset, but extracting it can be a labyrinth of complexity. JSON Scout is your guide, cutting through the maze with the power of LLMs to deliver the insights you need.
                        </div>
                    </div>
                    <div className="gap-[10rem] mt-[19rem] sm:mt-[6rem] flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-[4rem]">
                        <Link href={"/register"}>
                            <button className="text-[10rem] leading-[14rem] w-full sm:w-auto rounded-[8px] py-[8rem] sm:text-[2rem] sm:leading-[4rem] sm:px-[5rem] sm:py-[2rem] primary-btn  font-semibold ">Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:block sm:relative sm:font-normal relative">
                    
                    <CustomCodeBlock  code={`/* Clean and extract your desired fields */` + jsonSnippet} leftTitle="" centerTitle="Example"/>
                    
                    <div className="p-[4rem] bg-white shadow-lg font-semibold absolute left-[-35%] bottom-[-25%] rounded-[2rem] flex flex-col justify-between gap-10">
                        <h1 className="text-[2.8rem] text-center">Our Advantages</h1>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Scale with Ease</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Automatic Data Cleaning</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Custom Formats</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">No more REGEX</span>
                        </div>
                    </div>
                    <Image src={highlight} alt="" className="absolute left-[-45%] bottom-[-35%] w-[14%] h-auto"/>
                </div>
            </div> 

            <div className="mt-[80px] sm:mt-[16rem] text-center">
                <div className="py-[10rem] flex flex-col items-center">
                    <p className={`text-[20rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>Step By Step</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[52%] sm:leading-[6rem] text-[#828A91] text-wrap">
                        JSON Scout saves development time and maintenance by leveraging the power of LLMs to extract the data you need with human-like precision.
                    </p>
                </div>
                <div className="sm:flex sm:justify-between">
                    <Step font={space_grotesk.className} no="1" img={frame17} title="Define Your Output" description="Tell JSON Scout what information you are looking to extract"/>
                    
                    <div className="my-[11em] sm:my-[0] relative h-[23rem] sm:w-[5%] sm:h-auto">
                        <Image src={vector3} alt="vector3" className="sm:w-[75%] sm:h-[75%] sm:left-[12.5%] sm:top-[-7%]  absolute h-[46rem] w-auto right-[5rem] -top-[11.5rem] sm:right-[5px] sm:rotate-90 "></Image>
                    </div>
                
                    <Step font={space_grotesk.className} no="2" img={frame18} title="Input Your Content" description="Provide your content"/>
                    
                    <div className="my-[11em] sm:my-[0]  relative h-[23rem] sm:w-[5%] sm:h-auto">
                        <Image src={vector4} alt="vector3" className=" sm:w-[75%] sm:h-[60%] sm:left-[12.5%] sm:top-[-7%] absolute h-[46rem] -top-[11.5rem] w-auto left-[5rem] sm:rotate-90 "></Image>
                    </div>
                    
                    <Step font={space_grotesk.className} no="3" img={frame19} title="Fetch Insights" description="JSON Scout processes your input and returns the structured data you need"/>
                    
                </div>
            </div>
                </>
            )}

            <div id="how" className={`items-center mx-[-12rem] px-[12%] sm:mx-[-20%] sm:py-[10rem] sm:pb-[15rem] sm:gap-[10rem] bg-[#F9FAFC] ${logState?'sm:mt-0 sm:pt-[9rem]':' sm:pt-[15rem] sm:mt-[15rem]'} mt-[96px] py-[80px] flex flex-col justify-center gap-[25rem] relative`}>
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[20rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>{logState?'Fetch Insights':'How It Works'}</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[58%] sm:leading-[6rem] text-[#828A91] text-wrap">{logState?'You can test how json scout works by inserting an input and you will receive an input with the result.':'Click through the different examples of data that JSON Scout is able to process'}</p>
                </div>
                {!logState && (<div className="w-full text-[7rem] leading-[7rem] font-semibold flex flex-col justify-center gap-[7rem] sm:flex-row sm:justify-center sm:gap-[4rem] sm:text-[13px] sm:leading-[13px] ">
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button onClick={()=>{setNum(0)}} className={`sm:text-[3rem] sm:w-[fit-content] w-[47%] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 0?'lorem-button':'unlorem-button'}`}>Dates</button>
                        <button onClick={()=>{setNum(1)}} className={`sm:text-[3rem] sm:w-[fit-content] w-[47%] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 1?'lorem-button':'unlorem-button'}`}>Addresses</button>
                    </div>
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button onClick={()=>{setNum(2)}} className={`sm:text-[3rem] sm:w-[fit-content] w-[30%] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 2?'lorem-button':'unlorem-button'}`}>Reviews</button>
                        <button onClick={()=>{setNum(3)}} className={`sm:text-[3rem] sm:w-[fit-content] w-[30%] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 3?'lorem-button':'unlorem-button'}`}>Customer Info</button>
                        <button onClick={()=>{setNum(4)}} className={`sm:text-[3rem] sm:w-[fit-content] w-[30%] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 4?'lorem-button':'unlorem-button'}`}>Product Info</button>
                    </div>
                </div>)}
                    
                <div className="flex flex-col items-center justify-between gap-[12rem] sm:flex-row sm:gap-[16px] sm:h-[56rem]">
                    <CustomCodeBlock leftTitle="INPUT" centerTitle="" code={codeLeft[num]}/>
                    <Image src={frame355} alt="frame355" className="xl:w-[5%] lg:top-[710px] w-[16rem] h-auto sm:w-[8%] md:w-[6%]"></Image>
                    <CustomCodeBlock leftTitle="OUTPUT" centerTitle=""code={codeRight[num]}/>
                </div>
                <button className={`sm:text-[2rem] sm:px-[6rem] sm:py-[1.4rem] px-[20px] py-[10px] rounded-[8px] text-[8rem] font-semibold primary-btn ${logState?'sm:block':'sm:hidden'}`}>Process</button>
                <Image src={highlightO} alt="highlight" className={`hidden sm:block absolute sm:left-[20rem] ${logState?'sm:top-[35rem]':'sm:top-[30rem]'}  w-[4%] h-auto`}></Image>
                <Image src={highlight1} alt="highlight" className={`hidden sm:block absolute sm:right-[20rem] ${logState?'sm:top-[100rem]':'sm:top-[122rem]'}  w-[4%] h-auto`}></Image>
            </div>

            {!logState && (
                <>
                    <div className="sm:flex-row sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] mt-[48px]">
                <Card title="Old way of doing it;" font={`${space_grotesk.className}`} body={[
                    "The old way of extracting specific data requires you to create a REGEX pattern for a specific data format.",
                    "This process is time-consuming and requires constant maintenance to keep up with changing data formats. Keep in mind, it won't consider typos.",
                    "JSON Scout eliminates the need for REGEX patterns, saving you time and effort."
                ]}/>
                <CustomCodeBlock leftTitle="EXAMPLE" centerTitle="Old Method" code={oldMethodSnippet}/>
            </div>

            <div className="sm:flex-row-reverse sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] mt-[48px]">
                <Card title="New way using JSON Scout;" font={`${space_grotesk.className}`} body={[
                    "With JSON Scout you can extract data without the need for REGEX patterns.",
                    "Simply provide the desired output and JSON Scout will handle the rest.",
                    "JSON Scout is more accurate and efficient than REGEX, saving you time and effort."
                ]} button/>
                <CustomCodeBlock leftTitle="EXAMPLE" centerTitle="New Method" code={newMethodSnippet}/>
            </div>

            <div className="sm:mt-[12rem] mt-[36rem]">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[14rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>With JSON Scout You Can</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[76%] sm:leading-[6rem] text-[#828A91] text-wrap">Stop the endless cycle of writing and rewriting complex regex. JSON Scout intuitively understands and locates the data you need with human-like precision.</p>
                </div>

                <div className="sm:mt-[70px] mt-[32rem] flex flex-col justify-center gap-[70px]">
                    <div className="sm:flex-row sm:justify-between sm:gap-0 flex flex-col justify-center gap-[70px]">
                        <CardCan font={`${manrop.className}`} img={frame117} title="Expand beyond limits" description="Regex has its limits. JSON Scout adapts to your evolving data needs, understanding context and semantics, not just patterns."/>
                        <CardCan font={`${manrop.className}`} img={frame191} title="Boost Productivity" description="Redirect your valuable time and talent from the tedium of pattern matching to strategic initiatives that drive your business forward."/>
                        <CardCan font={`${manrop.className}`} img={frame1192} title="Future-Proof" description="As your data grows and changes, JSON Scout evolves with it, continuously learning from interactions to provide more accurate extractions."/>
                    </div>
                    <div className="sm:flex-row sm:justify-center sm:gap-[5%] flex flex-col justify-center gap-[70px]">                        
                        <CardCan font={`${manrop.className}`} img={frame1194} title="API Integration" description="Seamlessly integrate JSON Scout into your existing data pipeline, whether you're using Python, Node.js, or any other language."/>
                        <CardCan font={`${manrop.className}`} img={frame1193} title="Batch Processing" description="Our API is built for scale, whether you're processing a few requests or hundreds. JSON Scout is designed to fit seamlessly into your existing data pipeline."/>
                    </div>
                </div>
            </div>

            <div id="pricing" className="sm:pt-[15rem] sm:mt-0 mt-[36rem] flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[14rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>Simple Pricing For Everyone</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:leading-[6rem] text-[#828A91] text-wrap">Choose a pricing plan that suites your needs.</p>
                </div>

                <div className="flex sm:p-[0.5rem] p-[1.5rem] sm:mt-[7rem] mt-[10rem] bg-gray-200 border-[1px] shadow-effect border-gray-200 rounded-[1rem]">
                    <div className={`sm:text-[2rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[5rem] px-[6rem] sm:py-[2rem] py-[3rem] rounded-[1rem] font-semibold cursor-pointer ${pricing == "monthly" ? 'bg-[#FF8132] text-white' : 'text-[#828A91]'}`} onClick={()=>{setPricing("monthly")}}>Monthly Plan</div>
                    <div className={`sm:text-[2rem] text-[6.5rem]  sm:leading-[3rem] leading-[10rem] sm:px-[5rem] px-[6rem] sm:py-[2rem] py-[3rem] rounded-[1rem] font-semibold cursor-pointer ${pricing == "yearly" ? 'bg-[#FF8132] text-white' : 'text-[#828A91]'}`} onClick={()=>{setPricing("yearly")}}>Annual Plan</div>
                </div>           
                <div className="sm:mt-[3rem] sm:mb-[13rem] sm:w-full w-[90%] mt-[5rem] mb-[20rem] overflow-auto sm:py-[7rem] px-0 py-[10rem] scroll-smooth">
                    <div className="sm:px-[2rem] flex sm:w-full w-[720rem] sm:gap-[1rem] justify-between">
                       
                    <CardMembership title="FREE PLAN" price={pricing == "monthly"?'0':'0'} description="Try for free!" allowed={[
                        "2,000 Tokens",
                        "Basic Data Extraction",
                        "250 Character Limit"
                    ]} unallowed={[
                        "Batch Processing",
                    ]} button="Get Started" id="trial" type={pricing == "monthly"?'/ Month':'/ Year'}/>
                    <CardMembership title="STARTER"  price={pricing == "monthly"?'9':'99'} description="Great for getting started!" allowed={[
                        "100,000 Tokens",
                        "Basic Data Extraction",
                        "250 Character Limit",
                    ]} unallowed={[
                        "Batch Processing"
                    ]} button="Choose Starter" id="starter" type={pricing == "monthly"?'/ Month':'/ Year'}/>
                    <CardMembership title="STANDARD"  price={pricing == "monthly"?'99':'1,089'} description="Our most popular plan!" allowed={[
                        "4M Tokens",
                        "Basic Data Extraction",
                        "500 Character Limit",
                        "100 Batch Limit"
                    ]} unallowed={[]} button="Choose Standard" standard id="standard" type={pricing == "monthly"?'/ Month':'/ Year'}/>
                    <CardMembership title="PREMIUM" price={pricing == "monthly"?'499':'5,489'} description="For the power user!" allowed={[
                        "20M Tokens",
                        "Basic Data Extraction",
                        "1000 Character Limit",
                        "500 Batch Limit",
                    ]} unallowed={[]} button="Choose Premium" id="premium" type={pricing == "monthly"?'/ Month':'/ Year'}/>

                    </div>
                </div>
                <div className="sm:hidden flex justify-center gap-[11rem]">
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#trial"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#starter"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#standard"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#premium"></a>
                </div>
            </div>
                </>
            )}

            <p className={`${logState?'sm:pt-[15rem]':''} sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>

            <div className="sm:mt-[9rem] sm:items-center sm:flex-row sm:px-[10rem] sm:gap-[4rem] flex flex-col justify-start gap-[6rem] px-[20px] mt-[18rem] mb-[12rem]">
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="We leverage the power of LLMs to determine your desired content output." n = {1} selected = {order} change={setOrder}/>
                    <Question img1={plus} img2={minus} question="Is it possible to specific an output format?" answer="Yes! If you require a date formatted in a specific manner, provide it after your desired output. Check the examples above." n = {2} selected = {order} change={setOrder} />
                    
                </div>
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How many tokens is an average request?" answer="We've found that an average request with a 250 character limit is about 300 tokens. This may change on your desired outputs." n = {3} selected = {order} change={setOrder} />
                    <Question img1={plus} img2={minus} question="What happens if I go over my token limit?" answer="If you reach your token limit, you have two choices, the first is to wait for the monthly reset. The second is to upgrade your plan. However, if you are on the premium plan then contact sales@jsonscout.com" n = {4} selected = {order} change={setOrder} />
                </div>
            </div>
        </>
        
    )
}
