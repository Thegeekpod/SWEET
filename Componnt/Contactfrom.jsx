import axios from 'axios';
import React, { useState } from 'react'

const Contactfrom = (props) => {
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
    
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
      setModalOpen(true);
    };
  
    const handleModalClose = () => {
      setModalOpen(false);
    };
    
  return (
    <div>
     <button className="btn-style-seven theme-btn" onClick={handleModalOpen} >
            <div className="btn-wrap">
              <span className="text-one">{props.name || 'Contact Us'} </span>
              <span className="text-two">{props.name || 'Contact Us'}</span>
            </div>
          </button>
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
    <a href="#">(+91)XXX XXX XXXX</a>
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
  )
}

export default Contactfrom