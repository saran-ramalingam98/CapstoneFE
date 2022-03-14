import React from 'react'
import Topbar from "../../components/topbar/Topbar"
import { Button } from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from 'react-router-dom'

export default function About() {
  return (
      <div><Topbar>
      </Topbar>
          <div className='vh-100 gray-bg '>
    <div className="about-section paddingTB60 " style={{textAlign:"left"}}>
                <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span>Us</span></h1>
								<h3>Hi Im Saran Ramalingam</h3>
								
						<div className="about-icons"> 
                            <ul >
                                <li><a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"><FacebookIcon></FacebookIcon></i></a> </li>
                                <li> <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"><GoogleIcon></GoogleIcon></i></a> </li>
                                <li> <a href="https://www.linkedin.com/home"><i id="social-em" className="fa fa-envelope-square fa-3x social"><LinkedInIcon></LinkedInIcon></i></a> </li>
                                <li><a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i><TwitterIcon></TwitterIcon></a> </li>

                            </ul>      
               
               
	           
	           
	        
	        </div>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="about-img">
								<img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""></img>
							</div>
						</div>	
                    </div>
                </div><br></br>
                <br></br>
                <br></br>
                
            </div>
            <Link to="/Home"><Button variant="contained">Go to Home</Button></Link>
   
    </div>
      </div>
  )
}
