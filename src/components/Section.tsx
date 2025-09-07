type SectionProps = {
    title: string;
}

export function Section({title}:SectionProps) {
    return (
        <>
        <h2 className='text-[2em] font-bold font-domine w-full bg-gray-300 rounded-4xl pl-5 hover:text-gray-700'>{title}</h2>
        </>
    )
}