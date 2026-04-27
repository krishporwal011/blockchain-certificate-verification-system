const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const certificateRoutes = require('./routes/certificateRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = process.env.FRONTEND_BASE_URL 
  ? process.env.FRONTEND_BASE_URL.split(',').map(url => url.trim().replace(/\/$/, '')) // Remove trailing slashes
  : ['http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    
    // remove trailing slash from origin for comparison
    const originToCheck = origin.replace(/\/$/, '');
    
    if (allowedOrigins.includes(originToCheck)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is running' });
});

// TEMPORARY DEBUG ROUTE
app.get('/api/debug/runtime', (req, res) => {
  const env = require('./config/env');
  const isAlchemySepolia = !!(env.RPC_URL && env.RPC_URL.includes('eth-sepolia.g.alchemy.com'));
  const apiKeyMatch = env.RPC_URL ? env.RPC_URL.match(/\/v2\/([a-zA-Z0-9_-]+)$/) : null;
  
  res.status(200).json({
    nodeEnv: env.NODE_ENV,
    rpcUrlExists: !!env.RPC_URL,
    rpcIsAlchemySepolia: isAlchemySepolia,
    rpcLast6: apiKeyMatch ? apiKeyMatch[1].slice(-6) : (env.RPC_URL ? 'Unknown Format' : null),
    privateKeyExists: !!env.PRIVATE_KEY,
    contractAddressExists: !!env.CONTRACT_ADDRESS,
    backendEntrypoint: process.argv[1] || 'Unknown'
  });
});

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/certificates', certificateRoutes);

// Error Handling
app.use(errorHandler);

module.exports = app;
