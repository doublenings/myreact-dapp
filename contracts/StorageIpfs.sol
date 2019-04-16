pragma solidity ^0.5.0;

contract StorageIpfs {
  string ipfsHash;


 function sendHash(string memory x) public  {
   ipfsHash = x;
 }

 function getHash()  public  returns  (string  memory x)  {
   return x;
 }

//  function createList(string memory _ipfsHash) public{
//    Count ++;
//    ipfs[Count] = Ipfs(Count, _ipfsHash,false);
//    emit IpfsLists(Count, _ipfsHash,false);
//  }
}