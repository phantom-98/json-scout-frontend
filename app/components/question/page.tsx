import Image from "next/image"
import React, { SetStateAction, Dispatch } from 'react';



export const Question = (props:{img1:any, img2:any, question:string, answer:string, n:number, change:Dispatch<SetStateAction<number>>}) => {

    const [state, setState] = React.useState(0)

    return(
        <>
        <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
            <Image src={state === 0?props.img1:props.img2} alt="" className={`${state === 0?'sm:w-[3.5rem] sm:top-[4rem] sm:left-[7rem]':'sm:w-[3.5rem] sm:top-[5.5rem] sm:left-[7rem]'} sm:left-[6rem] ${state ===0?'h-[11rem]':'h-[1.6rem] top-[16rem]'} h-auto absolute left-[11rem] hover:cursor-pointer`} onClick={()=>{state === 0?setState(1):setState(0)}}></Image>
            <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem] hover:cursor-pointer" onClick={()=>{state === 0?setState(1):setState(0)}}>{props.question}</p>
            <p className={`sm:text-[2rem] sm:leading-[3rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] ${state === 0?'hidden':''}`}>{props.answer}</p>
        </div>
        

        </>
    )
}