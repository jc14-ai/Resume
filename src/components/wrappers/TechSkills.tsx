import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function TechSkills({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[300px] border-2 pl-10 pr-10'>
            {children}
        </div>
        </>
    )
}