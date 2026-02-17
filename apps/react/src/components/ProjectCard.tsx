import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ width: 320 }}>
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
