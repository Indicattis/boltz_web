



interface DefaultBoxProps {
    tag?: string,
    children: React.ReactNode
}


export default function DefaultBox({children}:DefaultBoxProps) {
    return (
        <div className={`flex rounded-md relative overflow-hidden bg-white shadow-md justify-center flex-col gap-5 w-4/5 max-sm:w-full`}>
            {children}
        </div>
    )
}