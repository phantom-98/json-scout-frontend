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
import React, { useEffect } from "react";
import { Question } from "../../components/question/page";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
const manrop = Manrope({ subsets: ["latin"]})

const jsonSnippet: string =`
payload = {
    "api_key": "SOME_API_KEY",
    "desired_output": "date_purchased (mm-dd-yyyy)"
    "content": [
        "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
        "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
    ]
}
`;

const jsSnippert: string = `
data = response.json()['data']
[
    {
        "classification": "Purchase Inquiry",
        "data_purchased": "01-12-2012",
    }
]
`;

const pySnippet: string = `
/* Old way of doing it */
Import re, datetime
content_1 = “My purchase was made back in january 12, 2012. I am not sure if I am eligible for a refund, but I would like to know.”,
/* Grab the date from the content*/
date_1 = re.search(r'[a-zA-Z]+\s\d{1,2},\s\d{4}', content_1).group(0)
/* Convert the date to a datetime object */
date_object_1 = datetime.datetime.strptime(date_1, '%B %d, %Y').date()
date_string_1 = date_object_1.strftime('%m-%d-%Y')
print(date_string_1)
content_2 = "Date submitted; 01/01/2024. I made my purchase 2 weeks ago and wanted to know about warranty information."
date_2 = re.search(r'\d{1,2}\/\d{1,2}\/\d{4}', content_2).group(0)
`;

const  codeLeft: string[] = [
    `payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
        ]
    }`,
    `/* Old way of doing it 222 */
    Import re, datetime
    content_1 = “My purchase was made back in january 12, 2012. I am not sure if I am eligible for a refund, but I would like to know.”,
    /* Grab the date from the content*/
    date_1 = re.search(r'[a-zA-Z]+\s\d{1,2},\s\d{4}', content_1).group(0)
    /* Convert the date to a datetime object */
    date_object_1 = datetime.datetime.strptime(date_1, '%B %d, %Y').date()
    date_string_1 = date_object_1.strftime('%m-%d-%Y')
    print(date_string_1)
    content_2 = "Date submitted; 01/01/2024. I made my purchase 2 weeks ago and wanted to know about warranty information."
    date_2 = re.search(r'\d{1,2}\/\d{1,2}\/\d{4}', content_2).group(0)`,
    `payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
        ]
    }`,
    `/* Old way of doing it 444 */
    Import re, datetime
    content_1 = “My purchase was made back in january 12, 2012. I am not sure if I am eligible for a refund, but I would like to know.”,
    /* Grab the date from the content*/
    date_1 = re.search(r'[a-zA-Z]+\s\d{1,2},\s\d{4}', content_1).group(0)
    /* Convert the date to a datetime object */
    date_object_1 = datetime.datetime.strptime(date_1, '%B %d, %Y').date()
    date_string_1 = date_object_1.strftime('%m-%d-%Y')
    print(date_string_1)
    content_2 = "Date submitted; 01/01/2024. I made my purchase 2 weeks ago and wanted to know about warranty information."
    date_2 = re.search(r'\d{1,2}\/\d{1,2}\/\d{4}', content_2).group(0)`,
    `payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
        ]
    }`,


]

const codeRight:string[] = [
    `data = response.json()['data']
    [
        {
            "classification": "Purchase Inquiry",
            "data_purchased": "01-12-2012",
        }
    ]`,
    `payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
        ]
    }`,
    `data = response.json()['data']
    [
        {
            "classification": "Purchase Inquiry",
            "data_purchased": "01-12-2012",
        }
    ]`,
    `payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i am not sure if i am eligible for a refund, but i would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 weeks ago and wanted to know about warranty information.",
        ]
    }`,
    `data = response.json()['data']
    [
        {
            "classification": "Purchase Inquiry",
            "data_purchased": "01-12-2012",
        }
    ]`,
] 




