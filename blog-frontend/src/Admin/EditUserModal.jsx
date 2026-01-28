import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

const EditUserModal = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Name" defaultValue={user.name} fullWidth />
          <TextField label="Email" defaultValue={user.email} fullWidth />

          <TextField select label="Role" defaultValue={user.role} fullWidth>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Viewer">Viewer</MenuItem>
          </TextField>

          <TextField select label="Status" defaultValue={user.status} fullWidth>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Away">Away</MenuItem>
            <MenuItem value="Offline">Offline</MenuItem>
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;
