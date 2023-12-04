"use client"

import ProductsInsert from "@/components/body/product_insert";
import ProductsStore from "@/components/body/products_store";
import Header from "@/components/header";
import DefaultBox from "@/components/layouts/default_box";
import Tabller from "@/components/utils/tab_controller";


export default function Home() {

    const tab1Content = <ProductsStore/>;
    const tab2Content = <ProductsInsert  />;
    
    const tabContents = [tab1Content, tab2Content];

    const tabLabels = ['Store', 'Add +'];

    return (
        <main className={`flex flex-col gap-10 justify-around items-center`}>
            <Header></Header>
            <DefaultBox>
                <Tabller tabContents={tabContents} tabLabels={tabLabels}></Tabller>
            </DefaultBox>
        </main>
    )
}