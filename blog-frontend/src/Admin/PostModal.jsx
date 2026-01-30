import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createPost, updateBlog } from "../redux/blog/blogActions";

const PostModal = ({ open, onClose, editData }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
  });

  /* LOAD EDIT DATA */
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({ title: "", content: "", published: false });
    }
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = () => {
  if (!formData.title || !formData.content) {
    toast.error("All fields required");
    return;
  }

  if (editData) {
    dispatch(updateBlog(editData.id, formData));
    toast.success("Post updated");
  } else {
    dispatch(createPost(formData));
    toast.success("Post created");
  }

  onClose();
};


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{editData ? "Edit Post" : "Create New Post"}</DialogTitle>

      <DialogContent>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={handleChange}
        />

        <TextField
          label="Content"
          name="content"
          multiline
          rows={5}
          fullWidth
          margin="normal"
          value={formData.content}
          onChange={handleChange}
        />

        <FormControlLabel
          control={
            <Switch
              checked={formData.published}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  published: e.target.checked,
                })
              }
            />
          }
          label={formData.published ? "Published" : "Draft"}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {editData ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostModal;
