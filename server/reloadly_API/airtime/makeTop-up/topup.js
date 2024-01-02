import express from 'express';
import { json } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(json());
app.use(cors());

app.post('/topup', async (req, res) => {
  const {
    countryCode,
    selectedValue,
    selectedCountry,
    recipientPhone,
    senderPhone,
    operatorId
      } = req.body;

  const url = 'https://topups-sandbox.reloadly.com/topups';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/com.reloadly.topups-v1+json',
      Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDQxOTA5MjQsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDQyNzczMjQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjgzMmYxMjQ5LTRmMTgtNDMwZC04NWQyLTYyMDhhOTNiNGNiMSIsImlhdCI6MTcwNDE5MDkyNCwianRpIjoiZjcwMjcxM2ItZjYyOC00OGJmLWFmNTMtNDM4YTI4YjliOGRiIn0.PiODFHnIepNm21vZlxIs4746uX9_97RKee0zdcveeAo', // Substitua pelo seu token de autenticação do Reloadly
    },
    body: JSON.stringify({
      operatorId: "535",
      amount:'5.00',
      useLocalAmount: true,
      recipientEmail: 'adriana.camarotto@dizzitup.com',
      recipientPhone: {countryCode: 'GB', number: recipientPhone},
      senderPhone: {countryCode: 'GB', number: senderPhone}
    })
  };
  

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    res.json({ topup: json }); // Enviar a resposta correta recebida da API
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Error fetching topUp" });
  }
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});