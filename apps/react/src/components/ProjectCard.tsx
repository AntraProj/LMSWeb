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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (
    _event: object,
    _reason: "backdropClick" | "escapeKeyDown"
  ) => {
    setAnchorEl(null);
  };

  const handleCloseMenuItem = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleCardClick = (projectId: number | string) => {
    console.log(`/project/${projectId}`)
    navigate(`/project/${projectId}`);
  };

  return (
    <Card
      sx={{
        width: 320,
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
      onClick={()=>{handleCardClick(project.id)}}
    >
      <CardMedia component="img" height="160" image={project.image} />

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={700}>{project.title}</Typography>

          <IconButton
            size="small"
            onClick={handleOpenMenu}
            data-menu-trigger="true"
          >
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
        onClick={(e) => e.stopPropagation()}
      >
        <MenuItem disabled>Workflow: {project.workflow || "N/A"}</MenuItem>
        <MenuItem disabled>Admins: {project.admins || "N/A"}</MenuItem>
        <MenuItem disabled>Assignees: {project.assignees || "N/A"}</MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseMenuItem}>Close</MenuItem>
      </Menu>
    </Card>
  );
}