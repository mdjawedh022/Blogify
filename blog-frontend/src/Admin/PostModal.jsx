import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const PostModal = ({ open, mode, post, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const isView = mode === "view";

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    if (post) setFormData(post);
  }, [post]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ fontWeight: 800 }}>
        {mode === "add" && "Add New Post"}
        {mode === "edit" && "Edit Post"}
        {mode === "view" && "Post Details"}
        <IconButton onClick={onClose} sx={{ float: "right" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={2}>
          <TextField
            label="Post Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            disabled={isView}
          />
          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            fullWidth
            disabled={isView}
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            disabled={isView}
          />
          <TextField
            type="date"
            label="Publish Date"
            name="date"
            InputLabelProps={{ shrink: true }}
            value={formData.date}
            onChange={handleChange}
            fullWidth
            disabled={isView}
          />
          <TextField
            label="Content"
            name="content"
            multiline
            minRows={4}
            value={formData.content}
            onChange={handleChange}
            fullWidth
            disabled={isView}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Close</Button>
        {!isView && (
          <Button variant="contained" sx={{ fontWeight: 700 }}>
            Save
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default PostModal;
