const { ethers } = require('ethers');
const env = require('./env');

// We need the ABI to interact with the contract
const contractABI = [
  "function issueCertificate(string _certificateId, string _documentHash, string _studentNameHash, string _ipfsCid) external",
  "function verifyCertificate(string _certificateId) external view returns (bool exists, string certificateId, string documentHash, address issuer, uint256 issueTimestamp, bool revoked, string ipfsCid)",
  "function revokeCertificate(string _certificateId) external",
  "function isAuthorizedIssuer(address issuer) external view returns (bool)"
];

let provider;
let wallet;
let contract;

if (!env.RPC_URL) {
  console.error("❌ CRITICAL ERROR: RPC_URL is missing in environment variables!");
  process.exit(1); // Fail fast
}

if (!env.RPC_URL.includes('alchemy.com')) {
  console.warn("⚠️ WARNING: RPC_URL does not seem to be an Alchemy URL. Using it anyway.");
}

const isAlchemySepolia = env.RPC_URL.includes('eth-sepolia.g.alchemy.com');
const apiKeyMatch = env.RPC_URL.match(/\/v2\/([a-zA-Z0-9_-]+)$/);
const apiKeySummary = apiKeyMatch ? apiKeyMatch[1].slice(-6) : 'Unknown';

console.log(`Using RPC_URL: ${isAlchemySepolia ? 'Alchemy Sepolia' : 'Custom'} (...${apiKeySummary})`);

if (env.RPC_URL && env.PRIVATE_KEY && env.CONTRACT_ADDRESS) {
  let pk = env.PRIVATE_KEY;
  if (!pk.startsWith('0x')) {
    pk = '0x' + pk;
  }
  provider = new ethers.JsonRpcProvider(env.RPC_URL);
  wallet = new ethers.Wallet(pk, provider);
  contract = new ethers.Contract(env.CONTRACT_ADDRESS, contractABI, wallet);
} else {
  console.error("❌ CRITICAL ERROR: Blockchain credentials missing in .env!");
  console.error("Ensure RPC_URL, PRIVATE_KEY, and CONTRACT_ADDRESS are set.");
  process.exit(1); // Fail fast
}

module.exports = {
  provider,
  wallet,
  contract
};
