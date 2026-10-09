import React from "react";
import { NavLink } from "react-router-dom";
import "./ThePromise.css";
export default function ThePromise() {
  return (
    <section
      className="the-promise-section"
      aria-labelledby="the-promise-heading"
    >
      <div className="the-promise-container">
        <span className="the-promise-eyebrow">THE PROMISE</span>
        <h2 className="the-promise-title" id="the-promise-heading">
          Ready to Master Pharmacology the GRG Way?
        </h2>
        <p className="the-promise-para">
          Learn it properly. Revise it smarter. Apply it with confidence.
        </p>
        <NavLink to="/course/neet-pg/plans" className="the-promise-cta">
          Start Learning
        </NavLink>
      </div>
    </section>
  );
}
