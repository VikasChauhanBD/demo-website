import { NavLink } from "react-router-dom";
import introImage from "../../../assets/images/grg-intro.png";
import "./ThePerson.css";

function ThePerson() {
  return (
    <section className="the-person-section" aria-label="About Dr. GRG">
      <div className="the-person-layout">
        <div className="the-person-image">
          <img
            src="https://cdn.dribbble.com/userupload/49279286/file/aeb739195ad7536998f7b7c1aa35f2d1.png"
            alt="Dr. Gobind Rai Garg"
            // width={2000}
            // height={1600}
            loading="lazy"
          />
        </div>

        <div className="the-person-content">
          <h2 className="the-person-heading">The Person Behind the Teaching</h2>
          <p className="the-person-para">
            He Chose Pharmacology. He Found His Calling in Teaching.
            <br />
            <br />
            After completing his MBBS and MD in Pharmacology at UCMS, Delhi, Dr.
            GRG went on to serve as a Senior Resident at UCMS and Assistant
            Professor at Maulana Azad Medical College. Along the way, he wrote
            books, taught students in classrooms, and found ways to make a
            subject many feared easier to understand.
            <br />
            His approach has always been simple: explain the why before asking
            students to remember the what. Use concepts, clinical examples,
            diagrams, stories and humour to make Pharmacology make sense.
            <br />
            From individual classes to digital education, his work has continued
            to evolve, guided by one belief: difficult things can be made simple
            when they are taught the right way.
            <br />
            Pharmacology by Dr. GRG is the next chapter of that belief, bringing
            his teaching, revision and practice resources together on a platform
            of its own.
          </p>
        </div>
      </div>
    </section>
  );
}
export default ThePerson;
