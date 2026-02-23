import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AppHeader } from "../../components/AppHeader";
import { ProjectGrid } from "../../components/ProjectGrid";
import { AuthProvider } from "../../context/AuthContext";
import { CreateProjectFormState } from "../createProject/types";

const STORAGE_KEY = "demo_projects_v1";

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
  const [projects, setProjects] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProjects;

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

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