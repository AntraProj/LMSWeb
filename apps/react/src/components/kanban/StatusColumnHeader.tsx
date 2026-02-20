import { Box, Typography, IconButton, Chip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  title: string;
  count: number;
};

const StatusColumnHeader = ({ title, count }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        bgcolor: "#111315",
        borderBottom: "1px solid #23262b",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#e6e7eb",
            letterSpacing: 0.3,
          }}
        >
          {title}
        </Typography>
        <Chip
          label={count}
          size="small"
          sx={{
            bgcolor: "#1a1d22",
            color: "#9aa0a6",
            fontSize: 12,
            height: 22,
            fontWeight: 500,
          }}
        />
      </Box>
      <IconButton
        size="small"
        sx={{
          color: "#9aa0a6",
          "&:hover": {
            bgcolor: "#1f2227",
          },
        }}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default StatusColumnHeader;