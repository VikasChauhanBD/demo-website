import React from "react";
import PgBooksHeader from "../components/neet-pg/books/pgBooksHeader/PgBooksHeader";
import PgBooksDetails from "../components/neet-pg/books/pgBooksDetails/PgBooksDetails";
import PgBooksExperience from "../components/neet-pg/books/pgBooksExperience/PgBooksExperience";

function NeetPgBooksPage() {
  return (
    <div>
      <PgBooksHeader />
      <PgBooksDetails />
      <PgBooksExperience />
    </div>
  );
}

export default NeetPgBooksPage;
