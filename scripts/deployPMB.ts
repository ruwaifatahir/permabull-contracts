import { ethers } from "hardhat";

async function main() {
  const PMB = await ethers.getContractFactory("PMB");
  const pmb = await PMB.deploy();

  await pmb.deployed();

  console.log(`pmb deployed to ${pmb.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
