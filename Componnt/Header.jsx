import React from 'react'
import Link from 'next/link'
const Header = () => {
  
  return (
    <div className="main-header header-style-three">
    {/* Header Top Three */}
    
    {/* End Header Top */}
    {/* Header Upper */}
    <div className="header-upper">
      <div className="auto-container">
        <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
          {/* Logo Box */}
          <div className="logo">
            <Link href="/">
              <img src="/images/logo-2.png" className='logoimg' alt="" title="" />
            </Link>
          </div>
          <div className="nav-outer d-flex justify-content-between align-items-center flex-wrap">
            {/* Main Menu */}
            <nav className="main-menu show navbar-expand-md">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className='active'>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li > {/* className="dropdown" */}
                    <Link href="/service">Services</Link>
                    {/* <ul>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="service-detail.html">Service Detail</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/project">Project</Link>
                    
                  </li>
                  {/* <li>
                    <Link href="/blog">Blog</Link>
                  
                  </li> */}
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box d-flex align-items-center">
              {/* Search Btn */}
              
              {/* Button Box */}
              <div className="button-box style-two ">
                <Link className="btn-style-one theme-btn btn-item x" href="https://wa.me/+918918789119" target='_blank'>
                  <div className="btn-wrap">
                    <span className="text-one"><img className="whatsapp"src='/images/giphy.gif'/>Whats App</span>
                    <span className="text-two"><img className="whatsapp"src='/images/giphy.gif'/>Whats App</span>

                  </div>
                </Link>
              </div>
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon fa-solid fa-bars fa-fw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sticky Header  */}
    <div className="sticky-header">
      <div className="auto-container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo">
            <Link href="/" title="">
              <img src="/images/logo-2.png" className='logoimg' alt="sweetdeveloper"/>
            </Link>
          </div>
          {/* Right Col */}
          <div className="right-box d-flex align-items-center flex-wrap">
            {/* Main Menu */}
            <nav className="main-menu">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box d-flex align-items-center">
              {/* Social Box */}
              <ul className="header-social_box-two">
                <li>
                  <Link
                    href="https://www.twitter.com/"
                    className="fa-brands fa-facebook-f fa-fw"
                  />
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    className="fa-brands fa-twitter fa-fw"
                  />
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/sweetdevelopers?trk=blended-typeahead"
                    className="fa-solid fa-linkedin  fa-fw"
                  />
                </li>
              </ul>
              {/* Nav Btn */}
              
              {/* Button Box */}
              <div className="button-box style-two ">
                <Link className="btn-style-one theme-btn btn-item x" href="wa.me/+918918789119">
                  <div className="btn-wrap">
                    <span className="text-one"><img className="whatsapp"src='/images/giphy.gif'/>Whats App</span>
                    <span className="text-two"><img className="whatsapp"src='/images/giphy.gif'/>Whats App</span>

                  </div>
                </Link>
              </div>
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon fa-solid fa-bars fa-fw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Sticky Menu */}
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <span className="icon flaticon-020-x-mark" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <img src="/images/logo.webp" alt="" title="" />
          </Link>
        </div>
        {/* Search */}
      
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        </div>
      </nav>
    </div>
    {/* End Mobile Menu */}
  </div>
  )
}

export default Header
