export interface Task {
    id: number;
    title: string;
    description: string;
    priority: "Low" | "Medium" | "High";
    storyPoints: number;
    dueDate: string;
    assignee: String;
    reporter: string;
    status: "todo" | "inprogress" | "done";
}
