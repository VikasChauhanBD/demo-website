import React from "react";
import "./PlanCTA.css";

const PlanCTA = () => {
  return (
    <section className="pg-plan-cta-section">
      <div className="pg-plan-cta-container">
        <p className="pg-plan-cta-label">THE NEXT STEP</p>

        <h2 className="pg-plan-cta-title">
          Your Pharmacology Preparation Starts Here.
        </h2>

        <p className="pg-plan-cta-description">
          Choose the plan that fits your exam goals and preparation timeline.
        </p>

        <a href="#plans" className="pg-plan-cta-button">
          Choose Your Plan
        </a>
      </div>
    </section>
  );
};

export default PlanCTA;
