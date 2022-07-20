import React from "react";
import { useState, useParams } from "react-router-dom";
import getCompany from "./api";

/** CompanyDetails : renders a specific company page with jobs related to it
 *
 * JoblyRoutes -> CompanyDetails
 *
 */
function CompanyDetails() {
  const [companyData, setCompanyData] = useState({
    data: null,
    isLoading: true
  });
  console.log("In CompanyDetails", "State:", companyData);

  const params = useParams();

  useEffect(function fetchCompanyDetailsWhenMounted() {
    let companyResult = getCompany(params);
    setCompanyData({
      data: companyResult.data,
      isLoading: false
    });
  }, [params])

  if (companyData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <JobList companyData={companyData}/>
    </div>
  );
}

export default CompanyDetails;
