
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const About = () => {
    const [activeTab, setActiveTab] = useState('prod-mission');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const counterNumber = 12;
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
       
  
	
    
      }, []); 

    return (
        <div>

          
            {/* End Page Title */}
            {/* About One */}
            <section className="about-one">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Content Column */}
                        <div className="about-one_content col-lg-6 col-md-12 col-sm-12">
                            <div className="about-one_content-inner">
                                <div className="sec-title">
                                    <div className="sec-title_title">About us</div>
                                    <h2 className="sec-title_heading">
                                        Choose <span>The Best</span> IT <br /> Service Company
                                    </h2>
                                    <div className="sec-title_text">
                                    Our unwavering dedication to precision, efficiency, and client satisfaction distinguishes us as the pinnacle of reliability and expertise in the IT service domain.
                                    </div>
                                </div>
                                {/* About Info Tabs */}
                                <div className="about-info-tabs">
                                    {/* About Tabs */}
                                    <div className="about-tabs tabs-box">
                                        {/* Tab Btns */}
                                        <ul className="tab-btns tab-buttons clearfix">
                                            <li
                                                onClick={() => handleTabClick('prod-mission')}
                                                className={`tab-btn ${activeTab === 'prod-mission' ? 'active-btn' : ''}`}
                                            >
                                                Our Mission
                                            </li>
                                            <li
                                                onClick={() => handleTabClick('prod-vision')}
                                                className={`tab-btn ${activeTab === 'prod-vision' ? 'active-btn' : ''}`}
                                            >
                                                Our Vision
                                            </li>
                                            <li
                                                onClick={() => handleTabClick('prod-value')}
                                                className={`tab-btn ${activeTab === 'prod-value' ? 'active-btn' : ''}`}
                                            >
                                                Our Value
                                            </li>
                                        </ul>
                                        {/* Tabs Container */}
                                        <div className="tabs-content">
                                            {/* Tab / Active Tab */}
                                            {activeTab === 'prod-mission' && (
                                                <div className={`tab ${activeTab === 'prod-mission' ? 'active-tab' : ''}`} id="prod-mission">
                                                    <div className="content">
                                                        <div className="text">
                                                        At SweetDevelopers, our mission is to redefine excellence in the realm of IT services. We're committed to empowering businesses with innovative technological solutions that drive growth, enhance efficiency, and foster lasting success. By staying at the forefront of technological advancements, we aim to deliver unparalleled value, reliability, and expertise to our clients worldwide.
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* Tab */}
                                            {activeTab === 'prod-vision' && (
                                                <div className={`tab ${activeTab === 'prod-vision' ? 'active-tab' : ''}`} id="prod-vision">
                                                    <div className="content">
                                                        <div className="text">
                                                        We envision a future where technology seamlessly integrates with every aspect of business operations. Through our unwavering dedication to innovation and customer-centricity, we aspire to be the foremost catalyst in this transformation. We strive to become the trusted partner for businesses seeking cutting-edge IT solutions that not only meet but exceed their evolving needs and expectations.
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* Tab */}
                                            {activeTab === 'prod-value' && (
                                                <div className={`tab ${activeTab === 'prod-value' ? 'active-tab' : ''}`} id="prod-value">
                                                    <div className="content">
                                                        <div className="text">
                                                        <strong>Excellence:</strong> We pursue excellence in everything we do, striving to surpass industry standards and deliver exceptional solutions to our clients.<br/>

<strong>Innovation:</strong> We embrace innovation as the cornerstone of progress, continuously exploring new technologies and approaches to drive transformative change.<br/>

<strong>Integrity:</strong> Integrity forms the bedrock of our relationships, underpinning our commitment to transparency, honesty, and ethical conduct.<br/>

<strong>Collaboration:</strong> We believe in the power of collaboration, working closely with clients and within our team to achieve shared goals and mutual success.<br/>

<strong>Customer-Centricity:</strong> Placing our clients at the heart of all endeavors, we tailor our solutions to their unique requirements, ensuring their satisfaction and success.<br/>

Through our unwavering commitment to these values, we aim to set new benchmarks, foster enduring partnerships, and create a positive impact on the businesses we serve.
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* About One Detail */}
                                <Link
                                    className="about-one_detail"
                                    href="/contact-us"
                                >
                                    Get Started
                                    <span className="play-icon">
                                        <span className="fa-solid fa-play fa-fw" />
                                        <i className="ripple" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="about-one_image-column-two col-lg-6 col-md-12 col-sm-12">
      <div className="about-one-image-inner-two">
        <div className="about-cicle_layer-two">
          <img src="/images/background/pattern-45.png" alt="" />
        </div>
        <div className="about-one_image-two">
          <div className="about-one_counter-block">
            <div
              className="dots-layer"
              style={{
                backgroundImage: "url(/images/icons/about-dots.png)",
                // Add other necessary styles for the "dots-layer" here if required
              }}
            />
            <div className="about-one_counter-number">
              {/* Display the counter number */}
              <span>02+</span>
            </div>
            <div className="about-one_counter-text">
              {/* Display the counter text */}
              years of <br /> experiences
            </div>
          </div>
          {/* Display the first image */}
          <img src="/images/resource/about-4.jpg" alt="" />
          <div className="about-one_award">
            <div className="about-one_award-inner">
              <div className="about-one_award-icon">
                {/* Display the award icon */}
                <img src="/images/icons/award.png" alt="" />
              </div>
              <strong>Best Digital Solutions Company</strong>
              {/* Display the award description */}
              <p>We adapt our delivery to the way you work, whether as an external provider.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </div>
                </div>
            </section>
            {/* End About One */}
            {/* Process One */}
          
            {/* End Process One */}
            {/* Team One */}
            <section className="team-one">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="sec-title_title">Team Member</div>
                        <h2 className="sec-title_heading">
                            Passionate Personalities, <br />{" "}
                            <span className="theme_color">Versatile</span> Brains
                        </h2>
                    </div>
                    <div className="row clearfix">
                        {/* Team One */}
                      
                        {/* Team One */}
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="150ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/pradipta.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title">
                                            <a href="team-detail.html">Pradipta Bhuin</a>
                                        </h5>
                                        <div className="team-one_designation">
                                        Technical Chief
                                        </div>
                                    </div>
                                  
                                </div>
                                {/* Social Box */}
                               
                            </div>
                        </div>
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="450ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/tappal.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title">
                                            <a href="team-detail.html">Tapas Pal</a>
                                        </h5>
                                        <div className="team-one_designation">Expert in Search Engine Optimization</div>
                                    </div>
                                    
                                </div>
                                {/* Social Box */}
                               
                            </div>
                        </div>
                        {/* Team One */}
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="300ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/kartick.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title">
                                            <a href="team-detail.html">Kartick Karmaker</a>
                                        </h5>
                                        <div className="team-one_designation">Expert in UI/UX Designer </div>
                                    </div>
                                    
                                </div>
                                {/* Social Box */}
                               
                            </div>
                        </div>
                        {/* Team One */}
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="450ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/SantoRabidas.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title">
                                            <a href="team-detail.html">Santo Rabidas</a>
                                        </h5>
                                        <div className="team-one_designation">Software Developer</div>
                                    </div>
                                    
                                </div>
                                {/* Social Box */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team One */}

            {/* Testimonial Three */}
            <section className="testimonial-three">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Carousel Column */}
                        <div className="testimonial-three_carousel-column col-lg-6 col-md-12 col-sm-12">
                            <div className="testimonial-three_carousel-inner">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <div className="sec-title_title">Team Member</div>
                                    <h2 className="sec-title_heading">
                                        Passionate Personalities, <br />{" "}
                                        <span className="theme_color">Versatile</span> Brains
                                    </h2>
                                </div>
                                <div className="testimonial-three_review">Clients Reviews:</div>
                                <div className="single-item-carousel owl-carousel owl-theme">
                                    {/* Testimonial Block Three */}
                                    <div className="testimonial-block_three">
                                        <div className="testimonial-block_three-inner">
                                            <div className="testimonial-block_three-text">
                                                “I approached Sweet Developers to revamp my e-commerce website, and I couldn't be happier with the outcome. Their team's professionalism and expertise were evident from our first interaction. ”
                                            </div>
                                            <div className="author-box">
                                                <div className="box-inner">
                                                    <span className="author-image">
                                                        <img src="/images/testi/oye.png" alt="" />
                                                    </span>
                                                    <h5>Oyemonkey</h5>
                                                    <div className="designation">Selling T-shit Company</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Block Three */}
                                    <div className="testimonial-block_three">
                                        <div className="testimonial-block_three-inner">
                                            <div className="testimonial-block_three-text">
                                                “
Working with Sweet Developers has been an absolute pleasure. They didn't just create a website for my startup; they crafted a digital experience. 
”
                                            </div>
                                            <div className="author-box">
                                                <div className="box-inner">
                                                    <span className="author-image">
                                                        <img src="/images/testi/dmw.png" alt="" />
                                                    </span>
                                                    <h5>Digital Marketing Wiz</h5>
                                                    <div className="designation">Digital Marketing Agencies</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Block Three */}
                                    <div className="testimonial-block_three">
                                        <div className="testimonial-block_three-inner">
                                            <div className="testimonial-block_three-text">
                                                “What sets them apart is their ability to blend creativity with functionality, resulting in a website that not only looks stunning but also performs exceptionally. ”
                                            </div>
                                            <div className="author-box">
                                                <div className="box-inner">
                                                    <span className="author-image">
                                                        <img src="/images/testi/deli.png" alt="" />
                                                    </span>
                                                    <h5>Delipat</h5>
                                                    <div className="designation">Salesforce Development Company</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="testimonial-three_image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="testimonial-three_image-inner">
                                <div className="testimonial-three_image">
                                    <img src="/images/resource/testimonial-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonial Three */}
            {/* CTA One */}
            


        </div>
    )
}

export default About
