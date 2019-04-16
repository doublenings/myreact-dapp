import React, { Component } from 'react';
import web3 from '../web3'

class profile extends Component {

    constructor(props){
        super (props)
        this.state = {
            account : '',
        }
    }
    componentWillMount(){
        this.loadBlockchainData()
      }
    
      async loadBlockchainData(){
        const network = await web3.eth.net.getNetworkType()
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})
        console.log("accounts",accounts[0])
        console.log("network:",network)
   
      }
    render() {
        return (
            <div className="container-fluid">
<div className="alert alert-warning mt-3" role="alert">
 This prototype is meant for demonstrations purposes only. Use at your own risk. When you create a profile, your information is publicly stored on the Ethereum blockchain, stored on IPFS, and displayed on this website.
 </div>
 <div className="row">
<div className="col-lg-3 mt-1 mb-1">
 <div className="card card-profile-signup p-1">
<form>
<div className="card-body">
 <h5 className="card-title">Create your profile</h5>
<div className="form-group">
 <label for="username">Username</label>
 <input type="text" className="form-control" id="sign-up-username" required="required" />
 </div>
<div className="form-group">
 <label for="username">Title</label>
 <input type="text" className="form-control" id="sign-up-title" />
 </div>
 
 <div className="form-group">
 <label for="username">Short intro</label>
 <textarea className="form-control" id="sign-up-intro" rows="2"></textarea>
 </div>
<p>
 ETH Address:
 <span className="eth-address"></span>
 <input type="text" className="form-control" id="sign-up-eth-address" value={this.state.account} disabled />
 </p>

<button type="submit" className="btn btn-primary" id="sign-up-button">Sign Up</button> 
 </div>
</form>
</div>
 </div>
<div className="col-lg-9 mt-1 mb-1" id="users-div">
 </div>
</div>

<p>account {this.state.account}</p>
</div>
 
          
        );
    }
}

export default profile;