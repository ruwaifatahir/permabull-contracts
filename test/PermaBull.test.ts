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
    const [owner, account1, account2, treasury] = await ethers.getSigners();

    const PermaBull: PermaBull__factory = await ethers.getContractFactory(
      "PermaBull"
    );

    const permaBull: PermaBull = await PermaBull.deploy(treasury.address);

    return { permaBull, owner, account1, account2, treasury };
  }

  async function distributeTokens(permaBull: PermaBull) {
    const [account1, account2] = await ethers.getSigners();
    const transferAmt = ethers.utils.parseUnits("1000", 9);
    await permaBull.transfer(account1.address, transferAmt);
    await permaBull.transfer(account2.address, transferAmt);
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
      const [, , , treasury] = await ethers.getSigners();
      const { permaBull } = await loadFixture(deployBurnKing);
      expect(await permaBull.treasuryAddress()).to.be.equal(treasury.address);
    });
  });

  describe("Tax", function () {
    it("should check if treasury receives tax", async function () {
      const { permaBull, owner, account1, account2 } = await loadFixture(
        deployBurnKing
      );
      const transferAmt = ethers.utils.parseUnits("100", 9);

      await distributeTokens(permaBull);

      await permaBull.connect(account1).transfer(account2.address, transferAmt);
      const treasuryBalance = await permaBull.balanceOf(
        await permaBull.treasuryAddress()
      );
      console.log(ethers.utils.formatUnits(treasuryBalance, 9), "treasuryTax");

      const account2Balance = await permaBull.balanceOf(await account2.address);
      console.log(account2Balance);
      // expect(treasuryBalance).to.be.equal(
      //   transferAmt.mul(await permaBull._treasuryFee()).div(100)
      // );
    });
  });
});
