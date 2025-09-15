import React from 'react'
import CommonHead from './common/CommonHead'

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
            <div id='contact-id'>

            </div>
        </div>
    </section>
    
    
  
    
    </>
  )
}

export default Contactus