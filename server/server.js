import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routes/userRoutes.js';

connectDB();

const app = express();
app.use(cors()); // Enable Cros-Origin-Resource-Sharing

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(clerkMiddleware());

// API to listen to clerk webhooks
app.use('/api/clerk', clerkWebhooks);

app.get('/', (req, res) => {
  res.send('API is Working');
});
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
