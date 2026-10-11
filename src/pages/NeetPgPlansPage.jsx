import React from "react";
import PgPlansHeader from "../components/neet-pg/plans/pgPlansHeader/PgPlansHeader";
import PgPlansFeature from "../components/neet-pg/plans/pgPlansFeature/PgPlansFeature";
import PgPlansShowcase from "../components/neet-pg/plans/pgPlansShowcase/PgPlansShowcase";
import PlanCTA from "../components/neet-pg/plans/planCTA/PlanCTA";

function NeetPgPlansPage() {
  return (
    <div>
      <PgPlansHeader />
      <PgPlansFeature />
      <PgPlansShowcase />
      <PlanCTA />
    </div>
  );
}

export default NeetPgPlansPage;
