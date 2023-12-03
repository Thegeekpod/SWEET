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
              <li className="filter" data-role="button" data-filter=".web">
                Web Technology
              </li>
              <li className="filter" data-role="button" data-filter=".cloud">
                Cloud Database
              </li>
              <li className="filter" data-role="button" data-filter=".design">
                UI/UX Design
              </li>
            </ul>
          </div>
          <div className="filter-list row clearfix">
            {/* Project One */}
            <div className="project_one mix all design col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-1.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Award-Winning Photo</a>
                    </h5>
                    <div className="project-one_designation">Photo Editing</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all cloud col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-2.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Property Simplified</a>
                    </h5>
                    <div className="project-one_designation">Photo Editing</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all design col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-3.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Deliveries Made Easy</a>
                    </h5>
                    <div className="project-one_designation">Food Delivery</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all cloud web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-4.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Collection Management</a>
                    </h5>
                    <div className="project-one_designation">Web Application</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all design col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-5.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Improvement Company</a>
                    </h5>
                    <div className="project-one_designation">Web Application</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all cloud web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-6.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">iOS Application</a>
                    </h5>
                    <div className="project-one_designation">Admin Dashboard</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all design col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-7.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">HandyMan app</a>
                    </h5>
                    <div className="project-one_designation">Web App</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project One */}
            <div className="project_one mix all cloud web col-lg-3 col-md-6 col-sm-12">
              <div className="project_one-inner">
                <div className="project_one-image">
                  <img src="/images/gallery/project-8.jpg" alt="" />
                  <div className="project_one-content">
                    <h5 className="project-one_title">
                      <a href="project-detail.html">Property Simplified</a>
                    </h5>
                    <div className="project-one_designation">Photo Editing</div>
                  </div>
                  <div className="project_one-overlay">
                    <div className="project-one_overlay-content">
                      <div className="project_one-text">
                        lead the team of passionate developers, designers and the
                        strategists with a lot of thought and analysis come true!
                      </div>
                      <a
                        className="project_one-plus fa-solid fa-plus fa-fw"
                        href="project-detail.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button Box */}
          <div className="projects-one_button-box text-center">
            <a className="btn-style-one theme-btn btn-item" href="#">
              <div className="btn-wrap">
                <span className="text-one">Load more</span>
                <span className="text-two">Load more</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Projects One */}
    {/* Clients Three */}
    {/* <section className="clients-three">
      <div className="auto-container">
        <div className="clients-three_inner-container">
          <ul className="sponsors-carousel-two owl-carousel owl-theme">
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/15.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/16.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/17.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/18.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/15.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/16.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/17.png" alt="" />
                </a>
              </figure>
            </li>
            <li className="slide-item">
              <figure className="client-one_image-box-two">
                <a href="#">
                  <img src="/images/clients/18.png" alt="" />
                </a>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section> */}
  
  </div>

  )
}

export default project