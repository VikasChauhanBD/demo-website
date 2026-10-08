import React from "react";
import "./FmgePlansHeader.css";
import plansHero from "../../../../assets/images/plans-hero.png";
function FmgePlansHeader() {
  return (
    <section
      className="fmge-plans-header-section"
      style={{ backgroundImage: `url(${plansHero})` }}
    >
      <div className="fmge-plans-header-content">
        <h1 className="fmge-plans-header-heading">
          Complete Pharmacology.
          <span>learning, revision and practice</span>
        </h1>
        <p className="fmge-plans-header-subtitle">
          with Dr. GRG - built specifically for FMGE preparation.
        </p>
      </div>
    </section>
  );
}
export default FmgePlansHeader;
