import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

import Logo from "../../../assets/images/grg.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand footer-animate">
            <a href="#home" className="footer-logo">
              <img src={Logo} alt="GRG Logo" />
            </a>

            <p>
              Learn Pharmacology with understanding, clinical connections,
              stories and memorable mnemonics.
            </p>
          </div>

          {/* Main Pages */}
          <div className="footer-column footer-animate">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#why-we">Why We</a>
            <a href="#contact">Contact Us</a>
          </div>

          {/* Policies */}
          <div className="footer-column footer-animate">
            <h3>Policies</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/cancellation-refund">Cancellation & Refund</Link>
            <Link to="/shipping-delivery">Shipping & Delivery</Link>
            <Link to="/device-policy">Device Policy</Link>
            <Link to="/fair-usage-policy">Fair Usage Policy</Link>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom footer-animate">
          <p>© {new Date().getFullYear()} GRG. All Rights Reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>

            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
