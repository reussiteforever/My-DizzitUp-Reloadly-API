import express, { json } from "express";
import fetch from 'node-fetch';
let app = express();
app.use(json());


const url = 'https://topups-sandbox.reloadly.com/accounts/balance';
const options = {
    method: 'GET',
    headers: {
    Accept: 'application/com.reloadly.topups-v1+json',
    Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDA1Njc0NDEsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDA2NTM4NDEsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjNkMWU1MzgyLTAyZGMtNGE0OS04OTEwLThkYTVjMWFhNGJmNCIsImlhdCI6MTcwMDU2NzQ0MSwianRpIjoiYjdmMTNhNWEtODQ2OS00OTNjLWIwYzUtNWIwYWM3ZDg4MmY0In0.-_jkrF1xi8qBMRg6A5F8qSqq8F2zNUlNuimexlUag-8'
    }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

    app.listen(5000, () => {
    console.log("server started on port 5000")
    });