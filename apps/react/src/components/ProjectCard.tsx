import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface Project {
  id: string;
  title: string;
  description: string;
  workflow?: string;
  admins?: string;
  assignees?: string;
  image: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ width: 320 }}>
      <CardMedia component="img" height="160" image={project.image} />

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={700}>
            {project.title}
          </Typography>

          <IconButton size="small" onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem disabled>
          Workflow: {project.workflow || "N/A"}
        </MenuItem>

        <MenuItem disabled>
          Admins: {project.admins || "N/A"}
        </MenuItem>

        <MenuItem disabled>
          Assignees: {project.assignees || "N/A"}
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseMenu}>
          Close
        </MenuItem>
      </Menu>
    </Card>
  );
}
