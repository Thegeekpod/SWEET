import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
const Contact = () => {
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
  
  <div>
      <Head>
        <title>Contact Website Developer | Hire A Website Developer</title>
        <meta
          name="description"
          content="Get in touch with Sweet Developers for top-notch IT solutions. Contact us for inquiries related to web development, graphic design, SEO, software and app development, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Contact Us, IT solutions, web development, graphic design, SEO, software development, app development, UI/UX design"
        />
        <meta name="author" content="Sweet Developers" />
        
        <link rel="canonical" href="https://sweetdevelopers.com/contact-us" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        {/* Other SEO-related meta tags */}
        <meta property="og:title" content="Contact Website Developer | Hire A Website Developer " />
        <meta property="og:description" content="Get in touch with Sweet Developers for top-notch IT solutions. Contact us for inquiries related to web development, graphic design, SEO, software and app development, and UI/UX design." />
        <meta property="og:url" content="https://sweetdevelopers.com/contact-us" />
        <meta property="og:type" content="website" />
      </Head>

    <section
      className="contact-one"
      style={{ backgroundImage: "url(/images/background/map-1.png)" }}
    >
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="sec-title_title">Contact us</div>
              <h2 className="sec-title_heading">
                Grow Your Business With <br /> <span>Our Expertise</span>
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
        <div className="row clearfix">
          {/* Info Column */}
          <div className="info-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Contact Block */}
              <div className="contact-block">
                <div className="block-inner">
                  <span className="icon">
                    <img src="/images/icons/contact-1.png" alt="" />
                  </span>
                  <strong>Office address</strong>
                  Palashdiha, Industrial Area, Durgapur, West Bengal 713208
                </div>
              </div>
              {/* Contact Block */}
              <div className="contact-block">
                <div className="block-inner">
                  <span className="icon">
                    <img src="/images/icons/contact-2.png" alt="" />
                  </span>
                  <strong>Telephone number</strong>
                 Sales: <Link href="tel:+917029738023" style={{color:'#666666'}} ><span className="icon fa fa-phone" /> (+91) 70297 38023</Link><br/>

                  Support: <Link href="tel:+918918789119" style={{color:'#666666'}}> <span className="icon fa fa-phone" /> (+91) 89187 89119</Link><br/>
                  Support: <Link href="tel:+9193829 50050" style={{color:'#666666'}} ><span className="icon fa fa-phone" /> (+91) 93829 50050</Link><br/>
                </div>
              </div>
              {/* Contact Block */}
              <div className="contact-block">
                <div className="block-inner">
                  <span className="icon">
                    <img src="/images/icons/contact-3.png" alt="" />
                  </span>
                  <strong>Mail address</strong>
                  <Link href="mailto:sales@sweetdevelopers.com" style={{color:'#666666'}}>  <span className="icon fa fa-envelope" /> sales@sweetdevelopers.com</Link><br/>
                  <Link href="mailto:support@sweetdevelopers.com" style={{color:'#666666'}}>  <span className="icon fa fa-envelope" /> support@sweetdevelopers.com</Link>
                  <Link href="mailto:career@sweetdevelopers.com" style={{color:'#666666'}}>  <span className="icon fa fa-envelope" /> career@sweetdevelopers.com</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Form Column */}
          <div className="form-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Contact Form */}
              <div className="contact-form">
              <form onSubmit={handleSubmit}>
      {/* The rest of your form elements */}
      <div className="row clearfix">
        {/* Your form inputs go here */}
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <label>Name (required)</label>
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
          <label>Email address (required)</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Phone (optional)</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Service (required)</label>
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
          <label>Subject</label>
          <textarea
            className=""
            name="subject"
            placeholder="Your text here..."
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button type="submit" className="btn-style-seven theme-btn">
            <span className="btn-wrap">
              <span className="text-one">Send message</span>
              <span className="text-two">Send message</span>
            </span>
          </button>
        </div>
      </div>
    </form>
 
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
    <a href="tel:+918918789119">(+91)8918789119</a>
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
              </div>
              {/* End Comment Form */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact One */}
    {/* Map One */}
    <section className="map-one">
      <div className="map-outer">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.981695504912!2d87.291475!3d23.532667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7730036a0bff9%3A0x9d3ec6abae9ab32a!2sSweet%20Developers!5e0!3m2!1sen!2sin!4v1707598217932!5m2!1sen!2sin"
  width={800}
  height={600}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </section>
  
   
  </div>
  )
}

export default Contact