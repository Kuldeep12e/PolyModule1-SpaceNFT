# SpaceNFT Project

This project showcases the creation, deployment, and management of a space-themed NFT collection using DALLE 2 or Midjourney for image generation. The NFTs are stored on IPFS using Pinata.cloud, deployed onto the Goerli Ethereum Testnet, and eventually mapped to the Polygon network for enhanced visualization. A Hardhat script is provided for efficient batch minting of NFTs, along with another script for batch transferring from Ethereum to Polygon Mumbai using the FxPortal Bridge.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)
  - [Generate NFTs](#generate-nfts)
  - [Store on IPFS](#store-on-ipfs)
  - [Deploy ERC721/ERC1155](#deploy-erc721-or-erc1155)
  - [Map to Polygon](#map-to-polygon)
- [Scripts](#scripts)
  - [Batch Minting](#batch-minting)
  - [Batch Transfer](#batch-transfer)
- [Testing](#testing)

## Overview
The SpaceNFT project demonstrates the end-to-end process of creating, deploying, and managing an NFT collection. The NFTs are generated using cutting-edge techniques, stored on IPFS for efficient distribution, deployed on the Goerli Ethereum Testnet, and then mapped to the Polygon network for better visualization and scalability.

## Getting Started
### Prerequisites
- Ethereum wallet (e.g., MetaMask) with testnet Ether
- Pinata.cloud account for IPFS storage
- Polygon wallet for testing on the Polygon network

### Installation
1. Clone the repository: `git clone https://github.com/yourusername/SpaceNFT.git`
2. Navigate to the project directory: `cd SpaceNFT`
3. Install dependencies: `npm install`

## Deployment
### Generate NFTs
1. Use DALLE 2 or Midjourney to generate a 5-item collection of space-themed images.
2. Save the generated images to a local directory.

### Store on IPFS
1. Upload the images to IPFS using Pinata.cloud or another IPFS service.
2. Retrieve the IPFS URIs of the images.

### Deploy ERC721/ERC1155
1. Modify the `SpaceNFT.sol` contract to include the generated IPFS URIs and prompt descriptions.
2. Deploy the modified contract to the Goerli Ethereum Testnet.

### Map to Polygon
1. Use the Polygon network's token mapper to map your ERC721/ERC1155 contract from Ethereum to Polygon.
2. Note the new contract address on Polygon.

## Scripts
### Batch Minting
1. Update the `batch-mint.js` script with the contract address and your Ethereum wallet details.
2. Run the script: `npx hardhat run scripts/batch-mint.js --network goerli`

### Batch Transfer
1. Update the `batch-transfer.js` script with the contract addresses on Ethereum and Polygon, along with wallet details.
2. Run the script: `npx hardhat run scripts/batch-transfer.js --network goerli`

## Testing
1. Ensure you have testnet Ether and MATIC tokens for Goerli and Polygon Mumbai, respectively.
2. Update the `test.js` script with the contract addresses and your wallet details.
3. Run the script: `npx hardhat run scripts/test.js --network mumbai` for balanceOf on Mumbai.

**Note**: Always use testnets for these operations. Be cautious with your wallet details and keep private keys secret

## Author

Kuldeep Yadav

