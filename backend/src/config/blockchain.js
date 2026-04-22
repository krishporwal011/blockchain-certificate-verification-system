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

if (env.RPC_URL && env.PRIVATE_KEY && env.CONTRACT_ADDRESS) {
  provider = new ethers.JsonRpcProvider(env.RPC_URL);
  wallet = new ethers.Wallet(env.PRIVATE_KEY, provider);
  contract = new ethers.Contract(env.CONTRACT_ADDRESS, contractABI, wallet);
} else {
  console.warn("Blockchain credentials missing in .env. Contract interaction will fail.");
}

module.exports = {
  provider,
  wallet,
  contract
};
