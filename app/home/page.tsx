'use client'
import Image from "next/image"
import { Space_Grotesk } from "next/font/google";
import { Manrope } from "next/font/google";
import frame17 from "../../public/Frame 17.svg"
import vector3 from "../../public/Vector 3.svg"
import vector4 from "../../public/Vector 4.svg"
import frame18 from "../../public/Frame 18.svg"
import frame19 from "../../public/Frame 19.svg"
import frame355 from "../../public/Frame 355.png"
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
import { Step } from "../components/Step/page";
import { Card, CardCan, CardMembership } from "../components/Card/page";

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


export default (props : any) => {
    return (
       
            <>
            <div>
                <span className="text-[8rem] leading-[5rem] px-[16px] py-[10px] sm:text-[2rem] rounded-[50px] font-semibold text-[#449D5D] quo1 ">Free Trial No Credit Card Required!</span>
            </div>
            <div className="mt-[10rem] sm:mt-[2rem] sm:flex sm:justify-between">
                
                <div className="sm:w-1/2 w-full">
                    <div className="">
                        <div className={`text-[22rem] leading-[32rem] sm:text-[7rem] sm:leading-[10rem] font-bold text-wrap ${space_grotesk.className}`}>
                           <span className="mr-12 px-2 sm:px-0 sm:mr-0">Escape the</span>  <span className=" text-[#FDA235] bg-[#ffcbb7c9] px-4 rounded-[1.6rem] sm:mr-0">Regex</span> <span>Labyrinth</span>.
                        </div>
                        <div className="mt-[6rem] text-[8rem] leading-[18rem] font-normal sm:mt-[2rem] sm:text-[1.8rem] sm:leading-[5rem] text-[#828A91] sm:w-[80%] sm:text-wrap">In the digital age, data is your most valuable asset, but extracting this gold from the mine of unstructured text can be as complex as it is crucial.</div>
                    </div>
                    <div className="gap-[10rem] mt-[19rem] sm:mt-[6rem] flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-[4rem]">
                        <button className=" text-[10rem] leading-[14rem] w-full sm:w-auto rounded-[8px] py-[8rem] sm:text-[2rem] sm:leading-[4rem] sm:px-[5rem] sm:py-[2rem] primary-btn  font-semibold ">Get Started</button>
                        <button className=" text-[10rem] leading-[14rem] w-full sm:w-auto rounded-[8px] py-[8rem] sm:text-[2rem] sm:leading-[4rem] sm:px-[5rem] sm:py-[2rem] secondary-btn font-semibold ">Create a Fee Account</button>
                    </div>
                </div>
                <div className="hidden sm:block sm:relative sm:font-normal">
                    
                    <CustomCodeBlock  code={`/* it can handle user typing errors very well. */` + jsonSnippet} leftTitle="" rightTitle="JSON" centerTitle="Example"/>
                    
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

            <div className="items-center mx-[-12rem] px-[12%] sm:mx-[-20%] sm:py-[10rem] sm:gap-[10rem] bg-[#F9FAFC] mt-[96px] py-[80px] flex flex-col justify-center gap-[25rem] relative">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[20rem] leading-[18rem] font-semibold sm:text-[5rem] sm:leading-[8rem] ${space_grotesk.className}`}>How It Works</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[58%] sm:leading-[6rem] text-[#828A91] text-wrap">You can test how json scout works by inserting an input and you will receive an input with the result.</p>
                </div>
                <div className="w-full text-[7rem] leading-[7rem] font-semibold flex flex-col justify-center gap-[7rem] sm:flex-row sm:justify-center sm:gap-[4rem] sm:text-[13px] sm:leading-[13px] ">
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] lorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                    </div>
                    <div className="w-full sm:w-auto flex justify-between sm:justify-center sm:gap-[4rem]">
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                        <button className="sm:text-[3rem] sm:leading-[5rem] sm:px-[8rem] sm:py-[1.2rem] py-[13px] rounded-[8px] unlorem-button">Lorem</button>
                    </div>
                </div>
                    
                <div className="flex flex-col items-center justify-between gap-[12rem] sm:flex-row sm:gap-[16px] sm:h-[56rem]">
                    <CustomCodeBlock leftTitle="INPUT" centerTitle="Example 1" rightTitle="JSON" code={`/* ENTER YOUR DATA */ ` + jsonSnippet}/>
                    <Image src={frame355} alt="frame355" className="xl:w-[5%] lg:top-[710px] w-[16rem] h-auto sm:w-[8%] md:w-[6%]"></Image>
                    <CustomCodeBlock leftTitle="OUTPUT" centerTitle="Example Result" rightTitle="JSON" code={`/* ENTER YOUR DATA */ ` + jsSnippert}/>
                </div>
                <button className="sm:text-[2rem] sm:px-[6rem] sm:py-[1.4rem] px-[20px] py-[10px] rounded-[8px] text-[8rem] font-semibold primary-btn">Test Data</button>
                <Image src={highlightO} alt="highlight" className=" xl:w-[70px] hidden sm:absolute sm:block sm:w-[40px] sm:left-[47px] sm:top-[223px]"></Image>
                <Image src={highlight1} alt="highlight" className="2xl:top-[906px] xl:w-[70px] xl:top-[824px] lg:top-[730px] hidden sm:absolute sm:block sm:w-[40px] sm:right-[55px] sm:top-[580px] md:top-[621px]"></Image>
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

            <div className="sm:mt-[12rem] mt-[36rem]">
                <div className="flex flex-col items-center text-center">
                    <p className={`text-[14rem] leading-[18rem] font-semibold sm:text-[5rem] sm:w-[44%] sm:leading-[8rem] ${space_grotesk.className}`}>Start today with our premium plan you choose</p>
                    <p className="text-[9rem] leading-[20rem] mt-[16px] font-normal sm:mt-[5rem] sm:text-[3rem] sm:w-[56%] sm:leading-[6rem] text-[#828A91] text-wrap">With lots of unique and useful features, you can easily manage your wallet easily without any problem.</p>
                </div>
                
                <div className="sm:my-[13rem] sm:w-full w-[fit-content] flex flex-row gap-[8rem] sm:gap-[1rem] justify-between mt-[27rem] mb-[20rem] overflow-auto p-[24px]">
                    <CardMembership title="FREE TRIAL" price="0" description="Get started for 100 requests" allowed={[
                        "100 Requests"
                    ]} unallowed={[
                        "Basic Data Extraction",
                        "Character Limit",
                        "GPT - 4"
                    ]} button="Choose Free Trial"/>
                    <CardMembership title="STARTER" price="9" description="Great for getting started!" allowed={[
                        "1000 Requests",
                        "250 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4"
                    ]} unallowed={[]} button="Choose Starter"/>
                    <CardMembership title="STANDARD" price="24" description="Our most popular plan!" allowed={[
                        "2500 Requests",
                        "500 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input"
                    ]} unallowed={[]} button="Choose Standard" standard/>
                    <CardMembership title="PREMIUM" price="49" description="For the power user!" allowed={[
                        "5000 Requests",
                        "1000 Character Limit",
                        "Basic Data Extraction",
                        "GPT - 4",
                        "Array Content Input",
                        "Suggested For Long Form Content"
                    ]} unallowed={[]} button="Choose Premium"/>
                    
                </div>
                <div className="sm:hidden flex justify-center gap-[11rem]">
                    <span className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full"></span>
                    <span className="w-[10rem] h-[10rem] bg-[#000000] rounded-full"></span>
                    <span className="w-[10rem] h-[10rem] bg-[#D9D9D9] rounded-full"></span>
                </div>
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
        </>
        
    )
}
