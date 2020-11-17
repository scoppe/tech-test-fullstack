import React from "react";
import { Estate } from "../graphql";

type PropertiesListProps = {
  isLoading: boolean;
  properties?: Estate[] | null;
};

const PropertiesList: React.FC<PropertiesListProps> = (props) => {
  return (
    <ol className="h-full overflow-y-auto bg-gray-100 shadow-md rounded-md">
      {props.isLoading && <div>LOADING</div>}
      {props.properties?.map((property) => (
        <PropertiesListItem property={property} />
      ))}
    </ol>
  );
};

type PropertiesListItemProps = {
  property: Estate;
};

const PropertiesListItem: React.FC<PropertiesListItemProps> = (props) => {
  function buildAddressLabel(property: Estate) {
    return [property.location.street, property.location.postalcode, property.location.city].join(" ");
  }

  function buildSurfaceLabel(property: Estate) {
    if(!property.surfaceInSqm) {
      return null;
    }
    return `${property.surfaceInSqm} m²`;
  }

  function buildPriceLabel(property: Estate) {
    if(!property.price) {
      return null;
    }
    return `${property.price.toLocaleString()} €`;
  }

  return (
    <li className="flex flex-col px-4 py-2 border-b border-gray-300">
      <div className="my-1 uppercase text-sm text-blue-700">{buildAddressLabel(props.property)}</div>
      <div className="my-1 flex justify-between items-center">
        <span className="text-lg text-blue-500">{buildSurfaceLabel(props.property)}</span>
        <span className="text-lg rounded-md font-bold text-orange-500">{buildPriceLabel(props.property)}</span>
      </div>
    </li>
  );
};

export default PropertiesList;
