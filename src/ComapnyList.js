import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./CompanyCard.css";

/** CompanyList: renders a list of Companies
 *
 *  State:                    TODO: whats inside company
 *  - companiesData: { data: [{company}, ...], isLoading }
 *
 *  JoblyRoutes -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companiesData, setCompaniesData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In CompanyList", "State:", companiesData.data);

  useEffect(function fetchcompaniesDetailsWhenMounted() {
    async function companiesDetails() {
      //TODO: different name
      let companiesResult = await JoblyApi.getCompanies();
      setCompaniesData({
        data: companiesResult,
        isLoading: false,
      });
    }
    companiesDetails();
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
    <div>
      <SearchForm search={search} />
      <div>
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
