import "./App.css";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <>
        {/* Get Pro Button */}
        <ul className="pro-features">
          <btn className="get-pro">Get Prime</btn>
          <li className="title"> Features</li>
          <li>20 Scan per Day </li>
          <li>Doctor Consultation</li>
          <li>Emergency Service</li>
          <div className="button">
            <a
              href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Buy Prime Version
            </a>
          </div>
        </ul>
        {/* Header Area */}
        <header className="header">
          {/* Topbar */}
          {/* End Topbar */}
          {/* Header Inner */}
          <div className="header-inner">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">
                    {/* Start Logo */}
                    <div className="logo">
                      <a href="index.html">
                        <img src="newlogo.png" id="myimg" alt="#" />
                      </a>
                    </div>
                    {/* End Logo */}
                    {/* Mobile Nav */}
                    <div className="mobile-nav" />
                    {/* End Mobile Nav */}
                  </div>
                  <div className="col-lg-7 col-md-9 col-12">
                    {/* Main Menu */}
                    <div className="main-menu">
                      <nav className="navigation">
                        <ul className="nav menu">
                          <li className="active">
                            <a href="index.html">
                              Home <i className="" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/*/ End Main Menu */}
                  </div>
                  <div className="col-lg-2 col-12">
                    <div className="get-quote">
                     <btn className="btn">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <Link to="/Scan">DIAGNOSIS</Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Header Inner */}
        </header>
        {/* Start Feautes */}
        <br />
        <br />
        
        <section className="Feautes section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-eye-alt" />
                  </div>
                  <h3>Upload Image</h3>
                </div>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-prescription" />
                  </div>
                  <h3>Disease Details</h3>
                </div>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features last">
                  <div className="signle-icon">
                    <i className="icofont icofont-stethoscope" />
                  </div>
                  <h3>Medical Treatment</h3>
                </div>
                {/* End Single features */}
              </div>
            </div>
          </div>
        </section>
        <br />

        {/*/ End Feautes */}
        {/* Start Fun-facts */}
        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-home" />
                  <div className="content">
                    <span className="counter">7</span>
                    <p>Disease trained</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-user-alt-3" />
                  <div className="content">
                    <span className="counter">16</span>
                    <p>Dermatologists</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont-simple-smile" />
                  <div className="content">
                    <span className="counter">64</span>
                    <p>Happy Patients</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-table" />
                  <div className="content">
                    <span className="counter">1</span>
                    <p>Years of Experience</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/*/ End Fun-facts */}
        {/* Start Why choose */}
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>
                    WORKING PROCEDURE OF SKIN-O-CARE
                    
                  </h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                {/* Start Choose Left */}
                <div className="choose-left">
                  <h3>We have the following procedure:</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right" />
                          Click or upload a picture.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Receive disease name and remedies
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Option for doctor consultation.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Disease data and image sent to dermatologist.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Engage in online consultation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Choose Left */}
              </div>
              <div className="col-lg-6 col-12">
                {/* Start Choose Rights */}
                <div className="choose-right">
                  <div className="video-image">
                    {/* Video Animation */}
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    {/*/ End Video Animation */}
                    <a
                      href="https://youtu.be/MY-B9bBdZFU?feature=shared" target="_blank"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play" />
                     
                    </a>
                  </div>
                </div>

                {/* End Choose Rights */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Why choose */}

        {/*/ End Why choose */}
        {/* Start Call to action */}
        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                  <h2>Do you need Emergency Medical Care? Call @ 7666132393</h2>
                  <div className="button">
                    <br />
                    <btn className="btn">Contact Now</btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Call to action */}
        {/*/ End portfolio */}
        {/* Start service */}
        <section className="services section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>
                   Future Services To Improve Your Health
                  </h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-prescription" />
                  <h4>
                    <btn>General Treatment</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-tooth" />
                  <h4>
                    <btn>Teeth Whitening</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-heart-alt" />
                  <h4>
                    <btn>Heart Surgery</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-listening" />
                  <h4>
                    <btn>Ear Treatment</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-eye-alt" />
                  <h4>
                    <btn>Vision Problems</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-blood" />
                  <h4>
                    <btn>Blood Transfusion</btn>
                  </h4>
                </div>
                {/* End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End service */}
        {/* Pricing Table */}
        <section className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Provide You The Best Treatment In Resonable Price</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Table */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont-heart-beat" />
                    </div>
                    <h4 className="title">PLUS MEMBERSHIP</h4>
                    <div className="price">
                      <p className="amount">FREE</p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />5 Scans Per Day
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close" />
                      doctor consultation
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close" />
                      Emergency service
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <btn className="btn">Book Now</btn>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
              {/* Single Table */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont-heart-beat" />
                    </div>
                    <h4 className="title">PRIME MEMBERSHIP</h4>
                    <div className="price">
                      <p className="amount">
                        ₹99<span>/ Per Month</span>
                      </p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />
                      20 scans per day
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      doctor consultation
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      Emergency service
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <btn className="btn">Book Now</btn>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
            </div>
          </div>
        </section>
        {/*/ End Pricing Table */}
        {/* Start clients */}
        <div className="clients overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="owl-carousel clients-slider">
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client5.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/Ens clients */}
        {/* Start Appointment */}
        <section className="appointment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="phone" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Department</span>
                          <ul className="list">
                            <li data-value={1} className="option selected ">
                              Department
                            </li>
                            <li data-value={2} className="option">
                              Cardiac Clinic
                            </li>
                            <li data-value={3} className="option">
                              Neurology
                            </li>
                            <li data-value={4} className="option">
                              Dentistry
                            </li>
                            <li data-value={5} className="option">
                              Gastroenterology
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Doctor</span>
                          <ul className="list">
                            <li data-value={1} className="option selected ">
                              Doctor
                            </li>
                            <li data-value={2} className="option">
                              Dr. Akther Hossain
                            </li>
                            <li data-value={3} className="option">
                              Dr. Dery Alex
                            </li>
                            <li data-value={4} className="option">
                              Dr. Jovis Karon
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Date" id="datepicker" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write Your Message Here....."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Appointment */}
        {/* Start Newsletter Area */}
        <section className="newsletter section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-text ">
                  <h6>Sign up for newsletter</h6>
                </div>
                {/* End Newsletter Form */}
              </div>
              <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-form ">
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Your email address"
                      className="common-input"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'"
                      required=""
                      type="email"
                    />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
                {/* End Newsletter Form */}
              </div>
            </div>
          </div>
        </section>
        {/* /End Newsletter Area */}
        {/* Footer Area */}
        <footer id="footer" className="footer ">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>About Us</h2>
                    <p>
                      Skin-O-Care is an initiative of 3 students of AIT,Pune
                      .That aims to revolutionalize the medical industry.
                    </p>
                    {/* Social */}
                    <ul className="social">
                      <li>
                        <btn>
                          <i className="icofont-facebook" />
                        </btn>
                      </li>
                      <li>
                        <btn>
                          <i className="icofont-google-plus" />
                        </btn>
                      </li>
                      <li>
                        <btn>
                          <i className="icofont-twitter" />
                        </btn>
                      </li>
                      <li>
                        <btn>
                          <i className="icofont-vimeo" />
                        </btn>
                      </li>
                      <li>
                        <btn>
                          <i className="icofont-pinterest" />
                        </btn>
                      </li>
                    </ul>
                    {/* End Social */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Open Hours</h2>
                    <p>The timing for our customer care services .</p>
                    <ul className="time-sidual">
                      <li className="day">
                        Monday-Saturday <span>8.00 am-5.00pm</span>
                      </li>
                      <li className="day">
                        Sunday<span>Closed </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter to get latest updates.</p>
                    <form
                      action="mail/mail.php"
                      method="get"
                      target="_blank"
                      className="newsletter-inner"
                    >
                      <input
                        name="email"
                        placeholder="Email Address"
                        className="common-input"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your email address'"
                        required=""
                        type="email"
                      />
                      <button className="button">
                        <i className="icofont icofont-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Footer Top */}
          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>
                      © Copyright 2024 | All Rights Reserved by{" "}
                      <a
                        href="https://linktr.ee/taufeeq62"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Skin-O-Care
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Copyright */}
        </footer>
        {/* jquery Min JS */}
        {/* jquery Migrate JS */}
        {/* jquery Ui JS */}
        {/* Easing JS */}
        {/* Color JS */}
        {/* Popper JS */}
        {/* Bootstrap Datepicker JS */}
        {/* Jquery Nav JS */}
        {/* Slicknav JS */}
        {/* ScrollUp JS */}
        {/* Niceselect JS */}
        {/* Tilt Jquery JS */}
        {/* Owl Carousel JS */}
        {/* counterup JS */}
        {/* Steller JS */}
        {/* Wow JS */}
        {/* Magnific Popup JS */}
        {/* Counter Up CDN JS */}
        {/* Bootstrap JS */}
        {/* Main JS */}
      </>
    </>
  );
}

export default App;
