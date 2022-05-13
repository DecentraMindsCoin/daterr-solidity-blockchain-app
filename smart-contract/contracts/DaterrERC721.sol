// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// class ferrari extends car
contract DaterrERC721 is ERC721URIStorage {
    //number variable UINT
uint256 DATERR_TOKEN_ID;

constructor() ERC721("Daterr", "DTR") {}


//mint function to match users, if users match then they will both get NFT in wallet as a match
function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
    //Bob _useOne  
    _mint(_userOne, DATERR_TOKEN_ID);
    //JSON thats has info for NFT, TokenURI where image will go 
    _setTokenURI(DATERR_TOKEN_ID, tokenURI);
    //increment so next time you mint is does not have same TOKEN_ID
    DATERR_TOKEN_ID++; 

    //Jessica _userTwo
    _mint(_userTwo, DATERR_TOKEN_ID);
    _setTokenURI(DATERR_TOKEN_ID, tokenURI);
    DATERR_TOKEN_ID++; 

}
}