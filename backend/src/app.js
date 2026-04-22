const express = require('express');
const cors = require('cors');
const certificateRoutes = require('./routes/certificateRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is running' });
});

// Routes
app.use('/api/certificates', certificateRoutes);

// Error Handling
app.use(errorHandler);

module.exports = app;
