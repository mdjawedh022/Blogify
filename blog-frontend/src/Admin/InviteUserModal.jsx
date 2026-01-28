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

const InviteUserModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Invite Team Member</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Email Address" fullWidth />

          <TextField select label="Role" fullWidth defaultValue="Editor">
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Viewer">Viewer</MenuItem>
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">Send Invite</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InviteUserModal;
