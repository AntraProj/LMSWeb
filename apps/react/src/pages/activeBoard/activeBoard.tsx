import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import KanbanColumn from '../../components/kanban/KanbanColumn';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Task } from '../../types/Task';
import { PriorityFilter } from '../../types/Priority';

export const mockData: Task[] = [
    {
        id: 1,
        title: "Setup Vite Project",
        description: "Initialize the project using Vite, configure ESLint and Tailwind CSS.",
        priority: "High",
        storyPoints: 3,
        dueDate: "2026-02-10",
        assignee: "Alex Johnson",
        reporter: "Jane Smith",
        status: "todo",
    },
    {
        id: 2,
        title: "Create Authentication UI",
        description: "Design login and signup forms using MUI components.",
        priority: "Medium",
        storyPoints: 5,
        dueDate: "2026-02-12",
        assignee: "Michael Lee",
        reporter: "Jane Smith",
        status: "todo",
    },
    {
        id: 3,
        title: "Implement Dark Theme",
        description: "Add dark/light mode toggle and theme persistence.",
        priority: "Low",
        storyPoints: 2,
        dueDate: "2026-02-15",
        assignee: "Sophia Patel",
        reporter: "Alex Johnson",
        status: "todo",
    },
    {
        id: 4,
        title: "Kanban Board Layout",
        description: "Create columns and card components using MUI Box and Grid.",
        priority: "High",
        storyPoints: 8,
        dueDate: "2026-02-18",
        assignee: "David Kim",
        reporter: "Jane Smith",
        status: "inprogress",
    },
    {
        id: 5,
        title: "Drag & Drop Functionality",
        description: "Enable moving tasks between columns.",
        priority: "High",
        storyPoints: 13,
        dueDate: "2026-02-20",
        assignee: "Alex Johnson",
        reporter: "Sophia Patel",
        status: "inprogress",
    },
    {
        id: 6,
        title: "Project Repository Setup",
        description: "Initialize GitHub repo, add README and branch rules.",
        priority: "Low",
        storyPoints: 1,
        dueDate: "2026-02-05",
        assignee: "Jane Smith",
        reporter: "Jane Smith",
        status: "done",
    },
    {
        id: 7,
        title: "Install Dependencies",
        description: "Install React, MUI, Axios and configure project structure.",
        priority: "Medium",
        storyPoints: 2,
        dueDate: "2026-02-06",
        assignee: "Michael Lee",
        reporter: "Jane Smith",
        status: "done",
    },
];

const ActiveBoard = () => {
    const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("All");
    let tempMockData = [];
    const navigate = useNavigate();

    if (priorityFilter === "All") {
        tempMockData = mockData;
    } else {
        tempMockData = mockData.filter(story => story.priority === priorityFilter);
    }

    const todo: Task[] = tempMockData.filter(story => story.status === "todo");
    const inprogress: Task[] = tempMockData.filter(story => story.status === "inprogress");
    const done: Task[] = tempMockData.filter(story => story.status === "done");


    const handleChange = (event:SelectChangeEvent) => {
        setPriorityFilter(event.target.value as PriorityFilter);
    };

    return (
        <Box sx={{ bgcolor: "#0b0d10", minHeight: "100vh" }}>
            {/* Header with back button */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderBottom: "1px solid #23262b",
                }}
            >
                <IconButton
                    onClick={() => navigate('/')}
                    sx={{
                        color: "#e6e7eb",
                        "&:hover": { bgcolor: "#1f2227" }
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" fontWeight={700} color="#e6e7eb">
                    Active Board
                </Typography>
            </Box>

            {/* Filter  */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3, ml: 4 }}>
                <Typography variant="h6" sx={{ color: "#E4E4E7" }}>
                    Filter:
                </Typography>

                <FormControl size="small" sx={{ minWidth: 180 }}>
                    <InputLabel id="priority-filter-label">Priority</InputLabel>

                    <Select
                        labelId="priority-filter-label"
                        id="priority-filter"
                        value={priorityFilter}
                        label="Priority"
                        onChange={handleChange}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Kanban Board */}
            <Box
                sx={{
                    display: "flex",
                    gap: 3,
                    p: 4,
                }}
            >
                <KanbanColumn title="TO DO" tasks={todo} />
                <KanbanColumn title="IN PROGRESS" tasks={inprogress} />
                <KanbanColumn title="DONE" tasks={done} />
            </Box>
        </Box>
    )
}

export default ActiveBoard