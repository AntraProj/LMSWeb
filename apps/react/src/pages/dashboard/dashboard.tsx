import { Box } from "@mui/material";
import { AppHeader } from "../../components/AppHeader";
import { ProjectGrid } from "../../components/ProjectGrid";

const mockProjects = [
  {
    id: "react",
    title: "React",
    description: "React learning program",
    image: "/assets/test.png",
  },
  {
    id: "angular",
    title: "Angular",
    description: "Angular learning program",
    image: "/assets/test.png",
  },
];

export default function Dashboard() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppHeader />
      <ProjectGrid projects={mockProjects} />
    </Box>
  );
}
