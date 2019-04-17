import React, { Component } from 'react';
import { Form, ListGroup} from 'react-bootstrap'
import web3 from './web3';
import ipfs from './js/ipfs';
import storehash from './contractsJson/storehash';
import Header from './js/navbar'
import "./css/App.css"
import Comment from './js/comment'


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
  } 
  
  onSubmit = async (event) => {
    event.preventDefault();
    //bring in user's metamask account address
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] })
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
        <header id="intro">
          <Header />
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">Step1 : Login for upload file</div>
                <div className="card-body"> Login as {this.state.account}</div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="card">
        <div className="card-header">Step:2 Upload files</div>
        <div className="card-body">
        <div className="upload-file">
  {/* <ResponsiveEmbed aspect="1by1">
    <embed type="image/svg+xml" src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} />
  </ResponsiveEmbed> */}
</div> 
         <Form onSubmit={this.onSubmit}>
              <input
                type="file"
                onChange={this.captureFile}
              />
              <button
                type="submit" className="btn-send">
                Send it
             </button>
            </Form> 
             {/* <button type="submit" className="btn-transaction" onClick={this.onClick}>Get Transaction</button> */}
             </div> 
             <div className= "card-header">File is uploaded!</div>
             <div className="card-body">
          <ListGroup>  
            <ListGroup.Item><a href={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}> {this.state.ipfsHash} </a></ListGroup.Item>
          </ListGroup>
          </div>  
          </div>
          <br></br>
          <Comment />
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center-mobile">
                <h3 className="white">Reserve a Free Trial Class!</h3>
                <h5 className="light regular light-white">Shape your body and improve your health.</h5>
              </div>
              <div className="col-sm-6 text-center-mobile">
                <h3 className="white">Opening Hours <span className="open-blink"></span></h3>
                <div className="row opening-hours">
                  <div className="col-sm-6 text-center-mobile">
                    <h5 className="light-white light">Mon - Fri</h5>
                    <h3 className="regular white">9:00 - 22:00</h3>
                  </div>
                  <div className="col-sm-6 text-center-mobile">
                    <h5 className="light-white light">Sat - Sun</h5>
                    <h3 className="regular white">10:00 - 18:00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row bottom-footer text-center-mobile">
              <div className="col-sm-8">
                <p>&copy; 2015 All Rights Reserved. Powered by <a href="http://www.phir.co/">PHIr</a> exclusively for <a href="http://tympanus.net/codrops/">Codrops</a></p>
              </div>
              <div className="col-sm-4 text-right text-center-mobile">
                <ul className="social-footer">
                  <li><a href="http://www.facebook.com/pages/Codrops/159107397912"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="http://www.twitter.com/codrops"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://plus.google.com/101095823814290637419"><i className="fa fa-google-plus"></i></a></li>
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
