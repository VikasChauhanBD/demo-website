import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../../assets/images/grg.jpeg";
import gsap from "gsap";
function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const desktopNavRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileItemsRef = useRef([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  // NEET PG / FMGE
  const [programOpen, setProgramOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("NEET PG");
  // Pharma App
  const [pharmaOpen, setPharmaOpen] = useState(false);
  /* =========================================================
     NAVBAR ANIMATION
  ========================================================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: -60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        logoRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: "back.out(1.5)",
        },
      );
      gsap.fromTo(
        desktopNavRef.current,
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
        },
      );
    }, navbarRef);
    return () => ctx.revert();
  }, []);
  /* =========================================================
     MOBILE MENU ANIMATION
  ========================================================= */
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.fromTo(
        mobileItemsRef.current.filter(Boolean),
        {
          y: -10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.06,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      setProgramOpen(false);
      setPharmaOpen(false);
    }
  }, [mobileOpen]);
  /* =========================================================
     PROGRAM SELECT
  ========================================================= */
  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setProgramOpen(false);
  };
  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setProgramOpen(false);
    setPharmaOpen(false);
  };
  return (
    <nav className="navbar-container" ref={navbarRef}>
      <div className="navbar-inner">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <div className="navbar-left">
          {/* LOGO */}
          <div className="navbar-logo" ref={logoRef}>
            <a href="/" onClick={closeMobileMenu}>
              <img src={Logo} alt="GRG Logo" />
            </a>
          </div>
          {/* SMALL DIVIDER */}
          <div className="navbar-divider"></div>
          {/* =================================================
              NEET PG / FMGE SELECTOR
          ================================================= */}
          <div className="program-selector">
            <button
              type="button"
              className={`program-button ${programOpen ? "open" : ""}`}
              onClick={() => setProgramOpen((prev) => !prev)}
              aria-expanded={programOpen}
              aria-haspopup="true"
            >
              <span>{selectedProgram}</span>
              <span className="program-arrow"></span>
            </button>
            {/* PROGRAM DROPDOWN */}
            <div className={`program-dropdown ${programOpen ? "show" : ""}`}>
              <button
                type="button"
                className={selectedProgram === "NEET PG" ? "selected" : ""}
                onClick={() => handleProgramSelect("NEET PG")}
              >
                NEET PG
              </button>
              <button
                type="button"
                className={selectedProgram === "FMGE" ? "selected" : ""}
                onClick={() => handleProgramSelect("FMGE")}
              >
                FMGE
              </button>
            </div>
          </div>
        </div>
        {/* =====================================================
            DESKTOP RIGHT NAVIGATION
        ===================================================== */}
        <div className="navbar-right navbar-desktop" ref={desktopNavRef}>
          {/* HOME */}
          <a href="/">Home</a>
          {/* ABOUT */}
          <a href="/about">About Dr. GRG</a>
          {/* =================================================
              PHARMA APP DROPDOWN
          ================================================= */}
          <div className="pharma-dropdown">
            <button
              type="button"
              className="pharma-button"
              aria-haspopup="true"
            >
              <span>Pharma App</span>
              <span className="pharma-arrow"></span>
            </button>
            <div className="pharma-menu">
              <a href="/buy-new-plans">Plans</a>
              <a href="/free-resources">Free Resources</a>
              <a href="/schedule">Schedule</a>
              <a href="/new-drugs">New Drugs</a>
            </div>
          </div>
          {/* BOOKS */}
          <a href="/books">Books</a>
          {/* STUDENTS */}
          <a href="/students">Students</a>
          {/* FAQ */}
          <a href="/faqs">FAQ&apos;s</a>
        </div>
        {/* =====================================================
            MOBILE HAMBURGER
        ===================================================== */}
        <button
          type="button"
          className={`navbar-hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div className="mobile-menu-wrapper" ref={mobileMenuRef}>
        <div className="mobile-menu">
          {/* =================================================
              PROGRAM
          ================================================= */}
          <div
            className="mobile-program"
            ref={(el) => {
              mobileItemsRef.current[0] = el;
            }}
          >
            <button
              type="button"
              className="mobile-dropdown-button"
              onClick={() => setProgramOpen((prev) => !prev)}
            >
              <span>{selectedProgram}</span>
              <span
                className={`mobile-arrow ${programOpen ? "open" : ""}`}
              ></span>
            </button>
            <div className={`mobile-submenu ${programOpen ? "show" : ""}`}>
              <button
                type="button"
                onClick={() => handleProgramSelect("NEET PG")}
              >
                NEET PG
              </button>
              <button type="button" onClick={() => handleProgramSelect("FMGE")}>
                FMGE
              </button>
            </div>
          </div>
          {/* =================================================
              HOME
          ================================================= */}
          <div
            ref={(el) => {
              mobileItemsRef.current[1] = el;
            }}
          >
            <a href="/" onClick={closeMobileMenu}>
              Home
            </a>
          </div>
          {/* =================================================
              ABOUT
          ================================================= */}
          <div
            ref={(el) => {
              mobileItemsRef.current[2] = el;
            }}
          >
            <a href="/about" onClick={closeMobileMenu}>
              About Dr. GRG
            </a>
          </div>
          {/* =================================================
              PHARMA APP
          ================================================= */}
          <div
            className="mobile-pharma"
            ref={(el) => {
              mobileItemsRef.current[3] = el;
            }}
          >
            <button
              type="button"
              className="mobile-dropdown-button"
              onClick={() => setPharmaOpen((prev) => !prev)}
            >
              <span>Pharma App</span>
              <span
                className={`mobile-arrow ${pharmaOpen ? "open" : ""}`}
              ></span>
            </button>
            <div className={`mobile-submenu ${pharmaOpen ? "show" : ""}`}>
              <a href="/plans" onClick={closeMobileMenu}>
                Plans
              </a>
              <a href="/free-resources" onClick={closeMobileMenu}>
                Free Resources
              </a>
              <a href="/schedule" onClick={closeMobileMenu}>
                Schedule
              </a>
              <a href="/new-drugs" onClick={closeMobileMenu}>
                New Drugs
              </a>
            </div>
          </div>
          {/* =================================================
              BOOKS
          ================================================= */}
          <div
            ref={(el) => {
              mobileItemsRef.current[4] = el;
            }}
          >
            <a href="/books" onClick={closeMobileMenu}>
              Books
            </a>
          </div>
          {/* =================================================
              STUDENTS
          ================================================= */}
          <div
            ref={(el) => {
              mobileItemsRef.current[5] = el;
            }}
          >
            <a href="/students" onClick={closeMobileMenu}>
              Students
            </a>
          </div>
          {/* =================================================
              FAQ
          ================================================= */}
          <div
            ref={(el) => {
              mobileItemsRef.current[6] = el;
            }}
          >
            <a href="/faqs" onClick={closeMobileMenu}>
              FAQ&apos;s
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
