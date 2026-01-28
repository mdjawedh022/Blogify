import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  PersonOutline,
  NotificationsNone,
  LockOutlined,
  PhotoCamera,
  VerifiedUserOutlined,
} from "@mui/icons-material";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Reusable Sidebar Item
  const SidebarItem = ({ icon, label, id }) => (
    <Button
      fullWidth
      onClick={() => setActiveTab(id)}
      startIcon={icon}
      sx={{
        justifyContent: "flex-start",
        py: 1.5,
        px: 2,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        color: activeTab === id ? "primary.main" : "text.secondary",
        bgcolor: activeTab === id ? "primary.lighter" : "transparent",
        "&:hover": {
          bgcolor: activeTab === id ? "primary.lighter" : "#f1f5f9",
        },
      }}
    >
      {label}
    </Button>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight={900} mb={4} color="#1e293b">
        Settings
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {/* Navigation Sidebar */}
        <Box sx={{ width: { xs: "100%", md: 240 } }}>
          <Stack spacing={1}>
            <SidebarItem
              id="profile"
              label="General"
              icon={<PersonOutline />}
            />
            <SidebarItem
              id="security"
              label="Security"
              icon={<LockOutlined />}
            />
            <SidebarItem
              id="notif"
              label="Notifications"
              icon={<NotificationsNone />}
            />
          </Stack>
        </Box>

        {/* Content Area */}
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            border: "1px solid #e2e8f0",
          }}
        >
          {activeTab === "profile" && (
            <Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                Public Profile
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={4}>
                This information will be displayed publicly.
              </Typography>

              {/* Avatar Section */}
              <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                <Box sx={{ position: "relative" }}>
                  <Avatar
                    src="https://i.pravatar.cc/300"
                    sx={{
                      width: 80,
                      height: 80,
                      border: "4px solid #fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "white",
                      boxShadow: 1,
                      "&:hover": { bgcolor: "#f1f5f9" },
                    }}
                  >
                    <PhotoCamera fontSize="small" />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>
                    Profile Picture
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    JPG, GIF or PNG. Max size of 2MB
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ mb: 4 }} />

              {/* Form Section */}
              <Stack spacing={3} maxWidth={500}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField fullWidth label="First Name" defaultValue="Jane" />
                  <TextField fullWidth label="Last Name" defaultValue="Doe" />
                </Stack>
                <TextField
                  fullWidth
                  label="Email Address"
                  defaultValue="jane.doe@example.com"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Bio"
                  placeholder="Tell us about yourself..."
                />

                <Box pt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Stack>
            </Box>
          )}

          {activeTab === "security" && (
            <Box>
              <Typography variant="h6" fontWeight={700} mb={3}>
                Password & Security
              </Typography>
              <Stack spacing={3} maxWidth={500}>
                <TextField fullWidth type="password" label="Current Password" />
                <TextField fullWidth type="password" label="New Password" />
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm New Password"
                />

                <Box
                  sx={{
                    bgcolor: "#f1f5f9",
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <VerifiedUserOutlined color="primary" />
                  <Typography variant="body2">
                    Two-factor authentication is currently <b>Disabled</b>.
                  </Typography>
                </Box>

                <Box pt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Update Password
                  </Button>
                </Box>
              </Stack>
            </Box>
          )}
        </Paper>
      </Stack>
    </Box>
  );
};

export default Settings;
