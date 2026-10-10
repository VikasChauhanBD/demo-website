import React from "react";
import TermsAndConditions from "../components/policies/TermsAndConditions";
import { Helmet } from "react-helmet";

function TermsAndConditionsPage() {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions of Use – Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Pharmacology by Dr. GRG terms and conditions explains about acceptable use & academic integrity, plans, payments, renewals & refunds, Free trials and demos & more."
        />
      </Helmet>

      <TermsAndConditions />
    </div>
  );
}

export default TermsAndConditionsPage;
