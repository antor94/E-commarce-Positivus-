import React from 'react'
import CommonHead from './common/CommonHead'
import conImg from '../assets/images/contctImg.png'

const Contactus = () => {
  return (
    <>

    <section id='contact'>
        <div className="container">
            {/* ------------ commonHead */}

            <div className='flex gap-[40px]'>
            <CommonHead commonh2={'Contact Us'} />
            <div className='w-[330px]'><CommonHead commonp={'Connect with Us: Lets Discuss Your Digital Marketing Needs'} /></div>
            </div>
            <div id='contact-id' className='bg-[#F3F3F3] rounded-[45px]'>

                {/* -------------- left-side */}

                <div>
                    <div>
                        <div>
                            <input id='con' type="radio" />
                            <label htmlFor="con">Say Hi</label>
                        </div>
                          <div>
                            <input id='con' type="radio" />
                            <label htmlFor="con">Get a Quote</label>
                        </div>
                    </div>
                </div>




           </div>
        </div>
    </section>
    
    
  
    
    </>
  )
}

export default Contactus