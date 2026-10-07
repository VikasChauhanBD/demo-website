import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../../assets/images/grg.jpeg";
import gsap from "gsap";
import { FaStethoscope, FaGlobe } from "react-icons/fa";

const PROGRAMS = {
  "NEET PG": {
    landing: "/course/neet-pg",
    plans: "/course/neet-pg/plans",
    books: "/course/neet-pg/books",
  },
  FMGE: {
    landing: "/course/fmge",
    plans: "/course/fmge/plans",
    books: "/course/fmge/books",
  },
};

const STORAGE_KEY = "selectedProgram";
const COURSE_POPUP_KEY = "coursePopupShown";

const getInitialProgram = () => {
  const path = window.location.pathname;

  if (path.startsWith("/course/fmge")) return "FMGE";
  if (path.startsWith("/course/neet-pg")) return "NEET PG";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && PROGRAMS[saved]) return saved;
  } catch (e) {
    // localStorage not available, fall back to default
  }

  return "NEET PG";
};

function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const desktopNavRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileItemsRef = useRef([]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [coursePopupOpen, setCoursePopupOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(getInitialProgram);

  const links = PROGRAMS[selectedProgram];

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
    }
  }, [mobileOpen]);

  useEffect(() => {
    try {
      const popupShown = localStorage.getItem(COURSE_POPUP_KEY);

      if (!popupShown) {
        setCoursePopupOpen(true);
      }
    } catch (e) {
      setCoursePopupOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!coursePopupOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [coursePopupOpen]);

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setProgramOpen(false);

    try {
      localStorage.setItem(STORAGE_KEY, program);
    } catch (e) {
      // ignore storage errors
    }

    window.location.href = PROGRAMS[program].landing;
  };

  const handleCourseSelect = (program) => {
    setSelectedProgram(program);
    setCoursePopupOpen(false);

    try {
      localStorage.setItem(STORAGE_KEY, program);
      localStorage.setItem(COURSE_POPUP_KEY, "true");
    } catch (e) {
      // ignore storage errors
    }

    window.location.href = PROGRAMS[program].landing;
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setProgramOpen(false);
  };

  return (
    <>
      <nav className="navbar-container" ref={navbarRef}>
        <div className="navbar-inner">
          <div className="navbar-left">
            <div className="navbar-logo" ref={logoRef}>
              <a href="/" onClick={closeMobileMenu}>
                <img
                  src="https://cdn.dribbble.com/userupload/49243456/file/6a33c9e10c12af9bd7e77302ab6f4c10.png"
                  alt="GRG Logo"
                />

                <div className="navbar-logo-text">
                  <h4>Pharmacology by Dr.GRG</h4>
                  <h5>Powered by eConceptual</h5>
                </div>
              </a>
            </div>

            <div className="navbar-divider"></div>

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

          <div className="navbar-right navbar-desktop" ref={desktopNavRef}>
            <a href="/">Home</a>
            <a href="/about">About Dr. GRG</a>
            <a href={links.plans}>Plans</a>
            <a href={links.books}>Books</a>
          </div>

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

        <div className="mobile-menu-wrapper" ref={mobileMenuRef}>
          <div className="mobile-menu">
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

                <button
                  type="button"
                  onClick={() => handleProgramSelect("FMGE")}
                >
                  FMGE
                </button>
              </div>
            </div>

            <div
              ref={(el) => {
                mobileItemsRef.current[1] = el;
              }}
            >
              <a href="/" onClick={closeMobileMenu}>
                Home
              </a>
            </div>

            <div
              ref={(el) => {
                mobileItemsRef.current[2] = el;
              }}
            >
              <a href="/about" onClick={closeMobileMenu}>
                About Dr. GRG
              </a>
            </div>

            <div
              ref={(el) => {
                mobileItemsRef.current[3] = el;
              }}
            >
              <a href={links.plans} onClick={closeMobileMenu}>
                Plans
              </a>
            </div>

            <div
              ref={(el) => {
                mobileItemsRef.current[4] = el;
              }}
            >
              <a href={links.books} onClick={closeMobileMenu}>
                Books
              </a>
            </div>
          </div>
        </div>
      </nav>

      {coursePopupOpen && (
        <div className="course-popup-overlay">
          <div className="course-popup">
            <div className="course-popup-header">
              <h2>Choose Your Course</h2>

              <p>Select your preparation pathway to continue.</p>
            </div>

            <div className="course-popup-options">
              <button
                type="button"
                className="course-popup-option"
                onClick={() => handleCourseSelect("NEET PG")}
              >
                <span className="course-popup-icon">
                  <FaStethoscope />
                </span>

                <span className="course-popup-option-title">
                  NEET PG | INI-CET
                </span>
              </button>

              <button
                type="button"
                className="course-popup-option"
                onClick={() => handleCourseSelect("FMGE")}
              >
                <span className="course-popup-icon">
                  <FaGlobe />
                </span>

                <span className="course-popup-option-title">FMGE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
