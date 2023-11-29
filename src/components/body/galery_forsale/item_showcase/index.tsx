'use client'

import product from "@/data/datatype/product";
import { UNSPLASH_LINK } from "@/data/unsplash";
import { useState } from "react";


export default function ItemShowcase(props: product) {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div 
        key={props.id}
        className={`cursor-pointer w-[200px] flex flex-col items-center 
        shadow-md rounded-sm text-zinc-700 h-[300px] hover:h-[310px]
        transition-all overflow-hidden relative`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <img className={`${hover ? "scale-110" : "scale-100"} transition-all`} src={`${UNSPLASH_LINK}/200x200?${props.title}`}/>
            {props.offer > 0 ? (
                <div className="absolute w-full text-white bg-zinc-900">
                    {props.offer}%OFF
                </div>
            ) : ""}
                

            <div className={`h-full font-sans flex flex-col justify-center transition-all ${hover ? "mt-3" : ""}`}>
                <legend className="text-md text-zinc-600">
                    {props.title}
                </legend>
                {props.offer > 0 ? (
                    <div className="text-xs line-through">
                        R${props.price}
                    </div>
                ) : ""}
                <div className={`font-bold text-xl`}>
                    {props.offer > 0 ? "R$"+(props.price - (props.price*props.offer/100)).toFixed(2) : (
                    "R$"+(props.price).toFixed(2)
                    )}
                </div>
                <div className={`text-xs text-zinc-400`}>
                    em 12x R${((props.price/12)+props.price*0.01).toFixed(2)}
                </div>
            </div>
            {/* <button className={`bg-green-400 active:bg-green-500 text-white w-full rounded-sm p-1 text-sm flex gap-3 justify-center items-center`}>Adicionar ao carrinho<IconShoppingCart/></button> */}
        </div>
    )
}