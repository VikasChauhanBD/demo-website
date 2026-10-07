import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import gsap from "gsap";
import "./Footer.css";

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
            <div className="footer-logo-section">
              <NavLink to="/" className="footer-logo">
                <img
                  src="https://cdn.dribbble.com/userupload/49243456/file/6a33c9e10c12af9bd7e77302ab6f4c10.png"
                  alt="GRG Logo"
                />
              </NavLink>

              <div className="footer-logo-text">
                <h4>Pharmacology by Dr. GRG</h4>
                <h5>Powered by eConceptual</h5>
              </div>
            </div>

            <p>
              Understand Pharmacology. Remember it. Apply it. Learn with Dr. GRG
              Sir and build concepts that stay with you.
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

              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Dr. GRG</NavLink>
              <NavLink to="/classes">Classes</NavLink>
              <NavLink to="/buy-new-plans">Buy New Plans</NavLink>
              <NavLink to="/schedules">Schedules</NavLink>
              <NavLink to="/results">Results</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/faqs">FAQs</NavLink>
            </div>

            <div className="footer-column">
              <h3>Policies</h3>

              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Conditions</NavLink>
              <NavLink to="/cancellation-refund">Cancellation & Refund</NavLink>
              <NavLink to="/shipping-delivery">Shipping & Delivery</NavLink>
              <NavLink to="/device-policy">Device Policy</NavLink>
              <NavLink to="/fair-usage-policy">Fair Usage Policy</NavLink>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom footer-content-item">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Pharmacology by Dr. GRG. All
              Rights Reserved. Designed & Managed By:{" "}
              <NavLink to="https://believersdestination.com/" target="_blank">
                Believers Destination Pvt Ltd
              </NavLink>
            </p>
          </div>

          <div className="footer-bottom-right">
            <span>Learn. Understand. Remember. Apply.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
