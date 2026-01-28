import React, { useState } from "react";
import {
  Typography,
  Box,
  Stack,
  Avatar,
  IconButton,
  Tooltip,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import {
  DeleteOutline,
  EditTwoTone,
  AddCircleOutline,
  MailOutline,
  MoreVert,
  ShieldOutlined,
} from "@mui/icons-material";

import InviteUserModal from "./InviteUserModal";
import EditUserModal from "./EditUserModal";

const statusMap = {
  Active: { color: "#22c55e" },
  Away: { color: "#f59e0b" },
  Offline: { color: "#9ca3af" },
};

const Users = () => {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Alex Rivera",
      email: "alex@design.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@tech.io",
      role: "Editor",
      status: "Away",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@ops.net",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      name: "Elena Gomez",
      email: "elena@dev.com",
      role: "Admin",
      status: "Offline",
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1100, mx: "auto" }}>
      {/* Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={900}>
            Team Members
          </Typography>
          <Typography color="text.secondary">
            You have {users.length} teammates in this workspace.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddCircleOutline />}
          onClick={() => setInviteOpen(true)}
          sx={{
            borderRadius: 3,
            px: 3,
            fontWeight: 600,
            textTransform: "none",
            alignSelf: { xs: "flex-start", sm: "center" },
          }}
        >
          Invite
        </Button>
      </Stack>

      {/* User Cards */}
      <Stack spacing={2}>
        {users.map((user) => (
          <Paper
            key={user.id}
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 4,
              border: "1px solid #eef2f7",
              transition: "0.25s",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems={{ md: "center" }}
              justifyContent="space-between"
            >
              {/* Left */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box position="relative">
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "#6366f1",
                      fontWeight: 700,
                    }}
                  >
                    {user.name[0]}
                  </Avatar>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      bgcolor: statusMap[user.status].color,
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      border: "2px solid white",
                    }}
                  />
                </Box>

                <Box>
                  <Typography fontWeight={700}>{user.name}</Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <MailOutline sx={{ fontSize: 14 }} />
                    <Typography variant="caption" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>

              {/* Middle */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                flexWrap="wrap"
              >
                <Chip
                  icon={<ShieldOutlined sx={{ fontSize: 16 }} />}
                  label={user.role}
                  sx={{
                    bgcolor: "#f1f5f9",
                    fontWeight: 600,
                  }}
                />

                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: statusMap[user.status].color,
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    color={statusMap[user.status].color}
                  >
                    {user.status}
                  </Typography>
                </Stack>
              </Stack>

              {/* Actions */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <Tooltip title="Edit">
                  <IconButton onClick={() => setEditUser(user)}>
                    <EditTwoTone sx={{ color: "#6366f1" }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteOutline sx={{ color: "#ef4444" }} />
                  </IconButton>
                </Tooltip>

                <IconButton>
                  <MoreVert />
                </IconButton>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>

      {/* Modals */}
      <InviteUserModal open={inviteOpen} onClose={() => setInviteOpen(false)} />
      <EditUserModal
        open={!!editUser}
        user={editUser}
        onClose={() => setEditUser(null)}
      />
    </Box>
  );
};

export default Users;
