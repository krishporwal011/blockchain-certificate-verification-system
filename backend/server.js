const app = require('./src/app');
const env = require('./src/config/env');

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=== BLOCKCERT STARTUP DEBUG ===");
  console.log("NODE_ENV =", process.env.NODE_ENV);
  console.log("RPC_URL exists =", !!process.env.RPC_URL);
  
  if (process.env.RPC_URL) {
    const isAlchemy = process.env.RPC_URL.includes("eth-sepolia.g.alchemy.com");
    const match = process.env.RPC_URL.match(/\/v2\/([a-zA-Z0-9_-]+)$/);
    const last6 = match ? match[1].slice(-6) : 'Unknown';
    console.log(`Using RPC_URL: ${isAlchemy ? 'Alchemy Sepolia' : 'Custom'} (...${last6})`);
  }
  
  console.log("PRIVATE_KEY exists =", !!process.env.PRIVATE_KEY);
  console.log("CONTRACT_ADDRESS =", process.env.CONTRACT_ADDRESS ? "SET" : "MISSING");

  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: ${env.FRONTEND_BASE_URL}`);
  if (env.ENABLE_IPFS) {
    console.log(`IPFS Upload: ENABLED`);
  } else {
    console.log(`IPFS Upload: DISABLED`);
  }
});
