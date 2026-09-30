import React from "react";
import "./FaqsHeader.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FaqsHeader() {
  useGSAP(() => {
    // Circle animation
    gsap.fromTo(
      ".faqs-header-circle",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    // Content animation
    gsap.fromTo(
      ".faqs-header-heading",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".faqs-header-sub-heading",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".faqs-header-para",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".faqs-header-cta",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    // Set initial state for all images
    gsap.set(
      ".faqs-header-image1, .faqs-header-image2, .faqs-header-image3, .faqs-header-image4, .faqs-header-image5",
      {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 0 100% 0)",
      },
    );

    gsap.to(".faqs-header-image1", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".faqs-header-image2", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".faqs-header-image3", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".faqs-header-image4", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".faqs-header-image5", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <div className="faqs-header-section">
      <div className="faqs-header-circle-div">
        <img
          className="faqs-header-image1"
          src="https://www.hejlfoundation.org/app/uploads/2024/05/faq-5-jpg.webp"
          alt=""
        />

        <img
          className="faqs-header-image2"
          src="https://www.hejlfoundation.org/app/uploads/2024/05/faq-4-jpg.webp"
          alt=""
        />

        <div className="faqs-header-circle">
          <h2 className="faqs-header-heading">Frequently Asked Questions</h2>

          <p className="faqs-header-para">
            Find answers to common questions about the Hejl Foundation,
            including detailed information about our grant processes.
          </p>
        </div>

        <img
          className="faqs-header-image3"
          src="https://www.hejlfoundation.org/app/uploads/2024/05/image-compressed-jpg.webp"
          alt=""
        />

        <img
          className="faqs-header-image4"
          src="https://www.hejlfoundation.org/app/uploads/2024/05/image-compressed-2-jpg.webp"
          alt=""
        />

        <img
          className="faqs-header-image5"
          src="https://www.hejlfoundation.org/app/uploads/2024/05/e6fe7c3e25140bffb7288f84f0eba3ac-jpeg.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default FaqsHeader;
