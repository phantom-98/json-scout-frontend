import React from 'react'
import { Context } from "../context/context";

import { Question } from "../../components/question/page";
import plus from "../../../public/Group 1000001523.svg"
import minus from "../../../public/minus.svg"

import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

const FAQ = () => {
    const {logState} = React.useContext(Context)
    const [order, setOrder] = React.useState(1)

    return (
        <div>
            <p className={`${logState?'sm:pt-[15rem]':'sm:pt-[15rem]'} sm:text-[6rem] sm:leading-[8rem] sm:mt-[0rem] text-[16rem] mt-[27rem] text-center leading-[20rem] font-semibold ${space_grotesk.className}`}>Frequently Asked Questions</p>
            <div className="sm:mt-[9rem] sm:items-center sm:flex-row sm:px-[10rem] sm:gap-[4rem] flex flex-col justify-start gap-[6rem] px-[20px] mt-[18rem] mb-[12rem]">
                <div className="sm:w-[60%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How do you determine the correct data to extract?" answer="We leverage the power of LLMs to determine your desired content output." n = {1} selected = {order} change={setOrder}/>
                    <Question img1={plus} img2={minus} question="Is it possible to specific an output format?" answer="Yes! If you require a date formatted in a specific manner, provide it after your desired output. Check the examples above." n = {2} selected = {order} change={setOrder} />
                </div>
                <div className="sm:w-[60%] sm:gap-[4rem] sm:justify-start flex flex-col justify-start gap-[6rem]">
                    <Question img1={plus} img2={minus} question="How many tokens is an average request?" answer="We've found that an average request with a 250 character limit is about 300 tokens. This may change on your desired outputs." n = {3} selected = {order} change={setOrder} />
                    <Question img1={plus} img2={minus} question="What happens if I go over my token limit?" answer="If you reach your token limit, you have two choices, the first is to wait for the monthly reset. The second is to upgrade your plan. However, if you are on the premium plan then contact sales@jsonscout.com" n = {4} selected = {order} change={setOrder} />
                </div>
            </div>
        </div>
    )
}

export { FAQ }