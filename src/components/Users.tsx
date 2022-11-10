import { gql } from "@apollo/client";
import { CircularProgress, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import useStore from "../core/useStore";
import { useGetUsersQuery } from "../generated/graphql";
import CustomModal from "./CustomModal";
import User from "./User";

gql`
  query GetUsers {
    users {
      id
      ...UserData_User
    }
  }
`;

const Users = () => {
  const { data, loading, error } = useGetUsersQuery();

  if (!data?.users || loading)
    return (
      <Stack sx={{ display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Stack>
    );
  if (error) return <Typography variant="overline">{error.message}</Typography>;

  return (
    <>
      <Stack direction="row" gap={4} flexWrap={"wrap"}>
        {data.users.map((user, inx) => (
          <User key={inx} user={user} />
        ))}
      </Stack>
      <CustomModal />
    </>
  );
  //   return <pre>{JSON.stringify(data.users, null, 2)}</pre>;
};

export default Users;
