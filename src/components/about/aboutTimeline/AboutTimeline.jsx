import React from "react";
import "./AboutTimeline.css";
const milestones = [
  {
    year: "1997",
    title: "The Beginning",
    text: "Secured AIR 123 in PMT on his first attempt and joined UCMS, Delhi, to begin his medical journey.",
  },
  {
    year: "2003",
    // image: "/images/timeline/dr-grg.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "A New Direction",
    text: "Began his MD in Pharmacology at UCMS, where teaching started becoming more than just another part of academic life.",
  },
  {
    year: "2005",
    // image: "/images/timeline/books.png",
    imageAlt: "Pharmacology by Dr. GRG learning resources",
    title: "From Learning to Writing",
    text: "Authored Experimental Pharmacology for Undergraduates, taking his approach to teaching beyond the classroom and into print.",
  },
  {
    year: "2006–2009",
    // image: "/images/timeline/dr-grg-seated.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Back to the Classroom",
    text: "Continued his academic journey as a Senior Resident at UCMS, deepening his experience in Pharmacology and medical education.",
  },
  {
    year: "2006",
    title: "A Flagship Book Takes Shape",
    text: "Review of Pharmacology became a defining part of his contribution to medical education. Now in its 16th edition, it serves medical PG aspirants preparing for NEET PG, INI-CET and FMGE.",
  },
  {
    year: "2009",
    // image: "/images/timeline/revision-books.png",
    imageAlt: "Pharmacology by Dr. GRG learning resources",
    title: "Expanding Beyond Pharmacology",
    text: "Co-authored Review of Pathology and Genetics with Dr. Sparsh Gupta, extending his contribution to medical learning beyond Pharmacology.",
  },
  {
    year: "2010–2011",
    // image: "/images/timeline/dr-grg-seated.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Inside the Institution",
    text: "Served as Assistant Professor at Maulana Azad Medical College, adding another chapter to his academic career.",
  },
  {
    year: "2012",
    // image: "/images/timeline/dr-grg.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "The Turning Point",
    text: "A professional rejection changed the direction of his career. Instead of stepping back from teaching, he chose to build his own path through individual classes and independent academic work.",
  },
  {
    year: "2019",
    // image: "/images/timeline/revision-books.png",
    imageAlt: "Pharmacology by Dr. GRG learning resources",
    title: "Making Pharmacology Simpler",
    text: "Co-authored Simplified Pharmacology with Dr. Sparsh Gupta, bringing core pharmacological concepts to students in a more accessible format.",
  },
  {
    year: "The Years That Followed",
    title: "Reaching More Students",
    text: "Expanded his work through books, classrooms, educational institutions and digital teaching, eventually helping build Cerebellum Academy.",
  },
  {
    year: "Today",
    // image: "/images/timeline/dr-grg.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Pharmacology by Dr. GRG",
    text: "A dedicated platform that brings together his teaching approach, the resources students need, and his enduring aim to turn Pharmacophobia into Pharmacophilia.",
  },
];

function AboutTimeline() {
  return (
    <section
      className="about-timeline"
      id="about-timeline"
      aria-labelledby="about-timeline-title"
    >
      <div className="about-timeline-container">
        <header className="about-timeline-intro">
          <div className="about-timeline-portrait">
            {/* <img
              src="/images/timeline/dr-grg.png"
              alt="Dr. Gobind Rai Garg"
              loading="lazy"
            /> */}
          </div>
          <div className="about-timeline-heading">
            <span className="about-timeline-eyebrow">A LOOK BACK</span>
            <p className="about-timeline-range">
              1997<span>— Today</span>
            </p>
            <h2 id="about-timeline-title">
              Every Turning Point Led Somewhere.
            </h2>
          </div>
        </header>
        <ol className="about-timeline-milestones">
          {milestones.map((milestone, index) => (
            <li
              className={`about-timeline-milestone ${index % 2 === 0 ? "is-right" : "is-left"}`}
              key={milestone.year}
            >
              <article>
                <p
                  className={`about-timeline-year${milestone.year.length > 9 ? " is-long" : milestone.year.includes("–") ? " is-range" : ""}`}
                >
                  {milestone.year}
                </p>
                <h3>{milestone.title}</h3>
                <p className="about-timeline-description">{milestone.text}</p>
              </article>
              {milestone.image && (
                <figure className="about-timeline-milestone-photo">
                  <img
                    src={milestone.image}
                    alt={milestone.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}
            </li>
          ))}
        </ol>
        <footer className="about-timeline-ending">
          <h2>A Different Ending Can Begin With a Rejection.</h2>
          <blockquote>
            <p>“A rejection can redirect the entire journey.”</p>
            <cite>— Dr. Gobind Rai Garg</cite>
          </blockquote>
        </footer>
      </div>
    </section>
  );
}
export default AboutTimeline;
