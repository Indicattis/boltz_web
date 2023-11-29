import DefaultButton from "@/components/utils/default_button";
import { getProduct, updateProduct } from "@/data/contexts/products/products";
import product from "@/data/datatype/product";
import useProcess from "@/data/hooks/useProcess";
import { IconPointFilled } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";


interface ProductsConfig {
    id: number
}


export default function ProductsConfig({id}: ProductsConfig) {
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
            console.log(data)
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
        }
    };
    return (
        <div className="bg-white shadow-sm p-3">
            {processing ? "" : (
            <div>
                <form
                className="font-sans text-sm flex flex-col gap-3"
                action="" key={id} onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-3">
                        <input
                        className={`border-b p-1 w-7`}
                        type="number"
                        disabled
                        placeholder=""
                        {...register("id")}
                        defaultValue={data?.id}
                        />
                        <input
                        className={`border-b p-1`}
                        type="text"
                        placeholder=""
                        {...register("title")}
                        defaultValue={data?.title}
                        />
                        <input
                        className={`border-b p-1`}
                        type="text"
                        placeholder=""
                        {...register("price")}
                        defaultValue={data?.price}
                        />
                        <input
                        className={`border-b p-1`}
                        type="number"
                        placeholder=""
                        {...register("offer")}
                        defaultValue={data?.offer}
                        />
                    </div>
                    <div>
                        <textarea className="border rounded-md p-1" placeholder="Description"
                        name="" id="" cols={150} rows={4}
                        {...register("description")}
                        defaultValue={data?.description}></textarea>
                    </div>
                    <div>
                        <select className="border-b"
                        name="" id="" placeholder="Status da publicação"
                        {...register("status")}
                        defaultValue={data?.status}>
                            <option value={4} selected>Online</option>
                            <option value={2}>Análise</option>
                            <option value={1}>Oculta</option>
                            <option value={3}>Sem estoque</option>
                        </select>
                    </div>
                    <div className="flex gap-3 w-full">
                        <DefaultButton variant="submit" type="submit">Enviar</DefaultButton>
                        <DefaultButton variant="cancel">Cancelar</DefaultButton>
                    </div>
                </form>
            </div>
            )}
        </div>
    )
}