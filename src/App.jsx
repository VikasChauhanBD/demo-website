import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar2 from "./components/comman/navbar2/Navbar2";
import Footer from "./components/comman/footer/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar2 /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
