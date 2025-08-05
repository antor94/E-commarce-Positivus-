import React from 'react'
import bannerlogo from '../assets/images/Logotypes.png'
import { Link } from 'react-router'

const Bannerlogo = () => {
  return (
    <>
    
    
    
    <section id='banner-img' className='pb-[140px]'>
      <div className='container'>
        <div id='bannerlogo-row'>

          <Link ><img src={bannerlogo} alt="banner-logo" /></Link>



        </div>

      </div>
    </section>
    
    
    
    </>
  )
}

export default Bannerlogo