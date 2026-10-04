import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/comman/navbar/Navbar";
import Footer from "./components/comman/footer/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClassesPage from "./pages/ClassesPage";
import SchedulesPage from "./pages/SchedulesPage";
import ResultsPage from "./pages/ResultsPage";
import BlogsPage from "./pages/BlogsPage";
import FaqsPage from "./pages/FaqsPage";

import NeetPgPlansPage from "./pages/NeetPgPlansPage";

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
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/schedules" element={<SchedulesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />

          {/* ----------- Neet PG Pages ---------------- */}

          <Route path="/course/neet-pg/plans" element={<NeetPgPlansPage />} />

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
      </BrowserRouter>
    </>
  );
}

export default App;
