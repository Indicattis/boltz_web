'use client'

import HeaderItem from '@/components/header/default_item';
import { IconShoppingCart, IconUser, IconBuildingStore, IconChartBar } from '@tabler/icons-react';
import React, { useState } from 'react';



export default function Header() {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <header className={`h-12 transition-all 
        ${hover ? "bg-white" : "bg-transparent"}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <nav className='flex w-full h-full content-between items-center'>
                <HeaderItem tooltip='Store'><IconBuildingStore/></HeaderItem>
                <HeaderItem tooltip='Profile'><IconUser/></HeaderItem>
                <HeaderItem tooltip='Cart'><IconShoppingCart/></HeaderItem>
                <HeaderItem tooltip='Dashboard'><IconChartBar/></HeaderItem>
            </nav>
        </header>
    )
}