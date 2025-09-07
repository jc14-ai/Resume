type NameProps = {
    name: string;
}

export function Name({name}:NameProps){
    return(
        <>
        <h1 className="">{name}</h1>
        </>
    )
}