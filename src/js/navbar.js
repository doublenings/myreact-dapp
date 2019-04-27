import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import web3 from '../web3'
import '../css/navbar.css'
import logo from '../img/logo_transparent.png'



class Header extends Component {
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
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})
       
      }

    render() {
        return (
<div>
            <Navbar bg="light" variant="light">
                  <Navbar.Brand href="/"><img src ={logo} 
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"/>
      </Navbar.Brand>
             <Nav className="mr-auto">
                    <Nav.Link href="/profile">Home</Nav.Link>
                    <Nav.Link className="justify-content-end">Login as | {this.state.account} </Nav.Link>
                  </Nav>
                   
                </Navbar> 
                
                </div>
        );
    }
}

export default Header;