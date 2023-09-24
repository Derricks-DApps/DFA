import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";

describe("Smart Contracts on Hardhat Network", () => {
    it("Should test", async function () {
        const provider = ethers.provider;
        const network = await provider.getNetwork();
        // console.log(network.name);
        const accounts = await ethers.getSigners();
        accounts.forEach(async (acc) => {
            console.log(acc.address);
            const balance = await provider.getBalance(acc.address);
            console.log(balance);
        })
    })
});