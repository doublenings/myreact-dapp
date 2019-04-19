
import web3 from '../web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
 export const ADDRESS = '0x66BaAE9a1e5c01b6F2d7F9f27344dc95d339E0E5';
//use the ABI from your contract

 export const ABI = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "string"
        }
      ],
      "name": "sendHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xdfb29935"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHash",
      "outputs": [
        {
          "name": "x",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd13319c4"
    }
  ]

    export default new web3.eth.Contract(ABI,ADDRESS);
