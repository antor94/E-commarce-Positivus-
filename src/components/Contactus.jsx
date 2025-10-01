import React from 'react'
import CommonHead from './common/CommonHead'
import conImg from '../assets/images/contctImg.png'

const Contactus = () => {
  return (
    <>

    <section id='contact' className=''>
        <div className="container">
            {/* ------------ commonHead */}
            <div className='flex pb-[80px] gap-[40px]'>
            <CommonHead commonh2={'Contact Us'} />
            <div className='w-[330px]'><CommonHead commonp={'Connect with Us: Lets Discuss Your Digital Marketing Needs'} /></div>
            </div>

            <div id='contact-row' className='bg-[#F3F3F3] relative h-[773px] pt-[60px] pb-[80px] pl-[100px] rounded-[45px]   '>

            <div className='flex justify-between'>
                {/* -------------- left-side */}
                <div>
                    {/* -------------- button */}
                    <div className='flex gap-[35px]'>
                        <div className='flex gap-[14px]'> 
                            <input id='con' type="radio" />
                            <label className='text-[16px] font-normal font-main text-black' htmlFor="con">Say Hi</label>
                        </div>
                          <div className='flex gap-[14px]'>
                            <input id='contact' type="radio" />
                            <label className='text-[16px] font-normal font-main text-black' htmlFor="contact">Get a Quote</label>
                        </div>
                    </div>

                    {/* ------------- input-field */}

                    <div>
                        <p className='text-[16px] font-normal font-main  text-black'>Name</p>
                        <div className='w-[556px] mt-[5px] border rounded-[14px]'>
                        <input className='py-[18px] bg-white pl-[30px] rounded-[14px] text-[18px] font-normal font-main text-[#898989] w-full border-none outline-none' type="text" placeholder='Name' />
                        </div>
                        <div className='my-[25px]'>                       
                        <p className='text-[16px] font-normal font-main  text-black'>Email*</p>
                        <div className='w-[556px] mt-[5px] border rounded-[14px]'>
                        <input className='py-[18px] bg-white pl-[30px] rounded-[14px] text-[18px] font-normal font-main text-[#898989] w-full border-none outline-none' type="email" placeholder='Email' />
                        </div>
                        </div>
                        <p className='text-[16px] font-normal font-main  text-black'>Message*</p>
                        <textarea className='w-[556px] border rounded-[14px] text-[18px] font-normal font-main text-[#898989]' placeholder='Message'></textarea>
                       
                    </div>
                       {/* ------------ button */}

                       <button className='w-[556px] mt-[40px] bg-[#191A23] text-[20px] font-normal font-main text-[#fff] py-[20px] rounded-[14px]'>Send Message</button>
                </div>
                {/* ------------- right-img */}
                <div className=' absolute top-0 right-0'><img src={conImg} alt="contact_img" /></div>
            </div>
           </div>
        </div>
    </section>
    
    
  
    
    </>
  )
}

export default Contactus