import React, { useEffect } from 'react';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';
import arrow from "../../../public/Arrow 1.svg"
import Image from 'next/image';

export const CustomCodeBlock = (props:{ code: string, centerTitle: string, leftTitle: string, rightTitle?: string[], className?: string}) => {
    
    const [right, setRight] = React.useState(props.rightTitle ? props.rightTitle[0] : '')
    const [isPopup, setIsPopup] = React.useState(false)

    return (
        <div className={`shadow-lg rounded-[16px] overflow-hidden w-[min-content] flex flex-col justify-start sm:h-full ${props.className}`}>
            <div className="bg-gray-100 flex justify-between sm:p-[1.6rem] p-[8rem] sm:text-[1.6rem] text-[6.4rem] items-center sm:px-[2.4rem] px-[12rem]">
                <span className='flex items-center text-gray-400'>{props.leftTitle?props.leftTitle:(
                    <div className='flex items-center sm:gap-3'>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-red-500'></div>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-green-500'></div>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-yellow-500'></div>
                    </div>
                )}</span>
                <span className='text-black font-bold sm:text-[1.8rem] text-[7.2rem]'>{props.centerTitle}</span>
                <div className='sm:pl-8 pl-[10rem] cursor-default relative border-l-[1px] border-l-gray-400 w-[10rem] flex justify-center items-center'>
                    <span onClick={()=>{setIsPopup(!isPopup)}} className=' text-gray-500 sm:pr-[1rem]'>{right}</span>
                    {props.rightTitle && props.rightTitle.length > 1 && (<Image onClick={()=>{setIsPopup(!isPopup)}} src={arrow} alt='' className='sm:h-[1rem] h-[6.4rem] w-auto'></Image>)}
                    {props.rightTitle && props.rightTitle.length > 1 && (
                    <div className={`absolute bg-gray-100 top-[4rem] sm:px-[1rem] -right-[1rem] rounded-[1px] sm:text-[1.6rem] text-[6.4rem] w-full ${isPopup?'':'hidden'}`}>
                        {props.rightTitle.map((key, item)=>(
                        <div className={`sm:p-[1rem] text-center text-gray-400 ${item == 0?'':'sm:border-t-[1px]'} sm:border-t-gray-200`} onClick={()=>{setRight(key);setIsPopup(false)}}>{key}</div>
                    )
                    )}
                    </div>)}
                </div>
                
            </div>
            <CodeBlock code={props.code} language='js' theme={themes.oneLight}>
                <CodeBlock.Code className="bg-white-900 sm:p-8 sm:text-[1.6rem] text-[6rem] overflow-auto w-[fit-content] text-wrap min-w-[180rem] sm:min-w-[64rem]">
                    <div className="table-row">
                        <CodeBlock.LineNumber className="table-cell sm:px-4 px-[10rem] text-gray-500 text-right select-none sm:p-[0.5rem] p-[1rem]" />
                        <CodeBlock.LineContent className="table-cell sm:pl-10 pl-[0]">
                            <CodeBlock.Token />
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>
            </CodeBlock>
        </div>
    );
}