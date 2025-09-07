type ButtonProps={
    arrow:string;
    click:() => void;
}

export function Button({arrow, click}:ButtonProps){
    return(
        <>
        <img className='hover:cursor-pointer hover:scale-105 w-15 duration-300' onClick={():void => click()} src={arrow}/>
        </>
    )
}