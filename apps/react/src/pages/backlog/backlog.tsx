import { Box, Button, Container, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BacklogHeader from "./BacklogHeader";

export default function BacklogPage() {
  const handleCreateAssignment = () => {
    // later: open Create Assignment modal (Screen 5)
    console.log("Create Assignment clicked");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header + Tabs */}
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, alignItems: "flex-start" }}>
        <Box sx={{ flex: 1 }}>
          <BacklogHeader
            title="Backlog"
            subtitle="Project backlog dashboard"
          />
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateAssignment}
          sx={{ height: 44, borderRadius: 2, whiteSpace: "nowrap" }}
        >
          Create Assignment
        </Button>
      </Box>
      
      <Paper
        variant="outlined"
        sx={{
          mt: 2,
          p: 2,
          minHeight: 420,
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Backlog content will render here (table/cards in later tickets).
        </Typography>
      </Paper>
    </Container>
  );
}
