
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import Image from 'next/image';
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
    const teamslid = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint according to your mobile view
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    useEffect(() => {
        const initMixItUp = () => {
            if (typeof window !== 'undefined' && typeof window.jQuery !== 'undefined') {
                const $ = window.jQuery;
                const $filterList = $('.filter-list');

                if ($filterList.length) {
                    $filterList.mixItUp({});
                }
            }
        };

        initMixItUp();
    }, []);

    return (
        <div>

            <Head>
                <title>Top Website Developer in India | Sweet Developer</title>
                <meta
                    name="description"
                    content="Discover the story of Sweet Developers - a leading IT solutions provider specializing in web development, graphic design, SEO, software and app development, and UI/UX design."
                />
                <meta
                    name="keywords"
                    content="About Us, IT solutions, web development, graphic design, SEO, software development, app development, UI/UX design"
                />
                <meta name="author" content="Sweet Developers" />


                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <link rel="canonical" href="https://sweetdevelopers.com/about-us" />
                <meta name="referrer" content="no-referrer-when-downgrade" />
                <meta name="format-detection" content="telephone=no" />
                {/* Other SEO-related meta tags */}

                <meta property="og:title" content="Top Website Developer in India | Sweet Developer" />
                <meta property="og:description" content="Discover the story of Sweet Developers - a leading IT solutions provider specializing in web development, graphic design, SEO, software and app development, and UI/UX design." />
                <meta property="og:url" content="https://sweetdevelopers.com/about-us" />
                <meta property="og:type" content="website" />
            </Head>


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
                                                            <strong>Excellence:</strong> We pursue excellence in everything we do, striving to surpass industry standards and deliver exceptional solutions to our clients.<br />

                                                            <strong>Innovation:</strong> We embrace innovation as the cornerstone of progress, continuously exploring new technologies and approaches to drive transformative change.<br />

                                                            <strong>Integrity:</strong> Integrity forms the bedrock of our relationships, underpinning our commitment to transparency, honesty, and ethical conduct.<br />

                                                            <strong>Collaboration:</strong> We believe in the power of collaboration, working closely with clients and within our team to achieve shared goals and mutual success.<br />

                                                            <strong>Customer-Centricity:</strong> Placing our clients at the heart of all endeavors, we tailor our solutions to their unique requirements, ensuring their satisfaction and success.<br />

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
            {/* <section className="team-one">
                <div className="auto-container">
                   
                    <div className="sec-title centered">
                        <div className="sec-title_title">Team Member</div>
                        <h2 className="sec-title_heading">
                            Passionate Personalities, <br />{" "}
                            <span className="theme_color">Versatile</span> Brains
                        </h2>
                    </div>
                    <div className="row clearfix">
                      
                        <Slider {...teamslid}>
                      
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="150ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/supriyo.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title cnone" >
                                            <a  href="/">Supriyo Kumar Dey</a>
                                        </h5>
                                        <div className="team-one_designation">
                                        Development Team Lead
                                        </div>
                                    </div>
                                  
                                </div>
                            
                               
                            </div>
                        </div>
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="150ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/pradipta.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title cnone">
                                            <a href="/">Pradipta Bhuin</a>
                                        </h5>
                                        <div className="team-one_designation">
                                        Technical Chief
                                        </div>
                                    </div>
                                  
                                </div>
                            
                               
                            </div>
                        </div>
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="450ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/sudip-chakraborty.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title cnone">
                                            <a href="/">sudip chakraborty</a>
                                        </h5>
                                        <div className="team-one_designation">Chief of Digital Marketing</div>
                                    </div>
                                    
                                </div>
                               
                               
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
                                        <h5 className="team-one_title cnone">
                                            <a href="/">Tapas Pal</a>
                                        </h5>
                                        <div className="team-one_designation">Expert in Search Engine Optimization</div>
                                    </div>
                                    
                                </div>
                               
                               
                            </div>
                        </div>
                        
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="300ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/kartick.webp" alt="" />
                                    <div className="team_one-content cnone">
                                        <h5 className="team-one_title">
                                            <a href="/">Kartick Karmaker</a>
                                        </h5>
                                        <div className="team-one_designation">Expert in UI/UX Designer </div>
                                    </div>
                                    
                                </div>
                               
                               
                            </div>
                        </div>
                      
                        <div className="team_one col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="team_one-inner wow fadeInUp"
                                data-wow-delay="450ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="team_one-image">
                                    <img src="/images/developer/SantoRabidas.webp" alt="" />
                                    <div className="team_one-content">
                                        <h5 className="team-one_title cnone">
                                            <a href="/">Santo Rabidas</a>
                                        </h5>
                                        <div className="team-one_designation">Software Developer</div>
                                    </div>
                                    
                                </div>
                               
                               
                            </div>
                        </div>

                        </Slider>
                    </div>
                </div>
            </section> */}


            <section className="team-one">
                <div className="auto-container">

                    <div className="sec-title centered">
                        <div className="sec-title_title">We Serve Technology</div>
                        <h2 className="sec-title_heading">
                            OUR<br />{" "}
                            <span className="theme_color">TECHNOLOGY</span> COMPETENCE
                        </h2>
                    </div>

                    <div className="row clearfix">
                        <div className="mixitup-gallery">
                            {/* Filter */}
                            <div className="projects-one_filters">
                                <ul className="filter-tabs">
                                    <li className="active filter" data-role="button" data-filter="all">
                                        All
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".design">
                                        UI/UX Design
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".web">
                                        Web Development
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".seo">
                                        Digital Marketing
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".app">
                                        App Development
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".soft">
                                        Software Development
                                    </li>
                                    <li className="filter" data-role="button" data-filter=".grap">
                                        Graphics Design
                                    </li>

                                </ul>
                            </div>
                            <div className="filter-list row clearfix">




                                <div className="row clearfix">
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/html.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Html</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/css.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Css</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/js.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Js</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/wordpress.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Wordpress</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/shopify.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Shopify</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/php.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Php</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/nodejs.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Node Js</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/react.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">React</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/vue.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Vue</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/next.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Next js</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/laravel.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Laravel</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  web service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/codeigniter.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Codeigniter</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  design service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/xd.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Adobe Xd</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  design service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/Figma.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Figma</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  design service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/FramerX.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Framer X</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/seo.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Seo</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/smo.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Smo</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/ppc.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Ppc</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/gads.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">G-Ads</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/fads.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">FB-Ads</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/anali.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">G-Analytics</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/semrush.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Semrush</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/email-m.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">E-Marketing</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/cont.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">C-Writing</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/omr.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">ORM</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  seo service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/gbusiness.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">G-Business</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  app service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/react.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">React Native</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  app service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/flutter.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Flutter</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  app service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/Swift.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Swift</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  app service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/kotlin.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Kotlin</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                     <div className="project_one mix  soft service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/asp.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Asp.Net</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  soft service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/java.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Java</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  soft service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/phython.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Python</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  grap service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/Adobe.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">AI</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  grap service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/photoshop.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Ps</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  grap service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/CorelDRAW.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">CorelDRAW</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    <div className="project_one mix  grap service-block_five col-lg-2 col-md-6 col-sm-12 text-center">
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
                                                <Image width={60} height={60} src="/images/technology/Blender.webp" alt="" />
                                            </div>
                                            <h6 className="service-block_five_heading cnone">
                                                <a href="#">Blender</a>
                                            </h6>
                                           
                    
                                        </div>
                                    </div>
                                    
                                </div>
                              

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
