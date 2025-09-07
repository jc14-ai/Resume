import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Header({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}