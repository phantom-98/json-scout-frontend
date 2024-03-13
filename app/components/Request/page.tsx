import React from "react"


export const Request = (props:{text:string, num:number, color:string }) =>{
    return(
        <div className=" sm:shadow-md sm:text-[2.5rem] sm:font-medium sm:p-[4rem] sm:w-[33rem]">
            <p className="sm:text-center">{props.text}</p>
            <p className={`sm:text-center sm:text-[8rem] text-[${props.color}]`}>{props.num}</p>
        </div>
    )
}