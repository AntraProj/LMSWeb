import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";

import { useProjectMeta } from "../hooks/useProjectMeta";
import { CreateProjectFormState } from "../types";
import FormInput from "../../../SharedComponents/form/FormInput";
import FormSelect from "../../../SharedComponents/form/FormSelect";

interface Props {
  open: boolean;
  formState: CreateProjectFormState;
  setFormState: React.Dispatch<
    React.SetStateAction<CreateProjectFormState>
  >;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function CreateProjectDialog({
  open,
  formState,
  setFormState,
  onCancel,
  onSubmit,
}: Props) {
  const { workflows, admins, assignees, loading } =
    useProjectMeta();

  const handleChange = (
    name: keyof CreateProjectFormState,
    value: string
  ) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isSubmitDisabled =
    !formState.name || !formState.workflow;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 3, p: 3 },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          lineHeight: 1.3,
          color: "primary.dark",
          p: 0,
          mb: 2,
        }}
      >
        Create New Project
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Typography
          sx={{ fontSize: "14px", mb: 3, color: "text.secondary" }}
        >
          Fill in the details to create a new project.
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <FormInput
            label="Project Name"
            name="name"
            value={formState.name}
            placeholder="e.g. React LMS"
            onChange={(e) =>
              handleChange("name", e.target.value)
            }
          />

          <FormInput
            label="Description"
            name="description"
            multiline
            minRows={3}
            value={formState.description}
            placeholder="Brief overview of the project..."
            onChange={(e) =>
              handleChange("description", e.target.value)
            }
          />

          <FormSelect
            label="Workflow"
            name="workflow"
            value={formState.workflow}
            options={workflows}
            disabled={loading}
            onChange={(value) =>
              handleChange("workflow", value)
            }
          />

          <FormSelect
            label="Admins"
            name="admins"
            value={formState.admins}
            options={admins}
            disabled={loading}
            onChange={(value) =>
              handleChange("admins", value)
            }
          />

          <FormSelect
            label="Assignees"
            name="assignees"
            value={formState.assignees}
            options={assignees}
            disabled={loading}
            onChange={(value) =>
              handleChange("assignees", value)
            }
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ pt: 3 }}>
        <Button
          onClick={onCancel}
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            color: "text.secondary",
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={isSubmitDisabled}
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
          }}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

