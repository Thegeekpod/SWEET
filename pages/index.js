import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function Home() {
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

//
    if (typeof window !== 'undefined' && $('.case-carousel-two').length) {
      $('.case-carousel-two').owlCarousel({
        // OwlCarousel options
        loop: true,
        margin: 30,
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
        // Call the owlCarousel code here sponser
       	// Sponsors Carousel Two
	if ($('.sponsors-carousel-two').length) {
		$('.sponsors-carousel-two').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:4
				}
			}
		});    		
	}
  const handlePreloader = () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 100); // Adjust the delay as needed
    }
  };

  handlePreloader();

  }, []); 
  


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
  });
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const proxyUrl = 'https://sweetdevelopers.com/proxy.php?url=https://script.google.com/macros/s/AKfycbzqbtKGSNNlAm7oLfYxMMLOJ3GafGFj0JzvUx5lkkrzhJsTUQZTZit_3mn3ORb-XoLiqA/exec';

      const response = await axios.post(proxyUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Form data submitted:', response.data);
      if (response.status === 200){
        handleModalClose (true);
        setShowThankYouPopup(true);

        // Automatically close the popup after 5 seconds
        setTimeout(() => {
          setShowThankYouPopup(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            subject: '',
          });
        }, 5000);

        // Optionally, you can handle the response data here, show a success message, etc.
      } else {
        console.error('Error submitting form:', response.status);
        // Handle errors if the form submission fails
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors if the form submission fails
    }
      // Optionally, you can handle the response data here, show a success message, etc.
    
  };


  return (
<>

  {/* Preloader */}
  <div className="preloader"></div>

 

  {/* Main Slider Three */}
  <div className="main-slider-three">
    <div
      className="slider-three_icon-one"
      data-parallax='{"y" : -80}'
      style={{ backgroundImage: "url(/images/icons/service-22.png)" }}
    />
    <div
      className="slider-three_icon-two"
      data-parallax='{"y" : 80}'
      style={{ backgroundImage: "url(/images/icons/service-23.png)" }}
    />
    <div className="single-item-carousel owl-carousel owl-theme">
      {/* Slide */}
      <div className="slide">
        <div
          className="slider-three_image-layer"
          style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
        />
      
        <div className="auto-container">
          {/* Content Column */}
          <div className="slider-three_content-box">
            {/* About One Detail */}
            
            <h1 className="slider-three_title">
            Your Vision, Our Expertise <br/>
Get Exceptional Digital Solutions 

            </h1>
            <div className="slider-three_text">
            Innovative development services for your business growth.
            </div>
            {/* Button Box */}
            <div className="slider-three_button-box text-center">
              <button onClick={handleModalOpen} className="btn-style-seven theme-btn">
                <div className="btn-wrap">
                  <span className="text-one">get started</span>
                  <span className="text-two">get started</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide */}
      <div className="slide">
        <div
          className="slider-three_image-layer"
          style={{ backgroundImage: "url(/images/main-slider/3.jpg)" }}
        />
        
        <div className="auto-container">
          {/* Content Column */}
          <div className="slider-three_content-box">
            {/* About One Detail */}
           
            <h1 className="slider-three_title">
            Our Expert Team  <br/>
