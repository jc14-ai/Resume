import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Certification({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[300px] pl-15 pr-15'>
            {children}
        </div>
        </>
    )
}