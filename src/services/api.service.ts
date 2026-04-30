import type {IProduct, IProductsResponse} from "../models/IProduct.ts";

const endpointProduct = import.meta.env.VITE_API_BASE_URL + "/products";

export const getProduct = async ():Promise<IProduct[]> =>{
    const response= await fetch(endpointProduct);
    const data: IProductsResponse = await response.json();

    return data.products;
}
