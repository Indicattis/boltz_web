"use client"

import DefaultButton from "@/components/utils/default_button";
import { fetchProducts } from "@/data/contexts/products/products";
import itemforsale from "@/data/datatype/product"
import useProcess from "@/data/hooks/useProcess";
import { IconPointFilled, IconSettings } from "@tabler/icons-react";
import { useEffect, useState } from "react"


interface ProductsTableProps {
    sid: (id: number) => void,
}

export default function ProductsTable(props:ProductsTableProps) {
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
         
    function getID(id: number) {
        console.log(id)
    }
    return (
        <table className="table w-full text-gray-700 bg-white p-3 shadow-sm rounded-sm">
            <thead>
                <tr className="text-xs font-extralight font-sans">
                    <th>Status</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Offer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="font-sans text-sm font-normal">
                {processing ? "" : 
                data.map((product) => (
                <tr className="border-b rounded-md hover:bg-zinc-100" key={product.id}>
                    <td className={`text-center px-10
                    ${product.status == 4 ? "text-green-500" : ""}
                    ${product.status == 1 ? "text-zinc-500" : ""}
                    ${product.status == 2 ? "text-yellow-500" : ""}
                    ${product.status == 3 ? "text-red-500" : ""}
                    `}>
                        <IconPointFilled width={15}/>
                    </td>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}</td>
                    <td>{"R$"+(product.price - (product.price*(product.offer/100))).toFixed(2)}</td>
                    <td>{product.offer}%</td>
                    <td className="text-center">
                        <DefaultButton onClick={() => props.sid(product.id)} variant="default"><IconSettings width={20}></IconSettings></DefaultButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}