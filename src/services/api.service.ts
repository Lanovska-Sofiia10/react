import type {IProduct} from "../models/IProduct.ts";

const endpointProduct = import.meta.env.VITE_API_BASE_URL + "/products";

export const getProduct = async ():Promise<IProduct[]> =>{
    const products=await fetch(endpointProduct)
          .then(response => response.json())

    return products;
}
