import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
    Typography,
    IconButton,
    Checkbox,
    Divider,
    Box
} from '@mui/material';
import {
    useParams,
    useNavigate,
    useLocation,
    Outlet
} from 'react-router-dom';
import ActiveBoard from '../activeBoard/ActiveBoard';
import ActiveBacklog from '../activeBacklog/ActiveBacklog';

interface Tab {
    tabId: number;
    tabName: string;
    tabIcon: React.ReactNode;
    path: string;
}

const availableTabs: Tab[] = [
    {
        tabId: 1,
        tabName: "Backlog",
        tabIcon: <Checkbox />,
        path: ""
    },
    {
        tabId: 2,
        tabName: "Active Dashboard",
        tabIcon: <DashboardIcon />,
        path: "activeboard"
    }
];

const ActiveProject: React.FC = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSwitch = (tabIdx: number) => {
        setSelectedTab(tabIdx);
    };

    return (
        <div style={{margin:'1rem'}}>

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
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="#e6e7eb">
                    {projectId}
                </Typography>
            </Box>

            <Divider />

            {/* Tabs */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    margin: "1rem 2rem"
                }}
            >
                {availableTabs.map((tab, idx) => {
                    const isActive = tab.tabName.toLowerCase()===availableTabs[selectedTab].tabName.toLowerCase();

                    return (
                        <Typography
                            key={tab.tabId}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                cursor: "pointer",
                                color: isActive ? "#51A2FF" : "#71717C",
                                fontWeight: 600
                            }}
                            onClick={() => handleTabSwitch(idx)}
                        >
                            {tab.tabIcon}
                            {tab.tabName.toUpperCase()}
                        </Typography>
                    );
                })}
            </div>

            <Divider />

            {/* Nested route renders here */}
            <Outlet />

             {selectedTab===0 && <ActiveBacklog />}
            {selectedTab===1 && <ActiveBoard />}

        </div>
    );
};

export default ActiveProject;