import React from "react";
import "./Footer.css"; // Make sure to create the corresponding CSS file

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/deals">Deals</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="/return">Return Policy</a>
            </li>
            <li>
              <a href="/shipping">Shipping Info</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </div>
    </footer>
  );
};

export default Footer;
