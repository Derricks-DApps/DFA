// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.19;

contract OTPGenerator {
    mapping(address => uint256) public otps;

    function generateOTP() public returns (uint256) {
        // Generate a pseudo-random number by hashing the current block's data and the sender's address
        uint256 otp = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 1000000;
        otps[msg.sender] = otp;
        return otp;
    }

    function verifyOTP(uint256 otp) public view returns (bool) {
        return otps[msg.sender] == otp;
    }
}