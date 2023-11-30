import ProductsConfig from "@/components/body/product_config";
import ProductsTable from "@/components/body/products_table";
import { useState } from "react";


export default function ProductsStore() {
    const [id, setId] = useState<number>(0)

    function rid(id: number){
        setId(id)
    }
    return (
        <>
            {id > 0 ? (<ProductsConfig back={() => setId(0)} id={id}/>) : <ProductsTable sid={rid}/>}
        </>
    )
}