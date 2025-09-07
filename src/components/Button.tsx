type ButtonProps={
    arrow:string;
}

export function Button({arrow}:ButtonProps){
    return(
        <>
        <img className='hover:cursor-pointer hover:scale-105 w-15 duration-300' src={arrow}/>
        </>
    )
}