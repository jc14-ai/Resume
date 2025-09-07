import {ReactNode} from "react"

type ChildrenProps = {
    children?: ReactNode;
}

export function Resume({children} : ChildrenProps){
    return(
        <>
            <div className='flex flex-col justify-center items-center h-[2160px] w-[70%] bg-white m-20 rounded-4xl shadow-2xl'>
                {children}
            </div>
        </>
    )
}