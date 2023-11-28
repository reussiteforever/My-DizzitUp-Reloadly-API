import express from "express";
import fetch from 'node-fetch';

let app = express();
app.use(express.json());

const url = 'https://utilities-sandbox.reloadly.com/billers?id=&name=&type=&serviceType=&countryISOCode=&page=&size=';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.utilities-v1+json',
    Authorization: 'Bearer eyJraWQiOiIxNjYyOWUwZC1iM2NhLTRlM2EtYThkMS0xMzUyNjgxZmZkM2EiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly91dGlsaXRpZXMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDExNzM1NjYsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MDEyNTk5NjYsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjllZTRmMzc2LWFjMTMtNDRmMC1hZjEyLWI0N2E1Zjg1OGRjYiIsImlhdCI6MTcwMTE3MzU2NiwianRpIjoiNWFkYjVhYzktMTJiNS00M2E2LWE4YzgtOWE5NzRkOTJkMDQ1In0.zMczINZ3NYxILBOnrTeNu0_AZYi9sUoyHYormZJwSRA'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));