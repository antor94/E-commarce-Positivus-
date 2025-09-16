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
                    <div>
                        <ul>
                            <li><Link to={'/'} >About us</Link></li>
                            <li><Link to={'/'} >Services</Link></li>
                            <li><Link to={'/'} >About us</Link></li>
                            <li><Link to={'/'} >About us</Link></li>
                            <li><Link to={'/'} >About us</Link></li>
                        </ul>
                    </div>



                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer