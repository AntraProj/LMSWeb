import {
    Dialog,
    DialogContent,
} from "@mui/material";
interface Props {
    open: boolean;
    onClose: () => void;
    onCreate: (data: { title: string; description: string }) => void;
}

export function NewProjectModal({ open, onClose, onCreate }: Props) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent >

            </DialogContent>
        </Dialog>
    );
}
