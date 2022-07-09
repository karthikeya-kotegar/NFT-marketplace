// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
//import the standard implementation of ERC721 contract for nft creation.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//NFT are non-fungible tokens, which are unique, not inter-changable and transferable.

// derives(inherit) from ERC721 openzepplin contract pkg.
// contains all the functions required for nft creation.
contract Nfts is ERC721 {
    // create ERC721 contract
    //call the ERC721 constructor with name and symbol.
    constructor() ERC721("LearnWeb3's NFT", "LEARN-NFT") {
        // mint 5 NFTs to myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
