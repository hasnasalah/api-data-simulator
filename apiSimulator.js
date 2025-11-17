"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
var NetworkError_1 = require("./NetworkError");
var DataError_1 = require("./DataError");
var fetchProductCatalog = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError_1.NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
var fetchProductReviews = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, reviewerName: "hasna", productId: productId, productName: "Laptop", rate: 5, comment: "It was good" },
                    { id: 2, reviewerName: "rude", productId: productId, productName: "headphones", rate: 2, comment: "I can hear anything" },
                ]);
            }
            else {
                reject(new DataError_1.DataError("Failed to fetch reviews for product ID ".concat(productId)));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
var fetchSalesReport = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                var totalSales = 50000;
                var unitsSold = 250;
                var averagePrice = totalSales / unitsSold;
                resolve({ id: 1, name: "laptop", price: 1200, totalSales: totalSales, unitsSold: unitsSold, averagePrice: averagePrice });
            }
            else {
                reject(new DataError_1.DataError("Failed to fetch product report"));
            }
        });
    });
};
exports.fetchSalesReport = fetchSalesReport;
