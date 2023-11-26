'use client'

import itemforsale from "@/data/datatype/itemforsale";
import { UNSPLASH_LINK } from "@/data/unsplash";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";


export default function Showcase(props: itemforsale) {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div 
        key={props.id}
        className={`cursor-pointer w-[200px] flex flex-col items-center 
        shadow-md rounded-sm text-zinc-700 h-[300px] hover:h-[310px]
        transition-all overflow-hidden`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <img className={`${hover ? "scale-110" : "scale-100"} transition-all`} src={`${UNSPLASH_LINK}/200x200?${props.title}`}/>
            <div className={`h-full flex flex-col justify-center transition-all ${hover ? "mt-3" : ""}`}>
                <legend className="font-sans text-sm">
                    {props.title}
                </legend>
                <div className={`font-bold text-xl font-sans`}>
                    R${props.price}
                </div>
                <div className={`text-xs text-zinc-400 font-sans`}>
                    em 12x R${((props.price/12)+props.price*0.01).toFixed(2)}
                </div>
            </div>
            {/* <button className={`bg-green-400 active:bg-green-500 text-white w-full rounded-sm p-1 text-sm flex gap-3 justify-center items-center`}>Adicionar ao carrinho<IconShoppingCart/></button> */}
        </div>
    )
}