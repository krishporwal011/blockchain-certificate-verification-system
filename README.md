# BlockCert: Immutable Credential Verification

A complete, hackathon-ready full-stack application to issue, manage, and cryptographically verify academic and professional certificates using the **Sepolia Testnet** and IPFS.

## 🌟 Overview
BlockCert solves the problem of certificate forgery. Instead of relying on central databases, the system computes a SHA-256 hash of a PDF document and commits it to a Solidity Smart Contract. End-users can instantly verify the authenticity of any document using Zero-Knowledge mathematical proofs without needing an account.

### Tech Stack
- **Blockchain**: Solidity, Hardhat, Ethers.js v6
- **Backend**: Node.js & Express.js (REST API, Multer, Crypto)
- **Frontend**: Next.js 15 (App Router), Tailwind CSS (Web3/Cyberpunk UI)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MetaMask Wallet with Sepolia Testnet ETH
- Alchemy or Infura account for an RPC URL

### 1. Smart Contract & Blockchain Setup
1. Clone the repository and open the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory (based on `.env.example`):
   ```env
   PRIVATE_KEY=your_metamask_private_key
   RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
   ```
4. Compile the smart contract:
   ```bash
   npx hardhat compile
   ```
5. Deploy to Sepolia Testnet (the script will automatically update your `.env` with the contract address):
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

### 2. Backend Setup
1. Open a new terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   npm install
   ```
2. The backend shares the root `.env` file for blockchain credentials, but relies on a few local variables. Ensure your root `.env` has:
   ```env
   PORT=5001
   FRONTEND_BASE_URL=http://localhost:3000
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a third terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   npm install
   ```
2. Create a `.env.local` file in the `frontend` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001/api
   ```
3. Start the Next.js application:
   ```bash
   npm run dev
   ```

---

## 🧪 Running the Demo Locally
1. Open [http://localhost:3000](http://localhost:3000) in your browser to see the Web3 Hero page.
2. Click **Issuer Terminal** to navigate to `/admin`.
3. Fill out the "Payload Ingestion Module", upload any PDF, and click **Sign & Mint Certificate**.
4. Once the blockchain transaction confirms, you will receive a Success Card with a QR code and a Transaction Hash.
5. Copy the generated `CERT-ID` and navigate to the **Zero-Knowledge Gateway** (`/verify`).
6. Paste the ID to query the blockchain ledger and see the immutable record.
7. *(Bonus)* Upload the exact same PDF in the Verification module to see the Cryptographic File Matcher confirm authenticity locally!

---
*Built with ❤️ for Hackathons. Designed for the Future.*
