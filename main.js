"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiSimulator_1 = require("./apiSimulator");
var NetworkError_1 = require("./NetworkError");
var DataError_1 = require("./DataError");
(0, apiSimulator_1.fetchProductCatalog)()
    .then(function (products) {
    console.log("Product data:", products);
    return (0, apiSimulator_1.fetchProductReviews)(products[0].id);
})
    .then(function (reviews) {
    console.log("product reviews", reviews);
    return (0, apiSimulator_1.fetchSalesReport)(reviews[0].productId);
})
    .then(function (salesReport) {
    console.log("Sales Report:", salesReport);
})
    .catch(function (err) {
    if (err instanceof NetworkError_1.NetworkError) {
        console.error("NetworkError:", err.message);
    }
    else if (err instanceof DataError_1.DataError) {
        console.error("DataError:", err.message);
    }
    else {
        console.error("Unknown error:", err);
    }
})
    .finally(function () {
    console.log("All API calls completed (success or error).");
});
