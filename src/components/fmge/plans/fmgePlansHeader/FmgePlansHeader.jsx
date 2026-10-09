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
          The GRG Approach
          <span>Learn. Understand. Practise. Revise. Recall.</span>
        </h1>
      </div>
    </section>
  );
}
export default FmgePlansHeader;
