import React from 'react'
import bannerimg from '../assets/images/banner-img.png'

const Banner = () => {
  return (
    <>
    
    
    <section id='banner' className='pb-[70px]'>
        <div className="container">
            <div id='banner-row' className='flex  justify-between items-center'>
                <div>
                    <div className='w-[531px]'><h2 className='text-[60px] font-main font-medium text-[#000]'>Navigating the digital landscape for success</h2></div>
                    <div className='w-[498px] py-[35px]'><p className='text-[20px] font-normal font-main text-[#000]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p></div>
                       <button className='w-[264px] py-[20px] px-[35px] bg-[#191A23] rounded-[14px] text-[20px] font-normal font-main text-[#fff]'>Book a consultation</button> 
              
              
                </div>
                <div><img src={bannerimg} alt="banner-img" /></div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Banner