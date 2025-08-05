import React from 'react'

import logo from '../assets/images/Logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>

    <section id='navbar' className='my-[6px] pt-[60px] pb-[70px] '>
        <div className="container">
            <div id='navbar-row'  className='flex justify-between items-center'>
                {/* ------ logo */}
                <Link className=''><img src={logo} alt="nav-img" /></Link>
                {/* ------------- nav-item */}
                <div>
                    <ul className='flex gap-[40px] items-center'>
                        <li><Link to={'/'} className='text-[20px] font-normal font-main text-[#000]' >About us</Link></li>
                        <li><Link to={'/'} className='text-[20px] font-normal font-main text-[#000]' >Services</Link></li>
                        <li><Link  to={'/'} className='text-[20px] font-normal font-main text-[#000]'>Use Cases</Link></li>
                        <li><Link to={'/'} className='text-[20px] font-normal font-main text-[#000]' >Pricing</Link></li>
                        <li><Link  to={'/'} className='text-[20px] font-normal font-main text-[#000]'>Blog</Link></li>
                    </ul>
                </div>
                {/* -------------- button */}
            <button className='w-[237px] border py-[20px]  px-[35px] text-[20px] font-normal font-main text-[#000] rounded-[14px]'>Request a quote</button>


            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar