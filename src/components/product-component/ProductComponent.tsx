import type {FunctionComponent} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    item: IProduct;
}

const ProductConponent:FunctionComponent<ProductProps> = ({item})=> {

  return (
       <div key={item.id}>
           <img src={item.images} alt={item.title}/>
       </div>
  );
};

export default ProductConponent;