# API Simulation with TypeScript

This project simulates API calls using **TypeScript** and **Promises**, including **custom error handling**. It demonstrates how to fetch product data, product reviews, and sales reports in a realistic use case.

## Features

- Fetch **Product Catalog** (`fetchProductCatalog`)
- Fetch **Product Reviews** (`fetchProductReviews`)
- Fetch **Sales Report** (`fetchSalesReport`)
- **Custom Error Classes**:
  - `NetworkError` – for network-related issues
  - `DataError` – for data-related issues (e.g., missing fields)
- Simulated API failures using `Math.random()`
- Optional **retry mechanism** for failed API calls
- Promise chaining and proper error handling

## Clone the repository:
 --bash
 git clone: https://github.com/hasnasalah/api-data-simulator

