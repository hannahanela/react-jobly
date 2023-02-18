import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./CompanyCard.css"

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
    <div className="CompanyCard">
      <Link className="CompanyCardLink" to={`/companies/${company.handle}`}>
        <Card className="my-4" bg="dark">
          <Card.Body className="m-1">
            {company.logoUrl ? (
              <Card.Img className="p-1" src={company.logoUrl} alt={company.name}></Card.Img>
            ) : (
              <span></span>
            )}
            <Card.Title className="p-1">{company.name}</Card.Title>
            <Card.Text className="p-1">{company.description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CompanyCard;
