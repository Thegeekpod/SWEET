import Head from 'next/head'
import React from 'react'

const terms = () => {
  return (
    <>
         <Head>
        <title>Terms and Conditions - Sweet Developers</title>
        <meta
          name="description"
          content="Read our Terms and Conditions to understand the guidelines, terms of use, and legal agreement when using services provided by Sweet Developers."
        />
        <meta
          name="keywords"
          content="terms and conditions, terms of service, legal agreement, Sweet Developers"
        />
        <meta name="author" content="Sweet Developers" />
        <link rel="canonical" href="https://sweetdevelopers.com/terms-and-conditions" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Terms and Conditions - Sweet Developers" />
        <meta
          property="og:description"
          content="Read our Terms and Conditions to understand the guidelines, terms of use, and legal agreement when using services provided by Sweet Developers."
        />
        <meta property="og:url" content="https://sweetdevelopers.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        {/* Add more OG tags as needed */}
      </Head>
    <div className="auto-container">
  <div className="row">
    <div className="col-md-12 text-justify">
      <h1 className="text-center heading heading-1">Terms and Conditions</h1>
      <hr />

<p>Welcome to sweetdevelopers.com!</p>
<p>The terms and conditions of Sweet Developers have been developed to meet international standards. The company holds all rights to these terms and conditions and has the ultimate privilege to change and update these rights in the future without any prior declaration. The content used on the website is true to its nature and provides the utmost knowledge to the user. The details are drafted for the user to acknowledge and understand the policies and regulations of our community. The terms and conditions mentioned on the website are subject to change regarding future norms and criteria, without prior statement.</p>

<p>The usage of information provided on this website by the visitor is permitted; however, it is the sole responsibility of the user. The information provided is valid, but it is the user’s responsibility to ensure that the services meet their requirements. It is our due responsibility to let the user know that the elements used on the website such as banners, logos, design layout, etc. are subject to copyright. Replication of our website is prohibited and can only be done with proper permission. Any individual found copying the same without our authorization will be imperiled to the criminal offence.</p>


    </div>
  </div>
</div>

    </>
  )
}

export default terms