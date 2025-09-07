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
        <div className="flex flex-row justify-start items-start text-[1.5em] font-domine gap-2 m-0">
            <h3>{address}</h3>|
            <a className="hover:text-red-400 duration-300" href={email}>Email</a>|
            <a className="hover:text-blue-400 duration-300" href={linkedin}>LinkedIn</a>|
            <a className="hover:text-blue-700 duration-300" href={github}>Github</a>|
            <h3>{phone}</h3>
        </div>
        </>
    )
}