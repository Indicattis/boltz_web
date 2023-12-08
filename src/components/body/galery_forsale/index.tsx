'use client'

import { fetchProducts } from "@/data/contexts/products/products";
import { useEffect, useState } from "react";

import useProcess from "@/data/hooks/useProcess";
import product from "@/data/datatype/product";
import ItemShowcase from "@/components/body/galery_forsale/item_showcase";

export default function GaleryForsale() {
    const [data, setData] = useState<product[]>([])

    const { processing, processInit, processEnd } = useProcess();
    useEffect(() => {
        const fetchData = async () => {
            processInit();
            try {
                const Products = await fetchProducts();
                setData(Products);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            finally {
              processEnd();
            }
        };
    
        fetchData();
        }, []);
    return (
        <div className="grid place-items-center items-center min-h-[330px] p-1 content-center justify-center text-center gap-3 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-4 max-2xl:grid-cols-5 grid-cols-6">
             {processing ? "" : 
            data && data.map((product) => (
                <ItemShowcase
                prod_stock={product.prod_stock}
                prod_status={product.prod_status}
                id={product.id} 
                prod_description={product.prod_description}
                prod_price={product.prod_price}
                prod_name={product.prod_name}
                prod_offer={product.prod_offer}
                key={product.id}/>
            ))}
        </div>
    )
}