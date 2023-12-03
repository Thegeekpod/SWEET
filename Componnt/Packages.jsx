import React from 'react'

const Packages = () => {
  return (
    <section className="choose-package">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2" id="price">
        <h5 className="special-heading text-center">Choose</h5>
        <h1 className="text-center">Package</h1>
        <p className="text-center big">
          Get ready for more potential, more opportunity and more of everything
          you expect from internet provider
        </p>
      </div>
    </div>
    <div className="divider-45 d-none d-lg-block" />
    <div className="row c-gutter-60">
      <div className="col-lg-4 col-12">
        <div className="pricing-plan hero-bg rounded">
          <div className="plan-name text-uppercase bg-maincolor">
            <h3>Platinum</h3>
          </div>
          <div className="plan-desc">
            <div className="plan-content">
              <h4 className="color-main">350</h4>
              <p className="small-text text-left">
                <i className="color-main fa fa-angle-down" aria-hidden="true" />
                mb/s
              </p>
              <h4 className="color-main2">250</h4>
              <p className="small-text text-left">
                <i className="color-main2 fa fa-angle-up" aria-hidden="true" />
                mb/s
              </p>
            </div>
            <div className="price-icon">
              <img src="https://i.ibb.co/Q8R9mDp/price-icon01.png" alt="" />
            </div>
          </div>
          <div className="plan-features">
            <ul className="list-bordered">
              <li>VOIP Service</li>
              <li>Online IPTV HD</li>
              <li>Giga Port</li>
              <li>24/7 Support</li>
              <li>Free TV Set Installation</li>
            </ul>
          </div>
          <div className="price-wrap d-flex">
            <span className="plan-sign small-text">Rs</span>
            <span className="plan-price color-main2">99</span>
            <span className="plan-decimals small-text">/mo</span>
          </div>
          <div className="plan-button">
            <a href="#" className="btn btn-maincolor">
              <span>Purchase</span>
            </a>
          </div>
        </div>
        <div className="divider-45 d-block d-lg-none" />
      </div>
      <div className="col-lg-4 col-12">
        <div className="pricing-plan hero-bg rounded">
          <div className="plan-name text-uppercase bg-maincolor2">
            <h3>Advanced</h3>
          </div>
          <div className="plan-desc">
            <div className="plan-content">
              <h4 className="color-main3">200</h4>
              <p className="small-text">
                <i
                  className="color-main3 fa fa-angle-down"
                  aria-hidden="true"
                />
                mb/s
              </p>
              <h4 className="color-main4">150</h4>
              <p className="small-text">
                <i className="color-main4 fa fa-angle-up" aria-hidden="true" />
                mb/s
              </p>
            </div>
            <div className="price-icon">
              <img src="https://i.ibb.co/TLxQR5H/price-icon02.png" alt="" />
            </div>
          </div>
          <div className="plan-features">
            <ul className="list-bordered">
              <li>VOIP Service</li>
              <li>Online IPTV</li>
              <li>Giga Port</li>
              <li>24/7 Support</li>
              <li>Free TV Set Installation</li>
            </ul>
          </div>
          <div className="price-wrap d-flex">
            <span className="plan-sign small-text">Rs</span>
            <span className="plan-price color-main3">79</span>
            <span className="plan-decimals small-text">/mo</span>
          </div>
          <div className="plan-button">
            <a href="#" className="btn btn-maincolor2">
              <span>Purchase</span>
            </a>
          </div>
        </div>
      </div>
      <div className="divider-20 d-block d-md-none" />
      <div className="col-lg-4 col-12">
        <div className="pricing-plan hero-bg rounded">
          <div className="plan-name text-uppercase bg-maincolor3">
            <h3>Starter</h3>
          </div>
          <div className="plan-desc">
            <div className="plan-content">
              <h4 className="color-main5">100</h4>
              <p className="small-text">
                <i
                  className="color-main5 fa fa-angle-down"
                  aria-hidden="true"
                />
                mb/s
              </p>
              <h4 className="color-main6">50</h4>
              <p className="small-text">
                <i className="color-main6 fa fa-angle-up" aria-hidden="true" />
                mb/s
              </p>
            </div>
            <div className="price-icon">
              <img src="https://i.ibb.co/v4dV3Fj/price-icon03.png" alt="" />
            </div>
          </div>
          <div className="plan-features">
            <ul className="list-bordered">
              <li>VOIP Service</li>
              <li>Online IPTV</li>
              <li>Giga Port</li>
              <li>24/7 Support</li>
              <li>Free TV Set Installation</li>
            </ul>
          </div>
          <div className="price-wrap d-flex">
            <span className="plan-sign small-text">Rs</span>
            <span className="plan-price color-main5">49</span>
            <span className="plan-decimals small-text">/mo</span>
          </div>
          <div className="plan-button">
            <a href="#" className="btn btn-maincolor3">
              <span>Purchase</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <style jsx>{`h1,
h2,
h3,
h4,
h5,
h6 {
}

section {
  padding: 60px 0;
  min-height: 100vh;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
section {
  background-color: #f7f6fb;
  color: #808080;
}
.bg-maincolor {
  background-image: -webkit-linear-gradient(left, #5b83cd 0%, #c280bf 100%);
  background-image: linear-gradient(to right, #5b83cd 0%, #c280bf 100%);
}

.bg-maincolor2 {
  background-image: -webkit-linear-gradient(left, #2165a9 0%, #3197d4 100%);
  background-image: linear-gradient(to right, #2165a9 0%, #3197d4 100%);
}

.bg-maincolor3 {
  background-image: -webkit-linear-gradient(left, #208291 0%, #32b9c2 100%);
  background-image: linear-gradient(to right, #208291 0%, #32b9c2 100%);
}

.color-main {
  border-color: #5b83cd !important;
  color: #5b83cd !important;
}

.color-main2 {
  border-color: #c280bf !important;
  color: #c280bf !important;
}

.color-main3 {
  border-color: #2165a9 !important;
  color: #2165a9 !important;
}

.color-main4 {
  border-color: #3197d4 !important;
  color: #3197d4 !important;
}

.color-main5 {
  border-color: #208291 !important;
  color: #208291 !important;
}

.color-main6 {
  border-color: #32b9c2 !important;
  color: #32b9c2 !important;
}

.color-main7 {
  border-color: #8073b2 !important;
  color: #8073b2 !important;
}
.list-bordered {
  list-style: none;
  overflow: hidden;
  padding: 0;
}

.list-bordered li {
  border-bottom: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
  padding-bottom: 15px;
  padding-top: 14px;
}

.list-bordered li + li {
  border-top: none;
}

.list-bordered.no-top-border > li:first-child {
  border-top: none;
}

.list-bordered.no-bottom-border > li:last-child {
  border-bottom: none;
}

.small-text {
  color: #4c4c4c;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
h5.special-heading {
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 575px) {
  h5.special-heading {
    font-size: 20px;
  }
}

.special-heading {
  font-size: 38px;
  font-weight: 900;
  line-height: 1;
  word-wrap: break-word;
}

.special-heading.text-lowercase {
  font-size: 62px;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 0;
}
h5.special-heading {
  letter-spacing: 0.2em;
  margin: -3px 0 0;
}
.special-heading + h1 {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #5d5d5d;
  font-size: 3vw;
  margin: 20px 0;
}
@media (max-width: 575px) {
  .special-heading + h1 {
    font-size: 35px;
  }
}

.btn {
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  height: 60px;
  padding: 2px;
  width: 180px;
  line-height: 3.2;
  color: #fff;
  font-size: 18px;
}
.btn-maincolor,
.btn-maincolor:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #5b83cd 0%, #c280bf 100%);
  background-image: linear-gradient(to right, #5b83cd 0%, #c280bf 100%);
}

.btn-maincolor2,
.btn-maincolor2:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #2165a9 0%, #3197d4 100%);
  background-image: linear-gradient(to right, #2165a9 0%, #3197d4 100%);
}

.btn-maincolor3,
.btn-maincolor3:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #208291 0%, #32b9c2 100%);
  background-image: linear-gradient(to right, #208291 0%, #32b9c2 100%);
}

.btn-outline-maincolor:hover span,
.btn-outline-maincolor2:hover span,
.btn-outline-maincolor3:hover span {
  background: transparent;
  color: #fff;
}

.btn-outline-maincolor span,
.btn-outline-maincolor2 span,
.btn-outline-maincolor3 span {
  background-color: #fff;
}

.btn-outline-maincolor,
.btn-outline-maincolor:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #5b83cd 0%, #c280bf 100%);
  background-image: linear-gradient(to right, #5b83cd 0%, #c280bf 100%);
  color: #c280bf;
}

.btn-outline-maincolor2,
.btn-outline-maincolor2:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #2165a9 0%, #3197d4 100%);
  background-image: linear-gradient(to right, #2165a9 0%, #3197d4 100%);
  color: #3197d4;
}

.btn-outline-maincolor3,
.btn-outline-maincolor3:not(:disabled):not(.disabled):active {
  background-image: -webkit-linear-gradient(left, #208291 0%, #32b9c2 100%);
  background-image: linear-gradient(to right, #208291 0%, #32b9c2 100%);
  color: #32b9c2;
}
.pricing-plan {
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 25px;
  margin-top: 25px;
  padding: 40px 40px 10px;
  text-align: center;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.pricing-plan .price-wrap {
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  font-size: 20px;
  -webkit-justify-content: center;
  justify-content: center;
  line-height: 0.7;
  margin: 42px 0 3px;
}

.pricing-plan .price-wrap[class*="bg-"] {
  margin-bottom: 0;
  margin-top: 50px;
  padding: 30px 30px 10px;
}

.pricing-plan .price-wrap .plan-price {
  font-size: 40px;
  font-weight: 700;
  padding: 0 6px;
}

.pricing-plan [class*="bg-"] {
  margin-left: -41px;
  margin-right: -41px;
  padding: 10px 30px 27px;
}

.pricing-plan .plan-name[class*="bg-"] {
  margin-top: -40px;
  padding-top: 30px;
}

.pricing-plan .plan-name h3 {
  font-size: 24px;
  letter-spacing: 0.2em;
  line-height: 1;
  color: #ffffff;
}

@media (min-width: 1200px) {
  .pricing-plan {
    padding: 57px 60px 10px;
  }

  .pricing-plan [class*="bg-"] {
    margin-left: -61px;
    margin-right: -61px;
  }

  .pricing-plan .plan-name[class*="bg-"] {
    margin-top: -57px;
  }

  .pricing-plan.plan-featured [class*="bg-"] {
    margin-left: -60px;
    margin-right: -60px;
  }
}

.pricing-plan .plan-features {
  margin: 38px 0 0;
}

.pricing-plan .plan-button {
  position: relative;
  top: 38px;
}

.pricing-plan.plan-featured {
  border: 5px solid #2165a9;
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
}

.pricing-plan.plan-featured .plan-button {
  top: 48px;
}

.pricing-plan.rounded .plan-name {
  border-radius: 5px 5px 0 0;
}

.plan-desc {
  -webkit-box-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 40px;
}

@media (max-width: 767px) {
  .plan-desc {
    -webkit-justify-content: space-around !important;
    justify-content: space-around !important;
  }
}

@media (max-width: 991px) {
  .plan-desc {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

@media (min-width: 991px) and (max-width: 1200px) {
  .plan-desc {
    margin: 40px -15px 0;
  }
}

.plan-desc h4 {
  font-weight: 200;
  letter-spacing: 5px;
  line-height: 1.3;
  margin: 0;
}

.plan-desc .price-icon {
  -webkit-transform: translateX(7%);
  -ms-transform: translateX(7%);
  transform: translateX(7%);
}

.plan-desc p {
  line-height: 0;
}

.plan-desc .plan-content {
  margin-top: 10px;
}

@media (max-width: 767px) {
  .plan-desc .plan-content {
    margin-top: 25px;
  }
}

.pricing-plan {
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

@media (min-width: 991px) {
  .pricing-plan.pricing-plan:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}
`}</style>
</section>

  )
}

export default Packages
