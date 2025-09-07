import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function TechSkills({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}