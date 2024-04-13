import arrowright from "../../../public/arrow-right.svg"
import Image from "next/image"



export const Session2 = (props:{text:string}) => {

    return(
        <div className="flex justify-between items-center sm:pr-[2rem] sm:mb-[3.3rem] pr-[7rem] mb-[10rem]">
            <p className="sm:text-[2rem] sm:leading-[2rem] text-[#828A91] font-medium text-[6rem] leading-[6rem]">{props.text}</p>
            <Image src={arrowright} className="sm:h-[2rem] w-auto h-[6rem]" alt=""></Image>
        </div>
    )
}