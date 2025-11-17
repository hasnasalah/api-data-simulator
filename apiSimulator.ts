import { NetworkError } from "./NetworkError";
import { DataError } from "./DataError";

export interface Product{
    id:number;
    name:string;
    price:number
}
export interface Reviews{
    id:number;
    reviewerName:string;
    productId:string|number;
    productName:string;
    rate:number;
    comment:string;
}
 export interface SalesReport extends Product{
    totalSales:number;
    unitsSold:number;
    averagePrice:number;
}
export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
         reject(new NetworkError("Failed to fetch product catalog"));
        }
    }, 1000);
    });
};
export const fetchProductReviews=(productId: number): Promise<Reviews[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
         if (Math.random() < 0.8) {
        resolve([
            { id: 1, reviewerName: "hasna", productId:productId,productName:"Laptop",rate:5,comment:"It was good" },
            { id: 2, reviewerName: "rude",productId:productId, productName:"headphones",rate:2,comment:"I can hear anything" },
        ]);
    }
    else {
           reject(new DataError (`Failed to fetch reviews for product ID ${productId}`));
    }
        
    }, 1500);
    });
};
export const fetchSalesReport=(productId:number):Promise<SalesReport> =>{
        return new Promise((resolve, reject) => {
    setTimeout(() => {
         if (Math.random() < 0.8) {
            const totalSales=50000;
            const unitsSold=250;
              const averagePrice = totalSales / unitsSold;
            resolve({id:1,name:"laptop",price:1200,totalSales,unitsSold,averagePrice});
         }
         else{
             reject(new DataError("Failed to fetch product report"));
         }
        });
        });
    };
   