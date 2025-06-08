# NFTxBadge

A Soulbound NFT (SBT) smart contract for issuing non-transferable on-chain badges of achievement or reputation.

## Features

- ERC-721-based
- Non-transferable (soulbound)
- Admin-only minting
- URI metadata support

## Deployment

1. Install dependencies:
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts
```

2. Configure `.env` with:
```
ALCHEMY_API_URL=YOUR_SEPOLIA_RPC_URL
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
```

3. Compile and deploy:
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

## Test

```bash
npx hardhat test
```
