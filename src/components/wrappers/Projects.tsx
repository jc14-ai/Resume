import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Projects({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start w-full h-[400px] pl-15 pr-15'>
            {children}
        </div>
        </>
    )
}