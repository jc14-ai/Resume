import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Certification({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}