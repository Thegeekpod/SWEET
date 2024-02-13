import React, { useEffect } from 'react'
import Packages from '../Componnt/Packages';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const service = () => {
    useEffect(() => {
        // Call the owlCarousel code here
        if ($('.single-item-carousel').length) {
          $('.single-item-carousel').owlCarousel({
            // OwlCarousel options
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [
              '<span class="fa-solid fa-angle-left fa-fw"></span>',
              '<span class="fa-solid fa-angle-right fa-fw"></span>',
            ],
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              800: {
                items: 1,
              },
              1024: {
                items: 1,
              },
              1200: {
                items: 1,
              },
            },
          });
        }
    


    
      }, []); 
      
     
  return (
  

 
 <div>
  <Head>
        <title> Website Development & Marketing Solutions | Sweet Developer </title>
        <meta
          name="description"
          content="Explore our comprehensive range of IT solutions - web development, graphic design, SEO, software and app development, and UI/UX design at Sweet Developers."
        />
        <meta
          name="keywords"
          content="Services, web development, graphic design, SEO, software development, app development, UI/UX design"
        />
        <meta name="author" content="Sweet Developers" />
        
        
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="canonical" href="https://sweetdevelopers.com/service" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Website Development & Marketing Solutions | Sweet Developer" />
        <meta property="og:description" content="Explore our comprehensive range of IT solutions - web development, graphic design, SEO, software and app development, and UI/UX design at Sweet Developers." />
        <meta property="og:url" content="https://sweetdevelopers.com/service" />
        <meta property="og:type" content="website" />
        {/* Other SEO-related meta tags */}
      </Head>
    
    {/* End Page Title */}
    {/* Service Two */}
    <section className="services-four">
    <div className="auto-container">
      {/* Sec Title Three */}
      <div className="sec-title_three centered">
        <div className="sec-title_three-title">Our Featured Services</div>
        <h2 className="sec-title_three-heading">
          We provide some <span>exclusive</span> <br /> services for clients
        </h2>
      </div>
      <div className="inner-container">
        <div className="row clearfix">
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-25.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/ui-ux-design-services">UI/UX Design</Link>
                </h4>
                <div className="service-block_six-text">
                Designing immersive experiences that captivate users and drive meaningful interactions.
                </div>
                <Link className="service-block_six-more theme-btn" href="/ui-ux-design-services">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-27.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/seo-and-digital-marketing">SEO &amp; Digital Marketing</Link>
                </h4>
                <div className="service-block_six-text">
                Boosting brand awareness with targeted SEO and digital marketing initiatives.
                </div>
                <Link className="service-block_six-more theme-btn" href="/seo-and-digital-marketing#">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-28.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/graphic-design-services">Graphics Design</Link>
                </h4>
                <div className="service-block_six-text">
                Empowering businesses through visually striking graphics that convey brand essence.
                </div>
                <Link className="service-block_six-more theme-btn" href="/graphic-design-services">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-26.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/web-development-service">Web Development</Link>
                </h4>
                <div className="service-block_six-text">
                Building dynamic and responsive websites optimized for superior performance.
                </div>
                <Link className="service-block_six-more theme-btn" href="/web-development-service">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-29.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/app-development-services">App Development</Link>
                </h4>
                <div className="service-block_six-text">
                Empowering businesses with dynamic app development and reliable technical support.
                </div>
                <Link className="service-block_six-more theme-btn" href="/app-development-services">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <Image  width={60} height={60} src="/images/icons/service-30.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <Link href="/software-development-services">Software Development</Link>
                </h4>
                <div className="service-block_six-text">
                Innovative software solutions driving business success and technological advancement effortlessly.
                </div>
                <Link className="service-block_six-more theme-btn" href="/software-development-services">
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>

    {/* <Packages/> */}
    {/* End Service Two */}
    {/* Fluid Section One */}
    <section className="fluid-one">
      <div className="outer-container d-flex">
        {/* Carousel Column */}
        <div className="fluid-one_carousel-column">
          <div className="fluid-one_carousel-inner">
            <div className="single-item-carousel owl-carousel owl-theme">
              {/* Slide */}
              <div className="slide">
                <figure className="fluid-one_image">
                  <img src="/images/resource/fluid-1.jpg" alt="" />
                </figure>
                <div className="fluid-one_content">
                  {/* Sec Title */}
                  <div className="sec-title light">
                    <div className="sec-title_title">Case Studies</div>
                    <h2 className="sec-title_heading">
                      Web And Mobile App Development{" "}
                    </h2>
                    <div className="sec-title_text">
                      We deliver best-in-class web and mobile solutions that will
                      retain the attention of the target audience.
                    </div>
                  </div>
                  <a
                    className="fluid-one_arrow fa-solid fa-arrow-right fa-fw theme-btn"
                    href="#"
                  />
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <figure className="fluid-one_image">
                  <img src="/images/resource/fluid-2.jpg" alt="" />
                </figure>
                <div className="fluid-one_content">
                  {/* Sec Title */}
                  <div className="sec-title light">
                    <div className="sec-title_title">Case Studies</div>
                    <h2 className="sec-title_heading">
                      {" "}
                      Infrastructure Technology
                    </h2>
                    <div className="sec-title_text">
                      We deliver best-in-class web and mobile solutions that will
                      retain the attention of the target audience.
                    </div>
                  </div>
                  <a
                    className="fluid-one_arrow fa-solid fa-arrow-right fa-fw theme-btn"
                    href="#"
                  />
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <figure className="fluid-one_image">
                  <img src="/images/resource/fluid-3.jpg" alt="" />
                </figure>
                <div className="fluid-one_content">
                  {/* Sec Title */}
                  <div className="sec-title light">
                    <div className="sec-title_title">Case Studies</div>
                    <h2 className="sec-title_heading"> Warranty Management IT</h2>
                    <div className="sec-title_text">
                      We deliver best-in-class web and mobile solutions that will
                      retain the attention of the target audience.
                    </div>
                  </div>
                  <a
                    className="fluid-one_arrow fa-solid fa-arrow-right fa-fw theme-btn"
                    href="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Column */}
        <div className="fluid-one_content-column">
          <div className="fluid-one_column-inner">
            {/* Sec Title */}
            <div className="sec-title">
              <div className="sec-title_title">Who We Are?</div>
              <h2 className="sec-title_heading">
                Our <span className="theme_color">penetration</span> testing{" "}
                <br /> team uses an industry
              </h2>
              <div className="sec-title_text">
                We provide the full spectrum of IT services and consulting for
                various industries.
              </div>
            </div>
            <div className="row clearfix">
              {/* Fluid Block One */}
              <div className="fluid-block_one col-lg-6 col-md-6 col-sm-12">
                <div className="fluid-block_icon">
                  <img src="/images/icons/fluid-1.png" alt="" />
                </div>
                <h5 className="fluid-block_title">Digital Marketer</h5>
                <div className="fluid-block_text">
                  Our customers get solutions and business opportunities instead
                  of just projects. Our mission is to accelerate.
                </div>
              </div>
              {/* Fluid Block One */}
              <div className="fluid-block_one col-lg-6 col-md-6 col-sm-12">
                <div className="fluid-block_icon">
                  <img src="/images/icons/fluid-2.png" alt="" />
                </div>
                <h5 className="fluid-block_title">Global Entrepreneur</h5>
                <div className="fluid-block_text">
                  Our customers get solutions and business opportunities instead
                  of just projects. Our mission is to accelerate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </div>

  )
}

export default service