

import ProductsTable from "@/components/body/products_table";
import Header from "@/components/header";
import DefaultBox from "@/components/layouts/default_box";
import Section from "@/components/layouts/default_box";




export default function Home() {
    return (
        <main className={`flex flex-col gap-10 justify-around items-center`}>
            <Header></Header>
            <DefaultBox tag='Products'>
                <ProductsTable></ProductsTable>
            </DefaultBox>
        </main>
    )
}