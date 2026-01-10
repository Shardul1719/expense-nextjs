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

// CORS Configuration - REPLACE YOUR CURRENT CORS SECTION
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://expense-nextjs-one.vercel.app'
    ];
    
    // Check if origin is in allowed list OR ends with .vercel.app
    if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// Handle preflight requests
app.options('*', cors());

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
```

---

## 📝 Vercel Environment Variable:

**In Vercel Dashboard:**

1. Go to your project → **Settings** → **Environment Variables**
2. Find or Add: `NEXT_PUBLIC_API_BASE`
3. Set the value to (NO trailing slash):
```
https://expense-nextjs.onrender.com