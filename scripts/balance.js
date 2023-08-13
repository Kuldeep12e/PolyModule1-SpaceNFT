const hre = require("hardhat");
const spaceNFTContractJSON = require("../artifacts/contracts/MyNFT.sol/SpaceNFT.json");


const contract_address = "0x44BE8F4d93aC433C4B2f154130E05a9a2Fde0107"; 
const spaceNFTABI = spaceNFTContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be";

async function main() {
    const spaceNFTContract = await hre.ethers.getContractAt(spaceNFTABI, contract_address);

    console.log("You now have: " + (await spaceNFTContract.balanceOf(walletAddress)).toString() + " tokens");
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
