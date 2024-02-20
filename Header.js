import React from 'react';
import { Routes, Route,Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Result from './Result';
import Admission from './Admission';
import Kidscare from './Kidscare';
import Gallery from './Gallery';
import Facility from './Facility';
import Contact from './Contact';
import Thevisionary from './Thevisionary';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// Import Swiper React components


// Import Swiper styles


export default function Header() {
  
  
  
  return (
    <>
        
          
          <div className='sname'>
        <div className='row'>
          
            <div className='col-lg-1'>
                <img src='./img/Logo.jpg'/>
            </div>
            <div className='col-lg-11 '>
              <p>"Recognized by Government of Nepal"</p>
              <div className='reg'><h4>Regd. No.:-2070</h4>
              </div>
              
         <h2> SHIV SHARDA SECONDARY ENGLISH BOARDING SCHOOL </h2>
         <h4>Pul chowk,Janakpurdham-01,Nepal</h4>
        </div>
        </div>
        </div>
        
      
        
        
        <div className='navb'>

        <nav className="navbar navbar-expand-lg  ">
           
    
    <Link className="navbar-brand ab" to="/Home">Home</Link>
    <button className="navbar-toggler" type="button" dat
    a-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link ab" aria-current="page" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab " to="/Thevisionary">The Visionary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab" to="/Admission">Admissions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab" to="/Kidscare">Kids Care</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link ab" to="/Facility">Facility</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab" to="/Gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ab" to="/Result">Result</Link>
        </li>
        
      </ul>
      </div>
      
      
      </nav>
      </div>
      
    
  
  
  



      
      
        
  <div className='col-lg'>
  
<div className='card'>
          <div className='card-body'>
                  

<Swiper
spaceBetween={50}
slidesPerView={1}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}

>
  
<SwiperSlide><img className='w-100' src='./img/one.jpg'/></SwiperSlide>
<SwiperSlide><img className='w-100' src='./img/two.jpg'/></SwiperSlide>
<SwiperSlide><img className='w-100' src='./img/three.jpg'/></SwiperSlide>
<SwiperSlide><img className='w-100' src='./img/four.jpg'/></SwiperSlide>
<SwiperSlide><img className='w-100' src='./img/five.jpg'/></SwiperSlide>





</Swiper>
</div>
</div>

</div>



        
         
        
           
    <Routes>
      
   <Route path="Home" element={< Home/>} />
   <Route path="About" element={<About />} />
   <Route path="Admission" element={<Admission />} />
   <Route path="Kidscare" element={<Kidscare />} />
   <Route path="Gallery" element={<Gallery />} />
   <Route path="Result" element={<Result />} />
   <Route path="Facility" element={<Facility />} />
   <Route path="Contact" element={<Contact />} />
   <Route path="Thevisionary" element={<Thevisionary />} />
   
   
 </Routes>
    </>
  )
}

