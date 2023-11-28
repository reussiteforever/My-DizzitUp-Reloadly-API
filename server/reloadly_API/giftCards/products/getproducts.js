// import express, { json } from "express";
// import fetch from 'node-fetch';
// import getenv from 'getenv';

// // Define the port to run the server on
// const PORT = getenv.int('PORT', 6000);

// let app = express();
// app.use(json());

// const url = 'https://giftcards-sandbox.reloadly.com/products?size=&page=&productName=&countryCode=&includeRange=true&includeFixed=true';
// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/com.reloadly.giftcards-v1+json',
//     Authorization: 'Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDExODQwNTUsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MDEyNzA0NTUsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImYxZTlkNzM5LTFiYjYtNDg3Yy1hNDhiLTNkYThhYzA5ZThkNSIsImlhdCI6MTcwMTE4NDA1NSwianRpIjoiMzgyMTYxNjktNjlkNi00ZDEyLTg2ZTctNjY5NjNjOTQyOTdmIn0.cZgIstaxZ3EifK9N5MyOJ38_Uvf-yI_TA39ij-NDXZM'
//   }
// };

// app.get("/products", async (req, res) => {
//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     res.json(data); // Sending the fetched data as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
//   const products = [
//     { id: 1, name: 'Product 1' },
//     { id: 2, name: 'Product 2' },
// ];

// // Send the products as a response
// res.send(products);
// });

// app.listen(PORT, () => {
//   console.log("Server is running on port ${PORT}");
// });

import express, { json } from "express";
import fetch from 'node-fetch';
import getenv from 'getenv';

// Define the port to run the server on
const PORT = getenv.int('PORT', 6000);

let app = express();
app.use(json());

const url = 'https://giftcards-sandbox.reloadly.com/products?size=&page=&productName=&countryCode=&includeRange=true&includeFixed=true';
const options = {
 method: 'GET',
 headers: {
    Accept: 'application/com.reloadly.giftcards-v1+json',
    Authorization: 'Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDExODQwNTUsImF6cCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MDEyNzA0NTUsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImYxZTlkNzM5LTFiYjYtNDg3Yy1hNDhiLTNkYThhYzA5ZThkNSIsImlhdCI6MTcwMTE4NDA1NSwianRpIjoiMzgyMTYxNjktNjlkNi00ZDEyLTg2ZTctNjY5NjNjOTQyOTdmIn0.cZgIstaxZ3EifK9N5MyOJ38_Uvf-yI_TA39ij-NDXZM'
 }
};

app.get("/products", async (req, res) => {
 try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data); // Sending the fetched data as a JSON response
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
});

app.listen(PORT, () => {
 console.log("Server is running on port ${PORT}");
});