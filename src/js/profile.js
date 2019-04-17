import React, { Component } from 'react';
import web3 from '../web3'
import { Navbar,Nav } from 'react-bootstrap';
import Header from '../js/navbar'
import '../css/profile.css'


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
        <div >
               
            <header id="intro"><Header/>
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
    <section>
		<div className="cut cut-top"></div>
		<div className="container">
			<div className="row intro-tables">
				<div className="col-md-4">
                <div className="intro-table intro-table-hover">
						<h5 className="white heading hide-hover">EVENT: </h5>
						<div className="bottom">
							
							<h4 className="white heading small-pt">REGISTER NOW</h4>
							<a href="#" className="btn btn-white-fill expand">Register</a>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="intro-table intro-table-hover">
						<h5 className="white heading hide-hover">EVENT:</h5>
						<div className="bottom">
							<h4 className="white heading small-pt">REGISTER NOW</h4>
							<a href="#" className="btn btn-white-fill expand">Register</a>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="intro-table intro-table-hover">
						<h5 className="white heading hide-hover">EVENT:</h5>
						<div className="bottom">
							<h4 className="white heading small-pt">REGISTER NOW</h4>
							<a href="#" className="btn btn-white-fill expand">Register</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
    <section id="team" class="section gray-bg">
		<div class="container">
			<div class="row title text-center">
				<h2 class="margin-top">Team</h2>
				<h4 class="light muted">We're a dream team!</h4>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover" >
							<div class="overlay text-center">
								<h3 class="white">$69.00</h3>
								<h5 class="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
						
						<div class="title">
							<h4>Ben Adamson</h4>
							<h5 class="muted regular">Fitness Instructor</h5>
						</div>
						
					</div>
				</div>
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover">
							<div class="overlay text-center">
								<h3 class="white">$69.00</h3>
								<h5 class="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
						
						<div class="title">
							<h4>Eva Williams</h4>
							<h5 class="muted regular">Personal Trainer</h5>
						</div>
						
					</div>
				</div>
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover">
							<div class="overlay text-center">
								<h3 class="white">$69.00</h3>
								<h5 class="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
					
						<div class="title">
							<h4>John Phillips</h4>
							<h5 class="muted regular">Personal Trainer</h5>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>
    
<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-6 text-center-mobile">
					<h3 class="white">Reserve a Free Trial Class!</h3>
					<h5 class="light regular light-white">Shape your body and improve your health.</h5>
					
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

export default profile;