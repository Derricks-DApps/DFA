// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.19;

contract DFA {
    mapping(address => bytes32) public hashedCredentials;
    address[] public addresses;

    function storeCredentials(string memory userId, string memory password) public {
        bytes32 hashedInput = keccak256(abi.encodePacked(userId, password));
        hashedCredentials[msg.sender] = hashedInput;
        addresses.push(msg.sender);
    }

    function authenticate(string memory userId, string memory password) public view returns (bool) {
        bytes32 hashedInput = keccak256(abi.encodePacked(userId, password));
        return hashedCredentials[msg.sender] == hashedInput;
    }

    function getStoredAddresses() public view returns(address[] memory) {
        return addresses;
    }
}