import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {getProduct} from "../../services/api.service.ts";
import ProductConponent from "../product-component/ProductComponent.tsx";

const ProductsConponent = ()=> {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
       getProduct()
            .then(response => setProducts(response));
    },[])

  return (
       <>
           {
               products.map(product => <ProductConponent key={product.id} item={product} />)
           }
       </>
  );
};

export default ProductsConponent;