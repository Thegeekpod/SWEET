import Script from 'next/Script';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react'

const project = () => {
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
      useEffect(() => {

  
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
   
    
      }, []); 
      
     
  return (
    <div>
   <Head>
        <title>Quality Website Design at Low Price | Sweet Developer </title>
        <meta
          name="description"
          content="Discover the details of our latest project at Sweet Developers - showcasing our expertise in web development, graphic design, SEO, software and app development, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Project, web development, graphic design, SEO, software development, app development, UI/UX design"
        />
        <meta name="author" content="Sweet Developers" />
        
        
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="canonical" href="https://sweetdevelopers.com/project" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Quality Website Design at Low Price | Sweet Developer" />
        <meta property="og:description" content="Discover the details of our latest project at Sweet Developers - showcasing our expertise in web development, graphic design, SEO, software and app development, and UI/UX design." />
        <meta property="og:url" content="https://sweetdevelopers.com/project" />
        <meta property="og:type" content="website" />
        {/* Other SEO-related meta tags */}
      </Head>
    {/* End Page Title */}
    {/* Projects One */}
    <section className="projects-one">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="sec-title_title">Work Index!</div>
              <h2 className="sec-title_heading">
                Few of Our Apps Adored <br /> by <span> millions of users!</span>
              </h2>
            </div>
            <div className="right-box">
              <div className="sec-title_text">
                The perfect blend of mature processes, flexible delivery <br />{" "}
                models, effective project management.
              </div>
            </div>
          </div>
        </div>
        {/* MixitUp Galery */}
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
                Seo & Digital Marketing
              </li>
             
            </ul>
          </div>
          <div className="filter-list row clearfix">
            
           
          <div className="project_one mix  web design  col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/induscribe.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://induscribe.com/">Induscribe</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Crafted a digital narrative for a company's journey using WordPress magic—where pixels dance, ideas thrive, and brand stories unfold uniquely.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://induscribe.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_one mix  web design col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/delipat.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://delipat.com/">Delipat</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Elevated a company's digital presence with a dynamic Next.js portfolio project—showcasing innovation, design finesse, and user-centric experiences.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://delipat.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project all */}
            <div className="project_one mix  web   col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/digitalmarketingwiz.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://digitalmarketingwiz.in">Digitalmarketingwiz</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Empower your brand's online presence with DigitalMarketingWiz.in. Our WordPress-powered website, crafted by SweetDevelopers, mirrors the dynamic strategies and creativity we bring to digital marketing.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://digitalmarketingwiz.in" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project cloud */}
            <div className="project_one mix  web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/oyemonkey.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://oyemonkey.com/">Oyemonkey</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Embark on a shopping adventure at OyeMonkey.com, where SweetDevelopers has woven a digital marketplace—your gateway to unique finds and delightful treasures.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://oyemonkey.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project web */}
            <div className="project_one mix design web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/dynopat.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://dynopat.com/">Dynopat</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Embark on a knowledge expedition at DynoPat, a Next.js-powered learning sanctuary. Experience dynamic lessons where curiosity meets innovation.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://dynopat.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project ui/ux */}
            <div className="project_one mix design web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/calyxjournal.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://calyxjournal.in/">Calyxjournal</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Unveiling Calyx Journal—a journalistic oasis I crafted. Where narratives bloom, insights flourish, and the heartbeat of stories resonates on every pixel.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://calyxjournal.in/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_one mix design web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/rabdinteriorstories.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://rabdinteriorstories.com/">Rabdinteriorstories</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Step into a world of elegance and innovation with our Interior Design showcase. SweetDevelopers transforms spaces, creating personalized sanctuaries that speak style and comfort
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://rabdinteriorstories.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix   web  col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/dolbin.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://ronc25.sg-host.com/" target='blan'>Dolbin</a>
                    </h5>
                    <div className="project-one_designation">Admin Dashboard</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Discover Dolbin a health care website by SweetDevelopers. Explore simple ways to stay healthy and find the care you need easily.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://ronc25.sg-host.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix  web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/analyticens.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://analyticens.in/" target='blank'>Analyticens</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Dive into the world of digital marketing with AnalyticEns. Our website, crafted by SweetDevelopers, reflects expertise, creativity, and growth strategies.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://analyticens.in/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix  design web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/buydogonline.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://buydogonline.in/">Buydogonline</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Unleash happiness at Kolkata's canine haven—your go-to for furry companions. Our online dog sale site, a creation by SweetDevelopers, connects hearts and homes.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://buydogonline.in/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_one mix  web  col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/artizelifestyle.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://artizelifestyle.com/">Artizelifestyle</a>
                    </h5>
                    <div className="project-one_designation">Web Development</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Unleash creativity at Artize Lifestyle, where SweetDevelopers has seamlessly designed a hub for crafting unique and impactful business identities.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://artizelifestyle.com/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_one mix  seo  web  col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/projects/dogforsalekolkata.webp" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="https://www.dogforsalekolkata.in/">Dogforsalekolkata</a>
                    </h5>
                    <div className="project-one_designation">Development & SEO</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                      Tail-wagging happiness awaits at our canine haven. Explore our online platform for dogs, where SweetDevelopers creates connections between loving homes and furry companions in Kolkata.
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="https://www.dogforsalekolkata.in/" target='blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button Box */}
          {/* <div className="projects-one_button-box text-center">
            <a className="btn-style-one theme-btn btn-item" href="#">
              <div className="btn-wrap">
                <span className="text-one">Load more</span>
                <span className="text-two">Load more</span>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
    <section className="clients-three">
    <div className="auto-container">
      <div className="clients-three_inner-container">
        <ul className="sponsors-carousel-two owl-carousel owl-theme">
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/client/delipat.webp" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/client/dmw.webp" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/client/oye.webp" alt="" />
              </a>
            </figure>
          </li>
          {/* <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/clients/18.png" alt="" />
              </a>
            </figure>
          </li> */}
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <Image  width={60} height={60} src="/images/client/ana.webp" alt="" />
              </a>
            </figure>
          </li>
          <li className="slide-item">
            <figure className="client-one_image-box-two">
              <a href="#">
                <img  width={60} height={60} src="/images/client/xplo.webp" alt="" />
              </a>
            </figure>
          </li>
          
        </ul> 
      </div>
    </div>
  </section>



  
  </div>

  )
}

export default project