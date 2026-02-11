import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/active");
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
        }
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="160"
        image={project.image}
      />

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={700}>
            {project.title}
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
