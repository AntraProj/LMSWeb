import { Box } from "@mui/material";
import { ProjectCard, Project } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <Box sx={{ display: "flex", gap: 4, px: 4, py: 4 }}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </Box>
  );
}
