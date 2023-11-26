



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