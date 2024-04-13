import Image from "next/image"
import arrow from "../../../public/arrow-right1.svg"



export const Cell = ({ ID, Created, view }: { ID: number; Created: string; view: (id: number) => void }) => {
    return (
        <div className="items-center flex justify-start sm:px-[4rem] sm:py-[3rem] p-[4rem] border-l-[1px] border-b-[1px] border-r-[1px] border-[#EAEAEA]">
            <span className="sm:text-[2.2rem] text-[8rem] text-[#828A91] sm:leading-[2.5rem] leading-[16rem] sm:w-[50rem] w-[28rem]">{ID}</span>
            <span className="sm:w-[42rem] w-[92rem] sm:text-[2.2rem] text-[8rem] text-[#828A91] sm:leading-[2.5rem] leading-[16rem]">{Created}</span>
            <div className="flex justify-start gap-[1.5rem] items-center cursor-pointer" onClick={() => view(ID)}>
                <span className="sm:text-[2.2rem] text-[8rem] text-[#FF8132] sm:leading-[2.5rem] leading-[16rem]">View Request</span>
                {/* Make sure to import Image and define arrow variable correctly */}
                <Image src={arrow} alt="Arrow indicating direction to view request" className="sm:h-[2.5rem] h-[7rem]" />
            </div>
        </div>
    );
};