type JobInfoProps = {
    job:string;
}

export function JobInfo({job}:JobInfoProps){
    return(
        <>
        <h2 className="">{job}</h2>
        </>
    )
}