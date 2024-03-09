import React, { useEffect } from 'react';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';

export const CustomCodeBlock = (props:{ code: string, centerTitle: string, leftTitle: string, rightTitle: string}) => {
    return (
        <div className='shadow-lg rounded-[2rem] overflow-hidden'>
            <div className="bg-gray-100 flex justify-between p-[1.6rem] text-[1.6rem]">
                <span className='flex items-center ml-8 text-gray-400'>{props.leftTitle?props.leftTitle:(
                    <div className='flex items-center gap-3'>
                        <div className='w-[1.4rem] h-[1.4rem] rounded-full bg-red-500'></div>
                        <div className='w-[1.4rem] h-[1.4rem] rounded-full bg-green-500'></div>
                        <div className='w-[1.4rem] h-[1.4rem] rounded-full bg-yellow-500'></div>
                    </div>
                )}</span>
                <span className='text-black font-bold text-[1.8rem]'>{props.centerTitle}</span>
                <span className='mr-8 pl-8 border-l-[1px] border-l-gray-400 text-gray-500'>{props.rightTitle}</span>
            </div>
            <CodeBlock code={props.code} language='js' theme={themes.oneLight}>
                <CodeBlock.Code className="bg-white-900 p-8 overflow-auto">
                    <div className="table-row">
                        <CodeBlock.LineNumber className="table-cell pl-4 pr-4 text-[1.6rem] text-gray-500 text-right select-none p-[0.5rem]" />
                        <CodeBlock.LineContent className="table-cell pl-10 text-[1.6rem]">
                            <CodeBlock.Token />
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>
            </CodeBlock>
        </div>
    );
}