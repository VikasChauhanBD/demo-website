import "./PgBooksHeader.css";
import booksHeader from "../../../../assets/images/books 2.png";
function PgBooksHeader() {
  const scrollToBooks = () => {
    document.getElementById("pg-books-details")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };
  return (
    <section className="pg-books-header">
      <div className="pg-books-header-hero">
        <div className="pg-books-header-hero-inner">
          <span className="pg-books-header-eyebrow">
            For NEET PG &amp; INI-CET
          </span>
          <h1 className="pg-books-header-heading">
            Pharmacology <span>that makes sense.</span>
          </h1>
          <h2 className="pg-books-header-sub-heading">
            Built for NEET PG &amp; INI-CET preparation.
          </h2>
          
          {/* <p className="pg-books-header-description">
            Learn Pharmacology with Dr. Gobind Rai Garg through concepts,
            clinical connections, memory tools, questions and structured
            revision - now brought together in books designed specifically for
            NEET PG and INI-CET aspirants.
          </p>
          <p className="pg-books-header-description">
            These books follow the corresponding video-learning pathways, giving
            you a structured resource to read, understand, annotate, revisit and
            revise throughout your preparation.
          </p> */}
          <button
            type="button"
            className="pg-books-header-btn pg-books-header-hero-cta"
            onClick={scrollToBooks}
          >
            <span>Explore the Books</span>
            <span className="pg-books-header-arrow">→</span>
          </button>
        </div>
        <div className="pg-books-header-art">
          <p className="pg-books-header-coming-soon">Coming Soon</p>
          <img
            src={booksHeader}
            width="900"
            height="800"
            alt="GRG Master Class, Power Pack Revision and GRG Express Pharmacology books"
          />
        </div>
      </div>
    </section>
  );
}
export default PgBooksHeader;