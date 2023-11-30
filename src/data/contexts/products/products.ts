



import { serverUrl } from "@/data/config";
import axios from "axios";


export async function fetchProducts() {
    try {
        const response = await axios.get(`${serverUrl}/products`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getProduct(id: number) {
    try {
        const response = await axios.get(
            `${serverUrl}/product/${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateProduct(id: number, requestData: any) {
    try {
        const response = await axios.put(
            `${serverUrl}/product_update/${id}`,
            requestData
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function insertProduct(data: any) {
    try {
        const response = await axios.post(`${serverUrl}/product_insert`, data);
        console.log("Produto cadastrado com sucesso:", response.data);
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
    }
}

export async function deleteProduct(id: number) {
    try {
        const response = await axios.post(`${serverUrl}/product_delete/${id}`);
        console.log("Produto deletado com sucesso:", response.data);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}