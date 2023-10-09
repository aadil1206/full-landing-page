import React from 'react'
import {FiSearch,FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
import {FcElectricity} from "react-icons/fc"
import {BsWhatsapp} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='footer' id="abt">
      <div className='logo'>
       <div className='l0'> <img src="./ekaralulogo.png" alt="hello" className='l9'/></div>
      <div className='l1'><p className='p1'>Ready to get start</p>
      <button className='b1'>get start</button></div></div>
    <div className='footer23'>
     <div className='row'>
     <ul style={{listStyle:'none',color:'white'}}><li><h2>contact us</h2></li>
      <li><FiPhoneCall/> +91 9131680903</li>
      <li><AiOutlineMail/> +91 9131680903</li>
      <li> <FcElectricity/>Hyderabad-500008</li>
      </ul>
     </div>
     <div className='row'>
     <ul style={{listStyle:'none',color:'white'}}><li><h2>Explore More</h2></li>
    <li>Home</li>
      <li>About us</li>
      <li>Our Journey</li>
      <li>Add a listing</li>
      <li>Contact us</li>
      <li>Faq's</li>
      </ul>
     </div>
     <div className='row'>
     <ul style={{listStyle:'none',color:'white'}}><li><h2>Quick Links</h2></li>
      <li>Terms&Conditions</li>
      <li>Privacy Policy</li>
      <li>Site Map</li>
      </ul>
     </div>
   
     <div className='row1'>
      <h3 style={{color:'white'}}>can send the property details via Whatsapp on!</h3>
      <div><button style={{height:"64px",display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'8px',backgroundColor:'#4E8D40'}}> <a href="#"><BsWhatsapp/></a><p>on whatsapp +919131680903</p></button></div>
      <h4 style={{color:'white'}}>Follow us on</h4>
      <div><img src="51.png" alt="" style={{marginRight:'10px'}}/>
      <a href="https://www.facebook.com/"><img src="52.png" alt="" style={{marginRight:'10px'}}/></a>
      <a href="https://www.youtube.com/"><img src="53.png" alt="" style={{marginRight:'10px'}}/></a></div>
      </div>
    </div>
    <div style={{color:'white',margin:'0 28px 0 64px',display:'flex',justifyContent:'space-between'}}><p >All right reserved to ekaralu</p>
    <p>powered by dezen technology</p>
    </div>
    </div>
    
  )
}

export default Footer
