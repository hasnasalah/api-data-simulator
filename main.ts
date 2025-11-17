 import {fetchProductCatalog, fetchProductReviews,fetchSalesReport} from "./apiSimulator";
 import { NetworkError } from "./NetworkError";
import { DataError } from "./DataError";
 
 fetchProductCatalog()
    .then((products)=>{
      console.log("Product data:",products);
    return fetchProductReviews(products[0].id);
    })
    .then((reviews)=>{
        console.log("product reviews",reviews);
       return fetchSalesReport(reviews[0].productId as number);
    })
    .then((salesReport)=>{
    console.log("Sales Report:", salesReport);
    })
  .catch((err) => {
   if (err instanceof NetworkError) {
      console.error("NetworkError:", err.message);
    } else if (err instanceof DataError) {
      console.error("DataError:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
}
  )
  .finally(() => {
    console.log("All API calls completed (success or error).");
  });

