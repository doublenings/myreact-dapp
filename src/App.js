import React, { Component } from 'react';
import { Form, ListGroup} from 'react-bootstrap'
import web3 from './web3';
import ipfs from './js/ipfs';
import storehash from './contractsJson/storehash';
import Header from './js/navbar'
import './css/App.css'
import Comment from './js/comment'
import {Button } from 'react-bootstrap'
import line from './img/line.png';


export class App extends Component {
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

  openFiles = async (event) => {
    console.log('cilck me')
    
    
  }

  // createList(ipfsHash){
  //   this.state.App.methods.createList(ipfsHash).send({  from: this.state.account })
  // }
  render() {
    return (
      <div >
       
          <Header />
          <div id="header-upload">
              <div className="header-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                  <h2 className="light white">บล็อกเชน...เทคโนโลยีเปลี่ยนโลก</h2>
                  </div>
                </div>
              </div>
       </div>
       <div className= "bg-light gray-bg">
       <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">USER ACCOUNT</div>
                <div className="card-body"> Login as : {this.state.account}</div>
              </div>
            </div>
          </div>
          <br />
          <Comment />
         <br />
          <div className="card">
        <div className="card-header">UPLOAD FILES</div>
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
              <Button
                type="submit"  variant="primary">
                Upload
             </Button>
            </Form> 
             {/* <button type="submit" className="btn-transaction" onClick={this.onClick}>Get Transaction</button> */}
             </div> 
             <div className= "card-header">IPFS HASH</div>
             <div className="card-body">
          <ListGroup>  
            <ListGroup.Item><a href={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}> {this.state.ipfsHash} </a></ListGroup.Item>
          </ListGroup>
         
          </div>  
          </div>
          <br></br>
          
        
         
          </div>
          <br />
        </div>

  <footer>
		<div className="container">
			<div className="row">

				<div className="col-sm-6 text-center-mobile">
					<h3 className="white">ช่องทางการติดต่อ</h3>
					<img src={line}/>
					<h5 className="light-white light">มหาวิทยาลัยศรีนครินทรวิโรฒ </h5>
					<h5 className="light-white light">114 สุขุมวิท 23, กรุงเทพฯ 10110, ประเทศไทย.</h5>
					<h5 className="light-white light">โทรศัพท์ 02-649-5000, Fax 02-258-4007 </h5>
          <p>&copy; 2019 All Rights Reserved.</p>    	
				</div>
				<div className="col-sm-6 text-center-mobile">
					<h3 className="white">เวลาทำการ <span className="open-blink"></span></h3>
					<div className="row opening-hours">
						<div className="col-sm-6 text-center-mobile">
							<h5 className="light-white light">จันทร์ - ศุกร์</h5>
							<h3 className="regular white">9:00 - 18:00</h3>
						</div>
						<div className="col-sm-6 text-center-mobile">
							<h5 className="light-white light">เสาร์ - อาทิตย์</h5>
							<h3 className="regular white">10:00 - 18:00</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
      </div>

    );
  }
}
export default App;
