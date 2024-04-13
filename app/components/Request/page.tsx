import React from "react"


export const Request = (props:{text:string, num:number, color:string }) =>{
    return(
        <div className="shadow-md sm:text-[2.5rem] text-[6rem] font-medium sm:p-[4rem] py-[8rem] sm:w-[33rem] w-[34%]">
            <p className="text-center">{props.text}</p>
            <p className={`text-center sm:text-[8rem] text-[16rem] text-[${props.color}]`}>{props.num}</p>
        </div>
    )
}