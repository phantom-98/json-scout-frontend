import Image from "next/image";

export const Step = (props:{no: string, img: any, font: string, title: string, description: string}) => {
    
    return (
        <div className=" sm:w-[30%] flex flex-col items-center relative">
            <div className="left-[24%] top-[-4%] text-[10rem] leading-[21rem] text-center rounded-full w-[21rem] h-[21rem] sm:left-[21%] sm:top-[-10%] sm:w-[6rem] sm:h-[6rem] sm:text-[4rem] sm:leading-[6rem] bg-white font-semibold shadow-md absolute ">{props.no}</div>
            <Image src={props.img} alt="" className="w-[45%] sm:w-[50%] sm:h-auto" ></Image>
            <p className={`mt-[10rem] sm:text-[4.5rem] sm:leading-[5.5rem] sm:mt-[5rem] text-[12rem] leading-[24rem] text-[#282828] font-bold ${props.font}`}>{props.title}</p>
            <p className="sm:text-[3rem] sm:leading-[4rem] sm:mt-[2rem] mt-[6rem] text-[9rem] leading-[20rem] font-normal text-[#828A91]">{props.description}</p>
        </div>
    );
}