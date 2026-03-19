import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
  Card,
  CardContent,
  IconButton,
  Typography,
  Divider
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (data: {
    title: string;
    description: string;
    priority: string;
    status: string;
  }) => void;
}

export default function CreateAssignmentModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [files, setFiles] = useState<File[]>([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const valid = title.trim().length > 0;

  const handleSubmit = () => {
    onCreate({
        title,
        description,
        priority,
        status: "Backlog",
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setFiles([]);
    setComments([]);
    };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Create Assignment
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={3}>

          {/* DETAILS SECTION */}
          <Card sx={{ bgcolor: "background.paper" }}>
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  label="Assignment Title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  error={!title}
                  helperText={!title ? "Title is required" : ""}
                  fullWidth
                />

                <TextField
                  label="Description"
                  multiline
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                />

                <TextField
                  select
                  label="Priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </TextField>
              </Stack>
            </CardContent>
          </Card>

          {/* ATTACHMENTS */}
          <Card sx={{ bgcolor: "background.paper" }}>
            <CardContent>
              <Typography variant="h6">Attachments</Typography>
              <Divider sx={{ my: 1 }} />

              <Button variant="outlined" component="label">
                Upload Files
                <input
                  hidden
                  type="file"
                  multiple
                  onChange={(e) =>
                    setFiles(
                      e.target.files
                        ? Array.from(e.target.files)
                        : []
                    )
                  }
                />
              </Button>

              {files.length === 0 && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  No attachments added
                </Typography>
              )}

              {files.map((file, i) => (
                <Stack
                  key={i}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="body2">
                    {file.name}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      setFiles(
                        files.filter((_, index) => index !== i)
                      )
                    }
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              ))}
            </CardContent>
          </Card>

          {/* COMMENTS */}
          <Card sx={{ bgcolor: "background.paper" }}>
            <CardContent>
              <Typography variant="h6">Comments</Typography>
              <Divider sx={{ my: 1 }} />

              <TextField
                fullWidth
                label="Add Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <Button
                sx={{ mt: 1 }}
                onClick={() => {
                  if (comment.trim()) {
                    setComments([...comments, comment]);
                    setComment("");
                  }
                }}
              >
                Add Comment
              </Button>

              {comments.length === 0 && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  No comments yet
                </Typography>
              )}

              {comments.map((c, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    mt: 1,
                    p: 1,
                    bgcolor: "#1e1e1e",
                    borderRadius: 1
                  }}
                >
                  {c}
                </Typography>
              ))}
            </CardContent>
          </Card>

        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          disabled={!valid}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}