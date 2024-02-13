// pages/_app.js
import React, { useState } from 'react';
import Layout from '../Componnt/Layout';
import Head from 'next/head'
import Script from 'next/Script'
import Link from 'next/link';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  const [showNumber, setShowNumber] = useState(false);

  const handleMouseEnter = () => {
    setShowNumber(true);
  };

  const handleMouseLeave = () => {
    setShowNumber(false);
  };
  return (
    <>
   <Head>
   <meta httpEquiv="Content-Type" content="text/html; charset=utf-16" />


        <title>Website Developer Company in India | Sweet Developer </title>
        <meta
          name="description"
          content="Sweet Developers offers top-tier IT solutions including web development, graphic design, SEO, software development, app development, and UI/UX design."
        />
        <meta
          name="keywords"
          content="web development, graphic design, SEO, software development, app development, UI/UX design, IT solutions, technology,sweet developers"
        />
        <meta name="author" content="Sweet Developers" />
      
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="canonical" href="https://sweetdevelopers.com/" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        
        <meta property="og:title" content="Website Developer Company in India | Sweet Developer" />
        <meta property="og:description" content="Sweet Developers offers top-tier IT solutions including web development, graphic design, SEO, software development, app development, and UI/UX design." />
        <meta property="og:url" content="https://sweetdevelopers.com/" />
        <meta property="og:type" content="website" />
    

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
<link href="/css/style.css" rel="stylesheet"/>
<link href="/css/responsive.css" rel="stylesheet"/>

{/* 
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/> */}

<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
<link rel="icon" href="/images/favicon.png" type="image/x-icon"/>

<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

</Head>

    <Layout>

      <Component {...pageProps} />
      <div className="call-button" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
    <Link href='tel:+918918789119'><i className="fa fa-phone" >{showNumber && <span className="number"> (+91) 8918789119</span>}</i></Link>
  </div>
  <div class="whatsapp-button" onmouseover="showNumber()" onmouseout="hideNumber()">
  <Link href='https://wa.me/+918918789119' target='_blank'><i class="fab fa-whatsapp"></i>
  <span className="number"> (+91) 8918789119</span> </Link>
</div>
<div className="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-double-up"></span></div>

    </Layout>

  
<Script src="/js/jquery.js" strategy="beforeInteractive"></Script>
<Script src="/js/owl.js" strategy="beforeInteractive"></Script>
<Script src="/js/mixitup.js" strategy="beforeInteractive"></Script>
{/* <Script src="/js/popper.min.js" strategy="beforeInteractive"></Script> */}
<Script src="/js/parallax-scroll.js" strategy="beforeInteractive"></Script>
{/* <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script> */}
<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" strategy="beforeInteractive" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></Script>
<Script src="/js/script.js"      
strategy="afterInteractive"></Script>
    </>
  );
}

export default MyApp;
