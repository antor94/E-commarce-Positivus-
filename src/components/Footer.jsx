import React from 'react'
import footerLogo from '../assets/images/footerLogo.png'
import { Link } from 'react-router'

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
                        <div><Link to={'/'} ></Link></div>
                    </div>



                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer