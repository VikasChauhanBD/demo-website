import React from "react";
import PrivacyPolicy from "../components/policies/PrivacyPolicy";
import { Helmet } from "react-helmet";

function PrivacyPolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy - Pharma</title>

        <meta
          name="description"
          content="Pharma Privacy Policy explains how we collect, use and protect your data, ensuring a safe and transparent learning experience for every student."
        />
      </Helmet>

      <PrivacyPolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
