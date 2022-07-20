import React from "react";
import { useParams } from "react-router-dom";

/** CompanyDetails : renders a specific company page with jobs related to it
 *
 * JoblyRoutes -> CompanyDetails
 *
 */
function CompanyDetails() {
  const params = useParams();

  return (
    <div>
      <h1>company</h1>
    </div>
  );
}

export default CompanyDetails;
