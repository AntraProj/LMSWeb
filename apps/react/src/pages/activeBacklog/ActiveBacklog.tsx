import { Typography } from '@mui/material'
import React from 'react'
import { Task } from '../../types/Task';
import BacklogCard from './BacklogCard';


const mockData: Task[] = [
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

const ActiveBacklog = () => {
    return (
        <div style={{ padding: "1rem" }}>
            {/* Backlog Heading */}
            <div>
                <Typography variant='h5' sx={{ color: "white" }}>Project Backlog</Typography>
                <Typography variant='h6' sx={{ color: "#71717C" }}>Manage and prioritize upcoming tasks.</Typography>
            </div>

            {/* Listing Product Backlogs */}
            <div style={{ paddingTop: "1rem" }}>
                {
                    mockData.map((backlog) => {
                        return <BacklogCard key={backlog.id} backlog={backlog} />
                    })
                }
            </div>
        </div>
    )
}

export default ActiveBacklog