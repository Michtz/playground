import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(express.static(join(__dirname, '../public')));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Express Server läuft!' });
});

app.listen(PORT, () => {
  console.log(`Express Server läuft auf Port ${PORT}`);
});
