import { gql } from "@apollo/client";
import React from "react";
import { useGetMoviesQuery } from "../generated/graphql";
import Title from "./Title";

gql`
  query GetMovies {
    movies {
      id
      isInTheaters
      ...Title_Movie
    }
  }
`;

const Movies = () => {
  const { data } = useGetMoviesQuery();

  return (
    <>
      {data?.movies.map((movie, inx) => (
        <Title key={inx} movie={movie} />
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Movies;
