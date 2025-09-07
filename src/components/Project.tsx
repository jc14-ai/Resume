import { useState } from 'react';
import githubBlackLogo from '../assets/github.png'
import githubWhiteLogo from '../assets/github_white.png'

type ProjectProps={
    image:string;
    title:string;
    codeLink:string;
    deployLink:string;
}

export function Project({image, title, codeLink, deployLink}:ProjectProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
        <a className="hover:cursor-pointer" href={codeLink} onMouseEnter={():void => setHovered(true)} onMouseLeave={():void => setHovered(false)}>
            <img className="w-8" src={hovered? githubWhiteLogo : githubBlackLogo}/>
        </a>
        <h1 className="font-domine font-bold text-[1.5em]">{title}</h1>
        <div className='flex flex-row justify-between items-center w-full h-[70%]'>
            <a className='w-[70%] h-[90%]' href={deployLink}>
                <img className='w-[100%] h-[100%]' src={image}/>
            </a>
            <p className='w-[50%] text-justify font-domine text-[1.1em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit nulla, fuga molestiae modi esse eius, voluptatum magni iste accusantium iusto sint nobis asperiores animi minima. Ut necessitatibus error velit.</p>
        </div>
        </>
    )
}