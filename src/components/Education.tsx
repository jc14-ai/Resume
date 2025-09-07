import { ReactNode } from "react"

type ChildrenProps = {
    children?:ReactNode;
}
export function Education({children}: ChildrenProps){
    return(
        <>
        <div className=''>
            {children}
        </div>
        </>
    )
}