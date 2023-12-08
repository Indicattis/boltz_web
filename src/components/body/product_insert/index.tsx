

import DefaultButton from "@/components/utils/default_button";
import { insertProduct } from "@/data/contexts/products/products";
import product from "@/data/datatype/product";
import useProcess from "@/data/hooks/useProcess";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


  
  export default function ProductsInsert() {
    const { register, handleSubmit } = useForm<product>();
    const { processing, processInit, processEnd } = useProcess();
    const [ success, serSuccess ] = useState<boolean>(false)
  
    const onSubmit = async (data: product) => {
      processInit();
      try {
        const update = await insertProduct(data);
        // Faça algo com a resposta, se necessário
      } catch (error) {
        console.log(error);
      } finally {
        processEnd();
        serSuccess(true);
      }
    };
    if (!success) {

        return (
            <div className="bg-white shadow-sm p-3">
              <form
                className="font-thin text-xs flex flex-col gap-3 w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-3 max-md:flex-col">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                      <div className="w-20 text-center text-zinc-400" >ID:</div>
                      <input
                        className={`border rounded-md p-2 bg-white shadow`}
                        type="text"
                        disabled
                        placeholder="Auto Incremented"
                      />
                    </div>
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                      <div className="w-20 text-center text-zinc-400" >Nome:</div>
                      <input
                        className={`border rounded-md p-2 bg-white shadow`}
                        type="text"
                        {...register("prod_name", { required: "Este campo é obrigatório" })}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                      <div className="w-20 text-center text-zinc-400" >Preço:</div>
                      <input
                        className={`border rounded-md p-2 bg-white shadow`}
                        type="text"
                        {...register("prod_price", { required: "Este campo é obrigatório" })}
                      />
                    </div>
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                      <div className="w-20 text-center text-zinc-400" >Desconto:</div>
                      <input
                        className={`border rounded-md p-2 bg-white shadow`}
                        type="number"
                        {...register("prod_offer")}
                      />
                    </div>
                  </div>
                  {/* <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                      <div className="w-20 text-center text-zinc-400" >Status:</div>
                      <select
                        className="border rounded-md p-[6px] bg-white shadow w-full"
                        {...register("prod_status", { required: "Este campo é obrigatório" })}
                      >
                        <option value={4}>Online</option>
                        <option value={2}>Análise</option>
                        <option value={1}>Oculta</option>
                        <option value={3}>Sem estoque</option>
                      </select>
                    </div>
                  </div> */}
                </div>
        
                <div className="flex justify-center items-center border rounded-lg p-[1px] gap-2 bg-zinc-100">
                  <div className="w-18 text-center text-zinc-400" >Descrição:</div>
                  <textarea
                    className="w-full text-xs border rounded-md p-2 bg-white shadow"
                    placeholder="Descrição"
                    {...register("prod_description")}
                    rows={4}
                  ></textarea>
                </div>
        
                <div className="flex gap-3 w-1/2">
                  <DefaultButton variant="icon_green" type="submit">
                    <IconCheck/>
                  </DefaultButton>
                  <DefaultButton variant="icon_red" type="button" onClick={() => serSuccess(true)}>
                    <IconX />
                  </DefaultButton>
                </div>
              </form>
            </div>
          );  
        }
    else {
        return <div>Success!</div>
    }
          
  }
  