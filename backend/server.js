// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import expenseRoutes from './routes/expenseRoutes.js';

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors({
//   origin: [
//     'http://localhost:3000', 'http://localhost:5173',
//     'https://expense-nextjs-one.vercel.app/',
//     'https://*.vercel.app',
//     /https:\/\/expense-nextjs-.*\.vercel\.app$/, 

//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/expenses', expenseRoutes);

// // Test route
// app.get('/test-db', (req, res) => {
//   res.json({ success: true, message: 'MongoDB connected 🎉' });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// SIMPLE CORS - Allows everything (use this for now)
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Test route
app.get('/test-db', (req, res) => {
  res.json({ success: true, message: 'MongoDB connected 🎉' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

