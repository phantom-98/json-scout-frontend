import Image from "next/image"
import arrow from "../../../public/arrow-right1.svg"



export const Cell = ({ ID, Created, view }: { ID: number; Created: string; view: (id: number) => void }) => {
    return (
        <div className="sm:items-center sm:flex sm:justify-start sm:px-[4rem] sm:py-[3rem] sm:border-l-[1px] sm:border-b-[1px] sm:border-r-[1px] sm:border-[#EAEAEA]">
            <span className="sm:text-[2.2rem] sm:text-[#828A91] sm:leading-[2.5rem] sm:w-[50rem]">{ID}</span>
            <span className="sm:w-[42rem] sm:text-[2.2rem] sm:text-[#828A91] sm:leading-[2.5rem]">{Created}</span>
            <div className="flex justify-start gap-[1.5rem] items-center" onClick={() => view(ID)}>
                <span className="sm:text-[2.2rem] sm:text-[#FF8132] sm:leading-[2.5rem]">View Request</span>
                {/* Make sure to import Image and define arrow variable correctly */}
                <Image src={arrow} alt="Arrow indicating direction to view request" className="h-[2.5rem] w-auto" />
            </div>
        </div>
    );
};