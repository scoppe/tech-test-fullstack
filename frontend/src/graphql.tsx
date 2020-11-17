import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ListEstatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListEstatesQuery = (
  { __typename?: 'Query' }
  & { estates?: Maybe<Array<(
    { __typename?: 'Estate' }
    & Pick<Estate, 'id' | 'surfaceInSqm' | 'price'>
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'postalcode' | 'city'>
    ), geopoint?: Maybe<(
      { __typename?: 'Geopoint' }
      & Pick<Geopoint, 'latitude' | 'longitude'>
    )> }
  )>> }
);


export const ListEstatesDocument = gql`
    query ListEstates {
  estates {
    id
    surfaceInSqm
    price
    location {
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

/**
 * __useListEstatesQuery__
 *
 * To run a query within a React component, call `useListEstatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEstatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEstatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListEstatesQuery(baseOptions?: Apollo.QueryHookOptions<ListEstatesQuery, ListEstatesQueryVariables>) {
        return Apollo.useQuery<ListEstatesQuery, ListEstatesQueryVariables>(ListEstatesDocument, baseOptions);
      }
export function useListEstatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListEstatesQuery, ListEstatesQueryVariables>) {
          return Apollo.useLazyQuery<ListEstatesQuery, ListEstatesQueryVariables>(ListEstatesDocument, baseOptions);
        }
export type ListEstatesQueryHookResult = ReturnType<typeof useListEstatesQuery>;
export type ListEstatesLazyQueryHookResult = ReturnType<typeof useListEstatesLazyQuery>;
export type ListEstatesQueryResult = Apollo.QueryResult<ListEstatesQuery, ListEstatesQueryVariables>;