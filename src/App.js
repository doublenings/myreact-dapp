import React, { Component } from 'react';
import { Button, Form, Row, Container, Col ,Table,ListGroup } from 'react-bootstrap'
import './App.css';
import web3 from './web3';
import ipfs from './js/ipfs';
import storehash from './contractsJson/storehash';
// import truffleContract from 'truffle-contract';
// import IPFSimageContract from './StorageIpfs.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    ipfsHash: null,
    buffer: '',
    ethAddress: '',
    blockNumber: '',
    transactionHash: '',
    gasUsed: '',
    txReceipt: '',
    account: '',
  }
  // this.createList = this.createList.bind(this)
  }
  
  captureFile = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.convertToBuffer(reader)
  };
  convertToBuffer = async (reader) => {
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    this.setState({ buffer });
  };
  onClick = async () => {
    try {
      this.setState({ blockNumber: "waiting.." });
      this.setState({ gasUsed: "waiting..." });
      //get Transaction Receipt in console on click
      await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt) => {
        console.log(err, txReceipt);
        this.setState({ txReceipt });
      }); //await for getTransactionReceipt
      await this.setState({ blockNumber: this.state.txReceipt.blockNumber });
      await this.setState({ gasUsed: this.state.txReceipt.gasUsed });
    } //try
    catch (error) {
      console.log(error);
    } //catch
  } //onClick
  onSubmit = async (event) => {
    event.preventDefault();
    //bring in user's metamask account address
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] })
    console.log('Sending from Metamask account: ' + accounts[0]);
    //obtain contract address from storehash.js
    const ethAddress = await storehash.options.address;
    this.setState({ ethAddress });
    //save document to IPFS,return its hash#, and set hash# to state
    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err, ipfsHash);
      //setState by setting ipfsHash to ipfsHash[0].hash 
      this.setState({ ipfsHash: ipfsHash[0].hash });
      // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
      //return the transaction hash from the ethereum contract
      storehash.methods.sendHash(this.state.ipfsHash).send({
        from: accounts[0]
      }, (error, transactionHash) => {
        console.log(transactionHash);
        this.setState({ transactionHash });
      }); //storehash 
    }) //await ipfs.add 
  }; //onSubmit

  // createList(ipfsHash){
  //   this.state.App.methods.createList(ipfsHash).send({  from: this.state.account })
  // }
  render() {
    return (
      <Container>
        <div classNameName="jumbotron jumbotron-fluid">
          <div classNameName="container">
            <h1 classNameName="display-4">Conference</h1>
            <p>Your account: {this.state.account}</p>
          </div>
        </div>

        <Row>
          <h3> Choose file to send to IPFS </h3>
          <Col>
            <div classNameName="embed-responsive embed-responsive-16by9">
              <iframe classNameName="col-lg-12 col-md-12 col-sm-12" src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} allowfullscreen ></iframe>
            </div>
            {/* <iframe src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt="Show article pdf"></iframe> */}
            <Form onSubmit={this.onSubmit}>
              <input
                type="file"
                onChange={this.captureFile}
              />
              <Button
                type="submit">
                Send it
             </Button>
            </Form>
            </Col>
          {/* <Button type="submit" onClick={this.onClick}> Get Transaction for Blockchain </Button> */}
        </Row> 
        <Table>
          <a href={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}>PDF {this.state.ipfsHash}</a>
          </Table>
          
        
 
        <Button type="submit" onClick={this.onClick}> Get Transaction for Blockchain </Button>
       
        <div id="footer">
  <div classNameName="footer-top">
    <div classNameName="container">
      <div classNameName="copyright">
        &copy; Copyright <strong>Confereum</strong>. All Rights Reserved
      </div>
    </div>
  </div>
  </div>
      
      </Container>
    );
  } //render
} //App
export default App;
