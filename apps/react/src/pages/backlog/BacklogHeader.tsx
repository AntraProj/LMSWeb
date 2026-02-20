import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
}

export default function BacklogHeader({ title, subtitle }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = location.pathname.startsWith("/active") ? 1 : 0;

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(newValue === 0 ? "/backlog" : "/active");
  };

  return (
    <Box sx={{ mb: 2 }}>
      {/* Title + subtitle */}
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>

      {/* Tabs row + SINGLE bottom border */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={currentTab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            minHeight: 44,
            "& .MuiTab-root": { textTransform: "none", minHeight: 44 },
          }}
        >
          <Tab label="Backlog" />
          <Tab label="Active Dashboard" />
        </Tabs>
      </Box>
    </Box>
  );
}
