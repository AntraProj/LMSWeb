import { Container, Paper, Typography } from "@mui/material";
import BacklogHeader from "../backlog/BacklogHeader";

export default function ActivePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header + Tabs */}
      <BacklogHeader
        title="Active"
        subtitle="Work in progress board"
      />

      {/* Content */}
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
          Active board will render here (columns/cards in later tickets).
        </Typography>
      </Paper>
    </Container>
  );
}
