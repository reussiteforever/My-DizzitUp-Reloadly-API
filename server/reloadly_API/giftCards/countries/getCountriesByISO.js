import express, { json } from "express";
import fetch from 'node-fetch';

let app = express();
app.use(json());

const url = 'https://giftcards-sandbox.reloadly.com/countries/%7Bcountrycode%7D';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.giftcards-v1+json',
    Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDQ3MTc4NTIsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDQ4MDQyNTIsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjNkZjFmNDcxLTNlMzktNDBhMS1iMWYxLTAxMmE3YWNjYmMyYyIsImlhdCI6MTcwNDcxNzg1MiwianRpIjoiOGUyNjJhYWEtNGM3ZC00YTFmLWI2Y2YtNWFmMjEzM2U0N2RlIn0.kwCz5ROFOCZt9k23MnmHbmpo75ZpUo2YHvU9otLqxKw'

  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));