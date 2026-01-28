"use client";
import React, { useState,} from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  alpha,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll to shrink the navbar or change opacity
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: trigger ? 10 : 20,
          left: 0,
          right: 0,
          mx: "auto",
          width: trigger ? { xs: "100%", md: "90%" } : { xs: "95%", md: "85%" },
          borderRadius: trigger ? { xs: 0, md: "100px" } : "100px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: alpha("#ffffff", 0.8),
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)", // Safari support
          border: `1px solid ${alpha("#e2e8f0", 0.6)}`,
          boxShadow: trigger
            ? "0 10px 30px -10px rgba(0,0,0,0.1)"
            : "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
            py: 0.5,
          }}
        >
          {/* LOGO */}
          <Box
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              transition: "0.3s",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <img
              src="/B-only.png"
              alt="Logo"
              style={{ height: 45, width: "auto",borderRadius:"60px"  }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: "#0f172a",
                ml: 1,
                letterSpacing: -1,
                display: { xs: "none", sm: "block" },
              }}
            >
              BLOGIFY
            </Typography>
          </Box>

          {/* DESKTOP NAV LINKS */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
              bgcolor: alpha("#f1f5f9", 0.5),
              px: 1,
              py: 0.5,
              borderRadius: "50px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 14,
                      px: 3,
                      py: 1,
                      borderRadius: "50px",
                      color: isActive ? "#2563eb" : "#64748b",
                      transition: "all 0.3s ease",
                      position: "relative",
                      backgroundColor: isActive ? "#ffffff" : "transparent",
                      boxShadow: isActive
                        ? "0 4px 12px rgba(0,0,0,0.05)"
                        : "none",
                      "&:hover": {
                        color: "#2563eb",
                        bgcolor: isActive ? "#ffffff" : alpha("#fff", 0.5),
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </Box>

          {/* ACTIONS */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", sm: "flex" },
                backgroundColor: "#0f172a",
                color: "#fff",
                textTransform: "none",
                borderRadius: "50px",
                fontWeight: 700,
                px: 4,
                boxShadow: "0 10px 20px -5px rgba(15,23,42,0.3)",
                "&:hover": {
                  backgroundColor: "#2563eb",
                  transform: "translateY(-2px)",
                },
                transition: "0.3s",
              }}
              onClick={() => navigate("/admin/login")}
            >
              Sign in
            </Button>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                bgcolor: alpha("#2563eb", 0.1),
                color: "#2563eb",
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="top" // Changed to Top for a more modern mobile overlay feel
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "0 0 20px 20px",
            p: 3,
            backgroundColor: alpha("#fff", 0.95),
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ textAlign: "center" }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.label}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, mb: 1, justifyContent: "center" }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              />
            </ListItemButton>
          ))}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5, borderRadius: "50px", bgcolor: "#2563eb" }}
            onClick={() => {
              navigate("/admin/login");
              setDrawerOpen(false);
            }}
          >
            Sign in
          </Button>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
