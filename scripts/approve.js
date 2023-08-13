const hre = require("hardhat");
const spaceNFTJSON = require("../artifacts/contracts/MyNFT.sol/SpaceNFT.json");


const contract_address ='0xed7aaA1d6A443D54139c4810DC7EAc238D76F840';
const spaceNFTABI = spaceNFTJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be";

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

async function main() {
    const spaceNFTContract = await hre.ethers.getContractAt(spaceNFTABI, contract_address);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);

    const approveTx = await spaceNFTContract.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    
    for (let i = 1; i < 6; i++) {
        const depositTx = await fxContract.deposit(contract_address, walletAddress, i, '0x6566');
        await depositTx.wait();
        console.log(`Token ${i} deposited`);
    }
    
    console.log("Your 5 Tokens deposited sucessfully");
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

