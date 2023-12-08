import DefaultButton from "@/components/utils/default_button";
import { deleteProduct, getProduct, updateProduct } from "@/data/contexts/products/products";
import product from "@/data/datatype/product";
import useProcess from "@/data/hooks/useProcess";
import { IconArrowLeft, IconCheck, IconPointFilled, IconTrash, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";


interface ProductsConfig {
    id: number,
    back: () => void,
}


export default function ProductsConfig({id, back}: ProductsConfig) {
    const [data, setData] = useState<product | undefined>()
    const { register, handleSubmit, reset  } = useForm<product>();
    const { processing, processInit, processEnd } = useProcess();


    const fetchData = useCallback (async () => {
          processInit();
          try {
            const products = await getProduct(id);
            setData(products);
            reset(products[0])
          } catch (error) {
            console.log(error);
          } finally {
            processEnd();
          }
        }, [id]);

        useEffect(() => {
            fetchData();
        }, [id]);
         
      async function onSubmit (data: product) {
        processInit();
        try {
            if (id) {
                const requestData = {
                    ...data,
                };
                const update = await updateProduct(id, requestData);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            processEnd();
            back();
        }
    };

    async function onExclude(id: number) {
        processInit();
        try {
            const request = await deleteProduct(id);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            processEnd();
            back();
        }
    }
    return (
        <div className="bg-white shadow-sm p-3">
            {processing ? "" : (
            <div>
                <form
                className="font-thin text-xs flex flex-col gap-3 w-full"
                action="" key={id} onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-3 max-md:flex-col">
                        <div className="w-full flex flex-col gap-2">
                            <legend>Informações do Produto</legend>
                            <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                                <div className="w-20 text-center text-zinc-400">ID:</div>
                                <input
                                className={`border rounded-md p-2 bg-white shadow`}
                                type="text"
                                disabled
                                placeholder=""
                                {...register("id")}
                                defaultValue={data?.id}
                                />
                            </div>
                            <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                                <div className="w-20 text-center text-zinc-400">Nome:</div>
                                <input
                                className={`border rounded-md p-2 bg-white shadow`}
                                type="text"
                                placeholder=""
                                {...register("prod_name")}
                                defaultValue={data?.prod_name}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <legend>Informações de venda</legend>
                            <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                                <div className="w-20 text-center text-zinc-400">Preço:</div>
                                <input
                                className={`border rounded-md p-2 bg-white shadow`}
                                type="text"
                                placeholder=""
                                {...register("prod_price")}
                                defaultValue={data?.prod_price}
                                />
                            </div>
                            
                            <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                                <div className="w-20 text-center text-zinc-400">Desconto:</div>
                            <input
                            className={`border rounded-md p-2 bg-white shadow`}
                            type="number"
                            placeholder=""
                            {...register("prod_offer")}
                            defaultValue={data?.prod_offer}
                            />
                            </div>
                        </div>
                        {/* <div className="w-full flex flex-col gap-2">
                            <legend>Informações de estoque</legend>
                            <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                                <div className="w-20 text-center text-zinc-400">Desconto:</div>
                            <select className="border rounded-md p-[6px] bg-white shadow w-full"
                            placeholder="Status da publicação"
                            {...register("prod_status")}
                            defaultValue={data?.prod_status}>
                                <option value={4}>Online</option>
                                <option value={2}>Análise</option>
                                <option value={1}>Oculta</option>
                                <option value={3}>Sem estoque</option>
                            </select>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                        <div className="w-18 text-center text-zinc-400">Descrição:</div>
                        <textarea className="w-full text-xs border rounded-md p-2 bg-white shadow" placeholder="Description"
                        rows={4}
                        {...register("prod_description")}
                        defaultValue={data?.prod_description}></textarea>
                    </div>
                    <div className="flex gap-3 w-1/2">
                        <DefaultButton variant="default" type="button" onClick={() => back()}><IconArrowLeft/></DefaultButton>
                        <DefaultButton variant="icon_red" type="button" onClick={() => onExclude(id)}><IconTrash/></DefaultButton>
                        <DefaultButton variant="icon_green" type="submit"><IconCheck/></DefaultButton>
                    </div>
                </form>
            </div>
            )}
        </div>
    )
}