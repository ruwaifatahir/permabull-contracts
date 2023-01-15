import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { PermaBull, PermaBull__factory } from "../typechain-types";

describe("Lock", function () {
  // We adefine a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBurnKing() {
    const [owner, otherAccount] = await ethers.getSigners();

    const PermaBull: PermaBull__factory = await ethers.getContractFactory(
      "PermaBull"
    );

    const permaBull: PermaBull = await PermaBull.deploy(owner.address);

    return { permaBull, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should deploy Perma Bull token contract", async function () {
      const { permaBull } = await loadFixture(deployBurnKing);
      expect(permaBull.address).to.be.properAddress;
    });
    it("should check uniswap router address is correct", async function () {
      const { permaBull } = await loadFixture(deployBurnKing);
      const UniswapV2Router = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
      expect(await permaBull.uniswapV2Router()).to.be.equal(UniswapV2Router);
    });
    it("should check if treasury address is correct", async function () {
      const [owner] = await ethers.getSigners();
      const { permaBull } = await loadFixture(deployBurnKing);
      expect(await permaBull.treasuryAddress()).to.be.equal(owner.address);
    });
  });
});
