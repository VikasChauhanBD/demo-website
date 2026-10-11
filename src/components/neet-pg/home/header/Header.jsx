import React, { useEffect, useState } from "react";
import "./Header.css";
// import AppStore from "../../../assets/images/app.png";
// import PlayStore from "../../../assets/images/ps1.png";

const PHONE_P1 =
  "https://cdn.dribbble.com/userupload/47131956/file/6620d28342d913b5ff632161b6aeed92.png";

const PHONE_P2 =
  "https://cdn.dribbble.com/userupload/47302315/file/44243ee76a10621c1859f0f2bc231e18.png";

export default function Header({ introComplete }) {
  const [phase, setPhase] = useState("phase1");

  useEffect(() => {
    if (!introComplete) return;
    const t = setTimeout(() => setPhase("phase2"), 2000);
    return () => clearTimeout(t);
  }, [introComplete]);

  return (
    <div className={`hdr hdr--${phase}`}>
      {/* ── Background ── */}
      <video className="hdr__bg" autoPlay muted loop playsInline>
        <source
          src="https://cdn.dribbble.com/userupload/47140195/file/large-75f031aef8339cd929142c5b2ae4efa1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hdr__bg-overlay" />

      {/* -------------------------- PHASE 1  —  centred intro ---------------------- */}
      <div className="hdr__p1">
        <div className="hdr__p1-text">
          <h3 className="hdr__p1-welcome">Welcome To</h3>
          <h1 className="hdr__p1-brand">
            Core<span>BTR</span>
          </h1>
          <p className="hdr__p1-tagline">Believe. Trust. Revise.</p>
        </div>
        <div className="hdr__p1-phone">
          <img src={PHONE_P1} alt="coreBTR App" />
        </div>
      </div>

      {/* -------------------------- PHASE 2  —  split layout -------------------------- */}
      <div className="hdr__p2">
        <div className="hdr__p2-left">
          <span className="hdr__p2-eyebrow">Introducing</span>
          <h1 className="hdr__p2-heading">
            The Ultimate
            <br />
            Revision App for
            <br />
            NEET PG | INI-CET | FMGE
          </h1>
          <h3 className="hdr__p2-sub">From Revision to Revolution</h3>
          <h3 className="hdr__p2-sub2">CoreBTR is LIVE</h3>

          {/* <div className="hdr__p2-store">
            <a
              href="https://apps.apple.com/in/app/corebtr/id6760164235"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStore} alt="Download on App Store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.corebtr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PlayStore} alt="Get it on Google Play" />
            </a>
          </div> */}
        </div>

        <div className="hdr__p2-phone">
          <img src={PHONE_P2} alt="coreBTR App mockup" />
        </div>
      </div>
    </div>
  );
}
