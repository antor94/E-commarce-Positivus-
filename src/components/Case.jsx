import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'

const Case = () => {
  return (
    <>



    <section id='case'>
        <div className="container">   
            <CommonHead commonh2={'Case Studies'} commonp={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'} />        
            <div id='case-id' className='bg-[#191A23]'>


<div className='w-[286px] h-[163px]'>
    <div className='w-full'><p className='text-[18px] font-normal font-main text-[#fff]'> For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p></div>

    <div><Link to={'/'} className='text-[20px] font-normal font-main text-[#B9FF66]' >Learn more</Link></div>

</div>









            </div>  
            </div> 
        
          </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Case