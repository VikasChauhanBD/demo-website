import { NavLink } from "react-router-dom";
import "./BeforeYouJoin.css";

const questions = [
  [
    "Is this for NEET PG, INI-CET and FMGE?",
    "Yes. The course content is specifically designed for NEET PG, INI-CET and FMGE aspirants, with separate video lectures for NEET PG/INI-CET and FMGE preparation.",
  ],
  [
    "Are the video lectures available in English and Hinglish?",
    "Yes. Video lectures will be available in both English and Hinglish.",
  ],
  [
    "Are there separate lectures for FMGE aspirants?",
    "Yes. FMGE aspirants will have access to separate video lectures designed specifically for their preparation.",
  ],
  [
    "Is it suitable for first-time learning as well as revision?",
    "Yes. Students can enter at different stages and use different layers of the learning system.",
  ],
  [
    "Are notes and question practice included?",
    "Course-specific inclusions should be clearly shown on each plan page before enrolment.",
  ],
  [
    "How long do I get access?",
    "Validity should be displayed clearly for every plan.",
  ],
  [
    "Is the content updated?",
    "The platform intends to update content when science, guidelines or examination patterns change.",
  ],
];

export default function BeforeYouJoin() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-heading">
      <h2 id="home-faq-heading">BEFORE YOU JOIN</h2>
      <p>Clear answers. No guesswork. - FAQs</p>
      <div className="home-faq-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
        <details>
          <summary>
            Where can I check plan details and device requirements?
          </summary>
          <p>
            Review <NavLink to="/buy-new-plans">plans</NavLink> and the{" "}
            <NavLink to="/device-policy">device policy</NavLink> before joining.
          </p>
        </details>
      </div>
    </section>
  );
}
