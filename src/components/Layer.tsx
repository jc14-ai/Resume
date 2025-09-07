type LayerProps = {
    layer: string;
    technologies: string;
}

export function Layer({layer, technologies}:LayerProps){
    return (
        <>
        <div>
            <h1 className="text-[1.5em] font-bold hover:text-gray-500 duration-200 w-fit">{layer}</h1>
            <h2 className="text-[1em]" >{technologies}</h2>
        </div>
        </>
    )
}