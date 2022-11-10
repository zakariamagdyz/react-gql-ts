import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  age: Scalars['Int'];
  name: Scalars['String'];
  nationality?: InputMaybe<Nationality>;
  username: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  isInTheaters: Scalars['Boolean'];
  name: Scalars['String'];
  yearOfPublication: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  updateUsername?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUsernameArgs = {
  input: UpdateUsernameInput;
};

export enum Nationality {
  Brazil = 'BRAZIL',
  Canada = 'CANADA',
  Chile = 'CHILE',
  Germany = 'GERMANY',
  India = 'INDIA',
  Ukraine = 'UKRAINE'
}

export type Query = {
  __typename?: 'Query';
  movie: Movie;
  movies: Array<Movie>;
  user: User;
  users: Array<User>;
};


export type QueryMovieArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type UpdateUsernameInput = {
  id: Scalars['ID'];
  newUsername: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  favoriteMovies?: Maybe<Array<Maybe<Movie>>>;
  friends?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nationality: Nationality;
  username: Scalars['String'];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, isInTheaters: boolean, name: string, yearOfPublication: number }> };

export type Title_MovieFragment = { __typename?: 'Movie', name: string, yearOfPublication: number };

export type UserData_UserFragment = { __typename?: 'User', id: string, age: number, name: string, nationality: Nationality, username: string };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, age: number, name: string, nationality: Nationality, username: string }> };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string, age: number, name: string, nationality: Nationality, username: string } | null };

export const Title_MovieFragmentDoc = gql`
    fragment Title_Movie on Movie {
  name
  yearOfPublication
}
    `;
export const UserData_UserFragmentDoc = gql`
    fragment UserData_User on User {
  id
  age
  name
  nationality
  username
}
    `;
export const GetMoviesDocument = gql`
    query GetMovies {
  movies {
    id
    isInTheaters
    ...Title_Movie
  }
}
    ${Title_MovieFragmentDoc}`;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    ...UserData_User
  }
}
    ${UserData_UserFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    ...UserData_User
  }
}
    ${UserData_UserFragmentDoc}`;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;