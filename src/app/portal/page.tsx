"use client"

import ProductsConfig from "@/components/body/product_config";
import ProductsTable from "@/components/body/products_table";
import Header from "@/components/header";
import DefaultBox from "@/components/layouts/default_box";
import Section from "@/components/layouts/default_box";
import { useState } from "react";




export default function Home() {
    const [id, setId] = useState<number>(0)

    function rid(id: number){
        setId(id)
    }
    return (
        <main className={`flex flex-col gap-10 justify-around items-center`}>
            <Header></Header>
            <DefaultBox>
                <ProductsTable sid={rid}></ProductsTable>
                {id > 0 && (<ProductsConfig id={id}/>)}
            </DefaultBox>
        </main>
    )
}