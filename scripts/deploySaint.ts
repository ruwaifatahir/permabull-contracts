import { ethers } from "hardhat";

async function main() {
  const Saint = await ethers.getContractFactory("Saint");
  const saint = await Saint.deploy();

  await saint.deployed();

  console.log(`saint deployed to ${saint.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
