import React from "react";
import { FiLayers, FiGitBranch, FiTarget } from "react-icons/fi";
import "./WhySection.css";

const reasons = [
  {
    number: "01",
    icon: FiLayers,
    label: "RECALL",
    title: "You understand it — but forget it.",
    description:
      "Mechanisms, drug names, adverse effects and classifications can be hard to retain and retrieve under exam pressure.",
  },
  {
    number: "02",
    icon: FiGitBranch,
    label: "CONNECTION",
    title: "You know the facts — but can't connect them.",
    description:
      "Build the link between mechanism, clinical use, adverse effects, contraindications and relevant physiology or pathology.",
  },
  {
    number: "03",
    icon: FiTarget,
    label: "CLARITY",
    title: "You don't know what matters most.",
    description:
      "Identify high-yield concepts, repeated themes, common traps, newer drugs and the right material to revisit.",
  },
];

function WhySection() {
  return (
    <section className="why-section" aria-labelledby="why-section-heading">
      <div className="why-section-content">
        <div className="why-section-header">
          <p className="why-section-eyebrow">WHY THIS PLATFORM</p>
          <h2 className="why-section-heading" id="why-section-heading">
            Everything you learn.<br /><span>Finally connected.</span>
          </h2>
          <p className="why-section-sub-heading">
            Pharmacology is not difficult because there are too many drugs. It
            becomes difficult when everything feels disconnected.
          </p>
        </div>

        <ol className="why-section-reasons">
          {reasons.map((reason) => (
            <li className="why-section-reason" key={reason.number}>
              <div className="why-section-node" aria-hidden="true">
                <reason.icon />
                <span className="why-section-number">{reason.number}</span>
              </div>
              <div className="why-section-reason-copy">
                <p className="why-section-label">{reason.label}</p>
                <h3 className="why-section-reason-title">{reason.title}</h3>
              </div>
              <p className="why-section-para">{reason.description}</p>
            </li>
          ))}
        </ol>
        <p className="why-section-footer">Understand the concepts. <span>Connect the dots.</span> Retain what matters.</p>
      </div>
    </section>
  );
}

export default WhySection;
