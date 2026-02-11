import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import KanbanColumn from '../../components/kanban/KanbanColumn';


const mockData = {
    todo: [{ id: 1 }, { id: 2 }, { id: 3 }],
    inprogress: [{ id: 4 }],
    done: [{ id: 5 }],
}

const ActiveBoard = () => {
    const navigate = useNavigate();

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

            {/* Kanban Board */}
            <Box
                sx={{
                    display: "flex",
                    gap: 3,
                    p: 4,
                }}
            >
                <KanbanColumn title="TO DO" tasks={mockData.todo} />
                <KanbanColumn title="IN PROGRESS" tasks={mockData.inprogress} />
                <KanbanColumn title="DONE" tasks={mockData.done} />
            </Box>
        </Box>
    )
}

export default ActiveBoard