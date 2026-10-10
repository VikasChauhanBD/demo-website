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
    image:
      "https://cdn.dribbble.com/userupload/49245648/file/526e7ec8d72c1e435ba7549baeb1740a.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "A New Direction",
    text: "Began his MD in Pharmacology at UCMS, where teaching started becoming more than just another part of academic life.",
  },
  {
    year: "2005",
    image:
      "https://cdn.dribbble.com/userupload/49248039/file/b28b4e3b657177ede0c290883c5a47a9.png",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
    title: "From Learning to Writing",
    text: "Authored Experimental Pharmacology for Undergraduates, taking his approach to teaching beyond the classroom and into print.",
  },
  {
    year: "2006–2009",
    image:
      "https://cdn.dribbble.com/userupload/49248040/file/6f7ff7ce47c6e1a953ed6dd193e9beba.png",
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
    image:
      "https://cdn.dribbble.com/userupload/49279847/file/09fb135ed677ea1fd79bc600dc2f827e.jpg",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
    title: "Expanding Beyond Pharmacology",
    text: "Co-authored Review of Pathology and Genetics with Dr. Sparsh Gupta, extending his contribution to medical learning beyond Pharmacology.",
  },
  {
    year: "2010–2011",
    image:
      "https://cdn.dribbble.com/userupload/49279699/file/0726ff7e35c5192e914346d1290190be.jpg",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Inside the Institution",
    text: "Served as Assistant Professor at Maulana Azad Medical College, adding another chapter to his academic career.",
  },
  {
    year: "2012",
    image:
      "https://cdn.dribbble.com/userupload/49248569/file/71eb1871e457fb270c0443c2efce80a9.jpeg",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "The Turning Point",
    text: "A professional rejection changed the direction of his career. Instead of stepping back from teaching, he chose to build his own path through individual classes and independent academic work.",
  },
  {
    year: "2019",
    image:
      "https://cdn.dribbble.com/userupload/49279783/file/793898342749ef7c57a5ffba43cc4317.jpg",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
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
    image:
      "https://cdn.dribbble.com/userupload/49245650/file/45a68918dc05668300817ab5674f126c.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Pharmacology by Dr. GRG",
    text: "A dedicated platform that brings together his teaching approach, the resources students need, and his enduring aim to turn Pharmacophobia into Pharmacophilia.",
  },
];
function AboutTimeline() {
  return (
    <>
      <section
        className="about-timeline"
        id="about-timeline"
        aria-labelledby="about-timeline-title"
      >
        <div className="about-timeline-container">
          <header className="about-timeline-intro">
            <div className="about-timeline-portrait">
              <img
                src="https://cdn.dribbble.com/userupload/49279706/file/71c4d6231ff0d9181400b15835c24cf7.jpeg"
                alt="Dr. Gobind Rai Garg"
                loading="lazy"
              />
            </div>
            <div className="about-timeline-heading">
              <span className="about-timeline-eyebrow">A LOOK BACK</span>
              <p className="about-timeline-range">
                1997<span>- Today</span>
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
                      referrerPolicy="no-referrer"
                      alt={milestone.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="about-timeline-ending"
        aria-labelledby="about-quote-title"
      >
        <h2 id="about-quote-title">
          A Different Ending Can Begin With a Rejection.
        </h2>
        <blockquote>
          <p>“A rejection can redirect the entire journey.”</p>
          <cite>— Dr. Gobind Rai Garg</cite>
        </blockquote>
      </section>
    </>
  );
}
export default AboutTimeline;