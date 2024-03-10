import React, { useEffect } from 'react';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';

export const CustomCodeBlock = (props:{ code: string, centerTitle: string, leftTitle: string, rightTitle: string, className?: string}) => {
    return (
        <div className={`shadow-lg rounded-[16px] overflow-hidden w-[min-content] flex flex-col justify-start sm:h-full ${props.className}`}>
            <div className="bg-gray-100 flex justify-between sm:p-[1.6rem] p-[8rem] sm:text-[1.6rem] text-[6.4rem] sm:px-[2.4rem] px-[12rem]">
                <span className='flex items-center text-gray-400'>{props.leftTitle?props.leftTitle:(
                    <div className='flex items-center sm:gap-3'>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-red-500'></div>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-green-500'></div>
                        <div className='sm:w-[1.4rem] sm:h-[1.4rem] rounded-full bg-yellow-500'></div>
                    </div>
                )}</span>
                <span className='text-black font-bold sm:text-[1.8rem] text-[7.2rem]'>{props.centerTitle}</span>
                <span className='sm:pl-8 pl-[10rem] border-l-[1px] border-l-gray-400 text-gray-500'>{props.rightTitle}</span>
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