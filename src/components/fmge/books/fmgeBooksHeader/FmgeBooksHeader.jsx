import "./FmgeBooksHeader.css";
import booksHeader from "../../../../assets/images/neet-pg books.png";
function FmgeBooksHeader() {
  const scrollToBooks = () => {
    document.getElementById("fmge-books-details")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };
  return (
    <section className="fmge-books-header">
      <div className="fmge-books-header-hero">
        <div className="fmge-books-header-hero-inner">
          <span className="fmge-books-header-eyebrow">For FMGE</span>
          <h1 className="fmge-books-header-heading">
            Pharmacology <span>made simpler.</span>
          </h1>
          <h2 className="fmge-books-header-sub-heading">
            Built specifically for FMGE preparation.
          </h2>
          {/* <p className="fmge-books-header-description">
            Pharmacology can feel overwhelming when there is too much to
            remember and too little time to organise it.
          </p>
          <p className="fmge-books-header-description">
            The Pharmacology by Dr. GRG FMGE books bring the subject into a
            focused, structured format designed specifically for FMGE aspirants.
          </p>
          <p className="fmge-books-header-description">
            The books are developed alongside the dedicated FMGE video lectures,
            creating a connected learning and revision experience.
          </p> */}
          <button
            type="button"
            className="fmge-books-header-btn fmge-books-header-hero-cta"
            onClick={scrollToBooks}
          >
            <span>Explore the FMGE Books</span>
            <span className="fmge-books-header-arrow">→</span>
          </button>
        </div>
        <div className="fmge-books-header-art">
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
export default FmgeBooksHeader;
