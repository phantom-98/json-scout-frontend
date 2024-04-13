


export const Session3 = (props:{text:string, selected:boolean}) => {
    return(
        <p className={`sm:text-[1.7rem] sm:leading-[1.7rem] sm:mb-[2rem] text-[5.6rem] leading-[5.6rem] mb-[6rem] ${props.selected?'text-[#FF8132]':'text-[#828A91]'} `}>{props.text}</p>
    )
}