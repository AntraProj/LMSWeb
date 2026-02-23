import { Box, Button, Container, Paper, Typography, Stack, Card, CardContent, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BacklogHeader from "./BacklogHeader";
import CreateAssignmentModal from "./CreateAssignmentModal";
import { useState } from "react";

interface Assignment {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: string;
}

export default function BacklogPage() {
  const [open, setOpen] = useState(false);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const handleCreateAssignment = () => {
    // later: open Create Assignment modal (Screen 5)
    setOpen(true);
    console.log("Create Assignment clicked");
  };

  const handleAddAssignment = (assignment: Omit<Assignment, "id">) => {
    const newAssignment: Assignment = {
      ...assignment,
      id: Date.now(),
    };

    setAssignments((prev) => [...prev, newAssignment]);
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
          p: 3,
          minHeight: 420,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        {assignments.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No assignments yet.
          </Typography>
        ) : (
          <Stack spacing={2}>
            {assignments.map((assignment) => (
              <Card
                key={assignment.id}
                sx={{
                  bgcolor: "#1a1c20",
                  border: "1px solid #2a2d33",
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6">
                      {assignment.title}
                    </Typography>

                    <Chip
                      label={assignment.priority}
                      color={
                        assignment.priority === "High"
                          ? "error"
                          : assignment.priority === "Medium"
                          ? "warning"
                          : "default"
                      }
                      size="small"
                    />
                  </Stack>

                  {assignment.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {assignment.description}
                    </Typography>
                  )}

                  <Typography
                    variant="caption"
                    sx={{ mt: 1, display: "block", color: "#888" }}
                  >
                    Status: {assignment.status}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Paper>

      <CreateAssignmentModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={(data) => {
          handleAddAssignment(data);
          setOpen(false);
        }}
      />
    </Container>
  );
}
