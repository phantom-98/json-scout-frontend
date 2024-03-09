'use client'
import frame13 from "../../public/Frame 13.svg"
import CodeBlock from "../components/code/page";
import Image from "next/image"
import { Space_Grotesk } from "next/font/google";
import { Manrope } from "next/font/google";
import card from "../../public/Card.svg"
import frame17 from "../../public/Frame 17.svg"
import vector3 from "../../public/Vector 3.svg"
import vector4 from "../../public/Vector 4.svg"
import frame18 from "../../public/Frame 18.svg"
import frame19 from "../../public/Frame 19.svg"
import responsive from "../../public/Response.svg"
import frame355 from "../../public/Frame 355.png"
import request from "../../public/Request.svg"
import highlightO from "../../public/Highlight_05.svg"
import highlight1 from "../../public/Highlight_05 (1).svg"
import request1 from "../../public/Request1.svg"
import request2 from "../../public/Request2.svg"
import rectangle91 from "../../public/Rectangle 91.svg"
import frame117 from "../../public/Frame 117.svg"
import frame191 from "../../public/Frame 119(2).svg"
import frame1192 from "../../public/Frame 119 (1).svg"
import frame1193 from "../../public/Frame 119(3).svg"
import frame1194 from "../../public/Frame 118.svg"
import { space } from "postcss/lib/list";
import { CustomCodeBlock } from "../components/CustomCodeBlock/page";
import green_check from "../../public/check-circle (2).svg"
import blue_check from "../../public/check-circle (1).svg"
import white_check from "../../public/check-circle.svg"
import minus from "../../public/Icon.svg"
import plus from "../../public/Group 1000001523.svg"
import Logo from "../components/Icons/Logo";
import logo from "../../public/JSON-LOGO 1.svg"
import frame318 from "../../public/Frame 318.svg"
import frame319 from "../../public/Frame 319.svg"
import frame320 from "../../public/Frame 320.svg"
import frame321 from "../../public/Frame 321.svg"
import Link from "next/link";
import logo1 from "../../public/JSON-LOGO 1 (1).svg"


const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
const manrop = Manrope({ subsets: ["latin"]})


const htmlSnippet: string =`
    payload = {
        "api_key": "SOME_API_KEY",
        "desired_output": "date_purchased (mm-dd-yyyy)"
        "content": [
            "My purchase was made back in january 12, 2012. i 
            am not sure if i am eligible for a refund, but i 
            would like to know.",
            "Date submitted: 01/01/2024, i made my purchase 2 
            weeks ago and wanted to know about warranty 
            information.",
        ]
    } `;


