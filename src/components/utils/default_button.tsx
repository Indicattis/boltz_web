

interface DefaultButtonProps {
    variant: "submit" | "alert" | "cancel" | "default",
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
}

export default function DefaultButton({children, variant, onClick, type}: DefaultButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`
        ${variant == "default" ? "rounded-full p-1 text-zinc-600 hover:bg-zinc-100 active:bg-zinc-200" : ""}
        ${variant == "alert" ? "text-yellow-500" : ""}
        ${variant == "submit" ? "w-full text-white bg-green-400 text-base rounded-sm" : ""}
        ${variant == "cancel" ? "w-full text-white bg-red-400 text-base rounded-sm" : ""}
        `}>
            {children}
        </button>
    )
}