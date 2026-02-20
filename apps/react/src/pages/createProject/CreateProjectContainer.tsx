import { useState } from "react";
import { Button } from "@mui/material";
import CreateProjectDialog from "./components/CreateProjectDialog";
import { CreateProjectFormState } from "./types";
import { useProjectMeta } from "./hooks/useProjectMeta";

interface Props {
  onCreateProject: (data: CreateProjectFormState) => void;
}

const getDefaultFormState = (): CreateProjectFormState => ({
  name: "",
  description: "",
  workflow: "",
  admins: "",
  assignees: "",
});

export default function CreateProjectContainer({
  onCreateProject,
}: Props) {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] =
    useState<CreateProjectFormState>(getDefaultFormState());
  const { workflows, admins, assignees } = useProjectMeta();

  const handleOpen = () => {
    setFormState(getDefaultFormState());
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const selectedWorkflow =
      workflows.find((w) => w.value === formState.workflow)?.label ?? formState.workflow;

    const selectedAdmin =
      admins.find((a) => a.value === formState.admins)?.label ?? formState.admins;

    const selectedAssignee =
      assignees.find((a) => a.value === formState.assignees)?.label ?? formState.assignees;


    onCreateProject({
      ...formState,
      workflow: selectedWorkflow,
      admins: selectedAdmin,
      assignees: selectedAssignee,
    });

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