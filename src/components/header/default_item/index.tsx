'use client'
import React, { useState } from 'react';

interface PropsItem {
    children: React.ReactNode;
    tooltip: string
}


export default function HeaderItem(props: PropsItem) {
    const [hover, setHover] = useState<boolean>(false)


    const router = (param: string) => {
        window.location.href = `/${param}`
    }
    
    return (
        <div className={
            `${hover ? "text-black p-5" : "text-gray-600 p-0"}
            flex gap-2 items-center justify-center font-light rounded-full p-3 cursor-pointer transition-all`}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => router(props.tooltip)}>
            <div className={`${hover ? "scale-110" : "scale-100"} flex justify-center items-center gap-3
            text-sm text-center transition-all`}>
                {props.children}
                <div className={`
                ${hover ? "w-auto opacity-100" : "w-0 opacity-0"} transition-all`}>
                    {props.tooltip}
                </div>
            </div>
            
        </div>
    )
}