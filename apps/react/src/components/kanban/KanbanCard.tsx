import { Box, Card, Typography, Divider, Chip, Avatar } from "@mui/material";

const KanbanCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        mb: 2,
        width: "100%",
        maxWidth: 420,
        mx: "auto",
        bgcolor: "#18181B",
        border: "1px solid #27272A",
        borderRadius: "16px",
        transition: "0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.35)",
          borderColor: "#3B82F6",
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, mb: 1, color: "#F4F4F5" }}
      >
        Setup Vite Project
      </Typography>

      {/* Priority + Points */}
      <Box sx={{ display: "flex", gap: 1.2, mb: 2 }}>
        <Chip
          label="HIGH"
          size="small"
          sx={{
            bgcolor: "rgba(239,68,68,0.15)",
            color: "#EF4444",
            fontWeight: 600,
          }}
        />
        <Chip
          label="3 PTS"
          size="small"
          sx={{
            bgcolor: "#27272A",
            color: "#A1A1AA",
            fontWeight: 500,
          }}
        />
      </Box>

      <Divider sx={{ borderColor: "#27272A" }} />

      {/* Footer */}
      <Box
        sx={{
          pt: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#A1A1AA", fontSize: "0.9rem" }}>
          Feb 10, 2026
        </Typography>

        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#19223E",
            color: "#51A2FF",
            fontWeight: 600,
          }}
        >
          A
        </Avatar>
      </Box>
    </Card>
  );
};

export default KanbanCard;