import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'

const Case = () => {
  return (
    <>



    <section id='case' className='pb-[140px]'>
        <div className="container">   

            <div className='flex gap-[40px]'>


            <CommonHead commonh2={'Case Studies'} />  
            
            <div className='w-[580px]'>
             <CommonHead commonp={'Explore Real-Life Examples of Our Proven Digital Marketing  Success through Our Case Studies'}  />   

            </div>
            </div>
            <div id='case-id' className='bg-[#191A23] rounded-[45px] mt-[80px] pt-[70px] px-[60px] pb-[93px] flex justify-between '>




<div  className='w-[286px] h-[163px]'>
    <div className='w-full'><p className='text-[18px] font-normal font-main text-[#fff]'> For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p></div>

    <div><Link to={'/'} className='text-[20px] font-normal font-main mt-[20px] text-[#B9FF66]' >Learn more</Link></div>

</div>

<span className=' inline-block w-[1px] h-[186px] bg-white text-white'></span>

<div className='w-[286px] h-[163px]'>
    <div className='w-full'><p className='text-[18px] font-normal font-main text-[#fff]'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p></div>

    <div><Link to={'/'} className='text-[20px] font-normal font-main mt-[20px] text-[#B9FF66]' >Learn more</Link></div>

</div>

<span className=' inline-block w-[1px] h-[186px] bg-white text-white'></span>


<div className='w-[286px] h-[138px]'>
    <div className='w-full'><p className='text-[18px] font-normal font-main text-[#fff]'> For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p></div>

    <div><Link to={'/'} className='text-[20px] font-normal font-main mt-[20px] text-[#B9FF66]' >Learn more</Link></div>

</div>









            </div>  
            </div> 
        
          </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Case