// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTxBadge is ERC721URIStorage, Ownable {
    uint256 public tokenId;
    mapping(address => bool) public hasBadge;

    constructor() ERC721("NFTxBadge", "NBADGE") {}

    function mintBadge(address recipient, string memory uri) external onlyOwner {
        require(!hasBadge[recipient], "Already has badge");
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, uri);
        hasBadge[recipient] = true;
        tokenId++;
    }

    function _beforeTokenTransfer(address from, address to, uint256, uint256) internal pure {
        require(from == address(0), "Soulbound - non-transferable");
    }
}
