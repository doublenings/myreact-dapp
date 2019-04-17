import React, { Component } from 'react';
import web3 from '../web3'
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
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})
        console.log("accounts",accounts[0])
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
							<button className="btn btn-white-fill expand">Register</button>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="intro-table intro-table-hover">
						<h5 className="white heading hide-hover">EVENT:</h5>
						<div className="bottom">
							<h4 className="white heading small-pt">REGISTER NOW</h4>
							<button className="btn btn-white-fill expand">Register</button>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="intro-table intro-table-hover">
						<h5 className="white heading hide-hover">EVENT:</h5>
						<div className="bottom">
							<h4 className="white heading small-pt">REGISTER NOW</h4>
							<button className="btn btn-white-fill expand">Register</button>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
    <section id="team" className="section gray-bg">
		<div className="container">
			<div className="row title text-center">
				<h2 className="margin-top">Team</h2>
				<h4 className="light muted">We're a dream team!</h4>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="team text-center">
						<div className="cover" >
							<div className="overlay text-center">
								<h3 className="white">$69.00</h3>
								<h5 className="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
						
						<div className="title">
							<h4>Ben Adamson</h4>
							<h5 className="muted regular">Fitness Instructor</h5>
						</div>
						
					</div>
				</div>
				<div className="col-md-4">
					<div className="team text-center">
						<div className="cover">
							<div className="overlay text-center">
								<h3 className="white">$69.00</h3>
								<h5 className="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
						
						<div className="title">
							<h4>Eva Williams</h4>
							<h5 className="muted regular">Personal Trainer</h5>
						</div>
						
					</div>
				</div>
				<div className="col-md-4">
					<div className="team text-center">
						<div className="cover">
							<div className="overlay text-center">
								<h3 className="white">$69.00</h3>
								<h5 className="light light-white">1 - 5 sessions / month</h5>
							</div>
						</div>
					
						<div className="title">
							<h4>John Phillips</h4>
							<h5 className="muted regular">Personal Trainer</h5>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>  
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

export default profile;