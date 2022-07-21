import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

/** JobList: renders a list of jobs
 *
 *  State:              //TODO: what job is
 *  - jobsData: {jobs: [ {job}, ...], isLoading}
 *
 *  JoblyRoutes -> JobList
 */
function JobList() {
  //TODO: change the state (jobsData) to jobs
  const [jobsData, setJobsData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In JobsList", "State:", jobsData.data);

  useEffect(function fetchJobsDetailsWhenMounted() {
    async function jobsDetails() {
      let jobsResult = await JoblyApi.getJobs();
      setJobsData({
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
      setJobsData({
        data: jobsResult,
        isLoading: false,
      });
    }
    fetchJobsWithSearchQuery();
  }

  if (jobsData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={search} />
      <div>
        {jobsData.data.length === 0 ? (
          <p> Sorry, no results were found</p>
        ) : (
          <JobCardList jobs={jobsData.data} />
        )}
      </div>
    </div>
  );
}

export default JobList;
