// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SpaceNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() ERC721("SpaceTokens", "SPC") {}

    string[] private tokenURIs = [
        "https://ipfs.io/ipfs/QmTURUzQkaWJtkkcprcJ2edk8yVGbbpLi1dWAuXSdvxpyk",
        "https://ipfs.io/ipfs/QmREZi1LWuBLWp3UDSa6WAxKLU96gPoE6Dvsetj8QQxsfo",
        "https://ipfs.io/ipfs/QmPCrPwtCJkSUYyk8WxyZacqHeCdD138NndbXPwVmLHgNV",
        "https://ipfs.io/Qmezs4ba3QTMKjM13EYVAVN6kMXTxymmPi8PbV4CunwiK3 ",
        "https://ipfs.io/ipfs/QmWecqtkEc8XXdBMcs5GDPvhFZY5eYeUCRP6XysTZbFWBu"
    ];

    string[] private tokenNames = [
        "Cat",
        "Sheep",
        "Deer",
        "Dog",
        "Elephants"
    ];
    
    function mintSpaceToken(address to) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURIs[tokenId % tokenURIs.length]);
        return tokenId;
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function getTokenName(uint256 tokenId) external view returns (string memory) {
        return tokenNames[tokenId % tokenNames.length];
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
     function promptDescription(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token ID does not exist");
        return tokenNames[tokenId % tokenNames.length];
    } function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
    

   
}