export const Home = (props : any) => {

    const [num, setNum] = React.useState(0) 
    useEffect(()=>{
        console.log('localStorate====>', localStorage.getItem('access_token'))
    },[])

    return (
        <>
            <div className="my-[10rem] sm:mb-[2.8rem] sm:mt-[8rem]">
                <span className="text-[8rem] leading-[5rem] px-[8rem] py-[4rem] sm:px-[2.4rem] sm:py-[1.6rem] sm:text-[2rem] rounded-full font-semibold text-[#449D5D] shadow-lg">Free Trial No Credit Card Required!</span>
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
                        <div className="mt-[6rem] text-[8rem] leading-[18rem] font-normal sm:mt-[2rem] sm:text-[1.8rem] sm:leading-[5rem] text-[#828A91] sm:w-[80%] sm:text-wrap">In the digital age, data is your most valuable asset, but extracting this gold from the mine of unstructured text can be as complex as it is crucial.</div>
                    </div>
                    <div className="gap-[10rem] mt-[19rem] sm:mt-[6rem] flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-[4rem]">
                        <button className=" text-[10rem] leading-[14rem] w-full sm:w-auto rounded-[8px] py-[8rem] sm:text-[2rem] sm:leading-[4rem] sm:px-[5rem] sm:py-[2rem] primary-btn  font-semibold ">Get Started</button>
                        <button className=" text-[10rem] leading-[14rem] w-full sm:w-auto rounded-[8px] py-[8rem] sm:text-[2rem] sm:leading-[4rem] sm:px-[5rem] sm:py-[2rem] secondary-btn font-semibold ">Create a Fee Account</button>
                    </div>
                </div>
                <div className="hidden sm:block sm:relative sm:font-normal relative">
                    
                    <CustomCodeBlock  code={`/* it can handle user typing errors very well. */` + jsonSnippet} leftTitle="" rightTitle="JSON" centerTitle="Example"/>
                    
                    <div className="p-[4rem] bg-white shadow-lg font-semibold absolute left-[-35%] bottom-[-25%] rounded-[2rem] flex flex-col justify-between gap-10">
                        <h1 className="text-[2.8rem] text-center">Our Advantages</h1>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Scale with ease</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Boost Productivity</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <div className="w-[5rem] h-[5rem] rounded-full shadow-lg flex justify-center items-center">
                               <Image src={check} alt=""/>
                            </div>
                            <span className="text-[2rem]">Easy to use</span>
                        </div>
                        <div className="text-[1.6rem] text-[#FF8132]">See More</div>
                    </div>
                    <Image src={highlight} alt="" className="absolute left-[-45%] bottom-[-35%] w-[14%] h-auto"/>
                </div>
            </div> 

            <div className="mt-[80px] sm:mt-[16rem] text-center">
                <div className="py-[10rem] flex flex-col items-center">
                    <p className={`text-[20rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>Step By Step</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[52%] sm:leading-[6rem] text-[#828A91] text-wrap">JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it</p>
                </div>
                <div className="sm:flex sm:justify-between">
                    <Step font={space_grotesk.className} no="1" img={frame17} title="Input Your content" description="Simple paste or upload the text content you want to analyze"/>
                    
                    <div className="my-[11em] sm:my-[0] relative h-[23rem] sm:w-[5%] sm:h-auto"><Image src={vector3} alt="vector3" className="sm:w-[75%] sm:h-[75%] sm:left-[12.5%] sm:top-[12.5%]  absolute h-[46rem] w-auto right-[5rem] -top-[11.5rem] sm:right-[5px] sm:rotate-90 "></Image></div>
                  
                    <Step font={space_grotesk.className} no="2" img={frame18} title="Define Your Output" description="Tell json scout what information you are looking to extract"/>
                    
                    <div className="my-[11em] sm:my-[0]  relative h-[23rem] sm:w-[5%] sm:h-auto"><Image src={vector4} alt="vector3" className=" sm:w-[75%] sm:h-[60%] sm:left-[12.5%] sm:top-[0px] absolute h-[46rem] -top-[11.5rem] w-auto left-[5rem] sm:rotate-90 "></Image></div>
                    
                    <Step font={space_grotesk.className} no="3" img={frame19} title="Fetch Insights" description="Json scout process your input and returns the structured data you need"/>
                    
                </div>
            </div>

            <div className="items-center mx-[-12rem] px-[12%] sm:mx-[-20%] sm:py-[10rem] sm:pb-[15rem] sm:gap-[10rem] bg-[#F9FAFC] mt-[96px] py-[80px] flex flex-col justify-center gap-[25rem] relative">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[20rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>How It Works</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[58%] sm:leading-[6rem] text-[#828A91] text-wrap">You can test how json scout works by inserting an input and you will receive an input with the result.</p>
                </div>
                <div className="w-full text-[7rem] leading-[7rem] font-semibold flex flex-col justify-center gap-[7rem] sm:flex-row sm:justify-center sm:gap-[4rem] sm:text-[13px] sm:leading-[13px] ">
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button onClick={()=>{setNum(0)}} className={`sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 0?'lorem-button':'unlorem-button'}`}>Lorem</button>
                        <button onClick={()=>{setNum(1)}} className={`sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 1?'lorem-button':'unlorem-button'}`}>Lorem</button>
                    </div>
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button onClick={()=>{setNum(2)}} className={`sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 2?'lorem-button':'unlorem-button'}`}>Lorem</button>
                        <button onClick={()=>{setNum(3)}} className={`sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 3?'lorem-button':'unlorem-button'}`}>Lorem</button>
                        <button onClick={()=>{setNum(4)}} className={`sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] ${num === 4?'lorem-button':'unlorem-button'}`}>Lorem</button>
                    </div>
                </div>
                    
                <div className="flex flex-col items-center justify-between gap-[12rem] sm:flex-row sm:gap-[16px] sm:h-[56rem]">
                    <CustomCodeBlock leftTitle="INPUT" centerTitle="Example 1" rightTitle="JSON" code={codeLeft[num]}/>
                    <Image src={frame355} alt="frame355" className="xl:w-[5%] lg:top-[710px] w-[16rem] h-auto sm:w-[8%] md:w-[6%]"></Image>
                    <CustomCodeBlock leftTitle="OUTPUT" centerTitle="Example Result" rightTitle="JSON" code={codeRight[num]}/>
                </div>
                <button className="sm:text-[2rem] sm:px-[6rem] sm:py-[1.4rem] px-[20px] py-[10px] rounded-[8px] text-[8rem] font-semibold primary-btn sm:hidden">Test Data</button>
                <Image src={highlightO} alt="highlight" className="hidden sm:block absolute sm:left-[20rem] sm:top-[30rem] w-[4%] h-auto"></Image>
                <Image src={highlight1} alt="highlight" className="hidden sm:block absolute sm:right-[20rem] sm:top-[122rem] w-[4%] h-auto"></Image>
            </div>

            <div className="sm:flex-row sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] mt-[48px]">
                <Card title="Old way of doing it." font={`${space_grotesk.className}`} body={[
                    "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift now.",
                    "JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it",
                    "Unleash the power of LLMs with JSON Scout and transform your data extraction into a competitive advantage."
                ]}/>
                <CustomCodeBlock leftTitle="EXAMPLE" centerTitle="Old Method" rightTitle="JSON" code={pySnippet}/>
            </div>

            <div className="sm:flex-row-reverse sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] mt-[48px]">
                <Card title="New way of doing it using JSON Scout." font={`${space_grotesk.className}`} body={[
                    "It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift now.",
                    "JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it",
                    "Unleash the power of LLMs with JSON Scout and transform your data extraction into a competitive advantage."
                ]} button/>
                <CustomCodeBlock leftTitle="EXAMPLE" centerTitle="Old Method" rightTitle="JSON" code={pySnippet}/>
            </div>

            <div className="sm:mt-[12rem] mt-[36rem]">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[14rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>With JSON Scout you can</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[76%] sm:leading-[6rem] text-[#828A91] text-wrap">Stop the endless cycle of writing and rewriting complex regex. Our LLM intuitively understands and locates the data you need with human-like precision.</p>
                </div>

                <div className="sm:mt-[70px] mt-[32rem] flex flex-col justify-center gap-[70px]">
                    <div className="sm:flex-row sm:justify-between sm:gap-0 flex flex-col justify-center gap-[70px]">
                        <CardCan font={`${manrop.className}`} img={frame117} title="Expand beyond limits" description="Regex has its limits. JSON Scout adapts to your evolving data needs, understanding context and semantics, not just patterns."/>
                        <CardCan font={`${manrop.className}`} img={frame191} title="Boost Productivity" description="Redirect your valuable time and talent from the tedium of pattern matching to strategic initiatives that drive your business forward."/>
                        <CardCan font={`${manrop.className}`} img={frame1192} title="Future-Proof Your Data Strategy" description="As your data grows and changes, JSON Scout evolves with it, continuously learning from interactions to provide better, more accurate extractions."/>
                    </div>
                    <div className="sm:flex-row sm:justify-center sm:gap-[5%] flex flex-col justify-center gap-[70px]">
                        <CardCan font={`${manrop.className}`} img={frame1193} title="Expand beyond limits" description="Regex has its limits. JSON Scout adapts to your evolving data needs, understanding context and semantics, not just patterns."/>
                        <CardCan font={`${manrop.className}`} img={frame1194} title="Boost Productivity" description="Redirect your valuable time and talent from the tedium of pattern matching to strategic initiatives that drive your business forward."/>
                    </div>
                </div>
            </div>

            <div className="sm:mt-[12rem] mt-[36rem] flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[14rem] leading-[18rem] font-semibold sm:text-[5rem] sm:w-[44%] sm:leading-[8rem] ${space_grotesk.className}`}>Start today with our premium plan you choose</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[56%] sm:leading-[6rem] text-[#828A91] text-wrap">With lots of unique and useful features, you can easily manage your wallet easily without any problem.</p>
                </div>
                
                <div className="sm:my-[13rem] sm:w-full w-[90%] mt-[27rem] mb-[20rem] overflow-auto sm:py-4rem px-0 py-[10rem] scroll-smooth">
                    <div className="sm:px-[2rem] flex sm:w-full w-[720rem] sm:gap-[1rem] justify-between">
                       
                    <CardMembership title="FREE TRIAL" price="0" description="Get started for 100 requests" allowed={[
                        "100 Requests"
                    ]} unallowed={[
                        "Basic Data Extraction",
                        "Character Limit",
                        "GPT - 4"
                    ]} button="Choose Free Trial" id="trial"/>
                    <CardMembership title="STARTER" price="9" description="Great for getting started!" allowed={[
                        "1000 Requests",
                        "250 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4"
                    ]} unallowed={[]} button="Choose Starter" id="starter"/>
                    <CardMembership title="STANDARD" price="24" description="Our most popular plan!" allowed={[
                        "2500 Requests",
                        "500 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input"
                    ]} unallowed={[]} button="Choose Standard" standard id="standard"/>
                    <CardMembership title="PREMIUM" price="49" description="For the power user!" allowed={[
                        "5000 Requests",
                        "1000 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input",
                        "Suggested For Long Form Content"
                    ]} unallowed={[]} button="Choose Premium" id="premium"/>

                    </div>
                </div>
                <div className="sm:hidden flex justify-center gap-[11rem]">
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#trial"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#starter"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#standard"></a>
                    <a className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full" href="#premium"></a>
                </div>
            </div>

            <p className={`sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>

            <div className="sm:mt-[9rem] sm:items-center sm:flex-row sm:px-[10rem] sm:gap-[4rem] flex flex-col justify-start gap-[6rem] px-[20px] mt-[18rem] mb-[12rem]">
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." />
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." />
                    
                </div>
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." />
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." />
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly." />
                </div>
            </div>
        </>
        
    )
}
