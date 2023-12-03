import React, { useEffect } from 'react'
import Packages from '../Componnt/Packages';

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
                  <img src="/images/icons/service-25.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">UI/UX Design</a>
                </h4>
                <div className="service-block_six-text">
                Designing immersive experiences that captivate users and drive meaningful interactions.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <img src="/images/icons/service-27.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">SEO &amp; Digital Marketing</a>
                </h4>
                <div className="service-block_six-text">
                Boosting brand awareness with targeted SEO and digital marketing initiatives.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <img src="/images/icons/service-28.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">Graphics Design</a>
                </h4>
                <div className="service-block_six-text">
                Empowering businesses through visually striking graphics that convey brand essence.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <img src="/images/icons/service-26.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">Web Development</a>
                </h4>
                <div className="service-block_six-text">
                Building dynamic and responsive websites optimized for superior performance.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <img src="/images/icons/service-29.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">App Development</a>
                </h4>
                <div className="service-block_six-text">
                Empowering businesses with dynamic app development and reliable technical support.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
          {/* Service Block Six */}
          <div className="service-block_six col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_six-inner">
              <div className="service-block_six-content">
                <span className="service-block_six-icon">
                  <img src="/images/icons/service-30.gif" alt="" />
                </span>
                <h4 className="service-block_six-heading">
                  <a href="#">Software Development</a>
                </h4>
                <div className="service-block_six-text">
                Innovative software solutions driving business success and technological advancement effortlessly.
                </div>
                <a className="service-block_six-more theme-btn" href="#">
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Button Box */}
        {/* <div className="services-four_button-box text-center">
          <button onClick={handleModalOpen} className="btn-style-seven theme-btn">
            <div className="btn-wrap">
              <span className="text-one">get started</span>
              <span className="text-two">get started</span>
            </div>
          </button>
        </div> */}
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