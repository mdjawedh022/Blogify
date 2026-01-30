import React, { useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Avatar,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  DashboardOutlined,
  DescriptionOutlined,
  PeopleOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { logoutAdmin } from "../utils/auth";

const drawerWidth = 280;

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false); // For logout confirmation
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Open logout confirmation dialog
  const handleLogoutClick = () => setLogoutDialogOpen(true);

  // Confirm logout
  const handleConfirmLogout = () => {
    setLogoutDialogOpen(false);
    logoutAdmin();
    toast.success("Logged out successfully!");
    navigate("/admin/login", { replace: true });
  };
  // Cancel logout
  const handleCancelLogout = () => setLogoutDialogOpen(false);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/admin/dashboard",
    },
    {
      text: "Manage Posts",
      icon: <DescriptionOutlined />,
      path: "/admin/posts",
    },
    { text: "Manage Users", icon: <PeopleOutlined />, path: "/admin/users" },
    { text: "Settings", icon: <SettingsOutlined />, path: "/admin/settings" },
  ];

  const drawer = (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2 }}
    >
      {/* Brand Logo Section */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ px: 2, py: 3 }}
      >
        <Avatar
          sx={{ bgcolor: "primary.main", borderRadius: 1.5, fontWeight: 800 }}
          variant="square"
        >
          A
        </Avatar>
        <Typography
          variant="h6"
          fontWeight={800}
          color="text.primary"
          letterSpacing="-0.5px"
        >
          CORE ADMIN
        </Typography>
      </Stack>

      {/* Navigation List */}
      <List sx={{ flexGrow: 1, mt: 2 }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                mb: 1,
                borderRadius: 3,
                py: 1.2,
                transition: "0.3s",
                bgcolor: active ? "primary.main" : "transparent",
                color: active ? "white" : "text.secondary",
                "&:hover": {
                  bgcolor: active ? "primary.dark" : "rgba(0, 0, 0, 0.04)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemIcon
                sx={{ color: active ? "white" : "inherit", minWidth: 45 }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: active ? 700 : 500,
                  fontSize: "0.9rem",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Bottom Profile / Logout Section */}
      <Box sx={{ p: 1, borderTop: "1px solid", borderColor: "divider", pt: 2 }}>
        <ListItemButton
          onClick={handleLogoutClick}
          sx={{ borderRadius: 3, color: "error.main" }}
        >
          <ListItemIcon sx={{ color: "error.main", minWidth: 45 }}>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontWeight: 600 }}
          />
        </ListItemButton>
      </Box>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onClose={handleCancelLogout}>
        <DialogTitle>Are you sure you want to logout?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelLogout} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

  return (
    <>
      <Toaster position="top-right" />
      <Box sx={{ display: "flex", bgcolor: "#f4f7fe", minHeight: "100vh" }}>
        <CssBaseline />

        {/* AppBar */}
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "rgba(244, 247, 254, 0.8)",
            backdropFilter: "blur(8px)",
            color: "text.primary",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center">
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={500}
              >
                Pages /{" "}
                <span style={{ color: "#1b254b", fontWeight: 700 }}>
                  {location.pathname.split("/").pop()}
                </span>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src="https://i.pravatar.cc/150"
                sx={{ width: 35, height: 35 }}
              />
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { width: drawerWidth, border: "none" },
            }}
          >
            {drawer}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                border: "none",
                bgcolor: "transparent",
              },
            }}
            open
          >
            <Box
              sx={{
                height: "calc(100% - 32px)",
                m: 2,
                bgcolor: "white",
                borderRadius: 5,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
              }}
            >
              {drawer}
            </Box>
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 4 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: 8,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
