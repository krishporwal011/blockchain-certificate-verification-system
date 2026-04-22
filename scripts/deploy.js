import { ethers } from "ethers";
import fs from "fs";

async function main() {
  console.log("Deploying CertificateVerification contract...");

  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  // Hardhat local node Account #0 private key
  const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);

  const artifactData = fs.readFileSync("./artifacts/contracts/CertificateVerification.sol/CertificateVerification.json", "utf8");
  const artifact = JSON.parse(artifactData);

  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
  const contract = await factory.deploy();

  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log(`CertificateVerification deployed to: ${address}`);
  console.log(`Use this address in your backend .env file as CONTRACT_ADDRESS=${address}`);
  
  // Update .env file automatically
  const envPath = ".env";
  let envContent = fs.readFileSync(envPath, "utf8");
  envContent = envContent.replace(/CONTRACT_ADDRESS=.*/, `CONTRACT_ADDRESS=${address}`);
  fs.writeFileSync(envPath, envContent);
  console.log("Automatically updated .env with CONTRACT_ADDRESS!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
