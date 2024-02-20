import React from 'react';
import { Routes, Route,Link } from "react-router-dom";

export default function Home() {
  return (
    <>
   

<div className='notic'>  

<div className='notice1'> 
Notice:-</div>

<div className='notice2'>
   Admission process for 2080 is open. contact school office from 9:00 A.M to 5:00 P.M.(All days),Contact no.984403797,9814828071
   
 </div>

 </div>
 
 
 
 
 
  <div className='hb'>
 
 
<h1>Welcome to Shiv Sharda Secondary English Boarding School</h1>
<p> Shiv Sharda is progressive educational secondary school 
established under Goverment of Nepal, Shiv Sharda School is spreading
its wings across Madhesh provinence Specially in Janakpurdham.We 
provide a liberal, happy and diverse environment for students that not only nurtures
their creativity and enthuses finer values like empathy, integrity,patriotism and honesty but also helps them realise their true Potential.Shiv Sharda 
empowers all students to become responsible and conscitentious global citizens who as innovators will 
make the world tolerant,peaceful
and progessive place to live in.</p>  
<p>It is one of
the the best 

school in Janakpur. We strive to achieve more in the coming years.

The main aim of our institution is to focus on the overall development of your child.
our motto Shiksha with sanskar will be troughly incorporated into every student of our 
school. From studies to extracurricular activities, we want to 
prepare your child  with it all. we, at Shiv Sharda School, are presistent in 
grooming your child and securing their bright future. </p>
</div>

<div className='sir'>
  <div className='row'>
  <div className='col-lg-8'>
<div className='principal'>
<h2>Principal Desk</h2>
<div className='p1'>
<div className='row'>
<div className='col-lg-4'>
<div className='pphoto'>
    <img className='w-100 ' src='./img/six.jpg'></img>
    </div>
    <div className='ptitle '>
  <h6>Sujit Kumar Mishra M.Ed(English)</h6>
  </div>
  </div>
  <div className='col-lg-8'>
    <div className='paragraph'>
  <p>There is a time and a place for all actions and it is not coincidence that
     you have seen our website today. 
    At Shiv Sharda Sec. School we look 
     forward to take your child under the guidance and tutelage with 
    the best teachers, best infrastructure, best attitude and the very best intentions.  
    </p>
    <h4>Principal Message</h4>
    </div>
</div>
  </div>
  </div>
  </div>
  </div>
  <div className='col-lg-4'>
  <div className='result'>
            <h2>Results</h2>
            <Link className="result-link" to="/Test Result"><p>Test Results</p></Link>
              <Link className="result-link" to="/Board Result"><p>Board Results</p></Link>
              <Link className="result-link" to="/Other Result"><p>Other Results</p></Link>          
        </div>
  </div>
  </div>
  </div>
  
  <div className='direction'>
          
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.261054344466!2d85.93633937457581!3d26.73604426766212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec3f8924683abf%3A0xfc536ce9a0eca67f!2sShiv%20Sharda%20Eng%20Boarding%20School!5e0!3m2!1sen!2snp!4v1691061423842!5m2!1sen!2snp" 
          width="1300" 
          height="450" 
          style={{border:"0"}}
           allowfullscreen="" 
           loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
      
></iframe>
          </div>
          

  



  
    
  
  
    
    
  

    </>
  )
}
