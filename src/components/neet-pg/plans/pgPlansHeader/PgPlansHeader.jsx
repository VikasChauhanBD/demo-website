import React from "react";
import "./PgPlansHeader.css";
import plansHero from "../../../../assets/images/plans-hero.png";
function PgPlansHeader() {
  return (
    <section
      className="pg-plans-header-section"
      style={{ backgroundImage: `url(${plansHero})` }}
    >
      <div className="pg-plans-header-content">
        <h1 className="pg-plans-header-heading">
          The GRG Approach
          <span>Learn. Understand. Practise. Revise. Recall.</span>
        </h1>
      </div>
    </section>
  );
}
export default PgPlansHeader;
