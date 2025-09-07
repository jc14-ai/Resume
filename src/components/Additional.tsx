import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Additional({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}