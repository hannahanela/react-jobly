import React from "react";
import "./JobCard";

function JobCard({ job }) {
  return (
    <div>
      {job.companyName === undefined ? (
        <div className="job-card">
          <h2>{job.title}</h2>
          <h6> Salary: {job.salary}</h6>
          <h6>Equity: {job.equity}</h6>
        </div>
      ) : (
        <div>
          <h2>{job.title}</h2>
          <h2>{job.companyName}</h2>
          <h6>Salary: {job.salary}</h6>
          <h6>Equity :{job.equity}</h6>
        </div>
      )}
    </div>
  );
}
export default JobCard;
