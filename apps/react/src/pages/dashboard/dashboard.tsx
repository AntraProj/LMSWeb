import { useState } from "react";
import { Box } from "@mui/material";
import { AppHeader } from "../../components/AppHeader";
import { ProjectGrid } from "../../components/ProjectGrid";
import { AuthProvider } from "../../context/AuthContext";
import { CreateProjectFormState } from "../createProject/types";

const initialProjects = [
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
  const [projects, setProjects] = useState(initialProjects);

  const handleCreateProject = (formState: CreateProjectFormState) => {
    const newProject = {
      id: Date.now().toString(),
      title: formState.name,
      description: formState.description,
      workflow: formState.workflow,
      admins: formState.admins,
      assignees: formState.assignees,
      image: "/assets/test.png",
    };

    setProjects((prev) => [...prev, newProject]);
  };


  return (
    <AuthProvider>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <AppHeader onCreateProject={handleCreateProject} />
        <ProjectGrid projects={projects} />
      </Box>
    </AuthProvider>
  );
}
