import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/countries", async (req, res) => {
  const url = 'https://topups-sandbox.reloadly.com/countries';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/com.reloadly.topups-v1+json',
      Authorization: 'Bearer eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQzOCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIxNDM4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MDQxOTA5MjQsImF6cCI6IjIxNDM4Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MDQyNzczMjQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjgzMmYxMjQ5LTRmMTgtNDMwZC04NWQyLTYyMDhhOTNiNGNiMSIsImlhdCI6MTcwNDE5MDkyNCwianRpIjoiZjcwMjcxM2ItZjYyOC00OGJmLWFmNTMtNDM4YTI4YjliOGRiIn0.PiODFHnIepNm21vZlxIs4746uX9_97RKee0zdcveeAo', // Substitua pelo seu token de autenticação do Reloadly
    }
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const json = await response.json();
      res.json(json); // Envia os dados dos países de volta para o cliente.
    } else {
      throw new Error('Request failed');
    }
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Error fetching countries" });
  }
});

app.listen(5003, () => {
  console.log('Server started on port 5003');
});
