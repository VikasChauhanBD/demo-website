import React from "react";
import FmgeBooksHeader from "../components/fmge/books/fmgeBooksHeader/FmgeBooksHeader";
import FmgeBooksDetails from "../components/fmge/books/fmgeBooksDetails/FmgeBooksDetails";
import FmgeBooksExperience from "../components/fmge/books/fmgeBooksExperience/FmgeBooksExperience";

function FmgeBooksPage() {
  return (
    <div>
      <FmgeBooksHeader />
      <FmgeBooksDetails />
      <FmgeBooksExperience />
    </div>
  );
}

export default FmgeBooksPage;
