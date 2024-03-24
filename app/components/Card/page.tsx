import Image from "next/image";
import Link from "next/link";
import uncheck from "../../../public/check-circle (2).svg";
import check from "../../../public/check-circle (1).svg";
import checkLight from "../../../public/check-circle.svg";


export const Card = (props:{title: string, body: string[], font: string , button?: any}) => {

    return (
        <div className="sm:w-[45%] flex flex-col gap-12 sm:gap-8 justify-start w-full sm:text-[2rem] sm:leading-[4rem] text-[7rem] font-normal leading-[14rem] text-[#828A91]">
            <h1 className={`sm:mt-0 sm:text-[5rem] sm:leading-[6.4rem] mb-[3rem] text-[18rem] leading-[24rem] font-semibold text-black ${props.font}`}>{props.title}</h1>
            {props.body.map(item => {
                return (
                    <p>{item}</p>
                );
            })}
            {props.button && (
                <Link href="/register"><button className="w-full mt-[32px] sm:w-[fit-content] sm:px-[5rem] sm:py-[1.2rem] py-[5rem] primary-btn rounded-[8px] text-[8rem] font-medium sm:text-[2rem]">Get Started</button></Link>
            )}
        </div>
    );
}

export const CardCan = (props:{title: string, description: string, font: string , img: any}) => {

    return (
        <div className="h-full sm:w-[30%] sm:pt-[6rem] sm:px-[5rem] sm:pb-[5rem] border-[2px] border-[#E9E9E9] py-[60px] px-[25px] sm:m-0 mx-[20rem] relative" >
            <p className={`sm:text-[3rem] sm:leading-[4rem] font-bold text-[21px] leading-[25px] ${props.font} `}>{props.title}</p>
            <p className="sm:text-[2.5rem] sm:leading-[4rem] mt-[2rem] text-[#828A91] text-[16px] leading-[25px]">{props.description}</p>
            <Image src={props.img} alt="" className="left-[15rem] -top-[18rem] h-[36rem]  sm:-top-[5.5rem] sm:h-[11rem] absolute  sm:left-[4rem]"></Image>
            <div className="sm:w-[11rem] sm:h-[11rem] sm:-right-[5.5rem] sm:-bottom-[5.5rem] w-[32rem] h-[32rem] -right-[16rem] -bottom-[16rem] border-l-[2px] absolute rotate-45 z-10 border-[#E9E9E9] bg-white"></div>
        </div>
    );
}

export const CardMembership = (props:{title: string, price: string, description: string, allowed: string[], unallowed: string[], button:string, standard?:any, id?:string, type:string}) => {

    return (
        <div id={props.id} className={`flex flex-col justify-between gap-[3rem] sm:px-[4rem] sm:py-[4rem] w-[24%] p-[15rem] rounded-[5px] shadow-lg ${props.standard?"text-white bg-[#FF8132]":"text-[#8593A3]"}`}>
            <div className="flex flex-col gap-[2rem]">
                <div className={`border-b-[1px] pb-[8rem] sm:pb-[3rem] ${props.standard?"":""}`}>
                    <p className={`sm:text-[2rem] text-[7rem] ${props.standard?"":"text-[#5E5E5E]"}`}>{props.title}</p>
                    <div className="sm:text-[2rem] text-[8rem]">
                        <span className={`sm:text-[5.2rem] text-[30rem] mr-[2rem] font-semibold ${props.standard?"":"text-[#282828]"}`}>${props.price}</span>
                        {props.type}
                    </div>
                    <div className="sm:text-[2rem] text-[8rem]">{props.description}</div>
                </div>
                <div className="sm:mt-[2rem] mt-[12rem] flex flex-col gap-[2rem]">
                    {props.allowed.map(item => {
                        return (
                            <div className="sm:gap-[2rem] flex justify-start gap-[7rem] items-center">
                                <Image src={props.standard?checkLight:check} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                                <span className="sm:text-[2rem] text-[7rem]">{item}</span>
                            </div>
                        );
                    })}
                    {props.unallowed.map(item => {
                        return (
                            <div className=" sm:gap-[2rem] flex justify-start gap-[7rem] items-center">
                                <Image src={uncheck} alt="" className="sm:h-[3rem] h-[15rem] w-auto"></Image>
                                <span className="sm:text-[2rem] text-[7rem]">{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className={`sm:text-[2.4rem] text-[10rem] sm:py-[1.2rem] py-[4rem] bg-white border-[1px] rounded-full duration-100 ${props.standard?"text-black standard border-[#FFFFFF]":" nostandard border-[#8593A3]"}`}>{props.button}</button>
        </div>
    );
}

export const ProfileCardMembership = (props:{title: string, price: string, description: string, allowed: string[], unallowed: string[], button:string, standard?:any, id?:string, type:string}) => {

    return (
        <div id={props.id} className={`flex flex-col justify-between gap-[3rem] sm:px-[4rem] sm:py-[4rem] w-[24%] p-[15rem] rounded-[16px] shadow-lg ${props.standard?"text-white bg-[#FF8132]":"text-[#8593A3]"}`}>
            <div className="flex flex-col gap-[2rem]">
                <div className={`border-b-[1px] pb-[8rem] sm:pb-[2rem] ${props.standard?"":"border-b-[#8593A3]"}`}>
                    <p className={`sm:text-[1.5rem] text-[7rem] ${props.standard?"":"text-[#5E5E5E]"}`}>{props.title}</p>
                    <div className="sm:text-[1.6rem] text-[8rem]">
                        <span className={`sm:text-[4.3rem] text-[30rem] mr-[2rem] font-semibold ${props.standard?"":"text-[#282828]"}`}>${props.price}</span>
                        {props.type}
                    </div>
                    <div className="sm:text-[1.4rem] text-[8rem]">{props.description}</div>
                </div>
                <div className="sm:mt-[1rem] mt-[12rem] flex flex-col gap-[1.5rem]">
                    {props.allowed.map(item => {
                        return (
                            <div className="sm:gap-[2rem] flex justify-start gap-[7rem] items-center">
                                <Image src={props.standard?checkLight:check} alt="" className="sm:h-[2rem] h-[15rem] w-auto"></Image>
                                <span className="sm:text-[1.6rem] text-[7rem]">{item}</span>
                            </div>
                        );
                    })}
                    {props.unallowed.map(item => {
                        return (
                            <div className=" sm:gap-[2rem] flex justify-start gap-[7rem] items-center">
                                <Image src={uncheck} alt="" className="sm:h-[2rem] h-[15rem] w-auto"></Image>
                                <span className="sm:text-[1.6rem] text-[7rem]">{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className={`sm:text-[1.9rem] text-[10rem] sm:py-[1.2rem] py-[4rem] bg-white border-[1px] rounded-full ${props.standard?"text-black standard ":" nostandard border-[#8593A3]"}`}>{props.button}</button>
        </div>
    );
}