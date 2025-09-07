import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Projects({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[400px] border-2'>
            {children}
        </div>
        </>
    )
}