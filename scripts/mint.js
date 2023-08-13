const hre = require("hardhat");
const spaceNFTContractJSON = require("../artifacts/contracts/MyNFT.sol/SpaceNFT.json");

const contract_address = "0xed7aaA1d6A443D54139c4810DC7EAc238D76F840";
const spaceNFTABI = spaceNFTContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

async function main() {
    const spaceNFTContract = await hre.ethers.getContractAt(spaceNFTABI, contract_address);
    
    let successfulMints = 0;

    for (let i = 0; i < 5; i++) {
        try {
            const tx = await spaceNFTContract.mintSpaceToken(walletAddress);
            await tx.wait();

            successfulMints++;
            
        } catch (error) {
            console.error("Error minting token:", error.message);
        }
    }

    console.log("Successful mints:", successfulMints);
    console.log("You now have: " + (await spaceNFTContract.balanceOf(walletAddress)).toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
