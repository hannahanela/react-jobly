import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

/** JobList: renders a list of jobs
 *  
 *  State:
 *  - jobsData: {jobs: [ {job}, ...], isLoading}
 *
 *  JoblyRoutes -> JobList
 */
function JobList() {
  console.log("In JobList");
  const [jobsData, setjobsData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In JobsList", "State:", jobsData.data);

  useEffect(function fetchjobsDetailsWhenMounted() {
    async function jobsDetails() {
      let jobsResult = await JoblyApi.getJobs();
      setjobsData({
        data: jobsResult,
        isLoading: false,
      });
    }
    jobsDetails();
  }, []);

  function search(jobName) {
    async function fetchjobsWithSearchQuery() {
      let jobsResult = await JoblyApi.getjobsWithQuery(jobName);
      setjobsData({
        data: jobsResult,
        isLoading: false,
      });
    }
    fetchjobsWithSearchQuery();
  }

  if (jobsData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={search} />
      <div>
        <JobCardList jobs={jobsData.data}/>
      </div>
    </div>
  );
}

export default JobList;
