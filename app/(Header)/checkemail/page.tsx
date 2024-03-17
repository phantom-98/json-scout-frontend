import Image from "next/image"
import sms from "../../../public/sms.svg"


export default () => {
    return(
    <div className="sm:h-[50rem] w-[100%]">
    <div className="sm:py-[3rem] sm:px-[5rem] sm:mt-[25rem] sm:ml-[35%] w-[30%] shadow-lg flex flex-col items-center sm:rounded-[1rem]">
        <div className="sm:p-[1.5rem] sm:rounded-[1rem] border-[1px] border-[#F2F3F5]"><Image src={sms} alt="" className="sm:w-[3.5rem] h-auto"></Image></div>
        <div className="sm:mt-[3rem]">
            <p className="text-center sm:text-[2.7rem] sm:font-semibold">Check your Email!</p>
            <p className="text-center sm:mt-[1rem] text-[#808080] sm:text-[1.8rem]">We just sent you a email to verify your account. Follow the instructions within.</p>
        </div>
    </div>
    </div>
    )
    
}