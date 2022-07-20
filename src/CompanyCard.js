import React from "react";
import CompanyDetails from "./CompanyDetails";
import JobCard from "./JobCard";

/** CompanyCard: renders a single company's information
 *
 *  Props:
 *  - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *      where jobs is [{ id, title, salary, equity }, ...]
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("In CompanyCard");

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.job.map((company) => (
        <JobCard /> }
    </div>
  );
}

export default CompanyCard;
