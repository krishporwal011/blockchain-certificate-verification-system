require('dotenv').config({ path: '../.env' }); // Load from root

module.exports = {
  PORT: process.env.PORT || 5000,
  RPC_URL: process.env.RPC_URL,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL || 'http://localhost:3000',
  ENABLE_IPFS: process.env.ENABLE_IPFS === 'true',
  PINATA_JWT: process.env.PINATA_JWT,
  
  // Admin Authentication
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
  JWT_SECRET: process.env.JWT_SECRET || 'super-secret-jwt-key-change-in-production'
};
