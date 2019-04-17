
import web3 from '../web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
 export const ADDRESS = '0xEB82180958BaAc0d2871e21E56EBc299B609125c';
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
