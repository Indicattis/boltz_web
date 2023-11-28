"use client"

import { fetchProducts } from "@/data/contexts/products/products";
import itemforsale from "@/data/datatype/product"
import useProcess from "@/data/hooks/useProcess";
import { useEffect, useState } from "react"




export default function ProductsTable() {
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
        <table className="table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Descriptio</td>
                    <td>Offer</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody className="font-sans text-sm font-medium text-zinc-700">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {processing ? "" : 
                data.map((product) => (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{"R$" + (product.price).toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}