import Forsale from "@/components/home/Section/Forsale";



interface SectionProps {
    tag: string,
}


export default function Section(props: SectionProps) {
    return (
        <div className={`bg-white shadow-sm p-3 min-h-[400px] flex justify-center`}>
            <legend className="absolute text-lg uppercase">{props.tag}</legend>
            <Forsale/>
        </div>
    )
}