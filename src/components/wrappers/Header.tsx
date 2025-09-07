import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Header({children}: ChildrenProps){
    return(
        <>
        <div className='flex flex-row items-start justify-start w-full h-[300px] rounded-t-4xl'>
            {children}
        </div>
        </>
    )
}