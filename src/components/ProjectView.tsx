type ProjectViewProps = {
    children?: React.ReactNode
}

export function ProjectView({children}: ProjectViewProps){
    return(
        <>
        <div className="flex flex-row justify-between items-center w-full h-full mt-4">
            {children}
        </div>
        </>
    )
}