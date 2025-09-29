import React from 'react'
import footerLogo from '../assets/images/footerLogo.png'
import { Link } from 'react-router'
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>

    <section id='footer' className=' rounded-t-20 '>
        <div className="container">
            <div id='footer-row' className='bg-[#191A23] rounded-t-[45px] pb-[178px] pt-[55px] px-[60px]'>

                {/* -------------- footer-heading */}
                <div className='flex justify-between '>
                    <Link to={'/'} ><img src={footerLogo} alt="footer-logo" /></Link>
                    {/* ------------ footer nav-item */}
                    <div>
                        <ul className='flex gap-[40px]'>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >About us</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Services</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Use Cases</Link></li>
                            <li><Link to={'/'} className='text-[18px] font-normal font-main text-[#fff] underline'   >Pricing</Link></li>
                            <li><Link to={'/'}  className='text-[18px] font-normal font-main text-[#fff] underline'  >Blog</Link></li>
                        </ul>
                    </div>

                    {/* ------------ footer icon */}
                    <div className='flex gap-[20px]'>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><FaLinkedinIn className='text-[15px]' /></Link></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><ImFacebook className='text-[15px]' /></Link></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center'><Link to={'/'} ><FaTwitter className='text-[15px]' /></Link></div>
                    </div>
                </div>


                {/* --------------- contact details */}
                <div className='mt-[66px] flex justify-between'>
                    {/* --------- left side */}
                    <div>
                        <div className='w-[126px] bg-[#B9FF66] px-[7px] rounded-[7px]'><h2 className='text-[20px] font-medium font-main text-[#000]'>Contact us:</h2></div>
                        <address className='mt-[27px]'>
                            <div className='flex gap-[5px]'>
                                <h3 className='text-[18px] font-normal font-main text-[#fff]'>Email:</h3>
                                <a className='text-[18px] font-normal font-main text-[#fff]' href="">info@positivus.com</a>
                            </div>
                                    <div className='flex gap-[5px] my-[20px]'>
                                <h3 className='text-[18px] font-normal font-main text-[#fff]'>Phone:</h3>
                                <p className='text-[18px] font-normal font-main text-[#fff]'>555-567-8901</p>
                            </div>
                                    <div className='w-[332px] gap-[5px]'>
                                <h3 className='text-[18px] font-normal font-main text-[#fff]'>Address:</h3>
                                <p className=' text-[18px] font-normal font-main text-[#fff]' >1234 Main St</p>
                                <p>Moonstone City, Stardust State 12345</p>
                            </div>
                             
                        </address>
                    </div>

                    {/* --------------- right-side */}
                    <div className='w-[634px] flex justify-center items-center gap-[20px]  bg-[#292A32] rounded-[14px]'>
                        <div className=' flex justify-center gap-[20px] items-center'>

                        <div className='w-[285px] rounded-[14px] border border-[#fff]'>
                        <input className='w-full text-[18px] border-none outline-none font-normal py-[22px] pl-[20px] font-main text-white' placeholder='Email' type="email" />  </div>
                        <button className='w-[249px] bg-main text-[20px] font-normal font-main text-[#000] rounded-[14px] py-[20px]' >Subscribe to news</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer