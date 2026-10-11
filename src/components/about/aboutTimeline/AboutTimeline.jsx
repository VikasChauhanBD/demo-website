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
      "https://cdn.dribbble.com/userupload/49283658/file/d24848734915e72e8faea3d8841a14e9.jpeg",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
    title: "From Learning to Writing",
    text: "Authored Experimental Pharmacology for Undergraduates, taking his approach to teaching beyond the classroom and into print.",
  },
  {
    year: "2006–2009",
    image:
      "https://cdn.dribbble.com/userupload/49248039/file/b28b4e3b657177ede0c290883c5a47a9.png",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Back to the Classroom",
    text: "Continued his academic journey as a Senior Resident at UCMS, deepening his experience in Pharmacology and medical education.",
  },
  {
    year: "2006",
    image:
      "https://cdn.dribbble.com/userupload/49283785/file/676e8fe17ad9ef229cbf2638c48f3a33.jpeg",
    title: "A Flagship Book Takes Shape",
    text: "Review of Pharmacology became a defining part of his contribution to medical education. Now in its 16th edition, it serves medical PG aspirants preparing for NEET PG, INI-CET and FMGE.",
  },
  {
    year: "2009",
    image:
      "https://cdn.dribbble.com/userupload/49283786/file/04d2a7492dd85548203e8c6463adf80b.jpeg",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
    title: "Expanding Beyond Pharmacology",
    text: "Co-authored Review of Pathology and Genetics, extending his contribution to medical learning beyond Pharmacology.",
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
    text: `A professional rejection changed the direction of his career. Instead of stepping back from teaching, he chose to build his own path through individual coaching for undergraduate and postgraduate medical students across India.
What began as an independent venture soon became a rage. As one of the first teachers to establish independent classes outside established institutes, he demonstrated that great teaching could stand on its own. His success inspired other teachers to believe in themselves, build independently, and create their own paths beyond institutional boundaries.
A personal turning point became the beginning of a new era in independent medical coaching.`,
  },
  {
    year: "2018",
    image:
      "https://cdn.dribbble.com/userupload/49248569/file/71eb1871e457fb270c0443c2efce80a9.jpeg",
    imageAlt: "Dr. Gobind Rai Garg",
    title: "Making Pharmacology Easy to Love",
    text: `In 2018, Dr. GRG took his vision of independent teaching beyond the classroom with the launch of an independent Pharmacology app-bringing his distinctive teaching approach to students across India.
   The impact was immediate. A subject many MBBS students struggled with became easier to understand, remember and enjoy. Second-year MBBS students, in particular, embraced his ability to simplify complex concepts, turning the app into a huge success.
What began as a new way to deliver his teaching soon became a new way for students to experience Pharmacology.
He didn’t just simplify a difficult subject. He changed how students connected with it.`,
  },
  {
    year: "2019",
    image:
      "https://cdn.dribbble.com/userupload/49283784/file/5f5625617cacb0d78ccdbffd8f2e4c61.jpeg",
    imageAlt: "Dr. Gobind Rai Garg — placeholder image",
    title: "Making Pharmacology Simpler",
    text: "Co-authored Simplified Pharmacology, bringing core pharmacological concepts to students in a more accessible format.",
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