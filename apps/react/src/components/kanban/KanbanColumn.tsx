import { Box } from "@mui/material";
import StatusColumnHeader from "./StatusColumnHeader";
import KanbanCard from "./KanbanCard";
import type { Task } from "../../types/Task";

interface Props {
  title: string;
  tasks: Task[];
}
export default function KanbanColumn({ title, tasks }: Props) {
  return (
    <Box
      sx={{
        width: 320,
        backgroundColor: "#101012",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* REUSABLE HEADER (ACTV-006 USED HERE) */}
      <StatusColumnHeader title={title} count={tasks.length} />

      {/* column body (empty for now) */}
      <Box sx={{ flex: 1, p: 2,minHeight:"80vh" }} >
       {
        tasks.map(task=>{
          return <KanbanCard key={task.id} task={task}/>
        })
       }
      </Box>
    </Box>
  );
}
