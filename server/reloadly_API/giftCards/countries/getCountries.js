import express, { json } from "express";
import fetch from 'node-fetch';

let app = express();
app.use(json());

const url = 'https://giftcards-sandbox.reloadly.com/countries';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.giftcards-v1+json',
    Authorization: 'Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDExODQwNTUsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MDEyNzA0NTUsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImYxZTlkNzM5LTFiYjYtNDg3Yy1hNDhiLTNkYThhYzA5ZThkNSIsImlhdCI6MTcwMTE4NDA1NSwianRpIjoiMzgyMTYxNjktNjlkNi00ZDEyLTg2ZTctNjY5NjNjOTQyOTdmIn0.cZgIstaxZ3EifK9N5MyOJ38_Uvf-yI_TA39ij-NDXZM'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));