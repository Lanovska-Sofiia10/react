import type {FunctionComponent} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    item: IProduct;
}

const ProductConponent:FunctionComponent<ProductProps> = ({item})=> {

  return (
       <div key={item.id} className="w-[98vw] border border-black border-solid whitespace-normal p-[15px]">

           <div className="flex flex-row gap-[10px]">

               <div className="flex flex-wrap gap-[5px]">
                   {
                       item.images.map((value, index) => (
                           <img className="w-[150px]" key={index} src={value} alt={item.title}/>
                       ))
                   }
               </div>

               <div className="flex flex-col min-w-0">
                   <h2>{item.title}</h2>
                   <p className="break-words">{item.description}</p>
                   <p>Category: {item.category}</p>
                   <p>Price: {item.price}</p>
                   <p>Discount Percentage: {item.discountPercentage}</p>
                   <p>Rating: {item.rating}</p>
                   <p>Stock: {item.stock}</p>
               </div>
           </div>
           <div>
               <h2>Tags</h2>
               <ul className="flex flex-wrap gap-2">
                   {
                       item.tags.map((valuetag, indextag) => (
                           <li key={indextag} className="px-2 py-1 rounded-full border border-sky-200 bg-sky-50 text-sm w-fit">{valuetag}</li>
                       ))
                   }
               </ul>
           </div>
           <p>Brand: {item.brand}</p>
           <p>Sku: {item.sku}</p>
           <div>
               <h2>Dimensions:</h2>
               <ul className="list-disc ml-5">
                   <li>Width: {item.dimensions.width}</li>
                   <li>Height: {item.dimensions.height}</li>
                   <li>Depth: {item.dimensions.depth}</li>
               </ul>
           </div>
           <p>Warranty Information: {item.warrantyInformation}</p>
           <p>Shipping Information: {item.shippingInformation}</p>
           <p>Availability Status: {item.availabilityStatus}</p>
           <div className="flex flex-col gap-[10px]">
               <h2>Reviews</h2>
               {
                   item.reviews.map((valuereview, indexreview) => (
                       <div key={indexreview} className="w-[40vw] border border-black border-solid whitespace-normal p-[15px]">
                           <p>Rating{valuereview.rating}</p>
                           <p>Comment: {valuereview.comment}</p>
                           <p>Date: {valuereview.date}</p>
                           <p>Reviewer Name: {valuereview.reviewerName}</p>
                           <p>Reviewer Email: {valuereview.reviewerEmail}</p>
                       </div>
                   ))
               }
           </div>
           <p>Minimum Order Quantity: {item.minimumOrderQuantity}</p>
           <div>
               <h2>Meta:</h2>
               <ul className="list-disc ml-5">
                   <li>Width: {item.meta.createdAt}</li>
                   <li>Height: {item.meta.updatedAt}</li>
                   <li>Depth: {item.meta.barcode}</li>
                   <li>Depth: {item.meta.qrCode}</li>
               </ul>
           </div>
           <div>
               <h2>Thumbnail</h2>
               <img className="w-[100px]" src={item.thumbnail} alt="Thumbnail"/>
           </div>
       </div>
);
};

export default ProductConponent;