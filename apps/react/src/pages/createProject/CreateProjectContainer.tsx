import { useState } from "react";
import { Button } from "@mui/material";
import CreateProjectDialog from "./components/CreateProjectDialog";
import { CreateProjectFormState } from "./types";

const getDefaultFormState = (): CreateProjectFormState => ({
  name: "",
  description: "",
  workflow: "",
  admins: "",
  assignees: "",
});

export default function CreateProjectContainer() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] =
    useState<CreateProjectFormState>(getDefaultFormState());

  const handleOpen = () => {
    setFormState(getDefaultFormState());
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Saving project:", formState);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        Create Project
      </Button>

      <CreateProjectDialog
        open={open}
        formState={formState}
        setFormState={setFormState}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </>
  );
}