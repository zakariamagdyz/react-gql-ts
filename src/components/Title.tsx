import { gql } from "@apollo/client";
import React, { FC } from "react";
import { Title_MovieFragment } from "../generated/graphql";

gql`
  fragment Title_Movie on Movie {
    name
    yearOfPublication
  }
`;

// gql`
//   quey getOneMovie {
//     movie(name:"Interstellar"){
//         name
//         id
//     }

//   }
// `;

type Props = {
  movie: Title_MovieFragment;
};
const Title: FC<Props> = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <p>{movie.yearOfPublication}</p>
    </div>
  );
};

export default Title;
