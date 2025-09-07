type SectionProps = {
    title: string;
}

export function Section({title}:SectionProps) {
    return (
        <>
        <h2 className='text-[2em] font-bold mb-2 font-domine w-full bg-gray-300 rounded-4xl pl-5'>{title}</h2>
        </>
    )
}