'use client'

import Showcase from "@/components/home/Section/Forsale/Showcase";
import { fetchProducts } from "@/data/contexts/products/products";
import { useEffect, useState } from "react";

import useProcess from "@/data/hooks/useProcess";
import itemforsale from "@/data/datatype/itemforsale";

export default function Forsale() {
    const [data, setData] = useState<itemforsale[]>([])

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
        <div className="grid items-center content-center justify-center text-center gap-3 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-4 max-2xl:grid-cols-5 grid-cols-6">
             {processing ? "" : 
            data.map((product) => (
                <Showcase 
                id={product.id} 
                description={product.description}
                price={product.price}
                title={product.title}
                key={product.id}/>
            ))}
        </div>
    )
}