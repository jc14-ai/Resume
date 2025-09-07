type ContactProps = {
    address:string;
    email:string;
    linkedin:string;
    github:string;
    phone:string;
}

export function Contact({address, email, linkedin, github, phone}:ContactProps){
    return(
        <>
        <div className="flex flex-row justify-start items-start">
            <h3>{address}</h3>
            <a href={email}>Email</a>
            <a href={linkedin}>LinkedIn</a>
            <a href={github}>Github</a>
            <h3>{phone}</h3>
        </div>
        </>
    )
}