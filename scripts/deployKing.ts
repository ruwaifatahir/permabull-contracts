import { ethers } from "hardhat";

async function main() {
  const BKP = await ethers.getContractFactory("BKP");
  const bkp = await BKP.deploy();

  await bkp.deployed();

  console.log(`bkp deployed to ${bkp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
