import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import CompanyDetails from "./CompanyDetails";
import "./CompanyCard.css";

/** CompanyList: renders a list of Companys
 *
 *  JoblyRoutes -> CompanyList
 */
//TODO: what is the useEffect param with using search
function CompanyList() {
  console.log("In CompanyList");
  const [companiesData, setCompaniesData] = useState({
    data: null,
    isLoading: true,
  });
  console.log(companiesData.data);
  useEffect(function fetchcompaniesDetailsWhenMounted() {
    async function companiesDetails() {
      let companiesResult = await JoblyApi.getCompanies();
      setCompaniesData({
        data: companiesResult,
        isLoading: false,
      });
    }
    companiesDetails();
  }, []);

  if (companiesData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      {companiesData.data.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
