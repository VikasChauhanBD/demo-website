import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import gsap from "gsap";
import "./Footer.css";

import Logo from "../../../assets/images/grg.jpeg";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(
        ".footer-title",
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.45",
      )
        .from(
          ".footer-content-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".footer-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-hero">
          <h2 className="footer-title">
            MASTER
            <br />
            <span>PHARMACOLOGY.</span>
          </h2>
        </div>

        <div className="footer-main">
          <div className="footer-brand footer-content-item">
            <Link to="/" className="footer-logo">
              <img src={Logo} alt="GRG Logo" />
            </Link>

            <p>
              Understand Pharmacology. Remember it. Apply it. Learn with GRG Sir
              and build concepts that stay with you.
            </p>

            <div className="footer-social">
              <span>FOLLOW GRG SIR</span>

              <div className="footer-social-links">
                <a
                  href="https://www.instagram.com/pharmacologybydrgrg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.youtube.com/@DrGobindRaiGarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links footer-content-item">
            <div className="footer-column">
              <h3>Explore</h3>

              <Link to="/">Home</Link>
              <Link to="/about">About Dr. GRG</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/buy-new-plans">Buy New Plans</Link>
              <Link to="/schedules">Schedules</Link>
              <Link to="/results">Results</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/faqs">FAQs</Link>
            </div>

            <div className="footer-column">
              <h3>Policies</h3>

              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/cancellation-refund">Cancellation & Refund</Link>
              <Link to="/shipping-delivery">Shipping & Delivery</Link>
              <Link to="/device-policy">Device Policy</Link>
              <Link to="/fair-usage-policy">Fair Usage Policy</Link>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom footer-content-item">
          <p>© {new Date().getFullYear()} GRG. All Rights Reserved.</p>

          <div className="footer-bottom-right">
            <span>Learn. Understand. Remember. Apply.</span>

            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
