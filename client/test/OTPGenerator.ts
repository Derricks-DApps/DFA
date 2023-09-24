import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("OTPGenerator", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function OTPGeneratorFixture() {
        const generateOTP = 12334;

        // Contracts are deployed using the first signer/account by default
        const [owner] = await ethers.getSigners();

        const OTPGenerator = await ethers.getContractFactory("OTPGenerator");
        const otp = await OTPGenerator.deploy(generateOTP, { value: generateOTP });

        return { otp, owner };
    }

    describe("Deployment", function () {
        it("Should return the correct generateOTP", async function () {
            const { otp } = await loadFixture(OTPGeneratorFixture);

            // Access the generateOTP value from the contract
            const deployedOTP = await otp.generateOTP();

            // Check if the deployed OTP value matches the value passed during deployment
            expect(deployedOTP).to.equal(12334);
        });
    });
});
