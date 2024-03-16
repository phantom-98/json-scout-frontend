import Image from "next/image"
import React, { SetStateAction, Dispatch } from 'react';



export const Question = (props:{img1:any, img2:any, question:string, answer:string, n:number, selected:number, change:Dispatch<SetStateAction<number>>}) => {

    const [state, setState] = React.useState(false)

    React.useEffect(()=>{
        if(props.n != props.selected) {
            setState(false)
        }
    }, [props.selected])

    return(
        <>
        <div className="sm:py-[4rem] sm:pr-[4rem] sm:pl-[12rem] sm:rounded-[3rem] drop-shadow-1 pl-[28rem] py-[12rem] pr-[12rem] relative rounded-[10rem]">
            <div className="relative">
                <Image src={state?props.img2:props.img1} alt="" className={`w-[8rem] h-[8rem] left-[-12rem] top-[1.6rem] sm:w-[3.2rem] sm:h-[3.2rem] sm:left-[-4.8rem] sm:top-[0.6rem] absolute cursor-pointer`} onClick={()=>{setState(prev => !prev);props.change(props.n)}}></Image>
                <p className="sm:text-[3rem] sm:leading-[4rem] font-semibold text-[9rem] leading-[11rem] hover:cursor-pointer" onClick={()=>{setState(prev => !prev);props.change(props.n)}}>{props.question}</p>
            </div>
            <p className={`sm:text-[2rem] sm:leading-[3rem] sm:pt-[2rem] leading-[11rem] text-[8rem] pt-[4rem]  text-[#363049] ${state?'':'hidden'}`}>{props.answer}</p>
        </div>
        

        </>
    )
}