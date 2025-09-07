type JobInfoProps = {
    job:string;
}

export function JobInfo({job}:JobInfoProps){
    return(
        <>
        <h2 className="text-[2.5em] font-domine m-0 hover:text-gray-600 duration-200">{job}</h2>
        </>
    )
}