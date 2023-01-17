import { ethers } from "hardhat";
import { PermaBull, PermaBull__factory } from "../typechain-types";

async function main() {
  const [, treasury] = await ethers.getSigners();

  const BKP: PermaBull__factory = await ethers.getContractFactory("PermaBull");
  const bkp: PermaBull = await BKP.deploy(treasury.address);

  await bkp.deployed();

  console.log(`bkp deployed to ${bkp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
