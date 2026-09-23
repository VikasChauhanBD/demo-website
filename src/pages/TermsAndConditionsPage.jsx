import React from "react";
import TermsAndConditions from "../components/policies/TermsAndConditions";
import { Helmet } from "react-helmet";

function TermsAndConditionsPage() {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - Pharma</title>

        <meta
          name="description"
          content="Pharma terms and conditions explains about acceptable use & academic integrity, plans, payments, renewals & refunds, Free trials and demos & more."
        />
      </Helmet>

      <TermsAndConditions />
    </div>
  );
}

export default TermsAndConditionsPage;