Can Build Your Success Story

            </h1>
            <div className="slider-three_text">
            Innovative development services for your business growth.
            </div>
            {/* Button Box */}
            <div className="slider-three_button-box text-center">
              <button onClick={handleModalOpen} className="btn-style-seven theme-btn" >
                <div className="btn-wrap">
                  <span className="text-one">get started</span>
                  <span className="text-two">get started</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide */}
     
    </div>
  </div>
  {/* End Main Slider Three */}
  {/* Services Three */}
  <section className="services-three">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Services Block Five */}
        <div className="service-block_five col-lg-3 col-md-6 col-sm-12">
          <div
            className="service-block_five-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="service-block_five-color-layer" />
            <div
              className="service-block_five_pattern"
              style={{
                backgroundImage: "url(/images/background/pattern-38.png)"
              }}
            />
            <div className="service-block_five_icon">
              <Image width={60} height={60} src="/images/icons/service-18.png" alt="" />
            </div>
            <h5 className="service-block_five_heading cnone">
              <a href="#">Branding and UI/UX Design Services</a>
            </h5>
            <div className="service-block_five-text">
            We can help you create designs that stand out. 
            </div>
            {/* <a
              href="service-detail.html"
              className="theme-btn service-block_five-more"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/* Services Block Five */}
        <div className="service-block_five col-lg-3 col-md-6 col-sm-12">
          <div
            className="service-block_five-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="service-block_five-color-layer" />
            <div
              className="service-block_five_pattern"
              style={{
                backgroundImage: "url(/images/background/pattern-38.png)"
              }}
            />
            <div className="service-block_five_icon">
              <Image  width={60} height={60} src="/images/icons/service-19.png" alt="" />
            </div>
            <h5 className="service-block_five_heading cnone">
              <a href="#">Top-Notch Website Development Service</a>
            </h5>
            <div className="service-block_five-text">
            We work on almost every web development platform.
            </div>
            {/* <a
              href="service-detail.html"
              className="theme-btn service-block_five-more"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/* Services Block Five */}
        <div className="service-block_five col-lg-3 col-md-6 col-sm-12">
          <div
            className="service-block_five-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="service-block_five-color-layer" />
            <div
              className="service-block_five_pattern"
              style={{
                backgroundImage: "url(/images/background/pattern-38.png)"
              }}
            />
            <div className="service-block_five_icon">
              <Image  width={60} height={60} src="/images/icons/service-20.png" alt="" />
            </div>
            <h5 className="service-block_five_heading cnone">
              <a href="#">Hire Dedicated Developers from Us</a>
            </h5>
            <div className="service-block_five-text">
            Hire developers on hourly basis
            </div>
            {/* <a
              href="service-detail.html"
              className="theme-btn service-block_five-more"
            >
              Read more
            </a> */}
          </div>
        </div>
        {/* Services Block Five */}
        <div className="service-block_five col-lg-3 col-md-6 col-sm-12">
          <div
            className="service-block_five-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="service-block_five-color-layer" />
            <div
              className="service-block_five_pattern"
              style={{
                backgroundImage: "url(/images/background/pattern-38.png)"
              }}
            />
            <div className="service-block_five_icon">
              <Image  width={60} height={60} src="/images/icons/service-21.png" alt="" />
            </div>
            <h5 className="service-block_five_heading cnone">
              <a href="#">Hire Digital marketing Specialist </a>
            </h5>
            <div className="service-block_five-text">
            We have expert SEO, SMO, and PPC experts to help you
            </div>
            {/* <a
              href="service-detail.html"
              className="theme-btn service-block_five-more"
            >
              Read more
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Company One */}
  {/* Company Three */}
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
        {/* Button Box */}
        <div className="services-four_button-box text-center">
          <button onClick={handleModalOpen} className="btn-style-seven theme-btn">
            <div className="btn-wrap">
              <span className="text-one">get started</span>
              <span className="text-two">get started</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
  
  {/* End Company Three */}
  {/* CTA Two */}
  <section
    className="cta-two wow fadeInUp"
    data-wow-delay="0ms"
    data-wow-duration="1500ms"
  >
    <div className="auto-container">
      <div
        className="cta-two_inner-container"
        style={{ backgroundImage: "url(/images/background/map.png)" }}
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="cta-two_author">
            <span className="cta-two_author-image">
              <Image  width={60} height={60} src="/images/user.png" style={{width:'61px',height:'61px'}} alt="" />
            </span>
            Supriyo Kumar Dey
            <i>Support Person</i>
          </div>
          <div className="cta-two_title">Contact with us Any time!</div>
          {/* Button Box */}
          <div className="cta-two_button-box">
            <Link className="btn-style-seven theme-btn" href="tel:+918918789119">
              <div className="btn-wrap">
                <span className="text-one">Call Now!</span>
                <span className="text-two">Call Now!</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End CTA Two */}
  {/* Steps Two */}
  <section
    className="steps-two"
    style={{ backgroundImage: "url(/images/background/6.jpg)" }}
  >
    <div
      className="steps-two_pattern"
      data-parallax='{"y" : 60}'
      style={{ backgroundImage: "url(/images/icons/service-23.png)" }}
    />
    <div
      className="steps-two_pattern-two"
      data-parallax='{"y" : 60}'
      style={{ backgroundImage: "url(/images/icons/service-22.png)" }}
    />
    <div
      className="steps-two_pattern-three"
      style={{ backgroundImage: "url(/images/background/pattern-41.png)" }}
    />
    <div className="auto-container">
      {/* Sec Title Three */}
      <div className="sec-title_three light centered">
        <div className="sec-title_three-title">Working Steps</div>
        <h2 className="sec-title_three-heading">
          Some <span>easy steps</span> to process!
        </h2>
      </div>
      <div className="inner-container">
        <div className="row clearfix">
          {/* Step Block Two */}
          <div className="step-block_two col-lg-3 col-md-6 col-sm-12">
            <div className="step-block_two-inner">
              <div className="step-block_two-number">
                <span className="icon fa-solid fa-check-double fa-fw" />
                01
              </div>
              <h4 className="step-block_two-heading">Select Service</h4>
              <div className="step-two_block-text">
              Customized solutions for your unique business needs, chosen seamlessly.
              </div>
            </div>
          </div>
          {/* Step Block Two */}
          <div className="step-block_two col-lg-3 col-md-6 col-sm-12">
            <div className="step-block_two-inner">
              <div className="step-block_two-number">
                <span className="icon fa-solid fa-pencil fa-fw" />
                02
              </div>
              <h4 className="step-block_two-heading">Send Message</h4>
              <div className="step-two_block-text">
              Easily communicate with us; we're here to assist you.
              </div>
            </div>
          </div>
          {/* Step Block Two */}
          <div className="step-block_two col-lg-3 col-md-6 col-sm-12">
            <div className="step-block_two-inner">
              <div className="step-block_two-number">
                <span className="icon fa-solid fa-cube fa-fw" />
                03
              </div>
              <h4 className="step-block_two-heading">Consult with us</h4>
              <div className="step-two_block-text">
              Book a tailored consultation for expert guidance and personalized insights.
              </div>
            </div>
          </div>
          {/* Step Block Two */}
          <div className="step-block_two col-lg-3 col-md-6 col-sm-12">
            <div className="step-block_two-inner">
              <div className="step-block_two-number">
                <span className="icon fa-solid fa-link fa-fw" />
                04
              </div>
              <h4 className="step-block_two-heading">Get in touch!</h4>
              <div className="step-two_block-text">
              Contact us directly to initiate a successful partnership today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Steps Two */}
  {/* Services Four */}
  <section className="company-three">
    <div
      className="company-three_icon-one"
      data-parallax='{"y" : -80}'
      style={{ backgroundImage: "url(/images/background/pattern-39.png)" }}
    />
    <div
      className="company-three_icon-two"
      data-parallax='{"y" : 80}'
      style={{ backgroundImage: "url(/images/background/pattern-40.png)" }}
    />
    <div className="auto-container">
      <div className="row clearfix">
        {/* Image Column */}
        <div className="company-three_image-column col-lg-6 col-md-12 col-sm-12">
          <div
            className="company-three_image-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="company-three_image">
              <Image  width={522} height={580} src="/images/resource/company-1.png" alt="" />
            </div>
          </div>
        </div>
        {/* Content Column */}
        <div className="company-three_content-column col-lg-6 col-md-12 col-sm-12">
          <div className="company-three_inner">
            <div className="company-three_title">
              We are <span>Sweet Developers</span> for you.
            </div>
            <h2 className="company-three_heading">
              Why <span>Choose</span> Us
            </h2>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="company-three_text">
                <p><strong>Expertise and Experience: </strong>Look for a company with a proven track record and extensive experience in providing IT services. Check their portfolio, client testimonials, and case studies to assess their expertise in handling projects similar to yours.</p>
                <p><strong>Comprehensive Services:  </strong>Ensure the company offers a wide range of IT services that align with your needs. Whether it's software development, infrastructure management, cybersecurity, cloud services, or IT consulting, the company should be able to provide all the services you require.</p>
                <p><strong>Customized Solutions: </strong>Each enterprise possesses its distinct identity, reflected in its individual IT requisites. A good IT service provider should be willing to understand your specific needs and offer tailored solutions rather than one-size-fits-all approaches.</p>
                
              </div>
            
            </div>
            {/* About One Detail */}
          
          </div>
        </div>
      
      </div>
    </div>
  </section>
  {/* End Services Four */}
  {/* Case Two */}
  <section className="case-two">
    <div
      className="case-two_pattern"
      data-parallax='{"y" : 60}'
      style={{ backgroundImage: "url(/images/icons/service-22.png)" }}
    />
    <div
      className="case-two_pattern-two"
      data-parallax='{"y" : 60}'
      style={{ backgroundImage: "url(/images/icons/service-23.png)" }}
    />
    <div className="auto-container">
      {/* Sec Title Three */}
      <div className="sec-title_three light">
        <div className="sec-title_three-title">Case Studies</div>
        <h2 className="sec-title_three-heading">
          Some of our <span>works</span>
        </h2>
      </div>
      <div className="inner-container">
        <div className="case-carousel-two owl-carousel owl-theme">
          {/* Case Block Two */}
          <div className="case-block-two">
            <div className="case-block_two-inner">
              <div className="case-block_two-image">
                <Image  width={550} height={415} src="/images/gallery/project-9.jpg" alt="" />
                <div className="case-block_two-content">
                  <div className="case-block_two-title">Web Development</div>
                  <h4 className="case-block_two-title">
                    <Link href="https://digitalmarketingwiz.in/">Digital Marketing Wiz</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Case Block Two */}
          <div className="case-block-two">
            <div className="case-block_two-inner">
              <div className="case-block_two-image">
                <Image   width={550} height={415}src="/images/gallery/project-10.jpg" alt="" />
                <div className="case-block_two-content">
                  <div className="case-block_two-title">Web Development</div>
                  <h4 className="case-block_two-title">
                    <Link href="https://delipat.com/">Delipat</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Case Block Two */}
          <div className="case-block-two">
            <div className="case-block_two-inner">
              <div className="case-block_two-image">
                <Image   width={550} height={415} src="/images/gallery/project-11.jpg" alt="" />
                <div className="case-block_two-content">
                  <div className="case-block_two-title">Web Development</div>
                  <h4 className="case-block_two-title">
                    <Link href="http://calyxjournal.in">Calyxjournal</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Case Two */}
  {/* Contact One */}
 
  {/* End Contact One */}
  {/* Testimonial Two */}
  <section className="testimonial-two">
    <div
      className="testimonial-two_pattern"
      data-parallax='{"y" : 60}'
      style={{ backgroundImage: "url(/images/background/pattern-44.png)" }}
    />
    <div className="auto-container">
      <div className="row clearfix">
        {/* Image Column */}
        <div className="testimonial-two_image-column col-lg-6 col-md-12 col-sm-12">
          <div
            className="testimonial-two_image-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="testimonial-two_image">
              <Image width={599} height={502} src="/images/resource/testimonial-1.png" alt="" />
            </div>
          </div>
        </div>
        {/* Carousel Column */}
        <div className="testimonial-two_carousel-column col-lg-6 col-md-12 col-sm-12">
          <div className="testimonial-two_carousel-inner">
            {/* Sec Title Three */}
            <div className="sec-title_three">
              {/* <div className="sec-title_three-title">Testimonials</div> */}
              <h2 className="sec-title_three-heading">
                We have many good <br /> <span>client’s</span> review
              </h2>
            </div>
            <div className="single-item-carousel owl-carousel owl-theme">
              {/* Testimonial Block Two */}
              <div className="testimonial-block_two">
                <div className="testimonial-block_two-inner">
                  <span className="testimonial-block_two-quote">
                    <Image  width={60} height={60} src="/images/icons/quote.png" alt="" />
                  </span>
                  <div className="testimonial-block_two-author">
                    <Image  width={80} height={80} src="/images/testi/oye.png" alt="" />
                  </div>
                  <div className="testimonial-block_two-text">
                  I approached Sweet Developers to revamp my e-commerce website, and I couldn't be happier with the outcome. Their team's professionalism and expertise were evident from our first interaction. 
                  </div>
                  <div className="testimonial-block_two-author-name">
                  Oyemonkey
                  </div>
                  <div className="testimonial-block_two-designation">
                  Selling T-shit Company
                  </div>
                </div>
              </div>
              {/* Testimonial Block Two */}
              <div className="testimonial-block_two">
                <div className="testimonial-block_two-inner">
                  <span className="testimonial-block_two-quote">
                    <Image  width={60} height={60} src="/images/icons/quote.png" alt="" />
                  </span>
                  <div className="testimonial-block_two-author">
                    <Image  width={80} height={80} src="/images/testi/dmw.png" alt="" />
                  </div>
                  <div className="testimonial-block_two-text">
                  Working with Sweet Developers has been an absolute pleasure. They didn't just create a website for my startup; they crafted a digital experience. 
                  </div>
                  <div className="testimonial-block_two-author-name">
                  Digital Marketing Wiz
                  </div>
                  <div className="testimonial-block_two-designation">
                  Digital Marketing Agencies
                  </div>
                </div>
              </div>
              {/* Testimonial Block Two */}
              <div className="testimonial-block_two">
                <div className="testimonial-block_two-inner">
                  <span className="testimonial-block_two-quote">
                    <Image  width={60} height={60} src="/images/icons/quote.png" alt="" />
                  </span>
                  <div className="testimonial-block_two-author">
                    <Image  width={80} height={80} src="/images/testi/deli.png" alt="" />
                  </div>
                  <div className="testimonial-block_two-text">
                  What sets them apart is their ability to blend creativity with functionality, resulting in a website that not only looks stunning but also performs exceptionally. 
                  </div>
                  <div className="testimonial-block_two-author-name">
                  Delipat
                  </div>
                  <div className="testimonial-block_two-designation">
                  Salesforce Development Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Testimonial Two */}
  {/* Clients Three */}
  {/* <section className="clients-three">
    <div className="auto-container">
      <div className="clients-three_inner-container">
        <ul className="sponsors-carousel-two owl-carousel owl-theme">
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/15.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/16.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/17.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/18.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/15.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/16.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/17.png" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/18.png" alt="" />
              </a>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </section> */}
  {/* End Clients Three */}
 
  {isModalOpen && <>
        <div className="overlayss" ></div>
      <div className="thank-you-popup active">
        
        
            {/* Default Form */}
            <div className="default-form">
            <div className='xxxc'> 
        <button  className="sdd"onClick={handleModalClose}>X</button>

        </div>
              <form onSubmit={handleSubmit}
              
              >
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                     type="text"
                     name="name"
                     placeholder="Your name*"
                     value={formData.name}
                     onChange={handleChange}
                     required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                         type="text"
                         name="email"
                         placeholder="Email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="web development">Web Development</option>
            <option value="seo and marketing">SEO and Marketing</option>
            <option value="graphics design">Graphics Design</option>
            <option value="app development">App Development</option>
          </select>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
            className=""
            name="subject"
            placeholder="Your text here..."
            value={formData.subject}
            onChange={handleChange}
          />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    {/* Button Box */}
                    <div className="button-box">
                      <button type="submit"  className="theme-btn btn-style-seven">
                        <span className="btn-wrap">
                          <span className="text-one">Send Message Now</span>
                          <span className="text-two">Send Message Now</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
        
            {/* End Default Form */}
          </div>
          </div>
         
        
        <style jsx>{`
        .xxxc {
            text-align: right;
           
        }
        .sdd {
            background: red;
            font-size: 17px;
            padding: 5px 15px;
            color: white;
        }
    /* Background overlay for the popup */
    .overlayss {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
      z-index: 9999;
      }
      
      /* Styles for the "Thank You" popup */
      .thank-you-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      
    
      border-radius: 4px;
      z-index: 10000;
      max-width: 90%; /* Set a maximum width for the popup */
      display: flex;
      flex-direction: column;
      align-items: center;
      }
      
      /* Styles for the "Thank You" popup when it's visible */
      .thank-you-popup.active {
      opacity: 1;
      visibility: visible;
      background: white;

      }
      
      /* Mobile responsiveness */
      @media (max-width: 600px) {
      .thank-you-popup {
        padding: 10px;
        font-size: 14px;
        width: 100%;
      }
      }
      
    
    
    
    
      }`}</style>
    </>}

    {showThankYouPopup && (
      
      <div>
      <div className="overlayss" ></div>
      <div className="thank-you-popup active">
      <div className="contentt">
  <div className="wrapper-1">
  <div className="wrapper-2">
  <h1 className='h11'>Thank you !</h1>
  <p>Thanks for Intrasted Our Service </p>
  <p>you should receive a confirmation email/call soon </p>
  
  </div>
  <div className="footer-likee">
  <p>
    Contact us 
    <a href="+918918789119">(+91) 8918789119</a>
  </p>
  </div>
  </div>
  </div>
      </div>
    <style jsx>{`
    /* Background overlay for the popup */
    .overlayss {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
      z-index: 9999;
      }
      
      /* Styles for the "Thank You" popup */
      .thank-you-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      padding: 20px;
      
    
      border-radius: 4px;
      z-index: 10000;
      max-width: 90%; /* Set a maximum width for the popup */
      display: flex;
      flex-direction: column;
      align-items: center;
      }
      
      /* Styles for the "Thank You" popup when it's visible */
      .thank-you-popup.active {
      opacity: 1;
      visibility: visible;
      }
      
      /* Mobile responsiveness */
      @media (max-width: 600px) {
      .thank-you-popup {
        padding: 10px;
        font-size: 14px;
        width: 100%;
      }
      }
      
    
    
    
    .wrapper-1 {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .wrapper-2 {
      padding: 30px;
      text-align: center;
    }
    .h11 {
      font-family: "Kaushan Script", cursive;
      font-size: 4em;
      letter-spacing: 3px;
      color: #5892ff;
      margin: 0;
      margin-bottom: 20px;
    }
    .wrapper-2 p {
      margin: 0;
      font-size: 1.3em;
      color: #aaa;
      font-family: "Source Sans Pro", sans-serif;
      letter-spacing: 1px;
    }
    .go-home {
      color: #fff;
      background: #5892ff;
      border: none;
      padding: 10px 50px;
      margin: 30px 0;
      border-radius: 30px;
      text-transform: capitalize;
      box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
    }
    .footer-likee {
      margin-top: auto;
      background: #d7e6fe;
      padding: 6px;
      text-align: center;
    }
    .footer-likee p {
      margin: 0;
      padding: 4px;
      color: #5892ff;
      font-family: "Source Sans Pro", sans-serif;
      letter-spacing: 1px;
    }
    .footer-likee p a {
      text-decoration: none;
      color: #5892ff;
      font-weight: 600;
    }
    
    @media (min-width: 360px) {
      .h11 {
        font-size: 4.5em;
      }
      .go-home {
        margin-bottom: 20px;
      }
    }
    
    @media (min-width: 600px) {
      .contentt {
        max-width: 1000px;
        margin: 0 auto;
      background: white;
      }
      .wrapper-1 {
        height: initial;
        max-width: 620px;
        margin: 0 auto;
        margin-top: 50px;
        box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
      }
    }
    @media (max-width: 767px) {
      .wrapper-1 {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        background: white;
      }
      }`}</style>
  
    </div>
        )}

</>
  )
}

 export  function  generateMetadata ({params}){
return { title:'hjj',
  description:"kjkk"}
 }