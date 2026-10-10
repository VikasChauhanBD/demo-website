import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/comman/navbar/Navbar";
import Footer from "./components/comman/footer/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import IntroVideo from "./components/comman/introVideo/IntroVideo";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ClassesPage from "./pages/ClassesPage";
import VideoTroubleshootingPage from "./pages/VideoTroubleshootingPage";
import SchedulesPage from "./pages/SchedulesPage";
import ResultsPage from "./pages/ResultsPage";
import BlogsPage from "./pages/BlogsPage";
import FaqsPage from "./pages/FaqsPage";

import NeetPgHomePage from "./pages/NeetPgHomePage";
import NeetPgPlansPage from "./pages/NeetPgPlansPage";
import NeetPgBooksPage from "./pages/NeetPgBooksPage";

import FmgeHomePage from "./pages/FmgeHomePage";
import FmgePlansPage from "./pages/FmgePlansPage";
import FmgeBooksPage from "./pages/FmgeBooksPage";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditions from "./pages/TermsAndConditionsPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import DevicePolicyPage from "./pages/DevicePolicyPage";
import FairUsagePolicyPage from "./pages/FairUsagePolicyPage";
import ShippingAndDeliveryPolicyPage from "./pages/ShippingAndDeliveryPolicyPage";

const getDefaultCourse = () => {
  try {
    const selectedProgram = localStorage.getItem("selectedProgram");
    if (selectedProgram === "FMGE") {
      return "/course/fmge";
    }
  } catch (e) {
    // ignore storage errors
  }
  return "/course/neet-pg";
};

// Renders IntroVideo only on the home pages ("/" redirects to one of the course home paths)
function ConditionalIntroVideo({ show, onEnd }) {
  const location = useLocation();
  const isHomePath =
    location.pathname === "/" ||
    location.pathname === "/course/neet-pg" ||
    location.pathname === "/course/fmge";
  return show && isHomePath ? <IntroVideo onEnd={onEnd} /> : null;
}

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const CHANNEL_NAME = "coreBTR";
    let channel;

    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
      let otherTabExists = false;

      const handleMessage = (event) => {
        if (event.data.type === "tab_exists") {
          otherTabExists = true;
        } else if (event.data.type === "checking") {
          channel.postMessage({ type: "tab_exists" });
        }
      };

      channel.addEventListener("message", handleMessage);
      channel.postMessage({ type: "checking" });

      const timeoutId = setTimeout(() => {
        if (!otherTabExists) {
          const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
          if (!hasSeenVideo) {
            setShowIntro(true);
          } else {
            setIntroComplete(true);
          }
        } else {
          setIntroComplete(true);
        }
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        if (channel) {
          channel.removeEventListener("message", handleMessage);
          channel.close();
        }
      };
    } catch (error) {
      const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
      if (!hasSeenVideo) {
        setShowIntro(true);
      }
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    setTimeout(() => setIntroComplete(true), 1000);
  };

  return (
    <>
      <BrowserRouter>
        {/* IntroVideo is now inside BrowserRouter so it can read the current route */}
        <ConditionalIntroVideo show={showIntro} onEnd={handleVideoEnd} />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={getDefaultCourse()} replace />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/troubleshooting"
            element={<VideoTroubleshootingPage />}
          />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/schedules" element={<SchedulesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />

          {/* ----------- Neet PG Pages ---------------- */}

          <Route path="/course/neet-pg" element={<NeetPgHomePage />} />
          <Route path="/course/neet-pg/plans" element={<NeetPgPlansPage />} />
          <Route path="/course/neet-pg/books" element={<NeetPgBooksPage />} />

          {/* ----------- FMGE Pages ---------------- */}

          <Route path="/course/fmge" element={<FmgeHomePage />} />
          <Route path="/course/fmge/plans" element={<FmgePlansPage />} />
          <Route path="/course/fmge/books" element={<FmgeBooksPage />} />

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
