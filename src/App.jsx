import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/comman/navbar/Navbar";
import Footer from "./components/comman/footer/Footer";

import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditions from "./pages/TermsAndConditionsPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import DevicePolicyPage from "./pages/DevicePolicyPage";
import FairUsagePolicyPage from "./pages/FairUsagePolicyPage";
import ShippingAndDeliveryPolicyPage from "./pages/ShippingAndDeliveryPolicyPage";

import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* ----------- Policy Pages ---------------- */}

        <Route path="/fair-usage-policy" element={<FairUsagePolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route
          path="/cancellation-refund"
          element={<CancellationPolicyPage />}
        />
        <Route path="/device-policy" element={<DevicePolicyPage />} />
        <Route
          path="/shipping-delivery"
          element={<ShippingAndDeliveryPolicyPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
