import express, { json } from "express";
import fetch from 'node-fetch';

let app = express();
app.use(json());

const url = 'https://giftcards-sandbox.reloadly.com/countries/%7Bcountrycode%7D';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.giftcards-v1+json',
    Authorization: 'Bearer <YOUR_TOKEN_HERE>'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));