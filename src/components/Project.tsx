type ProjectProps={
    image:string;
    title:string;
}

export function Project({image, title}:ProjectProps) {
    return(
        <>
        <h1 className="font-domine font-bold text-[1.5em]">{title}</h1>
        <img className='w-[70%] h-[70%]' src={image}/>
        </>
    )
}