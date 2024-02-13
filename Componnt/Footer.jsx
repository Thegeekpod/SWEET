import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import PayPalButton from './PayPalButtonComponent'
// import PayPalButton from './PayPalButtonComponent'

const Footer = () => {
  return (
    <div
    className="main-footer"
    style={{ backgroundImage: "url(/images/background/pattern-11.png)" }}
  >
    <div className="auto-container">
      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="row clearfix">
          {/* Big Column */}
          <div className="big-column col-lg-6 col-md-12 col-sm-12">
            <div className="row clearfix">
              {/* Footer Column */}
              <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget logo-widget">
                  <div className="logo">
                    <Link href="/">
                      <img  width={210} height={63} className='logoimg' src="/images/footer-logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    We work with a passion of taking challenges and creating new
                    ones in advertising sector.
                  </div>
                  <Link href="/pay-now" className="theme-btn about-btn m-1">
                    Pay Now
                  </Link>
                  {/* <PayPalButton/> */}
                  {/* <PayPalButton/> */}
                  <Link href="tel:+918918789119" className="theme-btn about-btn m-1">
                    Call Now
                  </Link>
                </div>
              </div>
              {/* Footer Column */}
              <div className="footer-column col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                  <h4>Quick Link:</h4>
                  <ul className="contact-list">
                    <li>
                      <Link href="/contact-us" style={{color:'white'}}><span className="icon fa fa-share" /> Contact Us </Link>
                     
                    </li>
                    <li>
                    <Link href="/service" style={{color:'white'}}> <span className="icon fa fa-share" /> Services</Link>
                     
                    </li>
                    <li>
                    <Link href="/project" style={{color:'white'}}>  <span className="icon fa fa-share" /> Projects</Link>
                    </li>
                    <li>
                    <Link href="mailto:career@sweetdevelopers.com" style={{color:'white'}}>  <span className="icon fa fa-share" /> career</Link>
                    </li>
                  </ul>
                 
                </div>
              </div>
              
              <ul className="privicy">
                    <li>
                     <Link href='/privacy-policy' className='ptr'><span className="fas fa-user-shield bbf" /> Privacy Policy</Link> 
                    </li>
                    <li>
                      <Link href='/terms-and-conditions' className='ptr'><span className="fas fa-file-contract bbf"  /> Terms & Conditions</Link> 
                    </li>
                    <li>
                      <Link href='/refund-policy' className='ptr'><span className="fa fa-credit-card bbf" /> Refund Policy</Link> 
                    </li>
                    <li>
                      <Link href='/delivery-process' className='ptr'><span className="fa fa-window-restore bbf" /> Delivery-process</Link> 
                    </li>
                  </ul>
              </div>
            </div>
          {/* Big Column */}
          <div className="big-column col-lg-6 col-md-12 col-sm-12">
            <div className="row clearfix">
              {/* Footer Column */}
              <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h4>Official info:</h4>
                  <ul className="contact-list">
                  <li>
                      Sales: <Link href="tel:+917029738023" style={{color:'white'}}><span className="icon fa fa-phone" /> (+91) 70297 38023</Link>
                     
                    </li>
                    <li>
                    <Link href="mailto:sales@sweetdevelopers.com" style={{color:'white'}}>  <span className="icon fa fa-envelope" /> sales@sweetdevelopers.com</Link>
                    </li>
                    <li>
                    <Link href="mailto:support@sweetdevelopers.com" style={{color:'white'}}>  <span className="icon fa fa-envelope" /> support@sweetdevelopers.com</Link>
                    </li>
                    {/* <li>
                    <Link href="mailto:career@sweetdevelopers.com" style={{color:'white'}}>  <span className="icon fa fa-envelope" /> career@sweetdevelopers.com</Link>
                    </li> */}
                  </ul>
                  <div className="timing">
                    <strong>Open Hours: </strong>
                    Mon - Fri: 10 am - 6 pm, <br /> 
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget instagram-widget">
                  <h4>Gallery</h4>
                  <div className="widget-content">
                    <div className="images-outer clearfix">
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-1.jpg"
                        >
                          <img
                            src="/images/gallery/project-1.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-2.jpg"
                        >
                          <img
                            src="/images/gallery/project-2.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-3.jpg"
                        >
                          <img
                            src="/images/gallery/project-3.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-4.jpg"
                        >
                          <img
                            src="/images/gallery/project-4.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-5.jpg"
                        >
                          <img
                            src="/images/gallery/project-5.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      {/*Image Box*/}
                      <figure className="image-box">
                        <a
                          className="lightbox-image"
                          href="/images/gallery/project-6.jpg"
                        >
                          <img
                            src="/images/gallery/project-6.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          2024 © All rights reserved by <span style={{color:'red', fontSize:"20px"}}>♥</span><a href="https://sweetdevelopers.com/">  Sweet Developers</a>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Footer
