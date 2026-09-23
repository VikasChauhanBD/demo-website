import React from "react";
import FairUsagePolicy from "../components/policies/FairUsagePolicy";
import { Helmet } from "react-helmet";

function FairUsagePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Fair Usage Policy - Pharma</title>

        <meta
          name="description"
          content="To ensure a high-quality experience for all students to prevent automated scraping or account sharing, usage is monitored under our Fair Usage Policy."
        />
      </Helmet>

      <FairUsagePolicy />
    </div>
  );
}

export default FairUsagePolicyPage;
