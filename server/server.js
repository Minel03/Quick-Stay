import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';

connectDB();

const app = express();
app.use(cors()); // Enable Cros-Origin-Resource-Sharing

app.get('/', (req, res) => {
  res.send('API is Working');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
