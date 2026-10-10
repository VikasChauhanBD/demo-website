import React from "react";
import DevicePolicy from "../components/policies/DevicePolicy";
import { Helmet } from "react-helmet";

function DevicePolicyPage() {
  return (
    <div>
      <Helmet>
        <title>Device & Fair Usage Policy – Pharmacology by Dr. GRG</title>

        <meta
          name="description"
          content="Pharmacology by Dr. GRG Device & Fair Usage Policy explains supported platforms, device linking, session limits and content protection."
        />
      </Helmet>

      <DevicePolicy />
    </div>
  );
}

export default DevicePolicyPage;
