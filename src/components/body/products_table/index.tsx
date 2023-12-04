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
        <table className="table w-full text-gray-700 bg-white">
            <thead>
                <tr className="text-xs">
                    <th className="text-center py-5"></th>
                    <th className="text-left max-md:hidden ">ID</th>
                    <th className="text-left">Name</th>
                    <th className="text-left max-md:hidden">Description</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Offer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-sm font-normal">
                {processing ? "" : 
                data.map((product) => (
                <tr className="border-b font-extralight text-xs rounded-md hover:bg-zinc-100" key={product.id}>
                    <td className={`text-center
                    ${product.status == 4 ? "text-green-500 " : ""}
                    ${product.status == 1 ? "text-zinc-500" : ""}
                    ${product.status == 2 ? "text-yellow-500" : ""}
                    ${product.status == 3 ? "text-red-500" : ""}
                    `}>
                        <IconPointFilled width={23} />
                    </td>
                    <td className="max-md:hidden">{product.id}</td>
                    <td>{product.title.length > 21
                    ? product.title.substring(0, 21) + "..."
                    : product.title}</td>
                    <td className="max-md:hidden">{product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}</td>
                    <td>{"R$"+(product.price - (product.price*(product.offer/100))).toFixed(2)}</td>
                    <td>{product.offer}%</td>
                    <td className="text-center hover:animate-spin flex justify-center">
                        <DefaultButton onClick={() => props.sid(product.id)} variant="default"><IconSettings width={20}></IconSettings></DefaultButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}