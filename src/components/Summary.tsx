import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Summary({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[250px] border-2'>
            {children}
        </div>
        </>
    )
}