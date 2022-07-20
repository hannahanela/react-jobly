import React from "react";
import CompanyDetails from "./CompanyDetails";

/** CompanyCard: renders a single company's information
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("In CompanyCard");

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
