import React from "react";
import "./PlanCTA.css";
const PlanCTA = () => {
  return (
    <section className="fmge-plan-cta-section">
      <div className="fmge-plan-cta-container">
        <p className="fmge-plan-cta-label">THE NEXT STEP</p>
        <h2 className="fmge-plan-cta-title">
          Your Pharmacology Preparation Starts Here.
        </h2>
        <p className="fmge-plan-cta-description">
          Choose the plan that fits your exam goals and preparation timeline.
        </p>
        {/* <a
          href="https://learn.pharmacologybydrgrg.com/login"
          className="fmge-plan-cta-button"
        >
          Choose Your Plan
        </a> */}
      </div>
    </section>
  );
};
export default PlanCTA;