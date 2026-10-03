import { FiPlayCircle, FiBookOpen, FiEdit3, FiRefreshCw, FiZap } from "react-icons/fi";
import "./GrgWaySection.css";

const steps = [
  { title: "LEARN", label: "Build the concept from the ground up.", icon: FiPlayCircle },
  { title: "UNDERSTAND", label: "See why the fact makes sense.", icon: FiBookOpen },
  { title: "PRACTISE", label: "Apply concepts through questions.", icon: FiEdit3 },
  { title: "REVISE", label: "Compress what you have learnt.", icon: FiRefreshCw },
  { title: "RECALL", label: "Retrieve it when the exam demands it.", icon: FiZap },
];

export default function GrgWaySection() {
  return (
    <section className="grg-way-section" aria-labelledby="grg-way-heading">
      <div className="grg-way-container">
        <div className="grg-way-intro">
          <p className="grg-way-eyebrow"><span /> THE GRG WAY</p>
          <h2 id="grg-way-heading">MORE THAN LECTURES. A SYSTEM DESIGNED AROUND HOW YOU ACTUALLY LEARN.</h2>
          <p className="grg-way-description">This is not intended to be a passive video library. Pharmacology by Dr. GRG brings teaching, revision, questions, notes, exam-oriented material and academic guidance together — so you can watch, revise, practise, review mistakes and return to weak topics as one connected system.</p>
        </div>
        <div className="grg-way-roadmap">
          <div className="grg-way-roadmap-heading">
            <p className="grg-way-eyebrow">The GRG Approach</p>
            <h3>Pharmacology, beyond memorization.</h3>
            <p className="grg-way-note">The system combines conceptual teaching with exam orientation, recall tools and continuous assessment — because concepts and exam preparation do not have to compete with each other.</p>
          </div>
          <ol className="grg-way-steps" aria-label="The five stages of the GRG learning roadmap">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return <li key={step.title}>
                <div className="grg-way-step">
                  <span className="grg-way-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className="grg-way-icon"><StepIcon aria-hidden="true" /></span>
                  <span className="grg-way-step-title">{step.title}</span>
                  <span className="grg-way-step-label">{step.label}</span>
                </div>
              </li>;
            })}
          </ol>

        </div>
      </div>
    </section>
  );
}
