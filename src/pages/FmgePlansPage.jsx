import React from "react";
import FmgePlansHeader from "../components/fmge/plans/fmgePlansHeader/FmgePlansHeader";
import FmgePlansFeature from "../components/fmge/plans/fmgePlansFeature/FmgePlansFeature";
import FmgePlansShowcase from "../components/fmge/plans/fmgePlansShowcase/FmgePlansShowcase";

function FmgePlansPage() {
  return (
    <div>
      <FmgePlansHeader />
      <FmgePlansFeature />
      <FmgePlansShowcase />
    </div>
  );
}

export default FmgePlansPage;
