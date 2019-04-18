import React, { Component } from 'react';
import web3 from '../web3'
//import { Navbar,Nav } from 'react-bootstrap';
import Header from '../js/navbar'
import '../css/profile.css'
import dolnapa from '../img/dolnapa.png';
import line from '../img/line.png';

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
											<h3 className="light white">1st International Conference</h3>
											<h2 className="white typed">A Simple Introduction To</h2>
											<h2 className="white typed">Blockchain Technology</h2>
											<h3 className="light white">On 1 May 2019 </h3>
                    	<h4 className="light white"> @ Srinakharinwirot University </h4>
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
              <div className="intro-table intro-table-hover" id="box1">
								<h5 className="white heading hide-hover">EVENT : A Simple Introduction To Bitcoin</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">Coming Soon</h4>
									{/* <a href="#" className="btn btn-white-fill expand">Register</a> */}
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="intro-table intro-table-hover" id="box2">
								<h5 className="white heading hide-hover">EVENT : A Development of Decentralized Application (DApp) for Conference 
Event Management Using Blockchain Technology</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">Coming Soon</h4>
									{/* <a href="#" className="btn btn-white-fill expand">Register</a> */}
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="intro-table intro-table-hover" id="box3">
								<h5 className="white heading hide-hover">EVENT : Introducing Ethereum and Solidity</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">Coming Soon</h4>
									{/* <a href="#" className="btn btn-white-fill expand">Register</a> */}
								</div>
							</div>	
						</div>
					</div>
				</div>
		</section>

		<section id="timeline" className="testimonials bg-light section gray-bg">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<center>
							<h2>SCHEDULE</h2>
							<img src={line}/>
						</center>
						<ul className="timeline">
							<li>
								<h4>Register</h4>
								<h4>08:00</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
							</li>
							<li>
								<h4>Job Seekers</h4>
								<h4>09:00</h4>
								<p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
							</li>
							<li>
								<h4>Awesome Employers</h4>
								<h4>11:00</h4>
								<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="testimonials bg-white section gray-bg">
			<div className="container">
			<div className="section-header">
				<center>
					<h2 id="faq" className="margin-top">F.A.Q.</h2>
					<img src={line}/>
				</center>
    			<div className="row">
      			<div className="col-lg-8 col-md-10 mx-auto">

        			<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">Man must explore, and this is exploration at its greatest</h4>
          			</a>
          			<p className="post-meta">Posted by on September 24, 2019</p>
        			</div>

							<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">Man must explore, and this is exploration at its greatest</h4>
          			</a>
          			<p className="post-meta">Posted by on September 24, 2019</p>
        			</div>

							<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">Man must explore, and this is exploration at its greatest</h4>
          			</a>
          			<p className="post-meta">Posted by on September 24, 2019</p>
        			</div>

							<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">Man must explore, and this is exploration at its greatest</h4>
          			</a>
          			<p className="post-meta">Posted by on September 24, 2019</p>
        			</div>
        
							
        
        
      </div>
    </div>
  </div>
</div>
		</section>


		<section id="team" className="testimonials text-center bg-light section gray-bg">
			<div className="container">
			<div className="section-header">
      	<h2 className="margin-top">TEAM</h2>
				<h4 className="light muted"> We're a dream team!</h4>
      	<img src={line}/>	
					<div className="row">
        		<div className="col-lg-6">
          		<div className="testimonial-item mx-auto mb-5 mb-lg-0">
							<img src={dolnapa} width="250" height="250"/>
            		<h4>Dolnapa Chimsa-ard</h4>
            		<p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          		</div>
        		</div>
        
        		<div className="col-lg-6">
          		<div className="testimonial-item mx-auto mb-5 mb-lg-0">
							<img src={dolnapa} width="250" height="250"/>
            		<h4>Tamonwan Rangpueng</h4>
            		<p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
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
					<h3 className="white">CONTACT US</h3>
					<img src={line}/>
					<h5 className="light-white light">Srinakharinwirot University, Bangkok </h5>
					<h5 className="light-white light">Email : dolnapa.ying@g.swu.ac.th </h5>
					<h5 className="light-white light">Phone : 082-984-0117 </h5>
              
					
				</div>
				<div className="col-sm-6 text-center-mobile">
					<h3 className="white">Opening Hours <span className="open-blink"></span></h3>
					<div className="row opening-hours">
						<div className="col-sm-6 text-center-mobile">
							<h5 className="light-white light">Mon - Fri</h5>
							<h3 className="regular white">9:00 - 18:00</h3>
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
					<p>&copy; 2019 All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</footer>
 </div>     
        );
    }
}

export default profile;