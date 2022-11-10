import { LoadingButton } from "@mui/lab";
import {
  Button,
  Container,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStore from "../core/useStore";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormValue = {
  name: string;
  userName: string;
  age: number;
  nationality: string;
};

const CustomModal = () => {
  const { isModalOpen, toggleModalState, currentUser } = useStore();
  const { register, handleSubmit, control } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);
  return (
    <Modal
      open={isModalOpen}
      onClose={toggleModalState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ display: "grid", placeItems: "center", height: "80vh" }}
        onClick={toggleModalState}
      >
        <Container maxWidth="sm" onClick={(e) => e.stopPropagation()}>
          <Paper sx={{ p: 2 }}>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography variant="h6">Edit User</Typography>
              <Button
                variant="text"
                onClick={toggleModalState}
                sx={{ color: "black" }}
              >
                {" "}
                &#10005;
              </Button>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack my={2} gap={2}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <TextField {...field} size="small" label="Name" />
                  )}
                />
                <Controller
                  control={control}
                  name="age"
                  render={({ field }) => (
                    <TextField {...field} size="small" label="Age" />
                  )}
                />
                <Controller
                  control={control}
                  name="userName"
                  render={({ field }) => (
                    <TextField {...field} size="small" label="username" />
                  )}
                />
                <Controller
                  control={control}
                  name="nationality"
                  render={({ field }) => (
                    <TextField {...field} size="small" label="Nationality" />
                  )}
                />
              </Stack>
            </form>

            <Stack direction="row" gap={2} justifyContent="center">
              <LoadingButton variant="contained">Save</LoadingButton>
              <Button variant="outlined" onClick={toggleModalState}>
                Cancel
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Modal>
  );
};

export default CustomModal;
