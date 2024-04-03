import { Footer } from "./components/Footer/page";
import Header from "./components/Header/Header";
import Ghost from "../public/ghost.png";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";


const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

function NotFoundPage() {
	return (
		<>
			<Header/>
			<div className="flex sm:flex-row flex-col justify-between items-center sm:px-[14%] px-[12rem] sm:pt-[8rem] gap-[20rem]">
				<div className="flex flex-col items-start">
					<div className="text-[8rem] px-[8rem] py-[4rem] sm:px-[3rem] sm:py-[1rem] sm:text-[2rem] rounded-full font-semibold text-[#FF2F52] shadow-lg">404 Not Found</div>
					<p className={`text-[22rem] leading-[32rem] sm:text-[7rem] sm:leading-[10rem] font-bold text-wrap ${space_grotesk.className}`}>
						Ooops... 
						<span className=" text-[#FDA235] px-4 rounded-[1.6rem] mr-0"> Nothing</span>
						<br/>was 
						<span className=" text-[#FDA235] px-4 rounded-[1.6rem] mr-0"> found.</span>
					</p>
					<p className="mt-[6rem] text-[8rem] leading-[18rem] font-normal sm:mt-[2rem] sm:text-[1.8rem] sm:leading-[5rem] text-[#828A91] sm:w-[80%] sm:text-wrap">Whoh, back up the bus bro. Where do you think you're going? We looked, and can't find this page on our server.</p>
					
					<Link href={"/"} className="sm:mt-[8rem] mt-[16rem]">
						<button className="text-[8rem] leading-[10rem] w-full sm:w-auto rounded-[8px] py-[6rem] px-[8rem] sm:text-[2rem] sm:leading-[3rem] sm:px-[5rem] sm:py-[2rem] primary-btn font-semibold">Go to Home</button>
					</Link>
				</div>
				<Image src={Ghost} alt="ghost" className="sm:w-[72rem]"/>
			</div>
			<Footer/>
		</>
	);
}

export default NotFoundPage;