export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  estates?: Maybe<Array<Estate>>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Location = {
  __typename?: 'Location';
  street?: Maybe<Scalars['String']>;
  postalcode: Scalars['String'];
  city: Scalars['String'];
};

export type Estate = {
  __typename?: 'Estate';
  id: Scalars['ID'];
  surfaceInSqm?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  location: Location;
  geopoint?: Maybe<Geopoint>;
};
