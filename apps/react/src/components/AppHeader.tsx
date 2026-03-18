import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import CreateProjectContainer from "../pages/createProject/CreateProjectContainer";
import { CreateProjectFormState } from "../pages/createProject/types";

interface Props {
  onCreateProject: (data: CreateProjectFormState) => void;
}


export function AppHeader({ onCreateProject }: Props) {
  const { user } = useAuth();
  const isTrainer = user?.role === "trainer";

  return (
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

          <Typography fontWeight={700}>Antra LMS</Typography>
        </Box>

        {isTrainer && (
          <CreateProjectContainer onCreateProject={onCreateProject} />
        )}
      </Toolbar>
    </AppBar>
  );
}
