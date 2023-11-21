import express from "express";
import fetch from 'node-fetch';

let app = express();
app.use(express.json());

const url = 'https://topups-sandbox.reloadly.com/topups';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/com.reloadly.topups-v1+json',
    Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE2OTk5NjgwODcsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDAwNTQ0ODcsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjkwMjZmMzdkLTcwODAtNGI3My05MTRmLTY0NDhhYjY3NTllYyIsImlhdCI6MTY5OTk2ODA4NywianRpIjoiZmQyMTJhMDAtOWQ3Zi00YmRmLWIzYTYtMTE5MzY4NGEzODE3In0.9waHBseCQTGyAhUqLmI1_SmV4vxKjeMGhDjO4XrcLZU'
  },
  body: JSON.stringify({
    operatorId: '535',
    amount: '5.00',
    useLocalAmount: true,
    customIdentifier: 'This is example identifier 134',
    recipientEmail: 'adriana.camarotto@dizzitup.com',
    recipientPhone: {countryCode: 'GB', number: '447951731337'},
    senderPhone: {countryCode: 'GB', number: '7738771515'}
  })
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));