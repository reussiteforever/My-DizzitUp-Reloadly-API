import express from "express";
import fetch from 'node-fetch';

let app = express();
app.use(express.json());

const url = 'https://utilities-sandbox.reloadly.com/billers?id=&name=&type=&serviceType=&countryISOCode=&page=&size=';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.utilities-v1+json',
    Authorization: 'Bearer eyJraWQiOiIxNjYyOWUwZC1iM2NhLTRlM2EtYThkMS0xMzUyNjgxZmZkM2EiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly91dGlsaXRpZXMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDA1NzA4NjMsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MDA2NTcyNjMsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjVhNjYzYzZkLTExZTEtNDM5YS05OTNiLTcyY2U1YjUzYjFiNSIsImlhdCI6MTcwMDU3MDg2MywianRpIjoiMmNkZTU1MDktNjQwMy00YTZjLTkxMGYtMjBlODJiNWI1YWVjIn0.K9sg2eutaNZtJkO96SPHmABMObZM1BedfmJ5RMktD6Q'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));