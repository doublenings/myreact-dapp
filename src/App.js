import React, { Component } from 'react';
import { Button, Form, Row, Container, Col, Table, ListGroup } from 'react-bootstrap'

import web3 from './web3';
import ipfs from './js/ipfs';
import storehash from './contractsJson/storehash';
import Header from './js/navbar'
import "./css/App.css"
import "./css/profile.css"
// import truffleContract from 'truffle-contract';
// import IPFSimageContract from './StorageIpfs.json'

class App extends Component {
  constructor(props) {
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
      <div >
        <header id="intro"><Header />
          <div className="container">
            <div className="table">
              <div className="header-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="light white">1st International Conference</h1>
                    <h2 className="white typed">On 1 May 2019 </h2>
                    <h3 className="light white"> At Srinakharinwirot University </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
       
        <div className="embed-responsive embed-responsive-16by9">
              <iframe className="col-lg-12" src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} allowfullscreen ></iframe>
            </div>
             <iframe src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt="Show article pdf"></iframe> */}
          <Form onSubmit={this.onSubmit}>
              <input
                type="file"
                onChange={this.captureFile}
              />
              <Button
                type="submit" id="btn-submit">
                Send it
             </Button>
            </Form> 

          <Button type="submit" onClick={this.onClick}> Get Transaction for Blockchain </Button>

          <ListGroup>
            <a href={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}> {this.state.ipfsHash}</a>
          </ListGroup> 



        <Button type="submit" onClick={this.onClick}> Get Transaction for Blockchain </Button>

        
           
             

<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-6 text-center-mobile">
					<h3 class="white">Reserve a Free Trial Class!</h3>
					<h5 class="light regular light-white">Shape your body and improve your health.</h5>
					<a href="#" class="btn btn-blue ripple trial-button">Start Free Trial</a>
				</div>
				<div class="col-sm-6 text-center-mobile">
					<h3 class="white">Opening Hours <span class="open-blink"></span></h3>
					<div class="row opening-hours">
						<div class="col-sm-6 text-center-mobile">
							<h5 class="light-white light">Mon - Fri</h5>
							<h3 class="regular white">9:00 - 22:00</h3>
						</div>
						<div class="col-sm-6 text-center-mobile">
							<h5 class="light-white light">Sat - Sun</h5>
							<h3 class="regular white">10:00 - 18:00</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="row bottom-footer text-center-mobile">
				<div class="col-sm-8">
					<p>&copy; 2015 All Rights Reserved. Powered by <a href="http://www.phir.co/">PHIr</a> exclusively for <a href="http://tympanus.net/codrops/">Codrops</a></p>
				</div>
				<div class="col-sm-4 text-right text-center-mobile">
					<ul class="social-footer">
						<li><a href="http://www.facebook.com/pages/Codrops/159107397912"><i class="fa fa-facebook"></i></a></li>
						<li><a href="http://www.twitter.com/codrops"><i class="fa fa-twitter"></i></a></li>
						<li><a href="https://plus.google.com/101095823814290637419"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>
      
    );
  } 
} 
export default App;
