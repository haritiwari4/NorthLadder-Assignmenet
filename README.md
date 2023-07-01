# Product Management System (PMS)

The Product Management System (PMS) is a basic web application that provides functionalities for managing products in a retail company. This system allows you to perform operations such as adding a new product, updating an existing product, deleting a product, retrieving a product by its ID, and listing all products with optional filters.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

To get started with the Product Management System, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/haritiwari4/NorthLadder-Assignmenet


Install the dependencies:
bash
Copy code
cd pms
npm install
Start the server:
bash
Copy code
npm start
The server will start running at http://localhost:3000.

API Endpoints
The following API endpoints are available:

GET /products: Retrieve a list of all products.
GET /products/:id: Retrieve a product by its ID.
POST /products: Add a new product.
PUT /products/:id: Update an existing product.
DELETE /products/:id: Delete a product.


Examples
Here are some example requests using cURL to interact with the API:

Retrieve all products:
bash
Copy code
curl -X GET http://localhost:3000/products
Retrieve a product by ID:
bash
Copy code
curl -X GET http://localhost:3000/products/1
Add a new product:
bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{
  "productName": "New Product",
  "productDescription": "This is a new product.",
  "price": 9.99,
  "category": "Electronics",
  "stockQuantity": 10
}' http://localhost:3000/products
Update an existing product:
bash
Copy code
curl -X PUT -H "Content-Type: application/json" -d '{
  "productName": "Updated Product",
  "productDescription": "This is an updated product description.",
  "price": 19.99,
  "category": "Electronics",
  "stockQuantity": 5
}' http://localhost:3000/products/1
Delete a product:
bash
Copy code
curl -X DELETE http://localhost:3000/products/1
Feel free to use tools like Postman or cURL to interact with the API.

Dependencies
The following dependencies are used in this project:

Express.js: Web application framework for Node.js.
TypeScript: Typed superset of JavaScript.
Body-parser: Middleware for parsing JSON request bodies.
Nodemon (development dependency): Utility that automatically restarts the server on code changes.
License
This project is licensed under the MIT License.

sql
Copy code

Feel free to customize the README.md file to match your specific project details, such as installation instructions, additional features, and any other relevant information.