export default (props : any) => {
    return (
       
            <>
            <div className="px-[20px] sm:px-[10rem]">
                <span className="text-[5rem] leading-[5rem] px-[16px] py-[12px] sm:text-[2rem] rounded-[50px] font-semibold text-[#449D5D] quo1 ">Free Trial No Credit Card Required!</span>
            </div>
            <div className="mt-[10rem] sm:mt-[2rem] sm:flex sm:justify-between px-[20px] sm:px-[10rem]">
                
                <div className="sm:w-1/2 ">
                    
                    <div className="">
                        <div className={` text-[15.5rem] leading-[23rem] sm:text-[7rem] sm:leading-[10rem] font-bold text-wrap ${space_grotesk.className} `}>
                           <span className="mr-12 px-2 sm:px-0 sm:mr-0">Escape the</span>  <span className=" text-[#FDA235] bg-[#ffcbb7c9] px-4 rounded-[1.6rem] sm:mr-0">Regex</span> <span>Labyrinth</span>.
                        </div>
                        <div className="mt-[6rem] text-[6rem] leading-[9rem] font-normal sm:mt-[2rem] sm:text-[3rem] sm:leading-[5rem] text-[#828A91] sm:w-full sm:text-wrap">In the digital age, data is your most valuable asset, but extracting this gold from the mine of unstructured text can be as complex as it is crucial.</div>
                    </div>
                    <div className="gap-[6rem] mt-[19rem] sm:mt-[6rem] flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-[4rem]">
                        <button className=" text-[4rem] leading-[14rem] w-full sm:w-auto rounded-[8px] px-[41px] sm:text-[3rem] sm:leading-[4rem] sm:px-[2rem] sm:py-[2rem] py-5 primary-btn  font-semibold ">Get Started</button>
                        <button className=" text-[4rem] leading-[14rem] w-full sm:w-auto rounded-[8px] px-[41px] sm:text-[3rem] sm:leading-[4rem] sm:px-[2rem] py-5 sm:py-[2rem] secondary-btn font-semibold ">Create a Fee Account</button>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/2 sm:relative sm:text-[2rem] sm:font-normal">
                    
                <CustomCodeBlock  code={htmlSnippet} leftTitle="" rightTitle="JSON" centerTitle="Example"/>
                    
                    {/* <div className="w-[30%] px-[30px] pt-[20px] pb-[30px] bg-gray-500">
                        <p className="text-[2rem]">Our Advantages</p>
                        <div>
                            <div>
                               
                            </div>
                            <span>Scale with ease</span>
                        </div>
                        <div>
                            <div>
                                
                            </div>
                            <span>Boost Productivity</span>
                        </div>
                        <div>
                            <div>
                                
                            </div>
                            <span>Easy to use</span>
                        </div>
                        <div>See More</div>
                    </div> */}
                </div>
            </div> 

            <div className="mt-[80px] sm:mt-[16rem] text-center  px-[20px] sm:px-[10rem] ">
                <div className="py-[10rem]">
                    <p className={`text-[13rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>Step By Step</p>
                    <p className="text-[6rem] leading-[10rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:leading-[4rem] text-[#828A91] text-wrap">JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it</p>
                </div>
                <div className="sm:flex sm:justify-between">
                    <div className=" sm:w-[30%] flex flex-col items-center relative">
                        <div className="left-[25%] w-[16rem] h-[16rem] text-[10rem] leading-[16rem] text-center rounded-full sm:w-[5rem] sm:h-[5rem] sm:rounded-full sm:text-[3rem] sm:leading-[5rem] sm:left-[23%] bg-white font-semibold  numshadow absolute ">1</div>
                        <Image src={frame17} alt="frame17" className="w-[45%] sm:w-[50%] sm:h-auto " ></Image>
                        <p className={`mt-[6rem] sm:text-[3rem] sm:leading-[5rem] sm:mt-[2rem] text-[9rem] leading-[13rem] text-[#282828] font-bold ${space_grotesk.className}`}>Input Your content</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:mt-[2rem] mt-[6rem] text-[6rem] leading-[11rem] font-normal text-[#828A91]">Simple paste or upload the text content you want to analyze</p>
                    </div>
                    <div className="my-[11em] sm:my-[0] relative h-[23rem] sm:w-[5%] sm:h-auto"><Image src={vector3} alt="vector3" className="sm:w-[75%] sm:h-[75%] sm:left-[12.5%] sm:top-[12.5%]  absolute h-[46rem] w-auto right-[5rem] -top-[11.5rem] sm:right-[5px] sm:rotate-90 "></Image></div>
                    <div className=" sm:w-[30%] flex flex-col items-center relative">
                        <div className="left-[25%] w-[16rem] h-[16rem] text-[10rem] leading-[16rem] text-center rounded-full sm:w-[5rem] sm:h-[5rem] sm:rounded-full sm:text-[3rem] sm:leading-[5rem] sm:left-[23%] bg-white font-semibold  numshadow absolute ">2</div>
                        <Image src={frame18} alt="frame18 " className="w-[45%] sm:w-[50%] sm:h-auto " ></Image>
                        <p className={`mt-[6rem] sm:text-[3rem] sm:leading-[5rem] sm:mt-[3rem] text-[9rem] leading-[13rem] text-[#282828] font-bold ${space_grotesk.className}`}>Define Your Output</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:mt-[2rem] mt-[6rem] text-[6rem] leading-[11rem] font-normal text-[#828A91]">Tell json scout what information you are looking to extract</p>
                    </div>
                    <div className="my-[11em] sm:my-[0]  relative h-[23rem] sm:w-[5%] sm:h-auto"><Image src={vector4} alt="vector3" className=" sm:w-[75%] sm:h-[60%] sm:left-[12.5%] sm:top-[0px] absolute h-[46rem] -top-[11.5rem] w-auto left-[5rem] sm:rotate-90 "></Image></div>
                    <div className=" sm:w-[30%] flex flex-col items-center relative">
                        <div className="left-[25%] w-[16rem] h-[16rem] text-[10rem] leading-[16rem] text-center rounded-full sm:w-[5rem] sm:h-[5rem] sm:rounded-full sm:text-[3rem] sm:leading-[5rem] sm:left-[23%] bg-white font-semibold  numshadow absolute ">3</div>
                        <Image src={frame19} alt="frame19 " className="w-[45%] sm:w-[50%] sm:h-auto " ></Image>
                        <p className={`mt-[6rem] sm:text-[3rem] sm:leading-[5rem] sm:mt-[3rem] text-[9rem] leading-[13rem] text-[#282828] font-bold ${space_grotesk.className}`}>Fetch Insights</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:mt-[2rem] mt-[6rem] text-[6rem] leading-[11rem] font-normal text-[#828A91]">Json scout process your input and returns the structured data you need</p>
                    </div>
                </div>
            </div>

            <div className=" items-center px-[20px] sm:px-[10rem] sm:py-[13rem] sm:gap-[10rem] bg-[#F9FAFC] mt-[96px] py-[80px] flex flex-col justify-center gap-[25rem] relative ">
                <div className="text-center">
                    <p className={`sm:text-[5rem] sm:leading-[8rem] text-[13rem] leading-[18rem] text-[#000000] font-semibold ${space_grotesk.className} `}>How It Works</p>
                    <p className="sm:text-[3rem] sm:leading-[6rem] sm:mt-[3rem] text-[6rem] leading-[11rem] text-[#828A91] font-normal mt-[14px] ">You can test how json scout works by inserting an input and you will receive an input with the result.</p>
                </div>
                <div className="w-full sm:w-auto text-[7rem] leading-[7rem] font-semibold flex flex-col justify-center gap-[7rem] sm:flex-row sm:justify-center sm:gap-[4rem] sm:text-[13px] sm:leading-[13px] ">
                    <div className=" w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[5rem] sm:py-[2rem] w-[48%] py-[13px] rounded-[8px] lorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[5rem] sm:py-[2rem] w-[48%] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                    </div>
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[5rem] sm:py-[2rem] w-[31%] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[5rem] sm:py-[2rem] w-[31%] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[5rem] sm:py-[2rem] w-[31%] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                    </div>
                </div>
                    
                <div className=" xl:gap-[30px] flex flex-col items-center justify-center gap-[12rem] sm:flex-row sm:gap-[16px]">
                    <Image src={responsive} alt="responsive" className=" 2xl:h-[500px] xl:h-[400px] lg:h-[328px] w-full h-auto sm:w-2/5 sm:h-[184px] md:w-[45%] md:h-[270px]"></Image>
                    <Image src={frame355} alt="frame355" className=" xl:w-[5%] lg:top-[710px] w-[16rem] h-auto sm:w-[8%] md:w-[6%]"></Image>
                    <Image src={request} alt="request" className=" 2xl:h-[500px] xl:h-[400px] lg:h-[328px] w-full h-auto sm:w-2/5 sm:h-[184px]  md:w-[45%] md:h-[270px]"></Image>
                </div>
                <button className="sm:leading-[4rem] sm:text-[3rem] sm:px-[4rem] sm:py-[2rem] px-[20px] py-[10px] rounded-[8px] text-[8rem] leading-[10rem] font-semibold primary-btn">Test Data</button>
                <Image src={highlightO} alt="highlight" className=" xl:w-[70px] hidden sm:absolute sm:block sm:w-[40px] sm:left-[47px] sm:top-[223px]"></Image>
                <Image src={highlight1} alt="highlight" className="2xl:top-[906px] xl:w-[70px] xl:top-[824px] lg:top-[730px] hidden sm:absolute sm:block sm:w-[40px] sm:right-[55px] sm:top-[580px] md:top-[621px]"></Image>
            </div>

            <div className="2xl:px-[110px] 2xl:mt-[140px] xl:mt-[110px] sm:flex-row sm:px-[80px] sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] px-[20px] mt-[68px]">
                <div className=" sm:w-[45%] flex flex-col justify-between w-full">
                    <p className={` sm:mt-0 sm:text-[5rem] sm:leading-[8rem] mt-[15px] mb-[3rem] text-[13rem] font-semibold leading-[17rem] ${space_grotesk.className}`}>Old way of doing it.</p>
                    <p className="  sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift now.</p>
                    <p className="  sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it</p>
                    <p className="  sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">Unleash the power of LLMs with JSON Scout and transform your data extraction into a competitive advantage.</p>
                    <p className="  sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it</p>
                    <p className="  sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">Unleash the power of LLMs with JSON Scout and transform your data extraction into a competitive advantage.</p>
                </div>
                <Image src={request1} alt="request1" className="sm:w-[45%] w-full"></Image>
            </div>

            <div className="sm:flex-row-reverse 2xl:px-[110px] 2xl:mt-[140px] xl:mt-[110px] sm:px-[80px] sm:justify-between sm:gap-0 flex flex-col justify-center gap-[50px] px-[20px] mt-[68px]">
                <div className=" sm:w-[45%] flex flex-col justify-between items-start w-full">
                    <p className={`  sm:mt-0 sm:text-[5rem] sm:leading-[8rem] mt-[15px] text-[13rem] leading-[16rem] font-semibold ${space_grotesk.className}`}>New way of doing it using JSON Scout.</p>
                    <p className=" sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">It's time to step into a new era of data extraction with JSON Scout where the insights you seek are just a query away.Make the shift now.</p>
                    <p className=" sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">JSON Scout saves development time and maintenance by comparing the old way of doing things vs using it</p>
                    <p className=" sm:mt-0 sm:text-[2.3rem] sm:leading-[4rem] mt-[15px] text-[6rem] font-normal leading-[8rem] text-[#828A91]">Unleash the power of LLMs with JSON Scout and transform your data extraction into a competitive advantage.</p>
                    <button className="mb-[10px] primary-btn mt-[34px] px-[17px] py-[10px] rounded-[8px] text-[6rem] font-medium sm:text-[3rem] sm:leading-[5rem]">Get Started</button>
                </div>
                <Image src={request2} alt="request2" className="sm:w-[45%] w-full"></Image>
            </div>

            <div className=" sm:mt-[86px] sm:px-[80px] text-center mt-[56px] px-[20px]">
                <p className={`sm:text-[5rem] sm:leading-[8rem] font-semibold text-[13rem] leading-[14rem] title-font ${space_grotesk.className}`}>Whit JSON Scout you can</p>
                <p className="sm:text-[3rem] sm:leading-[5rem] sm:pt-[30px] text-[6rem] pt-[23px] leading-[9rem] text-[#828A91]">Stop the endless cycle of writing and rewriting complex regex. Our LLM intuitively understands and locates the data you need with human-like precision.</p>
            </div>

            <div className="sm:mt-[15rem] sm:px-[10rem] px-[20px] mt-[40rem] flex flex-col justify-center gap-[70px]">
                <div className="sm:flex-row sm:justify-between sm:gap-0 flex flex-col justify-center gap-[70px]">
                    <div className="h-[143rem] sm:h-[49rem] sm:w-[30%] sm:pt-[9rem] sm:px-[5rem] sm:pb-[5rem]  border-[2px] border-[#E9E9E9]  pt-[60px] pr-[25px] pb-[25px] pl-[25px] relative" >
                        <p className={`sm:text-[4rem] sm:leading-[5rem] font-bold text-[21px] leading-[25px] ${manrop.className} `}>Expand beyond limits</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[4rem] text-[#828A91] text-[16px] leading-[25px]">Regex has its limits. JSON Scout adapts to your evolving data needs, understanding context and semantics, not just patterns.</p>
                        <Image src={frame117} alt="frame117" className="left-[15rem] -top-[18rem] h-[36rem]  sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
                        <div className="w-[50px] h-[50px] border-l-[2px] absolute -right-[25px] -bottom-[25px] rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
                    </div>
                    <div className="h-[143rem] sm:h-[49rem] sm:w-[30%] sm:pt-[9rem] sm:px-[5rem] sm:pb-[5rem] border-2 border-[#E9E9E9] pt-[60px] pr-[25px] pb-[25px] pl-[25px] relative" >
                        <p className={`sm:text-[4rem] sm:leading-[5rem] font-bold text-[21px] leading-[25px] ${manrop.className} `}>Boost Productivity</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[4rem] text-[#828A91] text-[16px] leading-[25px]">Redirect your valuable time and talent from the tedium of pattern matching to strategic initiatives that drive your business forward.</p>
                        <Image src={frame191} alt="frame117" className="left-[15rem] -top-[18rem] h-[36rem] sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
                        <div className="w-[50px] h-[50px] border-l-[2px] absolute -right-[25px] -bottom-[25px] rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
                    </div>
                    <div className="h-[143rem] sm:h-[49rem] sm:w-[30%] sm:pt-[9rem] sm:px-[5rem] sm:pb-[5rem] border-2 border-[#E9E9E9] pt-[60px] pr-[25px] pb-[25px] pl-[25px] relative" >
                        <p className={`sm:text-[4rem] sm:leading-[5rem] font-bold text-[21px] leading-[25px] ${manrop.className} `}>Future-Proof Your Data Strategy</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[4rem] text-[#828A91] text-[16px] leading-[25px]">As your data grows and changes, JSON Scout evolves with it, continuously learning from interactions to provide better, more accurate extractions.</p>
                        <Image src={frame1192} alt="frame117" className="left-[15rem] -top-[18rem] h-[36rem]  sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
                        <div className="w-[50px] h-[50px] border-l-[2px] absolute -right-[25px] -bottom-[25px] rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
                    </div>
                </div>
                <div className="sm:flex-row sm:justify-center sm:gap-[5%] flex flex-col justify-center gap-[70px]">
                    <div className="h-[143rem] sm:h-[49rem] sm:w-[30%] sm:pt-[9rem] sm:px-[5rem] sm:pb-[5rem]  border-2 border-[#E9E9E9]  pt-[60px] pr-[25px] pb-[25px] pl-[25px] relative" >
                        <p className={`sm:text-[4rem] sm:leading-[5rem] font-bold text-[21px] leading-[25px] ${manrop.className} `}>Expand beyond limits</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[4rem] text-[#828A91] text-[16px] leading-[25px]">Regex has its limits. JSON Scout adapts to your evolving data needs, understanding context and semantics, not just patterns.</p>
                        <Image src={frame1193} alt="frame117" className="left-[15rem] -top-[18rem] h-[36rem] sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
                        <div className="w-[50px] h-[50px] border-l-[2px] absolute -right-[25px] -bottom-[25px] rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
                    </div>
                    <div className="h-[143rem] sm:h-[49rem] sm:w-[30%] sm:pt-[9rem] sm:px-[5rem] sm:pb-[5rem] border-2 border-[#E9E9E9] pt-[60px] pr-[25px] pb-[25px] pl-[25px] relative" >
                        <p className={`sm:text-[4rem] sm:leading-[5rem] font-bold text-[21px] leading-[25px] ${manrop.className} `}>Boost Productivity</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[4rem] text-[#828A91] text-[16px] leading-[25px]">Redirect your valuable time and talent from the tedium of pattern matching to strategic initiatives that drive your business forward.</p>
                        <Image src={frame1194} alt="frame117" className="left-[15rem] -top-[18rem] h-[36rem] sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
                        <div className="w-[50px] h-[50px] border-l-[2px] absolute -right-[25px] -bottom-[25px] rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
                    </div>
                </div>
            </div>
            
            <div className="sm:flex sm:flex-col items-center sm:px-[80px] px-[20px] mt-[70px]">
                <p className={`sm:w-[70%] sm:text-[5rem] sm:leading-[8rem] text-[11rem] leading-[13rem] text-center font-semibold ${space_grotesk.className}`}>Start today with our premium plan you choose</p>
                <p className="sm:w-[50%] sm:text-[3rem] sm:leading-[5rem] text-center text-[15px] text-[#828A91] mt-[25px]">With lots of unique and useful features, you can easily manage your wallet easily without any problem.</p>
            </div>

            <div className="sm:my-[13rem] sm:w-full sm:px-[10rem] flex flex-row justify-between w-[350vw] mt-[27rem] mb-[20rem]">
                <div className=" sm:px-[4rem] sm:py-[4rem] sm:rounded-[5rem] sm:h-[100rem] slide-shadow-1 sm:w-[23%] w-[80vw] h-[315rem] p-[15rem] rounded-[12rem] ">
                    <div className="h-[28%] border-b-[1px] border-b-[#8593A3]">
                        <p className=" sm:text-[2.5rem] text-[7rem] text-[#5E5E5E]">FREE TRIAL</p>
                        <div className="sm:text-[2.5rem] text-[8rem] text-[#8593A3]">
                            <span className="sm:text-[9rem] text-[30rem] mr-[2rem] text-[#282828] font-semibold">$0</span>
                            Per month
                        </div>
                        <div className="sm:text-[2.5rem] sm:mb-[5rem] text-[8rem] mb-[8rem] text-[#8593A3]">Get started for 100 requests</div>
                    </div>
                    <div className="h-[72%] flex flex-col justify-between">
                    <div className=" sm:mt-[3rem] mt-[12rem]">
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]">100 Requests</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={green_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] opacity-50">Basic Data Extraction</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={green_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]  opacity-50">Character Limit</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={green_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]  opacity-50">GPT - 4</span>
                        </div>
                    </div>
                    <button className="sm:text-[3rem] sm:leading-[3rem] sm:h-[8rem] text-[10rem] leading-[13rem] h-[25rem] bg-white border-[1px] border-[#8593A3] rounded-full text-[#8593A3]">Choose Standard</button>
                    </div>
                </div>

                <div className=" sm:px-[4rem] sm:py-[4rem] sm:rounded-[5rem] sm:h-[100rem] slide-shadow-1 sm:w-[23%] w-[80vw] h-[315rem] p-[15rem] rounded-[12rem] ">
                    <div className="h-[28%] border-b-[1px] border-b-[#8593A3]">
                        <p className=" sm:text-[2.5rem] text-[7rem] text-[#5E5E5E]">STARTER</p>
                        <div className="sm:text-[2.5rem] text-[8rem] text-[#8593A3]">
                            <span className="sm:text-[9rem] text-[30rem] mr-[2rem] text-[#282828] font-semibold">$9</span>
                            Per month
                        </div>
                        <div className="sm:text-[2.5rem] sm:mb-[5rem] text-[8rem] mb-[8rem] text-[#8593A3]">Great for getting started!</div>
                    </div>
                    <div className="h-[72%] flex flex-col justify-between">
                    <div className=" sm:mt-[3rem] mt-[12rem]">
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]">1,000 Requests</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]">250 Character Limit</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">Basic Data Extraction</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">GPT - 4</span>
                        </div>
                    </div>
                    <button className="sm:text-[3rem] sm:leading-[3rem] sm:h-[8rem] text-[10rem] leading-[13rem] h-[25rem] bg-white border-[1px] border-[#8593A3] rounded-full text-[#8593A3]">Choose Starter</button>
                    </div>
                </div>

                <div className=" sm:px-[4rem] sm:py-[4rem] sm:rounded-[5rem] sm:h-[100rem] slide-shadow-1 sm:w-[23%] bg-[#FF8132] w-[80vw] h-[315rem] p-[15rem] rounded-[12rem] ">
                    <div className="h-[28%] border-b-[1px] border-b-[#FFFFFF29]">
                        <p className=" sm:text-[2.5rem] text-[7rem] text-white">STANDARD</p>
                        <div className="sm:text-[2.5rem] text-[8rem] text-white">
                            <span className="sm:text-[9rem] text-[30rem] mr-[2rem] text-white font-semibold">$24</span>
                            Per month
                        </div>
                        <div className="sm:text-[2.5rem] sm:mb-[5rem] text-[8rem] mb-[8rem] text-white">Our most popular plan!</div>
                    </div>
                    <div className="h-[72%] flex flex-col justify-between">
                    <div className=" sm:mt-[3rem] mt-[12rem]">
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={white_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-white">2,500 Requests</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={white_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-white">500 Character Limit</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={white_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-white">Basic Data Extraction</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={white_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-white">GPT - 4</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={white_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-white">Array Content Input</span>
                        </div>
                    </div>
                    <button className="sm:text-[3rem] sm:leading-[3rem] sm:h-[8rem] text-[10rem] leading-[13rem] h-[25rem] bg-white border-[1px] rounded-full text-[#282828]">Choose Standard</button>
                    </div>
                </div>
                
                <div className=" sm:px-[4rem] sm:py-[4rem] sm:rounded-[5rem] sm:h-[100rem] slide-shadow-1 sm:w-[23%] w-[80vw] h-[315rem] p-[15rem] rounded-[12rem] ">
                    <div className="h-[28%] border-b-[1px] border-b-[#8593A3]">
                        <p className=" sm:text-[2.5rem] text-[7rem] text-[#5E5E5E]">PREMIUM</p>
                        <div className="sm:text-[2.5rem] text-[8rem] text-[#8593A3]">
                            <span className="sm:text-[9rem] text-[30rem] mr-[2rem] text-[#282828] font-semibold">$9</span>
                            Per month
                        </div>
                        <div className="sm:text-[2.5rem] sm:mb-[5rem] text-[8rem] mb-[8rem] text-[#8593A3]">Great for getting started!</div>
                    </div>
                    <div className="h-[72%] flex flex-col justify-between">
                    <div className=" sm:mt-[3rem] mt-[12rem]">
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]">1,000 Requests</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3]">250 Character Limit</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">Basic Data Extraction</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">GPT - 4</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">Array Content Input</span>
                        </div>
                        <div className=" sm:gap-[2rem] sm:py-[2rem] flex justify-start gap-[7rem] items-center py-[5rem]">
                            <Image src={blue_check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                            <span className="sm:text-[2.5rem] text-[9rem] text-[#8593A3] ">Suggested for Long Form Content</span>
                        </div>
                    </div>
                    <button className="sm:text-[3rem] sm:leading-[3rem] sm:h-[8rem] text-[10rem] leading-[13rem] h-[25rem] bg-white border-[1px] border-[#8593A3] rounded-full text-[#8593A3]">Choose Premium</button>
                    </div>
                </div>
                

            </div>
            <div className="sm:hidden flex justify-center gap-[11rem]">
                <span className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full"></span>
                <span className="w-[10rem] h-[10rem] bg-[#000000] rounded-full"></span>
                <span className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full"></span>
            </div>

            <p className={`sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>

            <div className="sm:mt-[9rem] sm:items-center sm:flex-row sm:px-[10rem] sm:gap-[4rem] flex flex-col justify-start gap-[6rem] px-[20px] mt-[18rem] mb-[12rem]">
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
                        <Image src={plus} alt="" className="sm:h-[3.5rem] sm:left-[6rem] h-[11rem] w-auto absolute left-[11rem]"></Image>
                        <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem]">How do you determine the correct data to extract?</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] hidden">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    </div>
                    <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
                        <Image src={plus} alt="" className="sm:h-[3.5rem] sm:left-[6rem] h-[11rem] w-auto absolute left-[11rem]"></Image>
                        <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem]">In there a discount for yearly plans?</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] hidden">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    </div>
                </div>
                <div className="sm:w-[48%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
                        <Image src={plus} alt="" className="sm:h-[3.5rem] sm:left-[6rem] h-[11rem] w-auto absolute left-[11rem]"></Image>
                        <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem]">How do I cancel my subscription?</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] hidden">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    </div>
                    <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
                        <Image src={plus} alt="" className="sm:h-[3.5rem] sm:left-[6rem] h-[11rem] w-auto absolute left-[11rem]"></Image>
                        <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem]">How does the pricing work?</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] hidden">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    </div>
                    <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
                        <Image src={plus} alt="" className="sm:h-[3.5rem] sm:left-[6rem] h-[11rem] w-auto absolute left-[11rem]"></Image>
                        <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem]">Can I switch plans?</p>
                        <p className="sm:text-[2.5rem] sm:leading-[4rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] hidden">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                    </div>
                </div>
            </div>

            <div className=" sm:pt-[21rem] sm:px-[10rem] sm:pb-[10rem] pt-[34rem] pb-[10rem] bg-[#161C28] text-white">
                <div className="flex flex-col items-center">
                    <p className=" sm:text-[10rem] sm:mb-[9rem] text-[15rem] items-center leading-[23rem] mb-[19rem] font-semibold">Ready to Get Started</p>
                    <button className=" sm:text-[4rem] sm:px-[5rem] sm:py-[3rem] sm:leading-[6rem] sm:rounded-[2rem] text-[8rem] rounded-[5rem] leading-[10rem] px-[12rem] py-[7rem] primary-btn">Sign Up Now</button>
                </div>
                <div className=" sm:mt-[13rem] sm:flex-row sm:justify-between flex flex-col mt-[26rem] items-center gap-[8rem]">
                    <Image src={logo1} alt="" className="sm:h-[10rem] h-[29rem] w-auto"></Image>
                    <div className=" sm:gap-[2rem] flex justify-center gap-[11rem]">
                        <Link href="#" className=""><Image src={frame318} alt=""></Image></Link>
                        <Link href="#" className=""><Image src={frame319} alt=""></Image></Link>
                        <Link href="#" className=""><Image src={frame320} alt=""></Image></Link>
                        <Link href="#" className=""><Image src={frame321} alt=""></Image></Link>
                    </div>
                </div>
                <div className="sm:mb-[8rem] sm:px-[7rem] sm:py-[7rem] sm:mt-[8rem] sm:flex-row sm:justify-between sm:gap-0 flex flex-col py-[12rem] my-[17rem] border-t-[#828A91] border-t-[1px] border-b-[#828A91] border-b-[1px] gap-[5rem]">
                    <div className=" sm:w-[50%] flex flex-col items-center gap-[2rem]">
                        <p className="sm:text-[6rem] sm:leading-[10rem] text-[12rem] leading-[24rem]">About</p>
                        <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                        <Link href="#" className=" sm:text-[3rem] text-[8rem] text-[#828A91]">Terms of service</Link>
                        <Link href="#" className=" sm:text-[3rem] text-[8rem] text-[#828A91]">Privacy police</Link>
                        <Link href="#" className=" sm:text-[3rem] text-[8rem] text-[#828A91]">Blog</Link>
                        </div>
                    </div>
                    <div className="sm:w-[50%] flex flex-col items-center gap-[2rem]">
                        <p className="sm:text-[6rem] sm:leading-[10rem] text-[12rem] leading-[24rem]">Contact Us</p>
                        <div className=" sm:flex-row sm:justify-center sm:gap-[4rem] flex flex-col justify-start gap-[3rem] items-center">
                        <Link href="#" className=" sm:text-[3rem] text-[8rem] text-[#828A91]">contact@jsonscout.com</Link>
                        <Link href="#" className=" sm:text-[3rem] text-[8rem] text-[#828A91]">+92-300-848-8985</Link>
                        </div>
                    </div>
                    
                </div>
                <div className=" sm:text-[2.5rem] sm:leading-[4rem] text-[7rem] text-center">© 2024 Json Scout. All rights reserved</div>
            </div>
            </>
        
    )
}
