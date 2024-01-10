import express from 'express'; //import express to set up the backend
import cors from 'cors';

const app = express(); //create the app

// Habilitando o CORS para todas as origens
app.use(cors());

// Rota simples para testar o CORS
app.get('/test', (req, res) => {
  res.json({ message: 'Success! CORS is enabled for this route.' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});