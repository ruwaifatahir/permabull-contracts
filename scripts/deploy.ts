import { ethers } from "hardhat";
import { BKP, BKP__factory } from "../typechain-types";

async function main() {
  const BKP: BKP__factory = await ethers.getContractFactory("BKP");
  const bkp: BKP = await BKP.deploy();

  await bkp.deployed();

  console.log(`bkp deployed to ${bkp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
