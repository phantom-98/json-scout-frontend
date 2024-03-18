import arrowright from "../../../public/arrow-right.svg"
import Image from "next/image"



export const Session2 = (props:{text:string}) => {

    return(
        <div className="flex justify-between items-center sm:pr-[2rem] sm:mb-[3.3rem]">
            <p className="sm:text-[2rem] sm:leading-[2rem] text-[#828A91] font-medium ">{props.text}</p>
            <Image src={arrowright} className="sm:h-[2rem] w-auto" alt=""></Image>
        </div>
    )
}