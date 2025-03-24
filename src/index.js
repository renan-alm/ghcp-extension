import express from 'express';
import { logRequest, logResponse } from '.utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
  await logRequest(req);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// This is a placeholder for GHCP extensions endpoints

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
