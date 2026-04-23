const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const certificateRoutes = require('./routes/certificateRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_BASE_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is running' });
});

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/certificates', certificateRoutes);

// Error Handling
app.use(errorHandler);

module.exports = app;
