



interface DefaultBoxProps {
    tag?: string,
    children: React.ReactNode
}


export default function DefaultBox({children, tag}:DefaultBoxProps) {
    return (
        <div className={`flex justify-center flex-col gap-3`}>
            <legend className="absolute text-lg uppercase">{tag}</legend>
            {children}
        </div>
    )
}