


export const Session3 = (props:{text:string, selected:boolean}) => {
    return(
        <p className={`sm:text-[1.7rem] sm:leading-[1.7rem] sm:mb-[2rem] ${props.selected?'sm:text-[#FF8132]':'sm:text-[#828A91]'} `}>{props.text}</p>
    )
}