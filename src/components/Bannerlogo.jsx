import React from 'react'
import { Link } from 'react-router'

import comLogo from '../assets/images/Company logo.png'
import comLogo1 from '../assets/images/Company logo1.png'
import comLogo2 from '../assets/images/Company logo2.png'
import comLogo3 from '../assets/images/Company logo3.png'
import comLogo4 from '../assets/images/Company logo4.png'
import comLogo5 from '../assets/images/Company logo5.png'



const Bannerlogo = () => {
  return (
    <>
    
    
    
    <section id='com-logo' className='pb-[140px]'>
      <div className="container">
        <div id='com-logo-id'>

          <div>
            <ul className='flex justify-center items-center gap-[96px]'>
              <li><Link to={'/'} ><img src={comLogo} alt="com-logo" /></Link></li>
              <li><Link to={'/'} ><img src={comLogo1} alt="com-logo" /></Link></li>
              <li><Link to={'/'} ><img src={comLogo2} alt="com-logo" /></Link></li>
              <li><Link to={'/'} ><img src={comLogo3} alt="com-logo" /></Link></li>
              <li><Link to={'/'} ><img src={comLogo4} alt="com-logo" /></Link></li>
              <li><Link to={'/'} ><img src={comLogo5} alt="com-logo" /></Link></li>
            </ul>
          </div>



        </div>
      </div>
    </section>
    
    
    
    </>
  )
}

export default Bannerlogo