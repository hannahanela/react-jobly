import React from "react";
import JobCard from "./JobCard";

/** JobCardList: displays jobs passed to it as a list of job cards.
 *
 *  Props:
 *  - jobs: [{job}, ...]
 *
 *  { JobList, CompanyDetails } -> JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobCardList;
