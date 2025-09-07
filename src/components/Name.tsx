type NameProps = {
    name: string;
}

export function Name({name}:NameProps){
    return(
        <>
        <h1 className="text-[4em] font-domine m-0 hover:scale-102 duration-400">{name}</h1>
        </>
    )
}