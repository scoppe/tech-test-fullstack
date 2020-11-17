import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ListEstatesQuery } from "../graphql";
import Map from "./Map";
import PropertiesList from "./PropertiesList";
import TopBar from "./TopBar";

const LIST_ESTATES = gql`
  query ListEstates {
    estates {
      id
      surfaceInSqm
      price
      location {
        street
        postalcode
        city
      }
      geopoint {
        latitude
        longitude
      }
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery<ListEstatesQuery>(LIST_ESTATES);

  return (
    <div className="h-screen flex flex-col">
      {error && <div>ERROR {error.message}</div>}
      <TopBar />
      <div className="flex-grow relative">
        <div className="absolute z-0 inset-0">
          <Map estates={data?.estates} />
        </div>
        <div className="absolute z-10 w-4/12 p-4 inset-y-0 right-0">
          <PropertiesList isLoading={loading} properties={data?.estates} />
          aa
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
