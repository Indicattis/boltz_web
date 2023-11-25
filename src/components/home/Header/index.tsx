'use client'

import Item from '@/components/home/Header/Item';
import { IconShoppingCart, IconUser, IconBuildingStore } from '@tabler/icons-react';
import React, { useState } from 'react';



export default function Header() {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <header className={`h-12 transition-all 
        ${hover ? "bg-white" : "bg-transparent"}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <nav className='flex w-full h-full content-between items-center'>
                <Item tooltip='Store'><IconBuildingStore/></Item>
                <Item tooltip='Profile'><IconUser/></Item>
                <Item tooltip='Cart'><IconShoppingCart/></Item>
            </nav>
        </header>
    )
}