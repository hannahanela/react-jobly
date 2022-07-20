import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import CompanyDetails from "./CompanyDetails";
import "./CompanyCard.css";

/** CompanyList: renders a list of Companys
 *
 *  State:
 *  - companiesData: { data: [{company}, ...], isLoading }
 *
 *  JoblyRoutes -> CompanyList -> CompanyCard
 */
//TODO: what is the useEffect param with using search
// express jobly filters w/ query string
// react jobly url remains same
function CompanyList() {
  const [companiesData, setCompaniesData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In CompanyList", "State:", companiesData);

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
      {companiesData.data.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
