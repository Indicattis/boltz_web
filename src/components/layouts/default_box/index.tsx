import GaleryForsale from "@/components/body/galery_forsale";



interface DefaultBoxProps {
    tag: string,
    children: React.ReactNode
}


export default function DefaultBox({children, tag}:DefaultBoxProps) {
    return (
        <div className={`bg-white shadow-sm p-3 min-h-[400px] flex justify-center`}>
            <legend className="absolute text-lg uppercase">{tag}</legend>
            {children}
        </div>
    )
}