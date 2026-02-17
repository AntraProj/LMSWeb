import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NewProjectModal } from "./NewProjectModal";

export function AppHeader() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const isTrainer = user.role === "trainer";

  const handleCreateProject = async (data: {
    title: string;
    description: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Project created: ", data);
  };

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ px: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "#fff",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              A
            </Box>

            <Typography fontWeight={700}>
              Antra LMS
            </Typography>
          </Box>

          {isTrainer && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ borderRadius: 999 }}
              onClick={() => setOpen(true)}
            >
              New Project
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <NewProjectModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreateProject}
      />
    </>
  );
}
