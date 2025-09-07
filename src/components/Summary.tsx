import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Summary({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}