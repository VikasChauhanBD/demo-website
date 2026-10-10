import React from "react";
import PrivacyPolicy from "../components/policies/PrivacyPolicy";
import { Helmet } from "react-helmet";

function PrivacyPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy – Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Pharmacology by Dr. GRG Privacy Policy explains how we collect, use and protect your data, ensuring a safe and transparent learning experience for every student."
        />
      </Helmet>

      <PrivacyPolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
