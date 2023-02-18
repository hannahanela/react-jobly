import React from "react";
import Card from "react-bootstrap/Card";

/** JobCard: displays job details.
 *
 *  Prop:
 *  - job: {title, salary, equity, companyName} or {title, salary, equity}
 *
 *  JobCardList -> JobCard
 */
function JobCard({ job }) {

  return (
    <div className="JobCard my-4">
      {job.companyName === undefined ? (
        <Card bg="dark">
          <Card.Body className="m-1">
            <Card.Title className="p-1">{job.title}</Card.Title>
            <Card.Text className="p-1">Salary: {job.salary}</Card.Text>
            <Card.Text className="p-1">Equity: {job.equity}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card bg="dark">
          <Card.Body className="m-1">
            <Card.Title className="p-1">{job.title}</Card.Title>
            <Card.Subtitle className="p-1">{job.companyName}</Card.Subtitle>
            <Card.Text className="p-1">Salary: {job.salary}</Card.Text>
            <Card.Text className="p-1">Equity: {job.equity}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
export default JobCard;
