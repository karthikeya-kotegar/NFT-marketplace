// ethers.js comes built in to hardhat.
// ethers.js is a really nice library to interact with ethereum.
//import ethers from hardhat(destructuring)
const { ethers } = require("hardhat");

// We recommend this pattern to be able to use async/await everywhere
async function main() {
  // somehow tell the script we want to deploy Nfts.sol contract
  // We get the contract to deploy
  const contract = await ethers.getContractFactory("Nfts");
  //deploy contract
  const deployedContract = await contract.deploy();
  //wait for deployment to finish
  await deployedContract.deployed();
  //print the address of deployed contract
  console.log("contract deployed at: ", deployedContract.address);
}

//call and properly handle errors.
main()
  .then(() => {
    process.exit(0); // success
  })
  .catch((error) => {
    console.log(error);
    process.exit(1); //failure
  });
