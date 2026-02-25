import React from 'react'
import { Task } from '../../types/Task'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';
import { priorityConfig } from '../../constants/priorityConfig';

interface TaskProps {
    backlog: Task;
}

const BacklogCard = ({ backlog }: TaskProps) => {

    const isDone = backlog.status.toLowerCase() === 'done';

    return (
        <div style={{
            display:'flex',
            gap:'2rem',
            alignItems:'center',
                backgroundColor: "#111315",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            color: "white"
        }}>
            {/* Status Icon */}
            <div style={{backgroundColor:'#18181B', padding:'10px', borderRadius:'10px', display:'grid', placeContent:'center'}}>
                {isDone
                    ? <CheckCircleOutlineIcon sx={{ color: "#22c55e" }} />
                    : <AccessTimeIcon sx={{ color: "#facc15" }} />
                }
            </div>

            <div>
                {/* Title */}
            <Typography variant='h6' sx={{ fontWeight: 700 }}>
                {backlog.title}
            </Typography>

            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                {/* Priority */}
            <Typography variant='body1'>
                <span style={{ color: priorityConfig[backlog.priority].color }}>
                    <ErrorOutlineIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    {backlog.priority}
                </span>
            </Typography>

            {/* Assignee */}
            <Typography variant='body2' sx={{ color: "#9ca3af" }}>
                Assigned to: {backlog.assignee}
            </Typography>
            </div>
            </div>
        </div>
    )
}

export default BacklogCard;