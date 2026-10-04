import React from "react";
import PgPlansHeader from "../components/neet-pg/plans/pgPlansHeader/PgPlansHeader";
import PgPlansFeature from "../components/neet-pg/plans/pgPlansFeature/PgPlansFeature";
import PgPlansShowcase from "../components/neet-pg/plans/pgPlansShowcase/PgPlansShowcase";

function NeetPgPlansPage() {
  return (
    <div>
      <PgPlansHeader />
      <PgPlansFeature />
      <PgPlansShowcase />
    </div>
  );
}

export default NeetPgPlansPage;
