export interface Task {
    id: number;
    title: string;
    description: string;
    priority: "Low" | "Medium" | "High";
    storyPoints: number;
    dueDate: string;
    assignee: string;
    reporter: string;
    status: "todo" | "inprogress" | "done";
}
