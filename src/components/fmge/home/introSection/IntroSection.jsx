import { NavLink } from "react-router-dom";
import "./IntroSection.css";
function IntroSection({ showCta = true, showFullContent = false }) {
  return (
    <section className="fmge-intro-section" aria-label="About Dr. GRG">
      <div className="fmge-intro-layout">
        <div className="fmge-intro-content">
          <span className="fmge-intro-tag">ABOUT GRG</span>
          <h2 className="fmge-intro-heading">
            The Teacher Behind Pharmacology by Dr. GRG
          </h2>
          <p className="fmge-intro-para">
            For more than two decades, Dr. Gobind Rai Garg has taught
            Pharmacology in classrooms, through books, on digital platforms and
            in large revision programmes. Across those years, one belief has
            remained constant: Pharmacology does not have to be a subject
            students fear or simply memorise.
            <br />
            <br />
            THE JOURNEY From classrooms to a dedicated Pharmacology home. After
            years of teaching within larger academic systems, Dr. GRG wanted to
            build a dedicated platform where Pharmacology itself remains at the
            centre and the learning experience could be shaped around how
            students actually learn.
            {showFullContent && (
              <>
                {" "}
                THE PHILOSOPHY Make difficult things simple - without
                oversimplifying. His approach begins with the concept, then uses
                memory tools, clinical connections, questions and revision to
                make that understanding easier to retain and apply. THE PURPOSE
                Help students move from pharmacophobia to pharmacophilia. The
                goal goes beyond marks: organise Pharmacology in the student’s
                mind so they can reason through unfamiliar questions and revise
                efficiently. “I would like the student to be able to say:
                ‘Pharmacology finally makes sense to me.’” - Dr. Gobind Rai Garg
              </>
            )}
          </p>
          {showCta && (
            <NavLink to="/about" className="fmge-intro-cta">
              Read About Dr. GRG
            </NavLink>
          )}
        </div>
        <div className="fmge-intro-image">
          <img
            src="https://cdn.dribbble.com/userupload/49244495/file/22d27375a033a89a1535301a496f8802.jpg"
            alt="Dr. Gobind Rai Garg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
