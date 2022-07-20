import React from "react";
import { Link } from "react-router-dom";

/** CompanyCard: renders a single company's information
 *
 *  Props:
 *  - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *      where jobs is [{ id, title, salary, equity }, ...]
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  // console.log("In CompanyCard");

  return (
    <Link to={`/companies/${company.handle}`}>
      <div>
        {company.logoUrl ? (
          <img src={company.logoUrl} alt={company.name}></img>
        ) : (
          <span></span>
        )}

        <h1>{company.name}</h1>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
