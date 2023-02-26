import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import payment_logo from "./payment_logo.png"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="custom-block">
                  <div className="widget widget_text">
                    <div className="d-md-flex align-items-center">
                      <div className="pe-md-5">
                        <h5
                          className="widget-title align-left text-uppercase font-weight-bold mb-1"
                          style={{
                            letterSpacing: ".075em",
                            color: "#22232D",
                            lineHeight: "20px",
                            fontSize: "14px",
                          }}
                        >
                          Subscribe newsletter
                        </h5>
                        <p
                          className="mb-md-0"
                          style={{
                            marginTop: 0,
                            lineHeight: "22px",
                            letterSpacing: 0,
                          }}
                        >
                          Get all the latest information on Events, Sales and
                          Offers.
                        </p>
                      </div>
                      <div className="block newsletter">
                        <form className="form">
                          <div className="control">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="actions">
                            <button className="btn subscribe">
                              <span>Subscribe</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="widget follow-us">
                    <div className="share-links">
                      <a href="#" title="Facebook" className="share-facebook">
                        <GrFacebookOption />
                      </a>
                      <a href="#" className="share-twitter" title="Twitter">
                        <AiOutlineTwitter />
                      </a>
                      <a href="#" className="share-instagram" title="Instagram">
                        <AiOutlineInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget contact-info">
                  <h3 className="widget-title">CONTACT INFO</h3>
                  <div className="contact-info contact-info-block">
                    <ul className="contact-details">
                      <li>
                        <strong>ADDRESS:</strong>
                        <span>123 Street Name, City, England</span>
                      </li>
                      <li>
                        <strong>PHONE:</strong>
                        <span>123 456-7890</span>
                      </li>
                      <li>
                        <strong>EMAIL:</strong>
                        <span>
                          <a href="mailto:abdullah2662888@gmail.com">
                            mail@example.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <strong>WORKING DAYS/HOURS:</strong>
                        <span>Mon - Sun / 9:00 AM - 8:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget widget_text">
                  <h3 className="widget-title">My Account</h3>
                  <div className="textwidget">
                    <div className="row d-inline-flex">
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">My Account</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <a href="#">Orders History</a>
                          </li>
                          <li>
                            <a href="#">Advanced Search</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget widget_text">
                  <h3 className="widget-title">Main Features</h3>
                  <div className="textwidget">
                    <div className="row d-inline-flex">
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <a href="#">Super Fast WordPress Theme</a>
                          </li>
                          <li>
                            <a href="#">1st Fully working Ajax Theme</a>
                          </li>
                          <li>
                            <a href="#">36 Unique Shop Layouts</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <a href="#">Powerful Admin Panel</a>
                          </li>
                          <li>
                            <a href="#">Mobile &amp; Retina Optimized</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="custom-block f-right">
                    <img src={payment_logo} alt="" className="bottom-payment-icons" />
                </div>
                <address>©Copyright 2023 by PORTO. All Rights Reserved.</address>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
