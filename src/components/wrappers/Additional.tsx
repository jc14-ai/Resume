import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Additional({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[310px] rounded-b-4xl border-2 pl-10 pr-10'>
            {children}
        </div>
        </>
    )
}