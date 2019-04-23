
import web3 from '../web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
 export const ADDRESS = '0x9c4a847a6a6A334736133C04F06B44Bd1f626996';
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
