import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use a different port than your frontend
// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// A welcoming route for the root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Kochi Metro Fleet Management API! Check /api/health for status.');
});

// A simple test route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'UP', message: 'Backend is running!' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
