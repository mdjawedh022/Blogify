import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={6}
        sx={{
          top: 20,
          left: 0,
          right: 0,
          mx: "auto",
          width: { xs: "95%", sm: "90%", md: "80%" },
          borderRadius: "50px",
          backgroundColor: "#fff",
          border: "1px solid #eee",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          {/* LOGO + WEBSITE NAME */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "1px" }}>
            <img src="/B-only.png" alt="Blogify Logo" style={{ height: 70 }} />
            {/* <Typography
              sx={{
                fontSize: 22,
                fontWeight: 700,
                color: "#2563eb",
              }}
            >
              Blogify
            </Typography> */}
          </Box>

          {/* DESKTOP NAV LINKS */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Link to={link.path} style={{ textDecoration: "none" }}>
                <Typography
                  key={link.label}
                  sx={{
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#555",
                    cursor: "pointer",
                    position: "relative",
                    "&:hover": {
                      color: "#2563eb",
                    },
                    "&:after": {
                      content: '""',
                      display: "block",
                      height: "2px",
                      width: 0,
                      backgroundColor: "#2563eb",
                      transition: "width 0.3s",
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                    },
                    "&:hover:after": {
                      width: "100%",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}

            {/* SIGN IN / REGISTER LINK */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                color: "#fff",
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                "&:hover": { backgroundColor: "#1e40af" },
              }}
            >
              Sign in / Register
            </Button>
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.label}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <List>
            <ListItem button onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Sign in / Register" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
