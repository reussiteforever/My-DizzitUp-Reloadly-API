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
      Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDM3NjQzNDcsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDM4NTA3NDcsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjY4NzAxYzg0LWI0YTctNGVhMy1hYWE3LTI1ZDgxNmEzNWVkNiIsImlhdCI6MTcwMzc2NDM0NywianRpIjoiNTk4NjIyNjktNGIyNi00MDUyLWJjZjQtOGFiMDYyZTJiMWE0In0.5HZCcwwn95N8kvgdrGvKudzr-VphShP4MCz7539-ukQ', // Substitua pelo seu token de autenticação do Reloadly
    },
    body: JSON.stringify({
      amount: selectedValue,
      useLocalAmount: true,
      currencyName: selectedCountry.currencyName,
      operatorId: parseFloat(operatorId),
      recipientPhone: {
        countryCode: selectedCountry.countryCode,
        callingCodes: selectedCountry.callingCodes,
        number: recipientPhone,
      },
      senderPhone: {
        countryCode: selectedCountry.countryCode,
        callingCodes: selectedCountry.callingCodes,
        number: senderPhone,
      },
      name: selectedCountry.name,
      isoName: selectedCountry.isoName,
    })
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    res.json({ topup: json.topup });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Error fetching topUp" });
  }
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



