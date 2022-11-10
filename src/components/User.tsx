import React, { FC } from "react";
import { gql } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  GetUsersDocument,
  useDeleteUserMutation,
  UserData_UserFragment,
} from "../generated/graphql";
import useStore from "../core/useStore";

gql`
  fragment UserData_User on User {
    id
    age
    name
    nationality
    username
  }
`;

type Props = { user: UserData_UserFragment };

const User: FC<Props> = ({ user }) => {
  const [deleteUser, { loading }] = useDeleteUserMutation();
  const { toggleModalState, setCurrentUser } = useStore();
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {user.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User name: {user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Nationality: {user.nationality}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            setCurrentUser(user);
            toggleModalState();
          }}
        >
          Edit
        </Button>
        <LoadingButton
          size="small"
          loading={loading}
          onClick={() => {
            deleteUser({
              variables: { deleteUserId: user.id },
              refetchQueries: [{ query: GetUsersDocument }],
            });
          }}
        >
          Delete
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default User;
