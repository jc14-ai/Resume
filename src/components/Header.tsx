import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Header({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-col items-start justify-start bg- w-full h-[300px] rounded-t-4xl border-2'>
            {children}
        </div>
        </>
    )
}