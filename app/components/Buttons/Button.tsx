

export default (props:{label: string, type: string, mobile: string}) => {
    const {
        label,
        type='primary',
        mobile
    } = props;

    return(
        
        <div className={`${type}-btn rounded-[4px] ${mobile === 'Y' ? 'w-full' : 'w-[106px]'} h-[48px] flex justify-center items-center cursor-pointer`}>
            <span className="text-[14px] leading-[16.94px] letter2 font-semibold">{label}</span>
        </div>
    )
}