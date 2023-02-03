import { ethers } from "hardhat";
import {
  PermaBull,
  PermaBull__factory,
  SafeMoon__factory,
} from "../typechain-types";

async function main() {
  const SafeMoon = await ethers.getContractFactory("SafeMoon");
  const safeMoon = await SafeMoon.deploy();

  await safeMoon.deployed();

  console.log(`bkp deployed to ${safeMoon.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
