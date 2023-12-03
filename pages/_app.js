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
<meta charset="utf-8"/>
<title>Sweet Developers</title>
<meta name="robots" content="noindex"/>

<link href="/css/bootstrap.css" rel="stylesheet"/>
<link href="/css/style.css" rel="stylesheet"/>
<link href="/css/responsive.css" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>

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
<Script src="/js/appear.js" strategy="beforeInteractive"></Script>
<Script src="/js/owl.js" strategy="beforeInteractive"></Script>
<Script src="/js/wow.js" strategy="beforeInteractive"></Script>
<Script src="/js/odometer.js" strategy="beforeInteractive"></Script>
<Script src="/js/nav-tool.js" strategy="beforeInteractive"></Script>
<Script src="/js/mixitup.js" strategy="beforeInteractive"></Script>
<Script src="/js/popper.min.js" strategy="beforeInteractive"></Script>
<Script src="/js/parallax.min.js" strategy="beforeInteractive"></Script>
<Script src="/js/parallax-scroll.js" strategy="beforeInteractive"></Script>
<Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
<Script src="/js/tilt.jquery.min.js" strategy="beforeInteractive"></Script>
<Script src="/js/magnific-popup.min.js" strategy="beforeInteractive"></Script>

<Script src="/js/script.js"      
strategy="afterInteractive"
onLoad={() => { debugger; }}></Script>
    </>
  );
}

export default MyApp;
