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
          Complete Pharmacology.
          <span>learning, revision and practice</span>
        </h1>
        <p className="pg-plans-header-subtitle">
          with Dr. GRG - built for NEET PG & INI-CET preparation.
        </p>
      </div>
    </section>
  );
}
export default PgPlansHeader;
