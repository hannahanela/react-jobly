import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

/** JobList: renders a list of jobs
 *
 *  State:
 *  - jobs: {jobs: [ {job}, ...], isLoading}
 *
 *  RoutesList -> JobList
 */
function JobList() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In JobsList", "State:", jobs.data);

  useEffect(function fetchJobsDetailsWhenMounted() {
    async function jobsDetails() {
      let jobsResult = await JoblyApi.getJobs();
      setJobs({
        data: jobsResult,
        isLoading: false,
      });
    }
    jobsDetails();
  }, []);

  /** search : makes api requests to search jobs by job title  */
  function search(jobTitle) {
    async function fetchJobsWithSearchQuery() {
      let jobsResult = await JoblyApi.getJobsWithQuery(jobTitle);
      setJobs({
        data: jobsResult,
        isLoading: false,
      });
    }
    fetchJobsWithSearchQuery();
  }

  if (jobs.isLoading) return <i>Loading...</i>;

  return (
    <div className="JobList">
      <SearchForm search={search} />
      <div className="my-2">
        {jobs.data.length === 0 ? (
          <p> Sorry, no results were found</p>
        ) : (
          <JobCardList jobs={jobs.data} />
        )}
      </div>
    </div>
  );
}

export default JobList;
