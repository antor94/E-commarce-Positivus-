import React from 'react'
import happenlogo from '../assets/images/happen-img.png'

const Happen = () => {
  return (
    <>
    
    <section id='happen' className='py-[23px]'>
        <div className="container">
            <div id='happen-row' className=' rounded-[45px] bg-[#F3F3F3] flex justify-center gap-[186px] '>
                <div className=''>

                <div><h2 className='text-[30px] font-medium font-main text-[#000]'>Let’s make things happen</h2></div>
                <div className='w-[500px] py-[26px]'><p className='text-[18px] font-normal font-main text-[#000]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p></div>

                       <button className='w-[264px] py-[20px] px-[35px] bg-[#191A23] rounded-[14px] text-[20px] font-normal font-main text-[#fff]'>Book a consultation</button> 
                </div>
{/* -------------------- happen-img */}
<div className=''><img className='w-[359px] ' src={happenlogo} alt="" /></div>
               

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Happen