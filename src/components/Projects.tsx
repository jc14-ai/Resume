import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Projects({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}