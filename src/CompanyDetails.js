import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobList from "./JobList";

/** CompanyDetails : renders a specific company page with jobs related to it
 *
 * JoblyRoutes -> CompanyDetails
 *
 */
function CompanyDetails() {
  const [companyData, setCompanyData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In CompanyDetails", "State:", companyData);

  const params = useParams();
  console.log("params = ", params);

  useEffect(
    function fetchCompanyDetailsWhenMounted() {
      async function CompanyDetails() {
        let companyResult = await JoblyApi.getCompany(params.name);
        setCompanyData({
          data: companyResult,
          isLoading: false,
        });
      }
      CompanyDetails();
    },
    [params]
  );

  if (companyData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <JobList companyData={companyData} />
    </div>
  );
}

export default CompanyDetails;
