import React, { Component } from 'react';
import web3 from '../web3'
import Header from '../js/navbar'
import '../css/profile.css'
import tamonwan from '../img/tamonwan.png'
import dolnapa from '../img/dolnapa.png';
import line from '../img/line.png';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Upload from '../../src/App';
import { idText } from 'typescript';

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
		setRedirect = () => {
			this.setState({
				redirect: true
			})
		}
		renderRedirect = () =>  {
			if (this.state.redirect) {
				return <Redirect to='/upload'/>
			}
		}


    render() {
      return (  
        <div >
          <header id="intro">
		  <Header/>
		  			<div className="container">
							<div className="table">
								<div className="header-text">
									<div className="row">
										<div className="col-md-12 text-center">
											<h3 className="light white">การสัมมนาครั้งที่ 1</h3>
											<h2 className="white typed">บล็อกเชน...เทคโนโลยีเปลี่ยนโลก</h2>
											<h3 className="light white">1 พฤษภาคม 2562 </h3>
                    	<h4 className="light white"> @ มหาวิทยาลัยศรีนครินทรวิโรฒ </h4><br />

											{this.renderRedirect()}
											<Button onClick={this.setRedirect} id="btn-upload">Upload</Button>
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
								<h5 className="white heading hide-hover">Bitcoin: รู้ทันสกุลเงินดิจิทัลมากยิ่งขึ้น</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">เร็วๆนี้</h4>
									{/* <a href="#" className="btn btn-white-fill expand">Register</a> */}
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="intro-table intro-table-hover" id="box2">
								<h5 className="white heading hide-hover">React คืออะไร? ไขข้อสงสัยสำหรับมือใหม่</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">เร็วๆนี้</h4>
									{/* <a href="#" className="btn btn-white-fill expand">Register</a> */}
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="intro-table intro-table-hover" id="box3">
								<h5 className="white heading hide-hover">เรียนรู้และเข้าใจ Ethereum และการพัฒนาด้วยภาษา Solidity</h5>
								<div className="bottom">
									<h4 className="white heading small-pt">เร็วๆนี้</h4>
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
							<h3 id="timeline-head">กำหนดการ</h3>
							<img src={line}/>
						</center>
						<ul className="timeline">
							<li>
								<h4>ลงทะเบียน</h4>
								<h4>08:30</h4>
								<p>รับลงทะเบียนจนถึงเวลา 09:30 พร้อมรับเอกสารประกอบการอบรมและอาหารว่าง</p>
							</li>
							<li>
								<h4>เริ่มการอบรมเรื่อง</h4>
								<h4>บล็อกเชน...เทคโนโลยีเปลี่ยนโลก</h4>
								<h4>โดย ผศ.ดร.ศุภชัย ไทยเจริญ</h4>
								<h4>09:30</h4>
								<p>อบรมเรื่องบล็อกเชน...เทคโนโลยีเปลี่ยนโลก Part1</p>
							</li>
							<li>
								<h4>พักรับประทานอาหารกลางวันร่วมกัน</h4>
								<h4>11:40</h4>
								<p>รับประทานอาหารร่วมกันบริเวณห้องอาหาร</p>
							</li>
							<li>
								<h4>เริ่มการอบรมเรื่อง</h4>
								<h4>บล็อกเชน...เทคโนโลยีเปลี่ยนโลก</h4>
								<h4>โดย ผศ.ดร.ศุภชัย ไทยเจริญ</h4>
								<h4>13:00</h4>
								<p>อบรมเรื่องบล็อกเชน...เทคโนโลยีเปลี่ยนโลก Part2</p>
							</li>
							<li>
								<h4>พักเบรค</h4>
								<h4>15:30</h4>
								<p>พักเบรค พร้อมรับอาหารว่าง</p>
							</li>
							<li>
								<h4>สรุปการอบรมและกล่าวปิดการอบรม</h4>
								<h4>15:50</h4>
								<p>สรุปการอบรมและกล่าวปิดการอบรม พร้อมถ่ายรูปร่วมกัน</p>
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
					<h3 id="faq" className="margin-top">คำถามที่พบบ่อย</h3>
					<img src={line}/>
				</center>
				<br />
    			<div className="row">
      			<div className="col-lg-8 col-md-10 mx-auto">

        			<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">สามารถเข้าสู่ระบบได้อย่างไร?</h4>
          			</a>
          			<p className="post-meta">สามารถเข้าสู่ระบบผ่าน MetaMask หากสามารถเข้าสู่ระบบได้สำเร็จจะสามารถเห็น Account 
								ที่ใช้งานบนแถบเมนู หากไม่เห็นให้ตรวจสอบการเชื่อมต่อ MetaMask อีกครั้ง</p>
        			</div>
	            <div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">ทำไมไม่สามารถอัพโหลดบทความวิจัยได้?</h4>
          			</a>
          			<p className="post-meta">ต้องทำการเข้าสู่ระบบก่อนทุกครั้ง</p>
        			</div>	
							<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">สกุลไฟล์ในการอัพโหลดบทความวิจัย?</h4>
          			</a>
          			<p className="post-meta">สกุลไฟล์ที่ใช้คือ pdf และเมื่ออัพโหลดเรียบร้อยแล้ว คุณยังสามารถดูบทความที่คุณอัพโหลดได้ที่ คอลัมน์ที่ชื่อว่า File</p>
        			</div>
							<div className="post-preview">
          			<a href="/">
            			<h4 className="post-title">จัดงานที่มหาวิทยาลัยศรีนครินทรวิโรฒ วิทยาเขตใด?</h4>
          			</a>
          			<p className="post-meta">มหาวิทยาลัยศรีนครินทรวิโรฒ วิทยาเขตประสานมิตร (อโศก) กรุงเทพฯ</p>
        			</div>
						
        
							
        
        
      </div>
    </div>
  </div>
</div>
		</section>


		<section id="team" className="testimonials text-center bg-light section gray-bg">
			<div className="container">
			<div className="section-header">
      	<h3 className="margin-top">ทีมงาน</h3>
      	<img src={line}/>	
					<div className="row">
        		<div className="col-lg-6">
          		<div className="testimonial-item mx-auto mb-5 mb-lg-0">
							<img src={dolnapa} width="250" height="250"/>
            		<h4>น.ส.ดลนภา ฉิมสอาด</h4>
            		<p className="font-weight-light mb-0">Email : dolnapa.ying@g.swu.ac.th</p>
								<p className="font-weight-light mb-0">Phone : 082-984-0117</p>
          		</div>
        		</div>
        
        		<div className="col-lg-6">
          		<div className="testimonial-item mx-auto mb-5 mb-lg-0">
							<img src={tamonwan} width="250" height="250"/>
            		<h4>น.ส.ธมลวรรณ รังผึ้ง</h4>
            		<p className="font-weight-light mb-0">Email : tamonwan.ning@g.swu.ac.th</p>
								<p className="font-weight-light mb-0">Phone : 064-603-6289</p>
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

export default profile;