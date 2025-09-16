import React from 'react'
import footerLogo from '../assets/images/footerLogo.png'
import { Link } from 'react-router'
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>

    <section id='footer'>
        <div className="container">
            <div id='footer-row' className='bg-[#191A23] rounded-t'>

                {/* -------------- footer-heading */}
                <div>

                    <Link to={'/'} ><img src={footerLogo} alt="footer-logo" /></Link>

                    {/* ------------ footer nav-item */}
                    <div>
                        <ul>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >About us</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Services</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Use Cases</Link></li>
                            <li><Link to={'/'} className='text-[18px] font-normal font-main text-[#fff] underline'   >Pricing</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Blog</Link></li>
                        </ul>
                    </div>

                    {/* ------------ footer icon */}
                    <div>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><FaLinkedinIn className='text-[15px]' /></Link></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><ImFacebook className='text-[15px]' /></Link></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><FaTwitter className='text-[15px]' /></Link></div>
                    </div>



                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer