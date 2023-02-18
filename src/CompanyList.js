import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./CompanyCard.css";

/** CompanyList: renders a list of Companies
 *
 *  State:
 *  - companiesData: {data: [{ handle, name, description, numEmployees, logoUrl}
 *     , ...],isLoading }
 *
 *  JoblyRoutes -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companiesData, setCompaniesData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In CompanyList", "State:", companiesData.data);

  useEffect(function fetchCompaniesDataWhenMounted() {
    async function fetchCompaniesData() {
      let companiesResult = await JoblyApi.getCompanies();
      setCompaniesData({
        data: companiesResult,
        isLoading: false,
      });
    }
    fetchCompaniesData();
  }, []);

  function search(companyName) {
    async function fetchCompaniesWithSearchQuery() {
      let companiesResult = await JoblyApi.getCompaniesWithQuery(companyName);
      setCompaniesData({
        data: companiesResult,
        isLoading: false,
      });
    }
    fetchCompaniesWithSearchQuery();
  }

  if (companiesData.isLoading) return <i>Loading...</i>;

  return (
    <div className="CompanyList row">
      <SearchForm search={search} />
      <div className="my-2">
        {companiesData.data.length === 0 ? (
          <p> Sorry, no results were found</p>
        ) : (
          companiesData.data.map((company) => (
            <CompanyCard key={company.handle} company={company} />
          ))
        )}
      </div>
    </div>
  );
}

export default CompanyList;
